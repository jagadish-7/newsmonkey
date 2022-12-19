import React, { Component } from 'react'
import loadingGif from '../loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='container text-center'>
        <img src={loadingGif} alt="Loading gif" />

      </div>
    )
  }
}
