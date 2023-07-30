
const content = document.querySelector('.content')
content.style.cssText = 'display: flex; flex-direction:column; border: 3px solid brown; height: 480px; width: 480px; flex:3;'

function main(){
    //Initial set-up with 16 boxes for length and width
    for(let i = 0; i < 16; i++){
        let currentRow = document.createElement('div')
        currentRow.style.cssText = 'display:flex; flex:1;'
        
        for(let j = 0; j < 16; j++){
            let currentBox = document.createElement('div')
            //to style the box
            currentBox.classList.add('box')
            currentRow.appendChild(currentBox)
        }
        content.appendChild(currentRow)
    }

    //Adding listeners to detect mouse overs
    boxes = document.querySelectorAll('.box')
    
    boxes.forEach(box => {
        box.addEventListener('mouseover',(e)=>{
            e.target.style.cssText = 'background-color: blue;'
        })
    });
}

main()

//Clears the board colors
const clearButton = document.querySelector('.clear-button')
clearButton.addEventListener('click', (e)=>{
    
    boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        box.style.cssText = 'background-color: white;'
        //e.target.style.cssText = 'background-color: white;'
    });
})

//Helper function for change button
function unAppendAllContentChildren(){
    const children = document.querySelectorAll('.content div')
    console.log(children)
    children.forEach((child)=>{
        try{
            content.removeChild(child)
        }
        catch(error){
            console.log(child)
            console.log(error)
        }
        
    })
}

//Changes the no of boxes on height and width
const changeButton = document.querySelector('.change-button')
changeButton.addEventListener('click', (e)=>{
    userInput = 16
    do{
        userInput = Number(prompt("Please enter the number of boxes per side (max: 100):"))
    }while(userInput > 100)

    unAppendAllContentChildren()

    //populate grid with N boxes height and width    
    for(let i = 0; i < userInput; i++){
        let currentRow = document.createElement('div')
        currentRow.style.cssText = 'display:flex; flex:1;'
        
        for(let j = 0; j < userInput; j++){
            let currentBox = document.createElement('div')
            //to style the box
            currentBox.classList.add('box')
            currentRow.appendChild(currentBox)
        }
        content.appendChild(currentRow)
    }

    boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        box.addEventListener('mouseover',(e)=>{
            e.target.style.cssText = 'background-color: blue;'
        })
    });
        
})