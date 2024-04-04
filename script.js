const SERVER_URL= "https://76116eb4-4da6-405e-bcae-84551fdc3c5c-00-1dyw26i9khzqz.worf.replit.dev/"; 


function loadKey(key,api,id){
    let el=document.getElementById(id)
    fetch(SERVER_URL+"key/"+api+"/"+key).then(res=>res.json()).then(data=>{

        let val=data.pair.value
        el.innerText = val
    })

}



