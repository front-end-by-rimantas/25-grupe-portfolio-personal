const counters = document.querySelectorAll('.numberup');
const startPoint = document.querySelector('.count');
const counterSpeed = 150;

startPoint.addEventListener('scroll', () => {
	counters.forEach(counter => {
		const updateNumber = () => {
			const finishNumber = +counter.getAttribute('data-target');
			const startNumber = +counter.innerText;
			
			const numberUp = finishNumber / counterSpeed;
			
			if (startNumber < finishNumber) {
				counter.innerText = Math.ceil(startNumber + numberUp);
				setTimeout(updateNumber, 10);
			}
			else {
				counter.innerText = finishNumber;
			}
		};
		updateNumber();
	});
});
	
export default 'counter';