import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { startTimerAsync, restartTimerAsync, getJoke } from './ducks/reducer'

class App extends Component {

  render() {
    const { timerStarted, timerEnded, joke, startTimerAsync, restartTimerAsync, getJoke} = this.props
    return (
      <div className="App">
        <div className='timer-background' id='start'>
        </div>
        <div className='timer'>
          <h1>3:00</h1>
          {
            (!timerStarted && <a href="#start"><button onClick={() => startTimerAsync()}>Start Timer</button></a>)
          }
          {
            (timerEnded && <a href="#"><button onClick={() => restartTimerAsync()}>Restart</button></a>)
          }
        </div>
        <div className='indicator'></div>
        <div className='joke'>
          <p>{joke}</p>
          <button onClick={() => getJoke()}>Get Joke</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  const { duration, timerStarted, timerEnded, joke } = reduxState;
  return {
    duration,
    timerStarted,
    timerEnded,
    joke
  }
}

const mapDispatchToProps = {
  startTimerAsync,
  restartTimerAsync,
  getJoke
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
