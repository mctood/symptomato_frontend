import React from 'react';
import "styles/components/HeaderLinkGroup.scss"

function HeaderLinkGroup({children}: {children: React.ReactNode}) {
    return (
        <div className="HeaderLinkGroup">
            {children}
        </div>
    );
}

export default HeaderLinkGroup;
