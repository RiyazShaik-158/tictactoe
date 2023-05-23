import React from "react";

const style = {
    backgroundColor : "aqua",
    // borderRadius : ".8rem",
    fontSize : "1.8rem",
    fontweight : "800",
    padding : "0.75rem",
    outline : "none"
}

const Square = ({value,onClick}) => {

    return (
        <button style={style} onClick={onClick}>
            {value }
        </button>
    )    
}

export default Square;





