import ProgressBar from "../progress-bar/progress-bar.component";

import './progress-section.styles.scss';

const ProgressSection = () => {
    return (
        <div className="progress-section-container">
            <ProgressBar 
                progressBarHtmlFor="level-progress-bar"
                progressBarLabel="Progress" 
                progressBarId="level-progress-bar" 
                progressBarValue="32"
                progressBarMin="0"
                progressBarMax="100"
            />
            <ProgressBar 
                progressBarHtmlFor="daily-words-progress-bar"
                progressBarLabel="Daily Words" 
                progressBarId="daily-words-progress-bar" 
                progressBarValue="54"
                progressBarMin="0"
                progressBarMax="100"
            />
            <ProgressBar 
                progressBarHtmlFor="daily-minutes-progress-bar"
                progressBarLabel="Daily Minutes" 
                progressBarId="daily-minutes-progress-bar" 
                progressBarValue="67"
                progressBarMin="0"
                progressBarMax="100"
            />
            <div className="progress-totals-container">
                <p>Total Words - ###</p>
                <p>Total Hours - ###</p>
                <p>Average Speed - ###</p>
            </div>
        </div>
    )
}

export default ProgressSection;