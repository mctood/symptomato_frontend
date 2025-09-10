import React from 'react';
import 'styles/components/LanguageDropdown.scss'
import {ReactComponent as Arrow} from "svg/dropdownArrow.svg"
import Dropdown from "../Dropdown";
import DropdownItem from "../DropdownItem";
import {Languages} from "../../data";

function LanguageDropdown() {
    let [menuOpened, setMenuOpened] = React.useState(false);
    let languages = [
        Languages.EN,
        Languages.HY
    ]

    return (
        <div className='LanguageDropdown' onClick={_ => setMenuOpened(!menuOpened)}>
            <div className="language">
                RU
            </div>
            <div className={"arrow" + (menuOpened ? " rotated" : "")}>
                <Arrow />
            </div>
            <Dropdown active={menuOpened}>{languages.map(e => (
                <DropdownItem>{e}</DropdownItem>
            ))}</Dropdown>
        </div>

    );
}

export default LanguageDropdown;

