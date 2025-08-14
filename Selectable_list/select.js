const list = document.getElementById('list')
let areCtrlPressed = false
let areShiftPressed = false
let lastIndex = 0
document.addEventListener('keydown',(e)=>{
        if(e.key === 'Control'){
        areCtrlPressed = true
    }
})
document.addEventListener('keyup',(e)=>{
        if(e.key === 'Control'){
        areCtrlPressed = false
    }
})
document.addEventListener('keydown',(e)=>{
        if(e.key === 'Shift'){
        areShiftPressed = true
    }
})
document.addEventListener('keyup',(e)=>{
        if(e.key === 'Shift'){
        areShiftPressed = false
    }
})

list.addEventListener('click', (e)=>{
    if(e.target.tagName == 'LI'){
    if(areCtrlPressed){
        e.target.classList.toggle('selected')
    }else if(areShiftPressed){
        const arr = Array.from(list.children)
        const currentIndex =  Array.from(list.children).indexOf(e.target);
        const start = Math.max(lastIndex,currentIndex)
        const stop = Math.min(lastIndex,currentIndex)
        for (let i = start; i <= stop; i++) {
          arr[i].classList.add('selected');
        }

    }
    else{
        document.querySelectorAll('#list li').forEach(li=> li.classList.remove('selected'))
         e.target.classList.add('selected')
         lastIndex = Array.from(list.children).indexOf(e.target);
    }


}
})