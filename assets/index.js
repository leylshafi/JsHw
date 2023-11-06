
var table = document.createElement('table');
document.body.appendChild(table)
table.style.borderCollapse = 'collapse';
table.style.border='1px solid black'
var thead = document.createElement('thead');

var headerRow = document.createElement('tr');

var properties = ["Name", "Surname", "Age"];

for (let i = 0; i < properties.length; i++) {
    var th = document.createElement('th');
    th.style.border='1px solid black'
    th.textContent = properties[i]; 
    headerRow.appendChild(th); 
}
thead.appendChild(headerRow);
table.appendChild(thead);

var students = [
    { name: 'Leyla', surname: 'Shafiyeva', age: 19 },
    { name: 'Adil', surname: 'Nasirli', age: 19 },
    { name: 'Nigar', surname: 'Shafiyeva', age: 17 },
    { name: 'Fidan', surname: 'Karimova', age: 23 },
];

var tbody = document.createElement('tbody');


for (var i = 0; i < students.length; i++) {
    var row = document.createElement('tr');

    var student = students[i];

    var nameCell = document.createElement('td');
    nameCell.style.border='1px solid black'
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    var surnameCell = document.createElement('td');
    surnameCell.style.border='1px solid black'
    surnameCell.textContent = student.surname;
    row.appendChild(surnameCell);

    var ageCell = document.createElement('td');
    ageCell.style.border='1px solid black'
    ageCell.textContent = student.age;
    row.appendChild(ageCell);

    tbody.appendChild(row);
}

table.appendChild(tbody);

document.body.appendChild(table);





