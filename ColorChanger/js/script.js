const body = document.querySelector('body')
const button = document.querySelector('button')
const colors = ['pink','red','orange','purple','blue','black','violet','green','brown']

body.style.backgroundColor = 'white'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}