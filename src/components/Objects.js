import React, { Component } from 'react'

 class Objects extends Component {
    render() {
        const objectName = this.props.list.map((e)=>{
            let nearOb = Object.values(e.near_earth_objects).find(a => a[0]);
            const flattenDataName = [].concat.apply([], nearOb); //pprzypisuję dane do tablicy
            const wantedName = flattenDataName.map(el => 
                <li className={'objectItem'} key={el.id}> 
                        <a className={'listItem name'} href={el.nasa_jpl_url} rel='noreferrer' target='_blank' >{el.name}</a>
                        <div className={'listItem distance'}>{Math.round(el.close_approach_data[0].miss_distance.astronomical*100)/100}</div>
                        <div className={'listItem diameter'}> {Math.round(el.estimated_diameter.meters.estimated_diameter_max)}</div>
                        <a href="https://en.wikipedia.org/wiki/Potentially_hazardous_object" rel='noreferrer' target="_blank" className={'listItem hazard'}>{el.is_potentially_hazardous_asteroid ===true? "Yes":"No"}</a>
                </li>);
            return wantedName
        });
   

        return (
                
                <div id="objects"className={"infoContainer"}>
                    <ul className={'objectList'}>
                        {objectName}
                    </ul>
                </div>
        )
    }
}

export default Objects
