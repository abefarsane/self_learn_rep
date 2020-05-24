import React from 'react'

function HeaderP(){
    return (
        <section style={sectionStyle}>
            <p style={{fontStyle: 'italic'}}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            <p style={{fontSize: '1.1em'}}>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
        </section>
    )
}

const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '1%',
    paddingBottom: '1%',
    backgroundColor: '#EFF2F1'
}

export default HeaderP