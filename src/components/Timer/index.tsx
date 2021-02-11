import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerStyles from './styles';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 50,
  strokeWidth: 2
};

const renderTime = (dimension: any, time: any) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div className="txt">{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time: any) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: any) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: any) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: any) => (time / daySeconds) | 0;

export const Timer = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 60; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <TimerStyles>
      <CountdownCircleTimer
        {...timerProps}
         //@ts-ignore
        colors={[["#7E2E84"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          //@ts-ignore
          renderTime("days", getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        //@ts-ignore
        colors={[["#D14081"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
         //@ts-ignore
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {({ elapsedTime }) =>
         //@ts-ignore
          renderTime("hours", getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
         //@ts-ignore
        colors={[["#EF798A"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
         //@ts-ignore
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
         //@ts-ignore
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
         //@ts-ignore
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
         //@ts-ignore
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </TimerStyles>
  );
}


export default Timer;
