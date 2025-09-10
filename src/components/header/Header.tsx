import React from 'react';
import "styles/components/Header.scss"
import HeaderLogo from "./HeaderLogo";
import HeaderLinkGroup from "./HeaderLinkGroup";
import HeaderLink from "./HeaderLink";
import HeaderPart from "./HeaderPart";
import HeaderButton from "./HeaderButton";
import HeaderButtonGroup from "./HeaderButtonGroup";
import LanguageDropdown from "./LanguageDropdown";

function Header() {
    return (
        <header className="header">
            <HeaderPart>
                <HeaderLogo />
                <HeaderLinkGroup>
                    <HeaderLink text={"Experts"}></HeaderLink>
                    <HeaderLink text={"About us"}></HeaderLink>
                    <HeaderLink text={"Useful"}></HeaderLink>
                    <HeaderLink text={"How to pay"}></HeaderLink>
                    <HeaderLink text={"Contacts"}></HeaderLink>
                </HeaderLinkGroup>
            </HeaderPart>

            <HeaderPart>
                <HeaderButtonGroup>
                    <LanguageDropdown />
                    <HeaderButton primary={true}>
                        Contact a doctor
                    </HeaderButton>
                    <HeaderButton primary={false}>
                        Support
                    </HeaderButton>
                </HeaderButtonGroup>
            </HeaderPart>
        </header>
    );
}

export default Header;
