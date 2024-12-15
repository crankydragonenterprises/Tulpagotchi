import React, { useContext, useEffect } from "react";

import './dashboard-page.styles.scss';

import CustomImage from "../image/image.component";
import FilterDropDown from "../filter-dropdown/filter-dropdown.component";
import { DragonContext } from "../../contexts/dragons.context";
import { UserContext } from "../../contexts/user.context";
import { getDocumentCollection } from "../../utils/firebase/firebase.utils";

const FilterOptions = [
    {
        id: "Age",
        options: [
            "All",
            "Egg",
            "Baby",
            "Adult",
        ]
    },
    {
        id: "Breed",
        options: [
            "All",
            "Dragon",
            "Gryphon",
            "Phoenix",
            "Kraken",
            "Cthulhu",
        ]
    },
    {
        id: "Pattern",
        options: [
            "All",
            "Basic",
            "Striped",
            "Mottled",
        ]
    },
    {
        id: "Color",
        options: [
            "All",
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Cyan",
            "Blue",
            "Purple",
            "Pink",
            "Brown",
            "Black",
            "White",
            "Rainbow",
        ]
    },
]
   
function DashboardPage() {
        
    const { usersDragons, setUsersDragons } = useContext(DragonContext);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        const getUsersDragonsFromDB = async (userID) => {
            const returnedDragons = await getDocumentCollection("usersDragons", userID);
            const returnDragonsArray = Object.values(returnedDragons);
            return returnDragonsArray;
        }

        const checkForUsersDragons = async (currentUser) => {
            try {
                const usersDragonsFromDB = await getUsersDragonsFromDB(currentUser.uid);
                if (usersDragonsFromDB.length > 0) {
                    setUsersDragons(usersDragonsFromDB);
                } else {
                    console.log("No dragons for this user");
                }
            } catch (error) {
                console.error("Error fetching dragons:", error);
            }
        }

        if (currentUser) {
            checkForUsersDragons(currentUser);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);
    
    
    // useEffect(() => {
    //     if (usersDragons && usersDragons.length === 0) {
    //         console.log("No dragons found after update.");
    //     }
    // }, [usersDragons]); // Monitor `usersDragons` changes

    
    return (
        <div>
            {/*Dragon Pen component*/}
            <div className="dragon-pen-container">
                <div className="filters-parent">
                    <p>Filters:</p>
                    <div className="filters-container">
                        {
                            FilterOptions.map((category) => {
                                return <FilterDropDown key={category.id} category= {category} />
                            })
                        }
                    </div>
                </div>
                {
                    Array.isArray(usersDragons) ? 
                    usersDragons.map((dragon) => {
                        const {id, imageUrl, mainColor, secondaryColor, Age} = dragon;

                        var imageHeight;
                        switch(Age)
                        {
                            case "Egg": imageHeight = "75"; break;
                            case "Baby": imageHeight = "100"; break;
                            case "Adult": imageHeight = "200"; break;
                            default: imageHeight = "100"; break;
                        }
                        return (
                            <CustomImage key={id} sourceURI={imageUrl} alt={`${mainColor} and ${secondaryColor} dragon`} height={imageHeight} />
                        )
                } ): console.log(usersDragons) // this says that it's an array
                } 
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