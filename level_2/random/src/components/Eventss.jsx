import React from 'react'

function Eventss() {

    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <>

            <div className="Toolbar" onClick={() => {
                alert('You clicked on the toolbar!');
            }}>
                <button onClick={(e) => {
                    e.stopPropagation();
                    alert('Playing!')
                }}>
                    Play Movie
                </button>
                <button onClick={() => alert('Uploading!')}>
                    Upload Image
                </button>

            </div>

        </>
    )
}

export default Eventss