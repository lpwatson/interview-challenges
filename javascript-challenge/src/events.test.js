const events = require('./events');
const moment = require('moment');

describe('groupEventsByDay', () => {
  const startsAt106 = moment().add(52, 'days').format('YYYY-MM-DDTHH:mm:ss[Z]');
  const endsAt106 = moment()
    .add(52, 'days')
    .add(2, 'hours')
    .format('YYYY-MM-DDTHH:mm:ss[Z]');
  const startsAt107 = moment().add(22, 'days').format('YYYY-MM-DDTHH:mm:ss[Z]');
  const endsAt107 = moment('2021-02-05T15:01:11Z')
    .add(22, 'days')
    .add(1, 'hours')
    .format('YYYY-MM-DDTHH:mm:ss[Z]');
  const startsAt108 = moment()
    .add(22, 'days')
    .add(1, 'hours')
    .format('YYYY-MM-DDTHH:mm:ss[Z]');
  const endsAt108 = moment()
    .add(22, 'days')
    .add(2, 'hours')
    .format('YYYY-MM-DDTHH:mm:ss[Z]');
  const startsAt109 = moment().add(23, 'days').format('YYYY-MM-DDTHH:mm:ss[Z]');
  const endsAt109 = moment()
    .add(23, 'days')
    .add(3, 'hours')
    .format('YYYY-MM-DDTHH:mm:ss[Z]');

  describe('when events are present', () => {
    const listOfEvents = [
      {
        id: 106,
        startsAt: startsAt106,
        endsAt: endsAt106,
        title: 'Daily walk',
      },
      {
        id: 107,
        startsAt: startsAt107,
        endsAt: endsAt107,
        title: 'Daily walk',
      },
      {
        id: 108,
        startsAt: startsAt108,
        endsAt: endsAt108,
        title: 'Gym',
      },
      {
        id: 109,
        startsAt: startsAt109,
        endsAt: endsAt109,
        title: 'Daily walk',
      },
    ];

    const expectedOutput = {
      22: [
        {
          id: 107,
          startsAt: startsAt107,
          endsAt: endsAt107,
          title: 'Daily walk',
        },
        {
          id: 108,
          startsAt: startsAt108,
          endsAt: endsAt108,
          title: 'Gym',
        },
      ],
      23: [
        {
          id: 109,
          startsAt: startsAt109,
          endsAt: endsAt109,
          title: 'Daily walk',
        },
      ],
      52: [
        {
          id: 106,
          startsAt: startsAt106,
          endsAt: endsAt106,
          title: 'Daily walk',
        },
      ],
    };

    it('returns a list of events grouped by day', () => {
      expect(events.groupEventsByDay(listOfEvents)).toEqual(expectedOutput);
    });
  });

  describe('when events is not properly formatted', () => {
    describe('when start date is missing', () => {
      const listOfEvents = [
        {
          id: 106,
          endsAt: endsAt106,
          title: 'Daily walk',
        },
        {
          id: 107,
          startsAt: startsAt107,
          endsAt: endsAt107,
          title: 'Daily walk',
        },
        {
          id: 108,
          startsAt: startsAt108,
          endsAt: endsAt108,
          title: 'Gym',
        },
        {
          id: 109,
          startsAt: startsAt109,
          endsAt: endsAt109,
          title: 'Daily walk',
        },
      ];

      const expectedOutput = {
        0: [
          {
            id: 106,
            endsAt: endsAt106,
            title: 'Daily walk',
          },
        ],
        22: [
          {
            id: 107,
            startsAt: startsAt107,
            endsAt: endsAt107,
            title: 'Daily walk',
          },
          {
            id: 108,
            startsAt: startsAt108,
            endsAt: endsAt108,
            title: 'Gym',
          },
        ],
        23: [
          {
            id: 109,
            startsAt: startsAt109,
            endsAt: endsAt109,
            title: 'Daily walk',
          },
        ],
      };

      it('returns a list of events grouped by day with the malformed event assigned to today by default', () => {
        expect(events.groupEventsByDay(listOfEvents)).toEqual(expectedOutput);
      });
    });

    //similar tests for other missing fields - end date & id
  });

  describe('when no events are present', () => {
    const listOfEvents = [];

    const expectedOutput = {};

    it('throws an Error', () => {
      expect(() => {
        events.groupEventsByDay(listOfEvents);
      }).toThrow('There are currently no events to group');
    });
  });
});

