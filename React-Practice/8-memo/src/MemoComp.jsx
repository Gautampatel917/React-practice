import React, {memo} from 'react'

function MemoComp({ name }) {
    return (
        <div>
            <h1>Memo component {name}</h1>
        </div>
    )
}

export default React.memo(MemoComp);