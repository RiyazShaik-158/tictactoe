import React, { useState } from "react";
import { calculateWinner } from "./Helpers"
import Board from "./Board";

const style = {
    width : "550px" ,
    height : "200px",
    margin : "0 auto",
    fontSize : "2rem",
    fontWeight : "600" ,
    textAlign : "center"  
}

const h1style = {
    textAlign : "center"
}

const Game = ( ) => {

    const [ board,setBoard ] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    // const [boardFull , setBoardFull] = useState(false)

    const handleClick = (i) => {

        const boardCopy  = [...board];
        //if user clicks on occupied square or game is won, return - nothing else to do
        if(winner || boardCopy[i]) return ;
        //put an x or o in clicked square
        boardCopy[i] = xIsNext ? "x" : "o"
        setBoard(boardCopy) ;
        setXIsNext(!xIsNext) ;
        
        // for(var j = 0 ; j < boardCopy.length ; j++) {
        //     if(boardCopy[j]!=null) {
        //         setBoardFull(true)
        //     } else {
        //         setBoardFull(false)
        //         break;
        //     }
        // }

    }


    // const renderMoves = () => {
    //     return (<button onClick={()=> setBoard(Array(9).fill(null))}>
    //         Start Game
    //     </button>
    //     )
        
    // }
    
    return(
        <>
            <h1 style= {h1style}>Tic Tac Toe !!!</h1>
            <Board  squares={board} onClick={handleClick}/>
            <div style={style}>
                {/* <p>{boardFull ? `want to play again? Restart` : `keep going on`}</p> */}
                <h3>{winner ? 'winner: ' + winner : 'Next Player: ' + (xIsNext ? "x" : "o")}</h3>
                {/* {renderMoves} */}
            </div>
        </>
    )
}

export default Game;


