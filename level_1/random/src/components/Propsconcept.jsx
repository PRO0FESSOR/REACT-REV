import React from 'react'

const Propsconcept = ({name,age,rollNumber}) => {
  return (
    <div style={{border : '2px solid black', borderRadius: '25px ', width : '30%' , marginTop : '10px' }}>
        <h2>hello my name is {name}</h2>
        <h2>hello my age is {age}</h2>
        <h2>hello my rollNumber is {rollNumber}</h2>
    </div>
  )
}

export default Propsconcept