import { useContext, useEffect } from "react";
import ProgressBar from "../progress-bar/progress-bar.component";

import { UserDataContext } from "../../contexts/user-data.context";

import './progress-section.styles.scss';
import { getDocumentCollection } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

const ProgressSection = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const { currentUser } = useContext(UserContext)
    console.log(userData)
    //console.log(currentUser.uid)
    const { level, levelMin, levelMax, currentLevelProgress, 
        dailyWords, dailyWordsGoal, 
        dailyMinutes, dailyMinutesGoal, 
        gems, totalWords, totalMinutes } = userData

    useEffect(() => {
        const getUserData = async (currentUser) => {
            const userDataObj = await getDocumentCollection("userData", currentUser.uid)
            setUserData( userDataObj);
        }

        const myObj = getUserData(currentUser);
        setUserData(myObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="progress-section-container">
            <p>{gems} Gems</p>
            <ProgressBar 
                progressBarHtmlFor="level-progress-bar"
                progressBarLabel={`Level ${level} Progress:`} 
                progressBarId="level-progress-bar" 
                progressBarValue={currentLevelProgress}
                progressBarMin={levelMin}
                progressBarMax={levelMax}
            />
            <ProgressBar 
                progressBarHtmlFor="daily-words-progress-bar"
                progressBarLabel="Daily Words" 
                progressBarId="daily-words-progress-bar" 
                progressBarValue={dailyWords}
                progressBarMin="0"
                progressBarMax={dailyWordsGoal}
            />
            <ProgressBar 
                progressBarHtmlFor="daily-minutes-progress-bar"
                progressBarLabel="Daily Minutes" 
                progressBarId="daily-minutes-progress-bar" 
                progressBarValue={dailyMinutes}
                progressBarMin="0"
                progressBarMax={dailyMinutesGoal}
            />
            <div className="progress-totals-container">
                <p>Total Words - {totalWords}</p>
                <p>Total Hours - {(totalMinutes / 60).toFixed(2)}</p>
                <p>Average Speed - {
                    (totalMinutes * 60) ? `${(totalMinutes / totalWords).toFixed(2)} wpm` : 0
            }</p>
            </div>
        </div>
    )
}

export default ProgressSection;