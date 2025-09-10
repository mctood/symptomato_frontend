import React from 'react';
import 'styles/components/Dropdown.scss'

type DropdownProps = {
    children: React.ReactNode;
    active?: boolean;
}

function Dropdown(props: DropdownProps) {
    const { children, active } = props;

    return (
        <div className={`Dropdown ${active ? 'active' : ''}`}>
            {children}
        </div>
    );
}

export default Dropdown;

