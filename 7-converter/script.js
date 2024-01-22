'use strict';

// Написать функцию, которая получает на вход строку с: 
// суммой средств - 1000 
// валютой средств - руб 
// целевой валютой - $ 
// Возвращает число в новой валюте, если конвертация поддерживается, 
// или null, если нет. Ставки конвертации хранятся внутри функции.


function exchange(sum, currencySum, currency) {
	let usdRate = 89.43;
	let eurRate = 97.52;

	if (currencySum === 'rub') {
		switch (currency) {
		case 'usd':
			console.log(sum / usdRate)
			break;
		case 'eur':
			console.log(sum / eurRate)
			break;
		default:
			console.log(null);
			break;
	}
	} else {
		console.log(null);
	} 
	
}

exchange(28983, 'rub','eur')