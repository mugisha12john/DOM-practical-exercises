const add = document.getElementById('addBox')
const removeLast = document.getElementById('removeLast')
const highlightSecond = document.getElementById('highlightSecond')
const duplicateFirst = document.getElementById('duplicateFirst')
const allBoxes= document.getElementById('boxContainer')
const box =document.getElementsByClassName('box')
// add new box

add.addEventListener('click',()=>{
    let div = document.createElement('div')
    div.classList.add('box')
    div.textContent = `${box.length+1}`
    allBoxes.appendChild(div)
})

// remove last 
removeLast.addEventListener('click',()=>{
    
    if(box.length > 0){
        allBoxes.lastElementChild.remove()
    }
    else{
        alert('no box left')
    }
})

// highlight second box
highlightSecond.addEventListener('click',()=>{
    // const first = allBoxes.firstElementChild
    // const second = first.nextElementSibling
    // second.style.backgroundColor = 'yellow'
    for (let b of box) {
    b.style.backgroundColor = 'lightgray';
  }

  if (box.length >= 2) {
    box[1].style.backgroundColor = 'yellow';
  } else {
    alert("There isn't a second box.");
  }
})

// duplicate first
duplicateFirst.addEventListener('click',()=>{
    //    let div = document.createElement('div')
    // div.classList.add('box')
    // div.textContent = `1`
    // allBoxes.prepend(div) 
    if (box.length > 0) {
    const firstBox = box[0];
    const cloned = firstBox.cloneNode(true); // deep clone
    allBoxes.appendChild(cloned); 
  }

})
