let fibs = [1, 2, 3];


function FibPusher(fibs){

let count = 0;

//works...better... but okay, no, fix it more... 

for (i = 0; i<fibs.length; i++){

	if(fibs[i] < 1000){
	let newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
	fibs.push(newNum);
	console.log(fibs);
	count+= 1;
	console.log(count);
}else{
	console.log("done!");
}
	
}




}


//okay, yo I made this! now make it better
//did it recursively now! but it's weird still
FibPusher(fibs);