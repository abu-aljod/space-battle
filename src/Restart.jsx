import './Restart.css'

function Restart ({ reset, result }) {
    let message = "It was a draw! At least you didn't lose 😌";

    if (result === "win") {
        message = "Congratulations! You made it and defeated the enemy 😎";
    } 
    else if (result === "lose") {
        message = "You lost! But no problem, you got it next time😉"
    }

    return (
        <div className='restart'>
            <p>{message}</p>
            <button onClick={reset}>Restart</button>
        </div>
    )
}

export default Restart;