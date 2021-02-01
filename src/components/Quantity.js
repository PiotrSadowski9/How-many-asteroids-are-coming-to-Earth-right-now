import React, { Component } from 'react';
import Asteroid from './assets/asteroid7.jpeg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {IconButton} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';



class Quantity extends Component {
    render() {

        const object=this.props.list.map((e)=> {
            let nearOb = Object.values(e.near_earth_objects).find(a => a[0])
            const flattenData = [].concat.apply([], nearOb);
            const wantedResultData = flattenData.map(obj => obj.name);
            return wantedResultData.length 
        })



        return (
            <div className={"picture"} style={{backgroundImage:`url(${Asteroid})`}}>
                <span className={"texture"}>
                    <div className={'quantity'}>
                        {object}
                    </div>
                    <Scroll to="objects" smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon className={'goDown'}/>
                            </IconButton>
                    </Scroll>
                    
                </span>
                
            </div>
        )
    }
}

export default Quantity
