import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';



export class News extends Component {

    ///This is constructor
    constructor() {
        super();//Without this our app will throw error

        console.log("I am a constructor of news app")

        this.state = {
            articles: [],
            loading: false,
            page:1 
        }
    }

     async componentDidMount () {
        console.log("CDM");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5b1730df03db49bfa947980c4abe47c3&page=1&pageSize=${this.props.pageSize}`;
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading:false
        });
    }



    //this button is handling the next click

    handlePrevClick = async()=>{
        console.log("previous")

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5b1730df03db49bfa947980c4abe47c3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })

        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading:false
        });


    }



    //this button is handling the next click

    handleNextClick = async()=>{
        console.log("Next")

        if(this.state.page+1 > Math.ceil(this.state.totalResults/12)){
        }
        else{

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5b1730df03db49bfa947980c4abe47c3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles,
            loading:false
        });

    }

       


    }

    render() {
        console.log("render method");
        return (
            <>


                <h1 className='text-center my-4'>NewsAdda24 - Daily dose of news</h1>
                {this.state.loading && <Spinner/>}

            

                <div className="container text-center">

                    <div className="row md-4 my-3">
                        {
                            !this.state.loading &&
                            this.state.articles.map((element) => {
                                // console.log(element);
                               return <div className="col my-3"  key={element.url} >
                                    <NewsItems title={element.title?element.title.slice(0, 44):"Read more to see the content..."} desc={element.description?element.description.slice(0, 88):"Read more to see the content..."} imageUrl={element.urlToImage===null?"https://image.cnbcfm.com/api/v1/image/107016872-1645115562077-107016872-16451155032022-02-17t160240z_1691077713_rc2sls9lbsun_rtrmadp_0_europe-stocks.jpg?v=1671433001&w=1920&h=1080":element.urlToImage} newsUrl={element.url} />
                                </div>
                            })
                        }


                    </div>
                </div>

                <div className="container d-flex justify-content-between my-10">
            <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/12)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>





            </>
        )
    }
}

export default News
