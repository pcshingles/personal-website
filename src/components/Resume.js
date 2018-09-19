import React, { Component } from 'react'
import { Document, Page } from 'react-pdf';
import file from '../images/CareerResume.pdf'
import { Container } from "semantic-ui-react";

export default class Resume extends Component{
  render(){
    return(
      <div>
        <Container fluid>
        <Document
          file={file}
        >
          <Page pageNumber={1} />
        </Document>
        </Container>
      </div>
    )
  }
}