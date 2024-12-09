import { getDocumentById } from "../utils/firebase/firebase.utils"

export const getDragonFromDB = async(dragonId) => {
    const dragon = await getDocumentById("dragons", dragonId);
    const imageURL = generateImageUrlFromDragon(dragon);
    const dragonWithImageURL = {...dragon, imageUrl:`${imageURL}`};
    // console.log(dragonWithImageURL);

    return dragonWithImageURL;
}

export const generateImageUrlFromDragon = (dragon) =>
{
    const { Breed, Pattern, Age, mainColor, secondaryColor } = dragon;

    return `../../images/tulpagotchi-images/${Breed}/${Pattern}/${Pattern}_${Age}/${Pattern}_${Age}_${mainColor}_${secondaryColor}.png`;
}