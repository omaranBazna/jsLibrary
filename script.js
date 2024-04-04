const SERVER_URL= "https://13ee797a-f04f-4188-bd96-7bfc59f3603e-00-4zqbc1f063fq.spock.replit.dev/"; 

let projectAPI="";

function setProjectAPI(api){
  projectAPI = api;
}
function loadKey(key,id){
    let el=document.getElementById(id)
    fetch(SERVER_URL+"key/"+projectAPI+"/"+key).then(res=>res.json()).then(data=>{
         
        console.log(data)
        let val=data.pair.value
        el.innerText = val
    })

}



