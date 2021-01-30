import React, { Component } from 'react'

 class Objects extends Component {
    render() {
        const objectName = this.props.list.map((e)=>{
            let nearOb = Object.values(e.near_earth_objects).find(a => a[0]);
            const flattenDataName = [].concat.apply([], nearOb);
            const wantedName = flattenDataName.map(el => 
                <li key={el.id}> <a href={el.nasa_jpl_url} rel='noreferrer' target='_blank' >
                        {el.name}</a> Czy pierdolnie? --- <span>{el.is_potentially_hazardous_asteroid ===true? "Yes":"No"}</span>
                        <span>  odległość  ---{Math.round(el.close_approach_data[0].miss_distance.kilometers)}kilometrów</span>
                        <span>  rozmiar ---{Math.round(el.estimated_diameter.meters.estimated_diameter_max)}metrów</span>
                </li>);
            return wantedName
        });
   

        return (
            <ul>
                {objectName}
               
            </ul>
        )
    }
}

export default Objects
