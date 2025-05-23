const form = document.getElementById("adding");
const sound = new Audio('sounds/pop.mp3');

function handleEvent(event){
    event.preventDefault();
    const theInput = document.getElementById("addingSingle");
    const list = document.getElementById("added");
    

    if(theInput.value.trim()===""){
        return;
    }

    sound.currentTime=0;
    sound.play();

    setTimeout(function() { 
        const listElement = document.createElement("li");
        listElement.innerText = theInput.value;
        list.appendChild(listElement);
        theInput.value = "";
    }, 200);
    
}

const clearButton = document.getElementById("clearAll");
const sound2 = new Audio('sounds/woosh.mp3');

function clearer(){
    const list = document.getElementById("added");
    const items = document.querySelectorAll("li");

    items.forEach(function(item) {
        item.classList.add("fader");
        sound2.play();
        item.addEventListener('transitionend', function() {
            item.remove(); 
        });
    });
}

form.addEventListener('submit', handleEvent);
clearButton.addEventListener('click', clearer);