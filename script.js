const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Ahmad Fadhil', age: 19, department: 'Programmer', salary: 75000 },
      //... Lebih banyak catatan karyawan dapat ditambahkan di sini
];

 // Fungsi untuk menampilkan semua karyawan
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department}
    - $${employee.salary}</p>`).
    join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Gaji: $${totalSalaries}`);
    }

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function displayPROEmployees() {
    const proEmployees = employees.filter(employee => employee.department === 'Programmer');
    const proEmployeesDisplay = proEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = proEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'tidak ada karyawan yang ditemukan dengan ID ini';
    }
}