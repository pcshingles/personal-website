import React, { Component } from 'react'

export default class Resume extends Component{
  render(){
    return(
      <div id='resume'>
          <div className="ui equal height stretched grid " id='tall'>
            <div className="ui three wide column"/>
            <div className="ui nine wide column">
          <iframe src="https://drive.google.com/file/d/1nb3zbIIoKXy51MnLKiqwqtGi-bZGwxPC/preview"/>
            </div>
            <div className="ui three wide column"/>
          </div>
      </div>
    )
  }
}