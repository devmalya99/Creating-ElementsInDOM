// Write your code below



////create element

let para =document.createElement('p')
//createj text node
let paraText=document.createTextNode('Total Fruits: 4')

//append child
para.appendChild(paraText);
para.id = "fruits-total";//set an id of "fruits-total".

// to insert in 2nd div

//first select all the divs 

const divs=document.getElementsByTagName('div');

const secondDiv=divs[1];

secondDiv.appendChild(para);//pushed code to last position
//to insert before <ul> and inside 2nd div

/*
const fruits=document.querySelector('.fruits')

secondDiv.insertBefore(para,fruits)

*/
 const h3=document.createElement('h3');

const h3Text=document.createTextNode('Buy high quality organic fruits online')

h3.appendChild(h3Text);

const firstDiv=divs[0];
firstDiv.appendChild(h3);

// Make the sub-heading text italic
h3.style.fontStyle = 'italic';