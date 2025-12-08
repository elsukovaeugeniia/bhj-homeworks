function startCountdown() {

	const timerElement = document.getElementById('timer');


	let timeLeft = 30;


	timerElement.textContent = timeLeft;


	const intervalId = setInterval(() => {

		timeLeft--;


		timerElement.textContent = timeLeft;


		if (timeLeft <= 0) {

			clearInterval(intervalId);


			alert('Вы победили в конкурсе!');
		}
	}, 1000);
}


document.addEventListener('DOMContentLoaded', startCountdown);