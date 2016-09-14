//Excersise 1:

var x = '';
for (var i = 0; i < 7; i++) {
  console.log(x += '#');
}

//Excersise 2:

for(var counter = 1;counter<21;counter++){
    if(counter%5===0&&counter%3===0){
        console.log("FizzBuzz");

    }
    else{
    if(counter%3===0){
        console.log("Fizz");
    }
    if(counter%5===0){
        console.log("Buzz");
    }
    if(counter%5!==0&&counter%3!==0){
        console.log(counter);
    }
    }
}

//Excersise 3:

var size = 8;
for (var i = 0; i < size; i++) {
  var a = "";
  for (var j = 0; j < size; j++) {
    var x = i + j;
  	if (x % 2 == 0) {
  	  a += '#';
    } else {
      a += ' ';
    }
  }
  console.log(a);
}
