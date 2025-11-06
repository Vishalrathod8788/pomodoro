export const TimerOptions = ({ onSelected, isRunning, selectedTime }) => {

    return (
        <div className="flex justify-center space-x-2 mt-6 text-sm ">
            <button disabled={isRunning} onClick={() => onSelected(5)} className={`px-4 py-2 font-medium rounded-md border border-gray-500  ${selectedTime === 5 ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:text-white dark:bg-black'}`}>
                5
            </button>
            <button disabled={isRunning} onClick={() => onSelected(15)} className={`px-4 py-2 font-medium rounded-md border border-gray-500  ${selectedTime === 15 ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:text-white dark:bg-black'}`}>
                15
            </button>
            <button disabled={isRunning} onClick={() => onSelected(25)} className={`px-4 py-2 font-medium rounded-md border border-gray-500  ${selectedTime === 25 ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:text-white dark:bg-black'}`}>
                25
            </button>
            <button disabled={isRunning} onClick={() => onSelected(30)} className={`px-4 py-2 font-medium rounded-md border border-gray-500  ${selectedTime === 30 ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:text-white dark:bg-black'}`}>
                30
            </button>
            <button disabled={isRunning} onClick={() => onSelected(45)} className={`px-4 py-2 font-medium rounded-md border border-gray-500  ${selectedTime === 45 ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:text-white dark:bg-black'}`}>
                45
            </button>
            <button disabled={isRunning} onClick={() => onSelected(60)} className={`px-4 py-2 font-medium rounded-md border border-gray-500  ${selectedTime === 60 ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:text-white dark:bg-black'}`}>
                60
            </button>
        </div>
    );
}