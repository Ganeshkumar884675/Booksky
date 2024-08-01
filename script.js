var plusbutton=document.getElementById("plus-button")
var popoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")

plusbutton.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.querySelector(".cancel-button")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"
})
var addbutton=document.querySelector(".add-button")
var addbook=document.querySelector(".add-book")
var addauthor=document.querySelector(".add-author")
var bookdescription=document.querySelector(".book-description")
var bookcontainer=document.querySelector(".book-container")
var container=document.querySelector(".container")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
     var div=document.createElement("div")
     div.setAttribute("class","book-container")
     div.innerHTML=`<h2>${addbook.value}</h2>
     <h5>${addauthor.value}</h5>
     <p>${bookdescription.value}</p>
     <button onclick="deleteitem(event)">Delete</button>`
     container.append(div)
     popoverlay.style.display="none"
     popupbox.style.display="none"
})
var deletebook=document.querySelector("delete-book")

function deleteitem(event)
{
    event.target.parentElement.remove()
}