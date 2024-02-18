import React from 'react'

const Conditions = ({ name, isPacked }) => {
    return (
        <li>
            {isPacked ? name + ' ✔' : name}
        </li>
    )
}

export default Conditions