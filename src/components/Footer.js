import React, { Component } from 'react';
import FbLogo from './assets/fbLogo.png';
import TTLogo from './assets/TTLogo.png';
import INLogo from './assets/INLogo.png'



export class Footer extends Component {
    render() {
        return (
            <footer className={'footerBox'}>
                <img className={'logos'} alt="Facebook logo" src={FbLogo}/>
                <img className={'logos'} alt="Twitter logo" src={TTLogo}/>
                <img className={'logos'} alt="Instagram logo" src={INLogo}/>
                <p>Asteroids, sometimes called minor planets, are rocky, airless 
                remnants left over from the early formation of our solar 
                system about 4.6 billion years ago. The current known asteroid count is: 1,044,995.
                Most of this ancient space rubble can be found orbiting the Sun between Mars and Jupiter 
                within the main asteroid belt. Asteroids range in size from Vesta — the largest at about 329
                 miles (530 kilometers) in diameter — to bodies that are less than 33 feet (10 meters) across. 
                 The total mass of all the asteroids combined is less than that of Earth's Moon.</p>
                 <p>You can find more informations on <a 
                 href='https://solarsystem.nasa.gov/asteroids-comets-and-meteors/asteroids/in-depth/#many_shapes_and_sizes_otp'>
                     NASA
                 </a> website.</p>
            </footer>
        )
    }
}

export default Footer
