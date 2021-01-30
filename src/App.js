import React, { Component } from 'react';
import axios from 'axios';
import Objects from './components/Objects'

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
    currentDate.setDate(currentDate.getDate() +1); //następny dzień
    currentDate = currentDate.toISOString().slice(0,10) //wyciągam DD/MM/YYYY
    console.log(currentDate);
    let api = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=Gi4cVv1lnP56upaPiVQjeFlEPWHydqnOCZ0zKtai`;
    axios.get(api)
      .then((res) => {
        console.log(res);
        this.setState({
          list:[res.data]
        },() => console.log(this.state.list));
      })
  }

  render() {
    if(!this.state.list) {
      return  <div>
                abc
              </div>}
    return (
      <div>
        <Objects list={this.state.list}/>
      </div>
    )
  }
}

export default App
