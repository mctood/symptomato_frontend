echo "import React from 'react';
import 'styles/components/$1.scss'

function $1() {
    return (
        <div className='$1'>

        </div>
    );
}

export default $1;
" > ./src/components/"$1".tsx

echo ".$1 {

}
" > ./src/styles/components/"$1".scss