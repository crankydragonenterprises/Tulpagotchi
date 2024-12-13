import React, { useContext, useEffect } from "react";

import './dashboard-page.styles.scss';

import CustomImage from "../image/image.component";
import FilterDropDown from "../filter-dropdown/filter-dropdown.component";
import { DragonContext, getUsersDragonsFromDB } from "../../contexts/dragons.context";
import { UserContext } from "../../contexts/user.context";

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

    // async function setNewBabyDragons() {
    //     if(currentUser)
    //         {   const newBabyDragons = await createRandomBabyDragons();
    //             //console.log(newBabyDragons);
    //             setUsersDragons(newBabyDragons); 
    //             const babyDragonObject = newBabyDragons.reduce((acc, value, index) => {
    //                 acc[index] = value;
    //                 return acc;
    //             }, {})
    //             //console.log(babyDragonObject);
    //             await setDragonsInDB(babyDragonObject, currentUser.uid);
    //         }
    // }
    

    // useEffect(() => {
    //     async function checkForUsersDragons() {
    //         console.log(currentUser);
    //         console.log(usersDragons);
    //         if(currentUser) {
    //             const usersDragonsFromDB = await getUsersDragonsFromDB(currentUser.uid);
    //             console.log(usersDragonsFromDB);
    
    //             if(usersDragonsFromDB !== undefined  && usersDragonsFromDB !== null && usersDragonsFromDB.length > 0)
    //                 setUsersDragons(Object.values(usersDragonsFromDB));
                
    //             console.log(usersDragons);
    
    //             if(usersDragons.length === 0) {
    //                 //await setNewBabyDragons();
    //                 console.log("THere are no dragons for this user")
    //             }
    //         }
    //         else {
    //             console.log("no current user")
    //         }
    //     }

    //     checkForUsersDragons();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    useEffect(() => {
        if (currentUser && (!usersDragons || usersDragons.length === 0)) {
            async function checkForUsersDragons() {
                try {
                    const usersDragonsFromDB = await getUsersDragonsFromDB(currentUser.uid);
                    const usersDragonsFromDBArray = Object.values(usersDragonsFromDB);
                    if (usersDragonsFromDBArray.length > 0) {
                        setUsersDragons(usersDragonsFromDBArray);
                    } else {
                        console.log("No dragons for this user");
                    }
                } catch (error) {
                    console.error("Error fetching dragons:", error);
                }
            }
    
            checkForUsersDragons();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser, usersDragons]);
    
    
    useEffect(() => {
        console.log("Updated usersDragons:", usersDragons);
    
        if (usersDragons && usersDragons.length === 0) {
            console.log("No dragons found after update.");
        }
    }, [usersDragons]); // Monitor `usersDragons` changes

    
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
                {console.log(usersDragons.dragons)}
                {
                    usersDragons ? 
                    //console.log(usersDragons);
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
                } ): console.log("usersDragons is not defined")}
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