export const Controls = ({ onStart, onPause, onReset, isRunnig, isPush }) => {
    return (
        <div className="flex justify-center space-x-4 mt-6">
            {isRunnig ? (
                <>
                    {isPush ?
                        <button
                            onClick={onPause}
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 border-2 border-white">
                            Pause
                        </button> : <button
                            onClick={onPause}
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 border-2 border-white">
                            Resume
                        </button>
                    }
                    <button
                        onClick={onReset}
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 border-2 border-white">
                        Reset
                    </button>
                </>
            ) : (
                <button
                    onClick={onStart}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 border-2 border-white">
                    Start
                </button>
            )}
        </div>
    );
};
