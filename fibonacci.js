let fibs = [1, 2, 3];


function FibPusher(fibs){

let count = 0;

//works...better... but okay, no, fix it more... 

for (i = 0; i<fibs.length; i++){

	if(fibs[fibs.length - 1] < 1000){
	let newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
	fibs.push(newNum);
	
	count+= 1;
	console.log(count);
}else{
	console.log("done!");
}
	
}
console.log(fibs);

//now it works!

}


//okay, yo I made this! now make it better
//did it recursively now! but it's weird still
FibPusher(fibs);