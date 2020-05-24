import React from 'react'
import HeaderP from './HeaderP'


function Header(){
    return (
        <div style={divStyle}>
            <h1 style={h1Style}>Lorem Ipsum</h1>
        </div>
    )
}

const h1Style = {
    fontFamily: 'Indie Flower',
    fontSize: '5em',
    textAlign: 'center'
}

const divStyle = {
    display: 'flex',
    backgroundColor: '#BCD3F2',
    justifyContent: 'center',
    flexDirection: 'row'
}


export default Header