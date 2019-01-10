/*for(let i=1; i<=5; i++){
    setTimeout(function timer(){
        console.log(i);
    }, i*1000);
}*/

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}