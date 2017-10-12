const empList = []  //The list of employees that will be stored in local storage

// This function adds an employee object in to the array empList
function newEmp(emp) {
	const newEmployee = {
		"name": emp.name,
		"alias": emp.alias,
		"salary": emp.salary,
		"position": emp.position
	}
	empList.push(newEmployee)
}

//////////////////////////////////////////////////////////////////////////////////////////
//A series of calls to the newEmp function that with an employee's information////////////
//////////////////////////////////////////////////////////////////////////////////////////
newEmp( //Passes in an object with an employee's informations
	{
		"name": "Sean",
		"alias": "Red Bottom Bad Boon",
		"salary": "Who's askin?",
		"position": "Power Bottom"
	}
)
newEmp( //Passes in an object with an employee's informations
	{
		"name": "Max",
		"alias": "Paul Pink Buns-yun",
		"salary": "Wouldn't you like to know!",
		"position": "Slightly to the left"
	}
)
newEmp( //Passes in an object with an employee's informations
	{
		"name": "Garrett",
		"alias": "Pink Mooner",
		"salary": "Like waaaaaay more than you, dude.",
		"position": "Top of the World"
	}
)
newEmp( //Passes in an object with an employee's informations
	{
		"name": "Kristen",
		"alias": "Gwen Stefani",
		"salary": "It's bananas! B-A-N-A-N-A-S",
		"position": "One up and three over"
	}
)
newEmp( //Passes in an object with an employee's informations
	{
		"name": "Paul",
		"alias": "Buttis Balding",
		"salary": "As far as the IRS knows, I'm broke.",
		"position": "Like EVERYWHERE"
	}
)
newEmp( //Passes in an object with an employee's informations
	{
		"name": "George",
		"alias": "The Curious",
		"salary": "1800 Bananas",
		"position": "Customer Service"
	}
)

//Stringify the list of employees and store that in local storage
const employeeList = JSON.stringify(empList)
localStorage.setItem("employeeList", employeeList)
