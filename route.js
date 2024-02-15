 
     //============================
    // ROUTE
    //============================
    function route(e){
        //prevent refresh
        e=event||window.event
        e.preventDefault()

        //push browser
        const targetHref= e.target.href
        window.history.pushState({},"",targetHref)
  

        fetchUrl()
                
    }

    //============================
    // ROUTING URL
    //============================
    const urlRoutingObject={
        "/":"page/home.html",
        "/contact":"page/contact.html",
        "/404":"page/404.html",
    }


// console.log(window.location.pathname);


    //============================
    // HANDLING URL CHANGE
    //============================
    const fetchUrl=async ()=>{
             //get pathname
             let pathUrl = window.location.pathname
             console.log(pathUrl);

        const urlsToBeFetch = urlRoutingObject[pathUrl]||urlRoutingObject['/contact']
        const urlFetched = await fetch(urlsToBeFetch).then((result)=>result.text())

        //push content to pathname
        document.getElementById('content').innerHTML=urlFetched


    }

fetchUrl()
window.route=route
