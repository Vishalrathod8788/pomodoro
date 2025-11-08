export const Controls = ({ onStart, onPause, onReset, isRunning, isPush, timeLeft }) => {
    return (
        <div className="flex justify-center space-x-4 mt-16 font-medium">
            {isRunning ? (
                <>
                    {isPush ?
                        <button
                            onClick={onPause}
                            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md border-2 border-white">
                            Pause
                        </button> : <button
                            onClick={onPause}
                            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md border-2 border-white">
                            Resume
                        </button>
                    }
                    <button
                        onClick={onReset}
                        className="bg-red-700 text-white dark:bg-red-500 dark:text-black px-4 py-2 rounded-md border-2">
                        Reset
                    </button>
                </>
            ) : (
                <button
                    disabled={isRunning || timeLeft === 0}
                    onClick={onStart}
                    className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed">
                    Start
                </button>
            )}
        </div>
    );
};
