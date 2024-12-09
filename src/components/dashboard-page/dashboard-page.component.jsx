import React, { useEffect, useState } from "react";

import './dashboard-page.styles.scss';

//import { DragonData } from "../../dragon_data";

import { getRandomInt } from "../../utils/random/random.utils";
import { getDragonFromDB } from "../../contexts/dragons.context";

async function GetRandomDragon() {
    const randomDragonId = getRandomInt(132);
    const randomDragon = await getDragonFromDB(`${randomDragonId}`);

    console.log(randomDragon);
    return randomDragon;
}

function DashboardPage() {
    const [dragon, setDragon] = useState({});

    useEffect(() => {
        (
            async() => {
            try {
                const response = await GetRandomDragon();
                setDragon(response);
            }
            catch (error)
            {
                console.log(error);
            }
        })();
    }, [])

    console.log(dragon);

    const usersDragons = [
        {"id": "1","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Black","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Black.png")},
        {"id": "2","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Blue","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Blue.png")},
        {"id": "3","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Brown","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Brown.png")},
        {"id": "4","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Cyan","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Cyan.png")},
        {"id": "5","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Green","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Green.png")},
        {"id": "6","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Orange","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Orange.png")},
        {"id": "7","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Pink","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Pink.png")},
        {"id": "8","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Purple","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Purple.png")},
        {"id": "9","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Red","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Red.png")},
        {"id": "10","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"White","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_White.png")},
        {"id": "11","Breed":"Dragon","Pattern":"Basic","Age":"Baby","mainColor":"Black","secondaryColor":"Yellow","imageSource":require("../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Black_Yellow.png")},    
    ]
    return (
        <div>
            {/*Navigation component*/}
            <ul className="navigation-buttons">
                <li className="nav-current-location">Dashboard</li>
                <li>Dragondex</li>
                <li>Store</li>
                <li>My Account</li>
            </ul>
            {/*Dragon Pen component*/}
            <div className="dragon-pen-container">
                {
                    usersDragons.map((dragon) => {
                        const {id, imageSource, mainColor, secondaryColor, Age} = dragon;

                        return (
                            <img key={id} src={imageSource} alt={`${mainColor} and ${secondaryColor} dragon`} height={
                            Age === "Baby" ? "100" : "200"} />
                        )
                })}
                <h1>Dragon main color: {dragon.imageUrl}</h1>
                {/* <img src={require(`${dragon.imageUrl}`)} alt="test"/> */}
                {/* <img src={require(`${generateImageUrlFromDragon(dragon)}`)} alt="random dragon" /> */}
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