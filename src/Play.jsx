import { useState } from 'react'
import DisplayResult from './DisplayResult'
import DisplayStat from './displayStat';
import './Play.css'

function getRandom (min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Play ({ minDamage = 1, maxDamage = 30 }) {
    const [myNum, setMyNum] = useState(100);
    const [enyNum, setEnyNum] = useState(100);
    const [firing, setFiring] = useState(false);

    const onFire = () => {
        let deductFromMe = getRandom(minDamage, maxDamage);
        let deductFromEny = getRandom(minDamage, maxDamage);

        setMyNum(Math.max(0, myNum - deductFromMe));
        setEnyNum(Math.max(0, enyNum - deductFromEny));

        setFiring(true);
        setTimeout(() => setFiring(false), 600); 
    }

    const reset = () => {
        setMyNum(100);
        setEnyNum(100);
    }

    let gameEnd = false;
    let result;
    
    if (myNum === 0 || enyNum === 0) {
        gameEnd = true;
        if (myNum > enyNum) result = "win";
        else if (myNum < enyNum) result = "lose";
        else result = "draw";
    }

    return (
        <>
            {
                gameEnd ? 
                <DisplayResult reset={reset} result={result} myHealth={myNum} enemyHealth={enyNum}/> :

                <>
                    <DisplayStat myHealth={myNum} enemyHealth={enyNum} />
                    <div className='fire'>
                        <button className='fire-button' onClick={onFire}>FIRE</button>
                        {firing && <p>🔥🔥🔥🔥🔥</p>}
                    </div>
                </>
            }
        </>
    )
}

export default Play;