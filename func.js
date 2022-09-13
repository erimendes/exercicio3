const inputStart = document.querySelector('#start')
const inputEnd = document.querySelector('#end')
const button = document.querySelector('button')
const span = document.querySelector('h1 > span')

function calculaDifData () {
	let start = inputStart.value
	let end   = inputEnd.value

	start = new Date(start)
	end   = new Date(end)

	let dife = Math.abs(end - start)
	let time = 1000 * 60 * 60 * 24
	let dias = dife / time

	return dife
}

button.addEventListener('click', () => {
	const dias = calculaDifData()
	span.innerHTML = dias
})