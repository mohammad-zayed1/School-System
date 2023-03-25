const form = document.getElementById("form");
const table = document.getElementById("table");


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let fname = e.target.fname.value;
    let lname = e.target.lname.value;
    let pnumber = e.target.pnumber.value;
    let date = e.target.date.value;
    let grade = e.target.grade.value;
    let gender = e.target.gender.value;
    // console.log(fname , lname ,pnumber , date , grade , gender );
    addStudentInfo(fname , lname ,pnumber , date , grade , gender );
    form.reset();
})
function addStudentInfo(firstName , lastName , phoneNumber , BOD , studentGrade , studentGender){
let row = document.createElement('tr');

let tdName = document.createElement('td');
tdName.textContent = `${firstName} ${lastName}`;

let tdNumber = document.createElement('td');
tdNumber.textContent = phoneNumber;

let tdDate = document.createElement('td');
tdDate.textContent = BOD;

let tdGrade = document.createElement('td');
tdGrade.textContent = studentGrade;

let tdGender = document.createElement('td');
tdGender.textContent = studentGender;


row.append(tdName , tdNumber , tdDate , tdGrade , tdGender);
table.appendChild(row);
}