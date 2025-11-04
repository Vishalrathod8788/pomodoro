import { useEffect, useState } from "react";
import { Controls } from "./components/Controls"
import { TimerDisplay } from "./components/TimerDisplay"
import { TimerOptions } from "./components/TimerOptions"

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(0);
  const [isPush, setIsPush] = useState(false);

  useEffect(() => {
    if (!isRunning || !isPush) return; // agar paused hai to timer stop

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          setIsRunning(false);
          setIsPush(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isPush]);


  const handleSelectedTime = (minutes) => {
    setSelectedTime(minutes);
    setTimeLeft(minutes * 60);
  }

  const handleOnStart = () => {
    setIsRunning(true);
    setIsPush(true);
  }

  const handleOnPush = () => {
    if (!isPush) {
      setIsRunning(true);
      setIsPush(true)
    } else {
      setIsPush(false);
      setIsRunning(true);
    }
  }

  const handleOnReset = () => {
    setIsRunning(false);
    setIsPush(false)
    setTimeLeft(selectedTime * 60);
  };


  return (
    <div className="w-full h-screen bg-black text-white py-44 text-center">
      <h1 className="text-4xl font-bold mb-4">Pomodoro Timer</h1>
      <TimerOptions onSelected={handleSelectedTime} isRunning={isRunning} />
      <TimerDisplay timeLeft={timeLeft} />
      <Controls onStart={handleOnStart} onPause={handleOnPush} onReset={handleOnReset} isRunnig={isRunning} isPush={isPush} />
    </div>
  )
}

export default App
