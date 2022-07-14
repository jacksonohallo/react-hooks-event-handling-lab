import React from "react";


function EyeOnMe() {
    
    function handleFocus() {
        

        console.log('Good!');
    }


    function handleBlur() {
        
        console.log('Hey! Eye on me!')
    }


    return (
    

        <button onFocus={handleFocus}   onBlur={handleBlur}>Eye on me</button>
)

}

export default EyeOnMe
// Code EyesOnMe Component Here
