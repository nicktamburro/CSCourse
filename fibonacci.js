let fibs = [1, 2, 3];
let count = 0;

function FibPusher(fibs){

do{
for (i = 0; i<fibs.length; i++){
	let newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
	fibs.push(newNum);
	count++;
	console.log(fibs);
	console.log(count);
	FibPusher(fibs);
}
}while(count<50);

}


//okay, yo I made this! now make it better
//did it recursively now! but it's weird still
FibPusher(fibs);