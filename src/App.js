import React, { Component } from 'react';
import axios from 'axios';
import Objects from './components/Objects';
import Quantity from './components/Quantity';
import Quote from './components/Quote'
import './components/main.css';
import Footer from './components/Footer'



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
    let api = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=Gi4cVv1lnP56upaPiVQjeFlEPWHydqnOCZ0zKtai`;
    axios.get(api) //wysyłam zapytanie
      .then((res) => {
        this.setState({
          list:[res.data] // zapisuje dane do state
        },
        );
      })
  }
  //Ustawiam kolejną datę
  handleClick = (e) => {
    window.scrollTo(0, 0);
    let currentDate = this.state.date;
    currentDate.setDate(currentDate.getDate() +1);
    currentDate = currentDate.toISOString().slice(0,10);

    let api = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=Gi4cVv1lnP56upaPiVQjeFlEPWHydqnOCZ0zKtai`;
    axios.get(api)
        .then((res) => {
            this.setState({
                list: [res.data]
            },);
        })

}

  render() {
    if(!this.state.list) {
      return  <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div>}
    return (
      <div className={'bodyBox'}>
        <Quantity list={this.state.list}/>
        <Objects list={this.state.list}/>
        <Quote/>
        <Footer handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App
