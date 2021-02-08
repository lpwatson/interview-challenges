/**
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  }
  ```
*/

/**
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/

// events = [
//   {
//     id: 106,
//     startsAt: '2021-03-29T13:01:11Z',
//     endsAt: '2021-03-29T15:01:11Z',
//     title: 'Daily walk',
//   },
//   {
//     id: 107,
//     startsAt: '2021-02-27T13:01:11Z',
//     endsAt: '2021-02-27T15:01:11Z',
//     title: 'Daily walk',
//   },
//   {
//     id: 108,
//     startsAt: '2021-02-27T14:05:11Z',
//     endsAt: '2021-02-27T16:02:11Z',
//     title: 'Gym',
//   },
//   {
//     id: 109,
//     startsAt: '2021-02-28T13:01:11Z',
//     endsAt: '2021-02-28T16:30:11Z',
//     title: 'Daily walk',
//   },
// ];

const moment = require('moment');

const groupEventsByDay = (events) => {
  if (events.length < 1)
    throw new Error('There are currently no events to group');

  eventsGroupedByDay = events.reduce((eventsByDay, event) => {
    const daysToEvent = moment(event.startsAt).diff(
      moment().startOf('day'),
      'd',
    );
    eventsByDay[daysToEvent] = eventsByDay[daysToEvent] || [];
    eventsByDay[daysToEvent].push(event);
    eventsByDay[daysToEvent].sort(
      (eventA, eventB) =>
        Date.parse(eventA.startsAt) - Date.parse(eventB.startsAt),
    );

    return eventsByDay;
  }, {});
  return eventsGroupedByDay;
};

/**
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```
  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/
const moveEventToDay = (eventsByDay, id, toDay) => {
  if (toDay < 0)
    throw new Error('The toDay value entered cannot be a negative number');

  const eventsByDayClone = Object.assign(eventsByDay); //clones eventsByDay so as not to modify function args
  const eventsByDayValues = Object.values(eventsByDay);
  const listOfIds = eventsByDayValues
    .map((day) => day.map((event) => event.id))
    .flat();

  if (!listOfIds.some((listedId) => listedId === id))
    throw new Error('There is no event that matches this id');

  const eventToBeMoved = eventsByDayValues
    .find((day) => day.find((event) => event.id === id))
    .find((event) => event.id === id);
  const oldDayOfEvent = Object.keys(eventsByDay).find((key) =>
    eventsByDay[key].some((oldEvent) => oldEvent === eventToBeMoved),
  );
  const daysToOffset = oldDayOfEvent - toDay;

  //alter dates in object to be moved
  const newStartDate = moment(eventToBeMoved.startsAt)
    .subtract(daysToOffset, 'days')
    .format('YYYY-MM-DDTHH:mm:ss[Z]');
  const newEndDate = moment(eventToBeMoved.endsAt)
    .subtract(daysToOffset, 'days')
    .format('YYYY-MM-DDTHH:mm:ss[Z]');

  eventToBeMoved.startsAt = newStartDate;
  eventToBeMoved.endsAt = newEndDate;

  eventsByDayClone[toDay] = eventsByDayClone[toDay] || [];
  eventsByDayClone[toDay].push(eventToBeMoved);

  //delete event from old day
  eventsByDayClone[oldDayOfEvent] = eventsByDayClone[oldDayOfEvent].filter(
    (event) => event.id !== id,
  );

  return eventsByDayClone;
};

module.exports = { groupEventsByDay, moveEventToDay };
