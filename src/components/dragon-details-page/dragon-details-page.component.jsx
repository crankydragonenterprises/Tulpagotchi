import { useParams } from "react-router-dom"
import { useContext, useState } from "react";
import { useEffect } from "react";

import './dragon-details-page.styles.scss';

import { DragonContext } from "../../contexts/dragons.context";
import CustomButton from "../custom-button/custom-button.component";

function DragonDetailsPage() {
    const { dragonID } = useParams();
    const { usersDragons } = useContext(DragonContext)
    const [ selectedDragon, setSelectedDragon ] = useState({})

    useEffect(() => {
        function getDragon(dragonID) {
            //console.log(usersDragons);
            //const usersDragonsArray = Object.values(usersDragons);

            const chosenDragon = usersDragons.find(dragon => dragon.id === dragonID);
            setSelectedDragon(chosenDragon);
            //console.log(chosenDragon);
        }
        getDragon(dragonID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dragonID])

    var buttonText = "";
    switch(selectedDragon.Age)
    {
        case "Egg": buttonText = `Hatch this ${selectedDragon.Breed} for 100 words`; break;
        case "Baby": buttonText = `Grow this ${selectedDragon.Breed} for 200 words`; break;
        case "Adult": buttonText = `Match this ${selectedDragon.Breed} for 300 words`; break;
        default: buttonText = ""; break;
    }

    return (
        <div className="dragon-details-container">
            {selectedDragon && 
                <div className="selected-dragon-container">
                    <p className="selected-dragon-description">{`${selectedDragon.Pattern} ${selectedDragon.Age} ${selectedDragon.mainColor} and ${selectedDragon.secondaryColor} ${selectedDragon.Breed}`}</p>
                    <img className="selected-dragon-image" 
                        src={selectedDragon.imageUrl} 
                        alt={`${selectedDragon.mainColor} and ${selectedDragon.secondaryColor} dragon`} 
                        height="300"/>
                    <div className="selected-dragon-buttons">
                        <CustomButton>{`Sell this ${selectedDragon.Breed} for 25 gems`}</CustomButton>                    
                        <CustomButton>{buttonText}</CustomButton>
                    </div>
                    {/* <h1>This is the dragon details page. We are displaying the dragon with id of {selectedDragon.id}</h1> */}
                </div>
            }
        </div>
    )
}

export default DragonDetailsPage
