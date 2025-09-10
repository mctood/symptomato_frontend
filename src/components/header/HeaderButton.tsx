import React from 'react';
import 'styles/components/HeaderButton.scss'

function HeaderButton({children, primary}: {children: any, primary?: boolean}) {
    return (
        <div className={'HeaderButton' + (primary ? ' primary' : ' secondary')}>
            {children}
        </div>
    );
}

export default HeaderButton;

