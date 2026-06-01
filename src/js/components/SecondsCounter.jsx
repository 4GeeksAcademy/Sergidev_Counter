import React from "react";

const SecondsCounter = (props) => {
    const formattedSeconds = String(props.seconds).padStart(6, "0");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements.countdownInput.value;
        if (window.startCountdown) {
            window.startCountdown(inputValue);
        }
        event.target.reset();
    };

    return (
        <div className="counter-container d-flex flex-column align-items-center">
            
            <div className="counter-display d-flex align-items-center p-3 rounded-3 shadow-lg">
                <div className="counter-digit counter-icon d-flex align-items-center justify-content-center text-white"><i className="far fa-clock"></i>🕒</div>

                {formattedSeconds.split("").map((digit, index) => (
                    <div key={index}className="counter-digit d-flex align-items-center justify-content-center text-white fw-bold">{digit}</div>
                ))}
            </div>

            <div className="control-panel d-flex gap-2 p-2 rounded-3 w-100 justify-content-center">
                <button
                    onClick={() => window.pauseCounter && window.pauseCounter()}
                    className="btn btn-warning fw-bold text-white flex-grow-1">Stop
                </button>
                <button
                    onClick={() => window.resumeCounter && window.resumeCounter()}
                    className="btn btn-success fw-bold flex-grow-1">Resume
                </button>
                <button
                    onClick={() => window.resetCounter && window.resetCounter()}
                    className="btn btn-danger fw-bold flex-grow-1">Reset
                </button>
            </div>

            <form onSubmit={handleFormSubmit} className="countdown-form d-flex flex-column gap-2 p-3 rounded-3">
                <input
                    type="number"
                    name="countdownInput"
                    placeholder="666"
                    className="form-control text-center fw-bold text-black border-secondary w-100"
                    min="1"
                    required
                />
                <button type="submit" className="btn btn-primary fw-bold text-nowrap w-100">
                    Vecna will come...
                </button>
            </form>
        </div>
    );
};

export default SecondsCounter;