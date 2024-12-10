
import { getDocumentById } from "../utils/firebase/firebase.utils"
import { getRandomInt, getRandomUid } from "../utils/random/random.utils";

import { DragonData } from '../dragon_data';


export const getDragonFromDB = async(dragonId) => {
    const dragon = await getDocumentById("dragons", dragonId);
    const imageURL = generateImageUrlFromDragon(dragon);
    const dragonUid = getRandomUid();
    const dragonWithImageURL = {...dragon, id: {dragonUid}, imageUrl:{imageURL}};

    return dragonWithImageURL;
}

export async function createRandomBabyDragons() {
    const babyDragons = DragonData
        .filter((dragon) => dragon.Age === "Baby")
        .filter((dragon) => dragon.Breed === "Dragon")
        .filter((dragon) => dragon.Pattern === "Basic");
    
    var numberOfBabyDragons = babyDragons.length;
    console.log(numberOfBabyDragons);

    var twoRandomDragons = [];

    for(let i = 0; i < 2; i++)
    {
        var babyDragon = await getDragonFromDB(babyDragons[getRandomInt(numberOfBabyDragons)]);
        twoRandomDragons[i] = babyDragon;
    }

    return twoRandomDragons;
}

export const generateImageUrlFromDragon = (dragon) =>
{
    const { Breed, Pattern, Age, mainColor, secondaryColor } = dragon;
    
    return `https://tulpagotchi-images.s3.us-east-1.amazonaws.com/images/tulpagotchi-images/${Breed}/${Pattern}/${Pattern}_${Age}/${Pattern}_${Age}_${mainColor}_${secondaryColor}.png`;
}