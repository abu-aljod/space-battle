import './DisplayStat.css'

function DisplayStat ({myHealth, enemyHealth}) {
    return (
        <div className='players'>
            <div className='player-health'>
                <p>My Health ❤️‍🩹❤️‍🩹❤️‍🩹</p>
                <p>{myHealth}</p>
            </div>
            <div className='enemy-health'>
                <p>Enemy's Health ❤️‍🩹❤️‍🩹❤️‍🩹</p>
                <p>{enemyHealth}</p>
            </div>
        </div>
    )
}

export default DisplayStat;