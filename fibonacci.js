let fibs = [1, 2, 3];

function FibPusher(fibs){
for (i = 0; i<fibs.length; i++){
	let newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
	fibs.push(newNum);
	i++;

	console.log(fibs);
}
}


FibPusher(fibs);