describe('moveEvent', () => {
  let inputEvents;
  beforeEach(() => {
    inputEvents = {
      23: [
        {
          id: 107,
          startsAt: '2021-02-27T13:01:11Z',
          endsAt: '2021-02-27T15:01:11Z',
          title: 'Daily walk',
        },
        {
          id: 108,
          startsAt: '2021-02-27T14:05:11Z',
          endsAt: '2021-02-27T16:02:11Z',
          title: 'Gym',
        },
      ],
      24: [
        {
          id: 109,
          startsAt: '2021-02-28T13:01:11Z',
          endsAt: '2021-02-28T16:30:11Z',
          title: 'Daily walk',
        },
      ],
      53: [
        {
          id: 106,
          startsAt: '2021-03-29T13:01:11Z',
          endsAt: '2021-03-29T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };
  });

  describe('when event can be successfully moved', () => {
    describe('when a new day entry is created to move the event', () => {
      const expectedOutput = {
        5: [
          {
            id: 108,
            startsAt: '2021-02-09T14:05:11Z',
            endsAt: '2021-02-09T16:02:11Z',
            title: 'Gym',
          },
        ],
        23: [
          {
            id: 107,
            startsAt: '2021-02-27T13:01:11Z',
            endsAt: '2021-02-27T15:01:11Z',
            title: 'Daily walk',
          },
        ],
        24: [
          {
            id: 109,
            startsAt: '2021-02-28T13:01:11Z',
            endsAt: '2021-02-28T16:30:11Z',
            title: 'Daily walk',
          },
        ],
        53: [
          {
            id: 106,
            startsAt: '2021-03-29T13:01:11Z',
            endsAt: '2021-03-29T15:01:11Z',
            title: 'Daily walk',
          },
        ],
      };
      const toDay = 5;
      const id = 108;

      it('returns a list of events with the selected event moved to a newly created day', () => {
        expect(events.moveEventToDay(inputEvents, id, toDay)).toEqual(
          expectedOutput,
        );
      });
    });

    describe('when moved event is appended to an existing day entry', () => {
      const toDay = 24;
      const id = 108;
      const expectedOutput = {
        23: [
          {
            id: 107,
            startsAt: '2021-02-27T13:01:11Z',
            endsAt: '2021-02-27T15:01:11Z',
            title: 'Daily walk',
          },
        ],
        24: [
          {
            id: 109,
            startsAt: '2021-02-28T13:01:11Z',
            endsAt: '2021-02-28T16:30:11Z',
            title: 'Daily walk',
          },
          {
            id: 108,
            startsAt: '2021-02-28T14:05:11Z',
            endsAt: '2021-02-28T16:02:11Z',
            title: 'Gym',
          },
        ],
        53: [
          {
            id: 106,
            startsAt: '2021-03-29T13:01:11Z',
            endsAt: '2021-03-29T15:01:11Z',
            title: 'Daily walk',
          },
        ],
      };

      it('returns a list of events with the selected event moved to an existing day', () => {
        expect(events.moveEventToDay(inputEvents, id, toDay)).toEqual(
          expectedOutput,
        );
      });
    });
  });

  describe('when an event cannot be successfully moved', () => {
    describe('when the id passed does not exist', () => {
      const toDay = 5;
      const id = 110;

      it('throws an Error', () => {
        expect(() => {
          events.moveEventToDay(inputEvents, id, toDay);
        }).toThrow('There is no event that matches this id');
      });
    });

    describe('when the toDay passed is invalid', () => {
      const toDay = -5;
      const id = 108;

      it('throws an Error', () => {
        expect(() => {
          events.moveEventToDay(inputEvents, id, toDay);
        }).toThrow('The toDay value entered cannot be a negative number');
      });
    });
  });
});
