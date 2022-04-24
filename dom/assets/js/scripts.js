function changeTheme(){
	changeClasses()	
	changeText()	
}

function changeClasses(){
	titulo.classList.toggle(dark)
	botao.classList.toggle(dark)
	footer.classList.toggle(dark)
	body.classList.toggle(dark)
}

function changeText(){
	const LightMode = "Light Mode"
	const DarkMode = "Dark Mode"
	const LightOn = "Light Mode ON"
	const DarkOn = "Dark Mode ON"

	if(body.classList.contains(dark)){
		botao.innerHTML = LightMode
		titulo.innerHTML = DarkOn 
		return
	}
	botao.innerHTML = DarkMode
	titulo.innerHTML = LightOn 
}

const dark = "dark-mode"
const titulo = document.getElementById('page-title')
const botao = document.getElementById('mode-selector')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

botao.addEventListener("click", changeTheme)

