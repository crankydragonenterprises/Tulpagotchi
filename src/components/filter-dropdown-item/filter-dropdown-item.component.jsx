import { Fragment } from "react"

import './filter-dropdown-item.styles.scss';

function FilterDropDownItem({ dropdownLabel }) {
    
    return (
        <Fragment>
            <li className="dropdown-item">{dropdownLabel}</li>
        </Fragment>
    )
}

export default FilterDropDownItem
