const empList = []


function newEmp(emp) {
	const newEmployee = {
		"name": emp.name,
		"alias": emp.alias,
		"salary": emp.salary,
		"position": emp.position
	}
	empList.push(newEmployee)
}

newEmp(
	{
		"name": "Sean",
		"alias": "Red Bottom Bad Boon",
		"salary": "Who's askin?",
		"position": "Power Bottom"
	}
)
newEmp(
	{
		"name": "Max",
		"alias": "Paul Pink Buns-yun",
		"salary": "Wouldn't you like to know!",
		"position": "Slightly to the left"
	}
)
newEmp(
	{
		"name": "Garrett",
		"alias": "Pink Mooner",
		"salary": "Like waaaaaay more than you, dude.",
		"position": "Top of the World"
	}
)
newEmp(
	{
		"name": "Kristen",
		"alias": "Gwen Stefani",
		"salary": "It's bananas! B-A-N-A-N-A-S",
		"position": "One up and three over"
	}
)
newEmp(
	{
		"name": "Paul",
		"alias": "Buttis Balding",
		"salary": "As far as the IRS knows, I'm broke.",
		"position": "Like EVERYWHERE"
	}
)
newEmp(
	{
		"name": "George",
		"alias": "The Curious",
		"salary": "1800 Bananas",
		"position": "Customer Service"
	}
)


const employeeList = JSON.stringify(empList)
localStorage.setItem("employeeList", employeeList)
