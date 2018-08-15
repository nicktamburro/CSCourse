let fibs = [1, 2, 3];


function FibPusher(fibs){

let count = 0;

//works...better... but okay, no, fix it more... 

for (i = 0; i<fibs.length; i++){

	if(fibs[i] < 1000){
	let newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
	fibs.push(newNum);
	
	count+= 1;
	console.log(count);
}else{
	console.log("done!");
}
	
}
console.log(fibs);
//okay cool, but the fib numbers are going up to 4000.... so I don't know why it stops where it does


}


//okay, yo I made this! now make it better
//did it recursively now! but it's weird still
FibPusher(fibs);