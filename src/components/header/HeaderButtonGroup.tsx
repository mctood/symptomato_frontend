import React from 'react';
import 'styles/components/HeaderButtonGroup.scss'

function HeaderButtonGroup({children}: {children: React.ReactNode}) {
    return (
        <div className='HeaderButtonGroup'>
            {children}
        </div>
    );
}

export default HeaderButtonGroup;

