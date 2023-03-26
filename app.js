const form = document.getElementById("form");
const table = document.getElementById("table");
const cards = document.querySelector(".cards");

let arrOfStudents = [];

// constructor
function Student(fullName, date, gender, grade, major, pnumber, imgUrl) {
  (this.fullName = fullName),
    (this.date = date),
    (this.gender = gender),
    (this.grade = grade),
    (this.major = major),
    (this.pnumber = pnumber),
    (this.imgUrl = imgUrl);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fname = e.target.fname.value;
  let lname = e.target.lname.value;
  let fullName = fname + " " + lname;
  let pnumber = e.target.pnumber.value;
  let url = e.target.url.value;
  let date = e.target.date.value;
  let grade = e.target.grade.value;
  let major = e.target.major.value;
  let gender = e.target.gender.value;

  // create instance of students
  let std = new Student(fullName, date, gender, grade, major, pnumber, url);
  arrOfStudents.push(std);

  // convert array of students to string then add to local storage
  let students = JSON.stringify(arrOfStudents);
  localStorage.setItem("students", students);

  // call function that create student card in the main tag
  studentCard(std);

  // clear form after submit
  form.reset();
});

function studentCard(std) {
  //create image card
  const img = document.createElement("img");
  img.setAttribute("src", "./18915856.jpg");

  // create elements
  let outDiv = document.createElement("div");
  outDiv.className = "card";
  let inDiv = document.createElement("div");
  inDiv.className = "text";

  let name = document.createElement("p");
  name.textContent = `Name : ${std["fullName"]}`;

  let phone = document.createElement("p");
  phone.textContent = `Phone-Number : ${std["pnumber"]}`;

  let stdMajor = document.createElement("p");
  stdMajor.textContent = `Major : ${std["major"]}`;

  // append elements
  inDiv.append(name, phone, stdMajor);

  outDiv.appendChild(img);
  outDiv.appendChild(inDiv);

  cards.appendChild(outDiv);
}

