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
      timeLeft: 0,
      isRunning: false,
      selectedTime: 0,
      isPush: false
    };
  }

  const initialState = getInitialState();

  // State Variable
  const [timeLeft, setTimeLeft] = useState(initialState.timeLeft);
  const [isRunning, setIsRunning] = useState(initialState.isRunning);
  const [selectedTime, setSelectedTime] = useState(initialState.selectedTime);
  const [isPush, setIsPush] = useState(initialState.isPush);
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

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
    setMinutes(0);
    setSeconds(0);
  };

  const handleTimeChange = (type, value) => {
    const num = Number(value);

    // Validate: only 0-60 range, no negative values
    if (num < 0 || num > 60) return;

    if (type === "minutes") setMinutes(num);
    if (type === "seconds") setSeconds(num);

    const totalTime = (type === "minutes" ? num * 60 : minutes * 60) +
      (type === "seconds" ? num : seconds);

    setTimeLeft(totalTime);
  }

  return (
    <div className="w-full h-screen bg-white text-black dark:bg-black dark:text-white text-center">
      <ThemeToggle />
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center px-4 py-32">
        <h1 className="text-4xl font-bold mb-2">🍅 Pomodoro Timer</h1>
        <TimerOptions onSelected={handleSelectedTime} isRunning={isRunning} selectedTime={selectedTime} />
        <div className="flex justify-center gap-3 items-center mt-6">
          <label>Set Time</label>
          <input disabled={isRunning} placeholder="Set Minutes" className="p-1 border-2 border-gray-600 w-30 text-center" type="number" min="0" max="60" value={minutes === 0 ? "" : minutes} onChange={(e) => { handleTimeChange("minutes", e.target.value) }} />
          <span>:</span>
          <input disabled={isRunning} placeholder="Set Seconds" className="p-1 border-2 border-gray-600 w-30 text-center" type="number" min="0" max="60" value={seconds === 0 ? "" : seconds} onChange={(e) => { handleTimeChange("seconds", e.target.value) }} />
        </div>

        <TimerDisplay timeLeft={timeLeft} />
        <Controls onStart={handleOnStart} onPause={handleOnPush} onReset={handleOnReset} isRunning={isRunning} isPush={isPush} timeLeft={timeLeft} />
      </div>

    </div>
  )
}

export default App
