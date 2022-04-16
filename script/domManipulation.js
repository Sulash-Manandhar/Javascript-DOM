//append body and element
//append can append more than one thing but append child cannot
const body = document.body
// body.append("Appending body")
// body.append("Add TWO texts","first text","second text")

//creating an element
// const div = document.createElement('div');
// body.append(div)

//adding content to div
// div.innerText = "This is first way to add text to an element"
// div.textContent ="This is second method for adding text to an element"


// difference between inner text and text contain
// const div = document.querySelector('div')
// console.log(div.innerText)  //print out what we can see
// console.log(div.textContent) //print out everything including display none stuff


//editing div data 
// const div = document.querySelector('div')
// div.innerHTML = "<strong>Compile<br>Tags and Elements</strong>"
// div.textContent = "<h1>Does not matter, it is an text</h1>"

//next way of doing things, innerHtml
// const div = document.querySelector('div')
// const h5 = document.createElement('h5')
// h5.innerHTML = "h5 tag is added to the text"
// div.append(h5)

//removing the element from the DOM
const div = document.querySelector('div')
const spanHI= document.querySelector('#hi')
const spanBYE= document.querySelector('#bye')

spanBYE.remove()//removes the tag
// div.removeChild(spanBYE)//remove tag 
div.append(spanBYE) //re-add the removed tag