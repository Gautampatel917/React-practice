import React from 'react'

function NameList() {
    const names = ['Alice', 'Bob', 'Charlie'];
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {nameList}
            {/* {https://codepen.io/gopinav/pen/gQpepq } */}
        </div>
    )
}

export default NameList