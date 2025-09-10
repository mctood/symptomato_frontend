import React from 'react';
import "styles/components/Page.scss"

function Page(
    {children, widthLimit}:
    {children: React.ReactNode, widthLimit: number}
) {
    return (
        <div className="page">
            <div className="innerPage" style={{ maxWidth: widthLimit }}>
                {children}
            </div>
        </div>
    );
}

export default Page;
