import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {

        let { title, desc, imageUrl, newsUrl } = this.props;

        // let myStyle = {
        //     BackgroundColor: 'black',
        //     padding: '10px',
        //     margin: '10px'
        // }

        return (
            <>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-danger">Read more...</a>
                    </div>
                    
                </div>

               
                

            </>
            
          
        )
    }
}

export default NewsItems




