export const TimerDisplay = ({ timeLeft }) => {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60
    return (
        <div className="text-center text-9xl font-bold mt-20">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
    );
}