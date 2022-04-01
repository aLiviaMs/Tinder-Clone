/** React imports */
import { useState } from 'react';

/** Components and Interfaces imports */
import TinderCard from 'react-tinder-card';
import ChatContainer from '../components/Chat/ChatContainer';
import { IPersonCardData } from '../interface/IPersonCardData';

/** Syles imports */
import './Dashboard.scss'

const people: Array<IPersonCardData> = [
    {
        name: 'ig ppm',
        url: 'https://media.discordapp.net/attachments/550023269055463444/959236013643956264/unknown.png?width=355&height=473'
    },
    {
        name: 'rafino ppm',
        url: 'https://media.discordapp.net/attachments/550023269055463444/959249159058259968/bunda_do_rafino.jpeg?width=355&height=473'
    },
    {
        name: 'phases ppm',
        url: 'https://media.discordapp.net/attachments/550023269055463444/959249159330869248/phasessunglass.png'
    },
    {
        name: 'rossner ppm',
        url: 'https://media.discordapp.net/attachments/550023269055463444/959249159565758536/builderrossner.jpeg?width=355&height=472'
    },
    {
        name: 'burbs ppm',
        url: 'https://media.discordapp.net/attachments/550023269055463444/959249160853409852/padrezag.jpeg?width=291&height=473'
    },
    {
        name: 'pimp ppm',
        url: 'https://media.discordapp.net/attachments/550023269055463444/959249160031313970/pimp.png?width=395&height=473'
    },
    {
        name: 'borenda ppm',
        url: 'https://media.discordapp.net/attachments/550023269055463444/959249160475906118/borenda.png?width=467&height=473'
    },
    {
        name: 'liv ppm',
        url: 'https://media.discordapp.net/attachments/550023269055463444/959251045731684442/unknown.png?width=468&height=473'
    },
]

const Dashboard = () => {
    const characters: Array<IPersonCardData> = people;
    const [lastDirection, setLastDirection] = useState<string>()

    const swiped = (direction: string, nameToDelete: string) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen!')
    }
    return (
        <main id='dashboard'>
            <ChatContainer />
            <div className="swiper-container text-align-center">
                <div className="card-container">
                    {characters.map((character: any) =>
                        <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className='swipe-info'>
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p></p>}
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Dashboard;