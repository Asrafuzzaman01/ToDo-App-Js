/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: mithu
 * Date: 24/05/2022
 *
 */



/*

**practice 

//GET element by class name

let items= document.getElementsByClassName('item')

for (let i =0; i<items.length; i++) {
	items[i].style.color='blue';
}

//get element by tagname
let item=document.getElementsByTagName('li');

console.log(item);

// very very important QUERY SELECTOR  css IN JS 

let header=document.querySelector('#new-task');

console.log(header);
 //let lastitem=document.querySelector('.item:last-child');

let nthitem=document.querySelector('.item:nth-child(2)' );
 nthitem.style.color='yellow';

 // parent/ child relation 

  const parent = document.querySelector('#items');
  const children=parent.children;
  
  console.log(children);   


  
  // ****Manipulate the Dom 

  //** Creating on element 
   const divelemen=document.createElement('div');

   //console.log(divelemen);


   //**Event listening 

   --------------------------------*/


// select element and assign them to variable

let newtask = document.querySelector('#new-task');
let form = document.querySelector('form');
let incompliteUl = document.querySelector('#items');

let compliteUl = document.querySelector('.complete-list ul');


// functions

let createtask = function(task) {

    let listitem = document.createElement('li');

    let checkbox = document.createElement('input')


    let label = document.createElement('label')

    label.innertext = 'task';
    checkbox.type = 'checkbox';

    listitem.appendChild(checkbox);
    listitem.appendChild(label);

    return listitem;




}



// add task function

let addtask = function(event) {
    event.preventDefult();

    let listitem = createTask(newtask.value);
    incompliteUl.appendChild(listitem);


    newtask.value = "";




    //bind the new items  to the complite list 
    bindincompliteitems(listitem, complitetask);


}

let complitetask = function() {
    let listitem = this.parentNode;
    let deletebtn = document.createElement("button");
    deletebtn.innertext = 'Delete';
    deletebtn.className = 'delete';
    listitem.appendChild(deletebtn);
    let checkbox = listitem.querySelector(input[type = "checkbox"]);
    checkbox.remove();
    compliteUl.appendChild(listitem);






}



let bindincompliteitems = function(taskItem, checkboxclick) {
    let checkbox = taskItem.querySelector(input[type = "checkbox"]);
    checkbox.onchange = checkboxclick;




}