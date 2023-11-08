class Sidebar {
    constructor(data){
        this.data = data;
    }
    randersidebar(){
        const render = sidebarData.map((itm) => {
            return `<div class ="mainside">
            <div class ="sidebar">
        <h3>${itm.heading}</h3>
        <div>${itm.fulltime}</div>
        <div>${itm.parttime}</div>
        <div>${itm.Student}</div>
        <div>${itm.Internship}</div>
        <div>${itm.Freelance}</div>
        </div>
        <div class ="sidesecond">
        <h3>${itm.headingsecond}</h3>
        <div>${itm.front}</div>
        <div>${itm.backend}</div>
        <div>${itm.iosdeveloepr}</div>
        <div>${itm.parttime}</div>
        <div>
        <div>
           `
        }).join("")
        document.getElementById('sidebar').innerHTML = render 
    }
}
const sidebarData = [
    {
        heading: "News Types",
        fulltime: "Top Stories",
        parttime: "Tamil",
        Student: "Hindi",
        Internship: "India",
        Freelance: "World",
        headingsecond: "Science",
        front: "Twitter",
        backend: "Nasa",
        iosdeveloepr: "ISRO"
    }
]
const sidebr = new Sidebar()
sidebr.randersidebar()