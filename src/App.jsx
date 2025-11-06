import { useEffect, useState } from "react";
import { Controls } from "./components/Controls"
import { TimerDisplay } from "./components/TimerDisplay"
import { TimerOptions } from "./components/TimerOptions"
import { ThemeToggle } from "./components/ThemeToggle";

function App() {

  //🔵 LOAD: Pehli baar data load karo
  const getInitialState = () => {
    const saveData = localStorage.getItem("pomodoroData")

    if (saveData) {
      return JSON.parse(saveData);
    }

    return {
      timeLeft: 25 * 60,
      isRunning: false,
      selectedTime: 25,
      isPush: false
    };
  }

  const initialState = getInitialState();

  // State Variable
  const [timeLeft, setTimeLeft] = useState(initialState.timeLeft);
  const [isRunning, setIsRunning] = useState(initialState.isRunning);
  const [selectedTime, setSelectedTime] = useState(initialState.selectedTime);
  const [isPush, setIsPush] = useState(initialState.isPush);

  //🟢 SAVE: Jab bhi state change ho, save karo
  useEffect(() => {
    const dataToSave = {
      timeLeft,
      isRunning,
      selectedTime,
      isPush
    };

    localStorage.setItem("pomodoroData", JSON.stringify(dataToSave));
  }, [timeLeft, isRunning, selectedTime, isPush]);

  useEffect(() => {
    if (!isRunning || !isPush) return; // agar paused hai to timer stop

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          const audio = new Audio("./preview.mp3");
          audio.play();
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
    <div className="w-full h-screen bg-white text-black dark:bg-black dark:text-white text-center">
      <ThemeToggle />
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center px-4 py-32">
        <h1 className="text-4xl font-bold mb-2">🍅 Pomodoro Timer</h1>
        <TimerOptions onSelected={handleSelectedTime} isRunning={isRunning} selectedTime={selectedTime} />
        <div className="flex justify-center gap-3 items-center mt-6">
          <label>Enter Time</label>
          <input placeholder="Enter Time" className="p-1 border-2 border-gray-600" type="text" value={selectedTime} onChange={(e) => {
            const newTime = Number(e.target.value);
            setSelectedTime(newTime);
            setTimeLeft(newTime * 60);
          }} /></div>
        <TimerDisplay timeLeft={timeLeft} />
        <Controls onStart={handleOnStart} onPause={handleOnPush} onReset={handleOnReset} isRunnig={isRunning} isPush={isPush} />
      </div>

    </div>
  )
}

export default App
