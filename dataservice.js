const dataService = (function() {
    const apiUrl = 'https://newsapi.org/';
    console.log(apiUrl)
    function fetchData(url,method,data){
        return  fetch(url,{
            method: method,
            headers:{
                // 'Content-Type': 'application/json',
                // 'x-Api-key': 'DEMO-API-KEY',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
    }
    function getData(url =""){
        const finalUrl = `${apiUrl}${url}`
        console.log(fetchData);
        console.log(finalUrl);
        return fetchData(finalUrl, "GET")
    }
    function postData(url ="", data) {
        const postfetch = `${apiUrl}${url}`
        console.log(postfetch)
        return fetchData(postfetch, 'POST', data);
      }
    return{
        getData,
        postData
    }
})();

export default dataService;
