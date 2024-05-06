let currentPage = 1;
let limit = 10;
let filterByDepartment = '';
let filterByGender = '';
let sortBySalary = ''; 
let sortOrder = '';

const apiUrl = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';

fetchData();

function fetchData() {
    const params = new URLSearchParams();
    params.append('page', currentPage);
    params.append('limit', limit);
    if (filterByDepartment) params.append('filterBy', 'department');
    if (filterByDepartment) params.append('filterValue', filterByDepartment);
    if (filterByGender) params.append('filterBy', 'gender');
    if (filterByGender) params.append('filterValue', filterByGender);
    if (sortBySalary) params.append('sort', 'salary'); 
    if (sortOrder) params.append('order', sortOrder);

    fetch(`${apiUrl}?${params.toString()}`)
       .then(response => response.json())
       .then(data => {
            const employeeData = data.data;
            const totalPages = Math.ceil(data.total / limit);
            renderEmployeeData(employeeData);
            updatePagination(totalPages);
        })
       .catch(error => console.error(error));
}

function renderEmployeeData(employeeData) {
    const tableBody = document.getElementById('employee-data');
    tableBody.innerHTML = '';
    employeeData.forEach((employee, index) => {
        const row= document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.gender}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
        `;
        tableBody.appendChild(row);
    });
}

function updatePagination(totalPages) {
    const pageNumber = document.getElementById('page-number');
    pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;

    if (currentPage === 1) {
        document.getElementById('prev').disabled = true;
    } else {
        document.getElementById('prev').disabled = false;
    }

    if (currentPage === totalPages) {
        document.getElementById('next').disabled = true;
    } else {
        document.getElementById('next').disabled = false;
    }
}

document.getElementById('next').onclick = nextPage;
document.getElementById('prev').onclick = prevPage;
document.getElementById('department').onchange = () => {
    filterByDepartment = document.getElementById('department').value;
    fetchData();
};
document.getElementById('gender').onchange = () => {
    filterByGender = document.getElementById('gender').value;
    fetchData();
};
document.getElementById('sort').onchange = () => {
    sortBySalary = 'salary';
    sortOrder = document.getElementById('sort').value;
    fetchData();
};

function nextPage() {
    currentPage++;
    fetchData();
}

function prevPage() {
    currentPage--;
    fetchData();
}