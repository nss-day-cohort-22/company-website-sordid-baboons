const storedEmpList = JSON.parse(localStorage.getItem("employeeList"))

const employeeListElement = document.getElementById("empInformation")

const employeeElement = document.getElementsByClassName("employee")

for (let i = 0; i < storedEmpList.length; i++) {
	let employee = storedEmpList[i];

	employeeListElement.innerHTML += `
	<section id="${employee.name}" class="employee">
		<h3 class="empName">${employee.alias}</h3>
		<p class="position"> Position:  ${employee.position}</p>
		<p class="salary"> Salary:  ${employee.salary}</p>
	</section>
	`
}