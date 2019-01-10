let fibs = [1, 2, 3];


function FibPusher(fibs){

let count = 0;

//works...better... but okay, no, fix it more... 

for (i = 0; i<fibs.length; i++){

	if(fibs[fibs.length - 1] < 1000){
	let newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
	fibs.push(newNum);
	
	count++;
	//console.log(count);
}else{
	//console.log("done!");
}
	
}
console.log(fibs);

//now it works!

}


//okay, yo I made this! now make it better
//did it recursively now! but it's weird still
//FibPusher(fibs);

//the one from the course was more like this:
function FibPusher2(n){
	if (n <=2){ 
		return 1;
	}
	//if (n>1000) return;
	else{
	return FibPusher2(n-1) + FibPusher2(n-2);
}
};

for (i=1; i<20; i++){
	console.log(FibPusher2(i));
}