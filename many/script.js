const text = document.getElementById('text')
function jschange(){
    text.classList.toggle('change')

}
function getFormvalue(){
    const fname = document.getElementsByName('fname')[0].value
    const lname = document.getElementsByName('lname')[0].value
    alert(`your fisrtname is ${fname} and lastname is ${lname}`)
}