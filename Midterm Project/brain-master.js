function convertCelsiusToFahrenheit() {
	let num1 = parseFloat(prompt("Enter number of Celsius"));
	let temp_F = (num1 * 1.8 + 32).toFixed(2);
	alert(`${num1}°C converted into ${temp_F}°F`);
}

function ComputeAcceleration() {
	let iv = parseFloat(prompt("Enter Initial Velocity in m/s or meter per second"));
	let fv = parseFloat(prompt("Enter Final Velocity in m/s or meter per second"));
	let ct = parseFloat(prompt("Enter Change in time in seconds"))

	let acceleration = ((fv - iv) / ct).toFixed(2);
	alert(`Acceleration is ${acceleration} meters every second.`);
}

function BasicMathOps() {
	let num1 = parseFloat(prompt("Enter First Number"));
	let num2 = parseFloat(prompt("Enter Second Number"));
	let operator = prompt("Choose operator:\nM- Multiplication\nD- Division\nA- Addition\nS- Subtraction").toUpperCase();
	switch(operator){
		case 'M':
			result = num1 * num2;
			break;
		case 'D':
			if (num2==0){
				result = "Second Number must not zero or less than 0";
			}else {
				result = num1/num2;
			}
			break;
		case 'A':
			result = num1 + num2;
			break;
		case 'S':
			result = num1 - num2;
			break;
		default:
			result = "Invalid operator";
			break;
	}
	alert(`Result: ${result}`);
}


function yourBirthStone() {
	let month = prompt("Enter your birthmonth(january,febuary...)").toLowerCase().trim();
	switch(month) {
		case "january":
			a= "Garnet";
			break;
		case "february":
			alert("Your Birthstone is Amethyst");
			break;
		case "march":
			alert("Your Birthstone is Aquamarine");
			break;
		case "april":
			alert("Your Birthstone is Diamond");
			break;
		case "may":
			alert("Your Birthstone is Emerald");
			break;
		case "june":
			alert("Your Birthstone is Alexandrite & Pearl");
			break;
		case "july":
			alert("Your Birthstone is Ruby");
			break;
		case "august":
			alert("Your Birthstone is Peridot");
			break;
		case "september":
			alert("Your Birthstone is Sapphire");
			break;
		case "october":
			alert("Your Birthstone is Opal & Tourmaline");
			break;
		case "november":
			alert("Your Birthstone is Citrine & Topaz");
			break;
		case "december":
			alert("Your Birthstone is Blue Zircon, Turguoise, & Tanzanite");
			break;
		default:
			alert("Invalid month input");
			break;
				
				
	}
	alert(`Your Birthstone is ${a}`)
	
}

function CompareWord() {
	let fs = prompt("Enter first word").trim;
	let ss = prompt("Enter second word").trim;
	if(fs.length > ss.length){
		alert("The First Word is longer than Second Word");
	}else if(fs.length < ss.length){
		alert("The Second Word is longer than First Word");
	}else{
		alert("The two String is equal");
	}
}
	
