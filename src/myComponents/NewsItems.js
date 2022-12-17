import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        
        return (
            <>
                <div className="container text-center">
                    <div className="row">
                        <div className="col" style={{BackgroundColor:'black', padding:'10px'}}>
                            This is NewsItem 1
                        </div>
                        <div className="col">
                            This is NewsItem 2
                        </div>
                        <div className="col">
                            This is NewsItem 3
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItems

