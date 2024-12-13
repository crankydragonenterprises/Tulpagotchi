
import { addDocumentToCollection, getDocumentById, getDocumentCollection } from "../utils/firebase/firebase.utils"
import { getRandomInt, getRandomUid } from "../utils/random/random.utils";

import { DragonData } from '../dragon_data';
import { createContext, useState } from "react";
import { UserContext } from "./user.context";

export const DragonContext = createContext({
    usersDragons: [],
    setUsersDragons: () => null,
});

export const DragonProvider = ({ children }) => {
    const [usersDragons, setUsersDragons] = useState({});
    const value = { usersDragons, setUsersDragons };

    return <DragonContext.Provider value={value}>{children}</DragonContext.Provider>
}

export const setDragonsInDB = async(dragons, userID) => {
    await addDocumentToCollection("usersDragons", userID, dragons);
    //console.log("added dragons to db");
}

export const getUsersDragonsFromDB = async(userID) => {
    const returnedDragons = await getDocumentCollection("usersDragons", userID);
    return returnedDragons;
}

export const getDragonFromDB = async(dragonId) => {
    const { id } = dragonId;
    const dragon = await getDocumentById("dragons", id);
    const imageURL = generateImageUrlFromDragon(dragon);
    const dragonUid = getRandomUid();
    const dragonWithImageURL = {...dragon, id: dragonUid, imageUrl:imageURL};

    //console.log(dragonWithImageURL);
    return dragonWithImageURL;
}

export async function createRandomBabyDragons() {
    const babyDragons = DragonData
        .filter((dragon) => dragon.Age === "Baby")
        .filter((dragon) => dragon.Breed === "Dragon")
        .filter((dragon) => dragon.Pattern === "Basic");
    
    var numberOfBabyDragons = babyDragons.length;

    var twoRandomDragons = [];

    for(let i = 0; i < 2; i++)
    {
        var babyDragon = await getDragonFromDB(babyDragons[getRandomInt(numberOfBabyDragons)]);
        twoRandomDragons[i] = babyDragon;
    }
    //console.log(twoRandomDragons);
    return twoRandomDragons;
}

export async function setNewBabyDragons(currentUser) {
    const setUsersDragons = UserContext(DragonContext);

    const newBabyDragons = await createRandomBabyDragons();
    //console.log(newBabyDragons);
    setUsersDragons(newBabyDragons); 
    const babyDragonObject = newBabyDragons.reduce((acc, value, index) => {
        acc[index] = value;
        return acc;
    }, {})
    //console.log(babyDragonObject);
    await setDragonsInDB(babyDragonObject, currentUser.uid);
}

export const generateImageUrlFromDragon = (dragon) =>
{
    const { Breed, Pattern, Age, mainColor, secondaryColor } = dragon;
    if(Age === "Egg") return "https://tulpagotchi-images.s3.us-east-1.amazonaws.com/images/egg.png";
    else return `https://tulpagotchi-images.s3.us-east-1.amazonaws.com/images/tulpagotchi-images/${Breed}/${Pattern}/${Pattern}_${Age}/${Pattern}_${Age}_${mainColor}_${secondaryColor}.png`;
}