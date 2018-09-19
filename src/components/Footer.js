import React, { Component } from 'react'
import StickyFooter from "react-sticky-footer";

export default class Footer extends Component {
  render(){
    return(
      <StickyFooter
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: "#00707a",
          padding: "2rem"
        }}
        stickyStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          padding: "2rem"
        }}
      >
        Paul Shingleton 2018
      </StickyFooter>
    )
  }
}