import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
        <>
        
      <h1 className='text-center my-4'>This is news component</h1>
      <NewsItems/>
      <NewsItems/>
      <NewsItems/>
      <NewsItems/>
      <NewsItems/>
      <NewsItems/>

        </>
    )
  }
}

export default News