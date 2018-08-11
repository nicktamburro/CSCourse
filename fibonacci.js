let fibs = [1, 2, 3];

function FibPusher(fibs){
for (i = 0; i<fibs.length; i++){
	let newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
	fibs.push(newNum);
	i++;

	console.log(fibs);

	if(fibs.length < 50){
	FibPusher(fibs);
}else{
	console.log("done!");
}

}
}

//okay, yo I made this! now make it better
FibPusher(fibs);