export const TimerOptions = ({ onSelected, isRunning, selectedTime }) => {

    return (
        <div className="flex justify-center space-x-4 mt-6 text-sm">
            <button disabled={isRunning} onClick={() => onSelected(60)} className={`px-4 py-2 rounded-md border border-white hover:bg-gray-600 ${selectedTime === 60 ? 'bg-white text-black' : 'bg-black text-white'}`}>
                60
            </button>
            <button disabled={isRunning} onClick={() => onSelected(45)} className={`px-4 py-2 rounded-md border border-white hover:bg-gray-600 ${selectedTime === 45 ? 'bg-white text-black' : 'bg-black text-white'}`}>
                45
            </button>
            <button disabled={isRunning} onClick={() => onSelected(30)} className={`px-4 py-2 rounded-md border border-white hover:bg-gray-600 ${selectedTime === 30 ? 'bg-white text-black' : 'bg-black text-white'}`}>
                30
            </button>
            <button disabled={isRunning} onClick={() => onSelected(25)} className={`px-4 py-2 rounded-md border border-white hover:bg-gray-600 ${selectedTime === 25 ? 'bg-white text-black' : 'bg-black text-white'}`}>
                25
            </button>
            <button disabled={isRunning} onClick={() => onSelected(15)} className={`px-4 py-2 rounded-md border border-white hover:bg-gray-600 ${selectedTime === 15 ? 'bg-white text-black' : 'bg-black text-white'}`}>
                15
            </button>
            <button disabled={isRunning} onClick={() => onSelected(5)} className={`px-4 py-2 rounded-md border border-white hover:bg-gray-600 ${selectedTime === 5 ? 'bg-white text-black' : 'bg-black text-white'}`}>
                5
            </button>
        </div>
    );
}