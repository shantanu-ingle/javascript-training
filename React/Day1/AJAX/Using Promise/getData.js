function getData(){
    return new Promise(function(resolve,reject){
        var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xmlHttpReq.onreadystatechange = function() {
        if (xmlHttpReq.status===200 && xmlHttpReq.readyState   ===4){
            
            resolve(xmlHttpReq.responseText);
        }else if(xmlHttpReq.status!==200 && xmlHttpReq.readyState !==4){
            reject("Error: " + xmlHttpReq.status + " " + xmlHttpReq.statusText);
        }
    };
    xmlHttpReq.send();//actually places the asunc call
    })
}