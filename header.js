import dataService from "./dataservice";


export default class Header {
    constructor(data){
        this.data = data
    }

    renderData(){
        const tpl =  `
            <div class = "subhead">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/3/33/Google_News.png?20211029151451" class = "logo">
            <input type = "search" placeholder="Searching a News & Sources" id ="serchinput">
            <i class="fa fa-question-circle" style="font-size:24px"></i>
            <i style="font-size:24px" class="fa"></i>
            <i style="font-size:24px" class="fa">&#xf2a1;</i>
            <img src ="https://png.pngtree.com/thumb_back/fh260/background/20220713/pngtree-login-icon-steel-protection-login-photo-image_8659186.jpg" class ="login">
            </div>`
        document.getElementById("headercontainer").innerHTML = tpl;
    }

    renerNews(data){
        const add = `<div class="topheading">Top Stories > </div>`
        const html = data.map((item) => {
            return `<div class ="seeui">
            <img src ="${item.urlToImage}" class ="imgrender">
            <h3>${item.title}</h3>
            <h4>${item.publishedAt}</h4>
            <p class ="para"><b>Description:-</b>${item.description}</p>
            </div>`
        }).join(" ")
        document.getElementById('rendernews').innerHTML = add + html;
    }

    async eventBind(){
        const searchInput = document.getElementById('serchinput');
        searchInput.addEventListener('keyup', async (event) => {
            const getValue = event.target.value;
            const apiKey = "ab7417cf813f41279abf5fb71eb2d29b";
            const datafetch = await dataService.getData(`v2/everything?q=${getValue}&apiKey=${apiKey}`);
            this.renerNews(datafetch.articles);
        })
    }

    async init(){
        const apiKey = "ab7417cf813f41279abf5fb71eb2d29b";
        const datafetch = await dataService.getData(`v2/everything?q=india&apiKey=${apiKey}`)
        this.data = datafetch
        console.log(datafetch)
        this.renderData()
        this.renerNews(this.data.articles);
        this.eventBind()
    }
}
const headnew = new Header();
headnew.init();

const datefetch = new Date()
document.getElementById('date').innerHTML = datefetch.toLocaleString()