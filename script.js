function generateJoke1(){
  let url =`https://v2.jokeapi.dev/joke/Any?safe-mode`;
let promiseData=fetch(url).then(data=>data.json()); 
// fetch gives Promise Object response with readable stream of data, then we convert to json data of Promise Object
console.log(promiseData) //from fetch we got Promise 

promiseData.then(data=>displayData()); 
// we access the result of promise using .then if fullfilled state
// if rejected we use catch to get the result
}

async function generateJoke(){
  let url =`https://v2.jokeapi.dev/joke/Any?safe-mode`;
  console.log(fetch(url)); //promise response is given by fetch
let fetchResponse=await fetch(url); 
console.log("fetch Response is",fetchResponse);
// fetch gives response with readable stream of data then we convert to json data
// console.log(apiData) //from fetch we got Promise 
let apiPromiseData =fetchResponse.json();
console.log("apiPromiseData is",apiPromiseData);
// apiPromiseData.then(data=>console.log("then data is",data));  
// we access the result of promise using .then if fullfilled state
// if rejected we use catch to get the result

apiPromiseData.then(data=>displayData(data)).catch(err=>console.log(err.message));

}


function displayData(dataObj){
  console.log(dataObj);
  let resultEl=document.createElement("div");
  resultEl.classList.add("rac");
  resultEl.innerHTML=`  
  <div class="card mt-3 mx-auto  bg-dark opacity-75 " style="width:500px; height:250px">
  <h5 class="card-header text-end text-secondary fst-italic ">${dataObj.category}</h5>
  <div class="card-body">
      <a href="#" class="btn btn-primary float-end " onclick="showreply()">Get Reply</a>
      <h5 class="card-title">${dataObj.setup}</h5>
      <br>
      <h5 id="reply-text"  class="card-title text-success"> ${dataObj.delivery} </h5>               
    
  </div>  
</div>`;

var alreadyappendedEl=document.getElementsByClassName("rac");
for(x of alreadyappendedEl){
  x.remove();
}

document.body.append(resultEl);
  
}

function showreply(){
  let replyEl=document.getElementById("reply-text");
  if(replyEl.style.display="none"){
    replyEl.style.display="block";
  }
}
