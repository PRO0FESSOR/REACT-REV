import React from 'react'

const ResnderList = () => {

    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
      ];

  return (
    <div>
        {people.map(person => <li>{person}</li>)}
    </div>
  )
}

export default ResnderList