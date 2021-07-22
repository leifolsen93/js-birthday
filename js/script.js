var username = prompt("Enter your name:");
var age = prompt("Enter your age:");
var bMonth = prompt("What month were you born in?");

if (age < 50)
{	
alert("Hello " + username + ". You are " + age + " Years old, and you were born in " + bMonth + "." + " You're still young!");
}

else if (age > 50)
{	
alert("Hello " + username + ". You are " + age + " Years old, and you were born in " + bMonth + "." + " Yikes! You are OLD!");
}