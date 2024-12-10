import React from "react";

import './dashboard-page.styles.scss';

import CustomImage from "../image/image.component";

function DashboardPage() {

    const usersDragons = 
    [
        {"id": "1","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Black","imageSource":"https://tulpagotchi-images.s3.us-east-1.amazonaws.com/images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Black.png"},
        {"id": "2","Breed":"Dragon","Pattern":"Basic","Age":"Adult","mainColor":"Black","secondaryColor":"Blue","imageSource":"https://tulpagotchi-images.s3.us-east-1.amazonaws.com/images/tulpagotchi-images/Dragon/Basic/Basic_Adult/Basic_Adult_Black_Blue.png"},  
    ]
    return (
        <div>
            {/*Dragon Pen component*/}
            <div className="dragon-pen-container">
                {
                    usersDragons.map((dragon) => {
                        const {id, imageSource, mainColor, secondaryColor, Age} = dragon;

                        return (
                            <CustomImage key={id} sourceURI={imageSource} alt={`${mainColor} and ${secondaryColor} dragon`} height={
                            Age === "Baby" ? "100" : "200"} />
                        )
                })}
            </div>
            {/*Progress Bar component*/}
            <div className="progress-bar-container">
                <label htmlFor="level-progress-bar">Progress</label>
                <progress id="level-progress-bar" value="32" max="100"> 32% </progress>
                <label htmlFor="daily-words-progress-bar">Daily Words</label>
                <progress id="daily-words-progress-bar" value="32" max="100"> 32% </progress>
                <label htmlFor="daily-minutes-progress-bar">Daily Minutes</label>
                <progress id="daily-minutes-progress-bar" value="32" max="100"> 32% </progress>

                <p>Total Words - ###</p>
                <p>Total Hours - ###</p>
                <p>Average Speeds - ###</p>
            </div>
        </div>
    )
}

export default DashboardPage;