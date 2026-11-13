import './DisplayResult.css'
import Restart from './Restart';

function DisplayResult ({reset, result, myHealth, enemyHealth}) {
    let myClass = "draw";
    let enemyClass = "draw";

    if (result === "win") {
        myClass = "win";
        enemyClass = "lose"
    }
    else if (result === "lose") {
        myClass = "lose";
        enemyClass = "win"
    }

    return (
        <>
            <div className='players'>
                <div className={myClass}>
                    <p>Your Health</p>
                    <p>{myHealth}</p>
                </div>
                <div className={enemyClass}>
                    <p>Enemy Health</p>
                    <p>{enemyHealth}</p>
                </div>
            </div>
            <Restart reset={reset} result={result}></Restart>
        </>
    )
}

export default DisplayResult;
