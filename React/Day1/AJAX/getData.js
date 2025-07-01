function getData(callback){
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xmlHttpReq.onreadystatechange = function() {
        if (xmlHttpReq.status===200 && xmlHttpReq.readyState   ===4){
            // console.log(xmlHttpReq.responseText);
            // return xmlHttpReq.responseText; // pointless becuse this is async and the return will be undefined, 
            // and when the actual values are loaded the undefined value was already returned
            callback(xmlHttpReq.responseText); // this is the correct way to handle async calls
        }
    };
    xmlHttpReq.send();//actually places the asunc call
}



