
import './progress-bar.styles.scss';

const ProgressBar = ({progressBarHtmlFor, progressBarLabel, progressBarId, progressBarValue, progressBarMin, progressBarMax}) => {
    return (
        <div className="progress-bar-container">
            <label className="progress-label" htmlFor={progressBarHtmlFor}>{progressBarLabel}</label>
            <progress id={progressBarId} value={progressBarValue} 
                min={progressBarMin} max={progressBarMax}> {progressBarValue}% </progress>
        </div>
    )
}

export default ProgressBar;