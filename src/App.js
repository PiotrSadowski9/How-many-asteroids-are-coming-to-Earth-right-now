import React, { Component } from 'react';
import axios from 'axios';
import Objects from './components/Objects';
import Quantity from './components/Quantity';
import './components/main.css'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:false,
      date:new Date()
    }
  }
  componentDidMount() {
    let currentDate = new Date(); // pobieram date
    currentDate = currentDate.toISOString().slice(0,10) //wyciągam DD/MM/YYYY
    console.log(currentDate);
    let api = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=Gi4cVv1lnP56upaPiVQjeFlEPWHydqnOCZ0zKtai`;
    axios.get(api)
      .then((res) => {
        this.setState({
          list:[res.data]
        },() => console.log(this.state.list)
        );
      })
  }
  handleClick = (e) => {
    window.scrollTo(0, 0);
    let currentDate = this.state.date;
    console.log('1', currentDate);
    currentDate.setDate(currentDate.getDate() +1);
    console.log('2', currentDate);
    currentDate = currentDate.toISOString().slice(0,10);

    let api = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=Gi4cVv1lnP56upaPiVQjeFlEPWHydqnOCZ0zKtai`;
    axios.get(api)
        .then((res) => {
            this.setState({
                list: [res.data]
            }, () => console.log(this.state.list));
        })

}

  render() {
    if(!this.state.list) {
      return  <div>
                abc
              </div>}
    return (
      <div>
        <Quantity list={this.state.list}/>
        <Objects list={this.state.list}/>
        <button onClick={this.handleClick}>Check the next day!!!</button>
      </div>
    )
  }
}

export default App
