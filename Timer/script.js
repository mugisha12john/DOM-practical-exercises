
    const subBtn = document.getElementById("sub");
    const addBtn = document.getElementById("add");
    const resetBtn = document.getElementById("reset");
    const goBtn = document.getElementById("go");
    const timeDisplay = document.querySelector(".box span");

    let time = 5;

    function updateDisplay() {
        timeDisplay.textContent = `${time}s`;
    }
    function disable(){
        subBtn.classList.toggle('disable')
        addBtn.classList.toggle('disable')
        resetBtn.classList.toggle('disable')
    }
    updateDisplay()
    addBtn.addEventListener("click", () => {
        if(time<60){
        time++;
        updateDisplay();
        }else{
            alert(`Timer can't go beyond 60 seconds`)
        }
    });

    subBtn.addEventListener("click", () => {
        if (time > 0) {
            time--;
            updateDisplay();
        }else{
            alert(`Timer can't have negative seconds`)
        }
    });
    resetBtn.addEventListener('click',()=>{
        time = 0
        updateDisplay()
    });

    let timer = null; 
    goBtn.addEventListener('click', () => {
    if (goBtn.textContent === 'Start') {
        if (time <= 0) {
        alert("Timer is already 0! Add some seconds first.");
        return;
         }
        [resetBtn, addBtn, subBtn].forEach((btn) => btn.setAttribute('disabled', true));
        disable();
        goBtn.textContent = 'Stop';
        timer = setInterval(() => {
            time--;
            updateDisplay();
            if (time <= 0) {
                clearInterval(timer);
                timer = null;
                goBtn.textContent = 'Start';
                [resetBtn, addBtn, subBtn].forEach((btn) => btn.removeAttribute('disabled'));
                disable();
            }
        }, 1000);

    } else {
        clearInterval(timer);
        timer = null;
        [resetBtn, addBtn, subBtn].forEach((btn) => btn.removeAttribute('disabled'));
        disable();
        goBtn.textContent = 'Start';
    }
});

