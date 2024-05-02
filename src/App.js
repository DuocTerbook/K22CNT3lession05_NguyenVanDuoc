import React, { Component } from 'react'
import NVD_Form1 from './components/NVD_Form1'
import NVD_Form2 from './components/NVD_Form2'
import NVD_Form3 from './components/NVD_Form3'

export default class App extends Component {
  handleSubmit = (param)=>{
    console.log(param);
  }
  render() {
    return (
      <div>
        <h1>Event - Form - Controlled Component</h1>
        <div>
          <NVD_Form1/>
          <NVD_Form2/>
          <NVD_Form3 onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}
