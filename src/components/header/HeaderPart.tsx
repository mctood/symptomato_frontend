import React, {ReactNode} from 'react';
import 'styles/components/HeaderPart.scss'

function HeaderPart({children}: {children: ReactNode}) {
    return (
        <div className='HeaderPart'>
            {children}
        </div>
    );
}

export default HeaderPart;

