import React from 'react'
import './Components.css'

function Content(){
    return (
        <content className='content' style={contentStyle}>
            <section class='whatIs'>
                <h4>What is Lorem Ipsum?</h4>
                <p style={pStyle}> <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop 
                publishing software like Aldus PageMaker including.</p>
            </section>    

            <section class='why'>
                <h4>Why do we use it?</h4>
                <p style={pStyle}> <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop 
                publishing software like Aldus PageMaker including.</p>
            </section>    

            <section class='where'>
                <h4>What is Lorem Ipsum?</h4>
                <p style={pStyle}> <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop 
                publishing software like Aldus PageMaker including.</p>
            </section>    

            <section class='whereToGet'>
                <h4>What is Lorem Ipsum?</h4>
                <p style={pStyle}> <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop 
                publishing software like Aldus PageMaker including.</p>
            </section>    
        </content>
    )
}

const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '45% 45%',
    paddingRight: '25%',
    paddingLeft: '25%',
    gridColumnGap: '10%',
    gridRowGap: '10%'
}

const pStyle = {
    textAlign: 'justify'
}
export default Content