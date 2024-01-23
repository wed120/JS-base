'use strict';

const password = '6ENW5HQ5';
const password1 = '5QH5WNE6Q';

function crupto(password) {
	const rePassword = password.split('')
	const re = rePassword.reverse()
	re.push(rePassword['1'])
	
	
	console.log(re.join(''))
}

function check(password1) {

	const newPas = password1.split('')
	newPas.pop()
	newPas.reverse()
	password === newPas.join('') ? console.log(true) : console.log(false);
}

crupto(password)
check(password1)