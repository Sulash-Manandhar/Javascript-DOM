// const grandparent = document.getElementById("grandparent-id");


// const grandparent = document.querySelector("#grandparent-id")
//changeColor(grandparent);

//query selector example
// const parent= document.querySelector(".parent");
// changeColor(parent)
// const parents= document.querySelectorAll(".parent");
// parents.forEach(changeColor)

//selecting parent through class name
//const parents = Array.from(document.getElementsByClassName("parent"))
// parents.forEach(changeColor)


//selecting the children element of grandparent class i.e, parent
// const grandparent = document.querySelector(".grandparent")
// const parent = Array.from(grandparent.children)
// parent.forEach(changeColor)

//selecting parent element's 1st child
// const grandparent = document.querySelector(".grandparent")
// const parent = Array.from(grandparent.children)
// const firstParent = parent[0]
// const parentChildren = firstParent.children
// changeColor(parentChildren[0])

//selecting only one child
// const grandparent = document.querySelector(".grandparent")
// const firstChild = grandparent.querySelector(".child")
// changeColor(firstChild)

//selecting both the child
// const grandparent = document.querySelector(".grandparent")
// const children = grandparent.querySelectorAll(".child")
// children.forEach(changeColor)


//selecting parent through class
// const firstChild = document.getElementById("child1-id")
// const parent= firstChild.parentElement
// changeColor(parent)


// selecting grandparent through child 
// const firstChild = document.getElementById("child1-id")
// const parent= firstChild.parentElement
// const grandparent = parent.parentElement
// changeColor(grandparent)

// selecting the grandparent 
// const firstChild = document.getElementById("child1-id")
// const grandparent = firstChild.closest('.grandparent')
// changeColor(grandparent)


//selecting the siblings
const firstChild = document.getElementById("child1-id") 
const secondChild = firstChild.nextElementSibling
changeColor(secondChild)
//back to child one extra spicy
changeColor(secondChild.previousElementSibling) 

function changeColor(element){
    element.style.backgroundColor="#d523fe"
}
