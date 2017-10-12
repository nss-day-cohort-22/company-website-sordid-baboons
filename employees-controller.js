//Pull the list of employee information from local storage and store it in an array
const storedEmpList = JSON.parse(localStorage.getItem("employeeList"))


//Get the HTML Element that will contain the list of employees
const employeeListElement = document.getElementById("empInformation")



//This loop iterates over storedEmpList and writes to the DOM with the information from each employee element in the array
for (let i = 0; i < storedEmpList.length; i++) {
	let employee = storedEmpList[i];

	employeeListElement.innerHTML += `
	<section id="${employee.name}" class="employee">
		<h3 class="empName">${employee.alias}</h3>
		<p class="position"> Position:  ${employee.position}</p>
		<p class="salary"> Salary:  ${employee.salary}</p>
	</section>
	<hr align="left">
	`
}

//Adds a button at the bottom of the page that links to jobs.html
employeeListElement.innerHTML += `

<button type="button" onclick="location.href='job.html';">Search Job Listings</button>`