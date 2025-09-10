import React, {ReactNode} from 'react';

function Wrapper({ children, width }: { children: ReactNode, width: number }) {
    return (
        <div className='Wrapper' style={{ alignSelf: "center", width: "100%", maxWidth: width }} >
            {children}
        </div>
    );
}

export default Wrapper;

