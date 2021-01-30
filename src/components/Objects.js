import React, { Component } from 'react'

 class Objects extends Component {
    render() {
        const objectName = this.props.list.map((e)=>{
            let nearOb = Object.values(e.near_earth_objects).find(a => a[0]);
            const flattenData = [].concat.apply([], nearOb);
            const wantedResultData = flattenData.map(el => <a href={el.nasa_jpl_url} rel='noreferrer' target='_blank' key={el.id}>{el.name}</a>);
            return wantedResultData
        });
        const objectDistance = this.props.list.map((e) =>{
            let nearOb = Object.values(e.near_earth_objects).find(a => a[0]).map(b => b.close_approach_data);
            const flattenData = [].concat.apply([],nearOb);
            const wantedResultData = flattenData.map(obj => obj.miss_distance);
            const flattenDataB = [].concat.apply([], wantedResultData);
            const wantedResultDataB = flattenDataB.map(obj => <p key={obj.kilometers}>{Math.round(obj.astronomical *100)/100} </p>);
            return wantedResultDataB
        });
        const objectSize = this.props.list.map((e)=> {
            let nearOb = Object.values(e.near_earth_objects).find(a => a[0]).map(b => b.estimated_diameter);
            const flattenData =  [].concat.apply([], nearOb);
            const wantedResultData = flattenData.map(obj => obj.meters);
            const flattenDataB =  [].concat.apply([],wantedResultData );
            const wantedResultDataB = flattenDataB.map(obj => <p  key={obj.estimated_diameter_min} > {Math.round(obj.estimated_diameter_max)}</p>);
            return wantedResultDataB
        });

        const objectDanger = this.props.list.map((e)=> {
            let nearOb = Object.values(e.near_earth_objects).find(a => a[0])
            const flattenData =  [].concat.apply([], nearOb);
            console.log(flattenData)
            const wantedResultData = flattenData.map(obj => <a key={obj.name} href="https://en.wikipedia.org/wiki/Potentially_hazardous_object" target="_blank" rel='noreferrer'> {obj.is_potentially_hazardous_asteroid ===true? "Yes":"No"} </a>);
            return wantedResultData

        });





        return (
            <ul>
                <li>{objectName}</li>
                <li>{objectDistance}</li>
                <li>{objectSize}</li>
                <li>{objectDanger}</li>
            </ul>
        )
    }
}

export default Objects
