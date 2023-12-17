import dataService from "./dataservice";

export default class Header {
    constructor(data){
        this.data = data;
        this.data = []
    }

    renderData(){
        const tpl =  `
            <div class = "subhead">
            <div class ="left">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/3/33/Google_News.png?20211029151451" class = "logo">
            </div>
            <div class ="middle">
            <input type = "search" placeholder="Search for topics a News & Sources" id ="serchinput">
            <i style="font-size:24px" class="fa">&#xf29c;</i>
            <i style="font-size:24px" class="fa"></i>
            </div>
            <div class ="right">
            <i style="font-size:24px" class="fa">&#xf2a1;</i>
            <img src ="https://lh3.googleusercontent.com//J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=rj-w300-h300-l95-c0xffffff" class ="login">
            </div>
            </div>`
        document.getElementById("headercontainer").innerHTML = tpl;
    }

    renerNews(data){
        const add = `<div class="topheading">Top Stories 
        <i style="font-size:30px" class="fa">&#xf105;</i>
        </div>
        <div class ="line"></div>`
        const html = data.map((item) => {
            return `<div class ="render">
            <div class="renderleft">
            <img src ="${item.urlToImage}" class ="imgrender">
            <p>${item.title}</p>
            <div class ="publice">${item.publishedAt}</div>
            <div class ="location">${item.location}</div>
            </div>
            <div class ="renderright">
            <img src ="https://www.exchange4media.com/news-photo/93037-IndianExpressflame.jpg" class ="express">
            <div class ="para" id ="news">${item.News1}</div>
            <p class ="para" id ="des">${item.description}</p>
            <img src ="https://assets-global.website-files.com/6191dc5130687d707cbc32f6/62fcd88c93bd3f81dd887b38_Hindustan%20Times_banner.svg" class ="hindutanNews">
            <div class ="para" id ="news">${item.News2}</div>
            <p class ="para" id ="des">${item.descriptionsecond}</p>
            <img src ="https://www.newspaperadsbooking.in/images/newspaper-logo/Times-of-India-logo-b.jpg" class ="timeofNews">
            <div class ="para"id ="news" >${item.News3}</div>
            <p class ="para" id ="des">${item.descriptionthird}</p>
            <div>
            <div class ="linesecond"></div>
            </div>`
        }).join(" ")
        document.getElementById('rendernews').innerHTML = add + html;
    }

    async eventBind(){
        const searchInput = document.getElementById('serchinput');
        searchInput.addEventListener('keydown', async (event) => {
            const getValue = event.target.value;
            console.log(getValue)
            const afterserch  = this.data.articles.filter((itm) => {
                return itm.location.includes(getValue)
            })
            console.log(afterserch)
            this.renerNews(afterserch);
        })
    }

    async init(){
        const datafetch = await dataService.getData("/data/news.json")
        this.data = datafetch
        console.log(datafetch)
        this.renderData();
        this.renerNews(this.data.articles);
        this.eventBind();
    }
}
const headnew = new Header();
headnew.init();

const datefetch = new Date()
document.getElementById('date').innerHTML = datefetch.toLocaleString()