import React, {ReactNode} from 'react';
import 'styles/components/DropdownItem.scss'

function DropdownItem({children}: {children: ReactNode}) {
    return (
        <div className='DropdownItem'>
            {children}
        </div>
    );
}

export default DropdownItem;

