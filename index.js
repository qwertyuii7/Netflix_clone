const boxes = document.getElementsByClassName("boxes")

function expand(element){
    if(element.className == "boxes" || element.className == "boxes close"){
        element.className = "boxes open"
    }
    else{
        element.className = "boxes close"
    }
}

for(let box of boxes){
    box.addEventListener('click', () => {expand(box)})
}
