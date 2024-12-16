
import './progress-bar.styles.scss';

const ProgressBar = ({progressBarHtmlFor, progressBarLabel, progressBarId, progressBarValue, progressBarMin, progressBarMax}) => {
    return (
        <div className="progress-bar-container">
            <div className='label-container'>
            <label className="progress-label" htmlFor={progressBarHtmlFor}>{progressBarLabel}</label>
            </div>
            <progress className="progress-bar" id={progressBarId} value={progressBarValue} 
                min={progressBarMin} max={progressBarMax}> {progressBarValue}% </progress>
        </div>
    )
}

export default ProgressBar;