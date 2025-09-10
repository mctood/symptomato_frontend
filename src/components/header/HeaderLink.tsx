import React from 'react';
import "styles/components/HeaderLink.scss"

function HeaderLink({text, href}: {text: string, href?: string}) {
    return (
        <a href={href} className="HeaderLink">
            {text}
        </a>
    );
}

export default HeaderLink;
