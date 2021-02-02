import React, { Component } from 'react';
import Stars from './assets/stars3.jpg';

export class Quote extends Component {
    render() {
        return (
            <div className={'quoteBox'} style={{backgroundImage:`url(${Stars})`}}>
                <div className={'quoteSection'}>
                    <q className={'quoteText'} cite="https://www.brainyquote.com/quotes/neil_degrasse_tyson_531140">
                    The chances that your tombstone will read 'Killed by Asteroid' are about the same as they'd be for 'Killed in Airplane Crash.'
                    </q>
                    <figcaption className={'quoteAuthor'}>&mdash; Neil deGrasse Tyson</figcaption>
                </div>  
            </div>
        )
    }
}

export default Quote
