import React, { Component } from 'react'
import NewsItems from './NewsItems'



export class News extends Component {

    articles = [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Wired",
            "title": "Apple May Allow Rival App Stores on Some iPhones and iPads",
            "description": "Plus: Google’s smart home gadgets now work with Matter, the US is mailing out free Covid tests again, and the iPod of crypto has arrived.",
            "url": "https://www.wired.com/story/apple-outside-app-stores-eu",
            "urlToImage": "https://media.wired.com/photos/639d1b2afd7f2c34ab1d7141/191:100/w_1280,c_limit/Apple-May-Allow-Rival-App-Stores-on-Some-iPhones-and-iPads-Gear-GettyImages-967357578.jpg",
            "publishedAt": "2022-12-17T14:00:00Z",
            "content": "Apples gonna do what Apples gonna dounless government regulations compel it to change.\r\nA string of recent European Union regulations have forced Apple to loosen control over its tightly guarded prod… [+3640 chars]"
        },
        {
            "source": {
                "id": "breitbart-news",
                "name": "Breitbart News"
            },
            "author": "Ian Hanchett",
            "title": "Comer on Twitter Files: 'FBI Needs to Be Dismantled' and Rebuilt, Starting with Its Budget, We Need to Probe Google, Facebook",
            "description": "On Friday's broadcast of the Fox News Channel's \"Hannity,\" House Oversight Committee Ranking Member Rep. James Comer (R-KY) reacted to the latest Twitter | Clips",
            "url": "https://www.breitbart.com/clips/2022/12/16/comer-on-twitter-files-fbi-needs-to-be-dismantled-and-rebuilt-we-need-to-probe-google-facebook/",
            "urlToImage": "https://media.breitbart.com/media/2020/11/Comer-1128-Thumbnail-640x335.jpg",
            "publishedAt": "2022-12-17T04:53:15Z",
            "content": "On Friday’s broadcast of the Fox News Channel’s “Hannity,” House Oversight Committee Ranking Member Rep. James Comer (R-KY) reacted to the latest Twitter files release by stating that investigations … [+1616 chars]"
        },
        {
            "source": {
                "id": "google-news-ca",
                "name": "Google News (Canada)"
            },
            "author": null,
            "title": "Montreal's first snowstorm of the season - CityNews",
            "description": "Montreal's first snowstorm of the season  CityNewsView Full Coverage on Google News",
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9V1RISmlmUExhV2fSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-12-16T23:32:58+00:00",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "https://www.engadget.com/about/editors/will-shanklin-1",
            "title": "Google, Apple and Mozilla team up to build a better browser benchmark | Engadget",
            "description": "The makers of Chrome, Safari and Firefox are collaborating on a new browser benchmark tool..",
            "url": "https://www.engadget.com/speedometer-3-browser-benchmark-apple-google-mozilla-212957943.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-12/7cffd710-7d84-11ed-bdb5-381cf829871e",
            "publishedAt": "2022-12-16T21:37:19.9139997Z",
            "content": "Google, Apple and Mozilla are collaborating on a better web browser benchmark. Speedometer 3 will be a cross-industry collaborative effort from the Chrome, Safari and Firefox makers to create a new m… [+1655 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Ron Amadeo",
            "title": "Linux, Amazon, Meta, and Microsoft want to break the Google Maps monopoly",
            "description": "Overture Maps Foundation wants to end the oppressive rule of the Google Maps API.",
            "url": "https://arstechnica.com/gadgets/2022/12/linux-amazon-meta-and-microsoft-want-to-break-the-google-maps-monopoly/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/12/overture-maps-foundation-760x380.jpg",
            "publishedAt": "2022-12-16T19:22:29+00:00",
            "content": "Enlarge/ The Overture Maps logo. \r\n101 with 0 posters participating\r\nGoogle Maps is getting some competition. The Linux Foundation has announced Overture Maps, a \"new collaborative effort to develop … [+5404 chars]"
        },
        {
            "source": {
                "id": "gruenderszene",
                "name": "Gruenderszene"
            },
            "author": null,
            "title": "Dieser Runtastic-Entwickler baut nebenbei ein Google Maps für E-Autos auf",
            "description": "Im Hauptberuf ist Niklas Hösl Software-Entwickler bei Runtastic. Mit Chargeprice will er einen Kartendienst für Elektro-Ladesäulen groß machen.",
            "url": "https://omr.com/de/daily/chargeprice-ladestation-app-niklas-hoesl-future-moves/",
            "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2022/12/chargeprice-niklas-hoesl.jpeg?ver=1670833359",
            "publishedAt": "2022-12-16T17:35:39+00:00",
            "content": "Dieser Runtastic-Entwickler baut nebenbei ein Google Maps für E-Autos auf\r\nIm Hauptberuf ist Niklas Hösl Software-Entwickler bei Runtastic. Mit Chargeprice will er einen Kartendienst für Elektro-Lade… [+7006 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Dan Seifert",
            "title": "Five apps to use to stay on top of news without looking at Twitter",
            "description": "Twitter used to be my source for breaking news and article recommendations. Now, I’m using tools from Apple, Google, old-school RSS, and more to stay on top of the things I care about instead.",
            "url": "http://www.theverge.com/23512499/twitter-news-alternatives-apple-google-rss-techmeme",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/AMt9GnYRMa1CZ7NV1jqK72Kti3g=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/20086188/acastro_200715_1777_twitter_0001.0.jpg",
            "publishedAt": "2022-12-16T15:17:50Z",
            "content": "How to get your news fix now that Twitter sucks\r\nHow to get your news fix now that Twitter sucks\r\n / Twitter used to be great for news junkies. Now it sucks. Heres what Im doing to stay on top of new… [+6012 chars]"
        },
        {
            "source": {
                "id": "techradar",
                "name": "TechRadar"
            },
            "author": null,
            "title": "New update turns your Google Nest into a Matter control hub",
            "description": "Affects eight devices from the Google Home speaker to the recent Nest WiFi Pro",
            "url": "https://www.techradar.com/news/new-update-turns-your-google-nest-into-a-matter-control-hub",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/fz6ofHbuzwmZ4Y6yzk5sNZ-1200-80.jpg",
            "publishedAt": "2022-12-16T06:00:47Z",
            "content": "It’s taken a little while, but we’re finally seeing the Matter standard\r\n roll out to various smart home devices. And this time, it’s coming to a Google Nest near you.\r\nEight devices in total will be… [+2651 chars]"
        },
        {
            "source": {
                "id": "mashable",
                "name": "Mashable"
            },
            "author": "Karissa Bell",
            "title": "Amazon challenges Google with smaller, cheaper Echo Show",
            "description": "Amazon just ratcheted up the pressure on Google.",
            "url": "https://mashable.com/article/amazon-echo-show-5/",
            "urlToImage": "https://mondrian.mashable.com/2019%252F05%252F29%252F4d%252Fd91b4bcb383142c1b52ffbac16165110.01151.jpg%252F1200x630.jpg?signature=R9UT45RZefZ53JiuK0HJ5OQNCoU=",
            "publishedAt": "2019-05-29T13:00:00Z",
            "content": "Amazon just ratcheted up the pressure on Google in a major way.\r\nThe company just unveiled its new Echo Show 5, a smaller and cheaper version of its Echo Show speaker. The $89.99 device is available … [+2026 chars]"
        }
    ]


    ///This is constructor
    constructor() {
        super();//Without this our app will throw error

        console.log("I am a constructor of news app")

        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <>

                <h1 className='text-center my-4'>This is news component</h1>


                <div className="container text-center">

                    <div className="row md-4 my-3">
                        {
                            this.state.articles.map((element) => {
                                // console.log(element);
                               return <div className="col my-3"  key={element.url} >
                                    <NewsItems title={element.title.slice(0, 45)} desc={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })
                        }


                    </div>
                </div>





            </>
        )
    }
}

export default News
