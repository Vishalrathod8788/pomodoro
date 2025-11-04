export const TimerOptions = ({ onSelected, isRunning }) => {
    return (
        <div className="flex justify-center space-x-4 mt-6 text-sm">
            <button disabled={isRunning} onClick={() => onSelected(60)} className="bg-black text-white px-4 py-2 rounded-md border border-white hover:bg-gray-600">
                60
            </button>
            <button disabled={isRunning} onClick={() => onSelected(45)} className="bg-black text-white px-4 py-2 rounded-md border border-white hover:bg-gray-600">
                45
            </button>
            <button disabled={isRunning} onClick={() => onSelected(30)} className="bg-black text-white px-4 py-2 rounded-md border border-white hover:bg-gray-600">
                30
            </button>
            <button disabled={isRunning} onClick={() => onSelected(25)} className="bg-black text-white px-4 py-2 rounded-md border border-white hover:bg-gray-600">
                25
            </button>
            <button disabled={isRunning} onClick={() => onSelected(15)} className="bg-black text-white px-4 py-2 rounded-md border border-white hover:bg-gray-600">
                15
            </button>
            <button disabled={isRunning} onClick={() => onSelected(5)} className="bg-black text-white px-4 py-2 rounded-md border border-white hover:bg-gray-600">
                5
            </button>
        </div>
    );
}