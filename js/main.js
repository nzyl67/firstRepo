//Functions tutorial: What is your first name and age application
//Every function will return undefined, unless you return a value
//If you return in the middle of your function, the rest of the function will be ignored.

function questions(){
	var firstName = prompt('What is your first name?');
	var age = prompt('What is your age?');
	go(firstName, age);
}
function go(firstName, age){
	alert('Hello ' + firstName + '. You are ' + add(age, 10) + ' years old!  Just kidding you are ' + age + '.');
}
function add(age, amount) {
	return Number(age) + amount;
}
questions();
