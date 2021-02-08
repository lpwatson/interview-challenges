import './App.css';
import React, { useState, setState } from 'react';
import moment from 'moment';

function App() {
  const date = moment().format('DD MMM, YYYY');

  return (
    <div className="App">
      <div className="Container">
        <div className="InnerContainer-row">
          <div className="name-container">
            <h1>Hi, Jared</h1>
            <div class="date">{date}</div>
          </div>
          <div className="notification-container">
            <div className="notification-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="InnerContainer-column">
          <input
            class="search"
            placeholder="Search"
            color="white"
            type="text"
            results="0"
          ></input>
          <div className="InnerContainer-row">
            <h2>How do you feel?</h2>
            <h2 className="ellipsis">. .</h2>
          </div>
          <div classname="InnerContainer-row">
            <div className="smiley-face">
              <span className="emoji" role="img" aria-label="badly">
                &#128532;
              </span>
              <h3>Badly</h3>
            </div>
            <div className="smiley-face">
              <span className="emoji" role="img" aria-label="fine">
                &#128522;
              </span>
              <h3>Fine</h3>
            </div>
            <div className="smiley-face">
              <span className="emoji" role="img" aria-label="well">
                &#128513;
              </span>
              <h3>Well</h3>
            </div>
            <div className="smiley-face">
              <span className="emoji" role="img" aria-label="excellent">
                &#128512;
              </span>
              <h3>Excellent</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="Container-white">
        <div className="InnerContainer-row">
          <h2>Exercises</h2>
          <h2>. .</h2>
        </div>
        <div className="InnerContainer-column">
          <div className="InnerContainer-column-border">
            <div className="InnerContainer-row">
              <div className="heart-icon-container">
                <span className="exercises-icon" role="img" aria-label="heart">
                  🤍
                </span>
              </div>
              <div className="InnerContainer-column">
                <div className="InnerContainer-row">
                  <div className="exercises-text">
                    <h3>Speaking skills</h3>
                    <h3>. .</h3>
                  </div>
                </div>
                <p className="exercises-number">16 Exercises</p>
              </div>
            </div>
          </div>
          <div className="InnerContainer-column-border">
            <div className="InnerContainer-row">
              <div className="person-icon-container">
                <div className="person-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
              </div>
              <div className="InnerContainer-column">
                <div className="InnerContainer-row">
                  <div className="exercises-text">
                    <h3>Reading speed</h3>
                    <h3>. .</h3>
                  </div>
                </div>
                <p>8 Exercises</p>
              </div>
            </div>
          </div>
          <div className="InnerContainer-column-border">
            <div className="InnerContainer-row">
              <div className="bottom-icon-container">
                <span className="exercises-icon" role="img" aria-label="heart">
                  🤍
                </span>
              </div>
              <div className="InnerContainer-column">
                <div className="InnerContainer-row">
                  <div className="exercises-text">
                    <h3>Miscellaneous Task</h3>
                    <h3 className="exercises-ellipsis">..</h3>
                  </div>
                </div>
                <p>8 Exercises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ControlsContainer">
        <div className="home-icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
          </svg>
        </div>
        <div className="other-icons-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        </div>
        <div className="other-icons-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
          </svg>
        </div>
        <div className="last-icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
