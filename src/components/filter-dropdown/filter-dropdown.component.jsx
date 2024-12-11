import React, { useState } from "react"
import FilterDropDownItem from "../filter-dropdown-item/filter-dropdown-item.component";

import './filter-dropdown.styles.scss';

function FilterDropDown({ category }) {
    const { id, options } = category;

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Toggle the class
    };

    return (
        <div className="filter-dropdown-container">
            <button className="filter-category" onClick={toggleVisibility}>{id}</button>
            <ul className={isVisible ? "filter-content visible " : "filter-content hidden " }>
                {
                    options.map((optionName) => {
                        return <FilterDropDownItem key={optionName} dropdownLabel={optionName}/>
                    })
                }
            </ul>
        </div>
    )
}


export default FilterDropDown
