 
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
  
        //handling URL
        handlingUrlChange()
    }



    //============================
    // ROUTING URL
    //============================
    const urlRoutingObject={
        "/":"page/home.html",
        "/contact":"page/contact.html",
        "/404":"page/404.html",
    }



    //============================
    // HANDLING URL CHANGE
    //============================
    const handlingUrlChange=async ()=>{
             //get pathname
             let pathUrl = window.location.pathname
             console.log(pathUrl);

        const urlsToBeFetch = urlRoutingObject[pathUrl]||urlRoutingObject['/contact']
        const urlFetched = await fetch(urlsToBeFetch).then((result)=>result.text())

        //push content to pathname
        document.getElementById('content').innerHTML=urlFetched


    }

    

handlingUrlChange()
window.route=route
