//fetched nekosbest api using Promise
fetch('https://nekos.best/api/v2/hug?amount=20')
  .then(response => response.json()) //changed the response to json format
  .then(result => {
     
    let data=result.results; //preparing data to array format for iteration
  
    rendering(data);//this function can be called and reused
    
  
  



}).catch((error)=>console.log("error occured while fetching data"+error));


function rendering(data){

  for(let i=0;i<data.length;i++){
    let name=data[i].anime_name; //iteration for name of the anime
    let image=data[i].url;  //iteration for image of the anime

    const screen=document.querySelector(".cardContainer"); //targeted class:cardContainer using query Selector
   
    //passing datas to the html using innerHTML
    screen.innerHTML+=`
      <div class="card">
    <h3 class="title">${name}</h3>
   <img src="${image}" class="image"/>
   <a href="${image}">FullScreen</a> 
   </div>
   
    
    
    `
}
}
  //fetched nekosbest api using Promise
fetch('https://nekos.best/api/v2/hug?amount=20')
.then(response => response.json()) //changed the response to json format
.then(result => {
   
  let data=result.results; //preparing data to array format for iteration

  rendering(data);//this function can be called and reused
  





}).catch((error)=>console.log("error occured while fetching data"+error));


function rendering(data){

for(let i=0;i<data.length;i++){
  let name=data[i].anime_name; //iteration for name of the anime
  let image=data[i].url;  //iteration for image of the anime

  const screen=document.querySelector(".cardContainer"); //targeted class:cardContainer using query Selector
 
  //passing datas to the html using innerHTML
  screen.innerHTML+=`
    <div class="card">
  <h3 class="title">${name}</h3>
 <img src="${image}" class="image"/>
 <a href="${image}">FullScreen</a> 
 </div>
 
  
  
  `
}
}
