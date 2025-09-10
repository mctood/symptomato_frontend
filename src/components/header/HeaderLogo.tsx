import React from 'react';
import "styles/components/HeaderLogo.scss"
import {ReactComponent as LogoSVG} from "svg/logoFolded.svg";

function HeaderLogo() {
    return (
        <div className="logo">
            <LogoSVG />
        </div>
    );
}

export default HeaderLogo;
