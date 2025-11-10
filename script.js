const form = document.getElementById("registrationForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;
  const level = document.getElementById("level").value;

  if (!name || !email || !course || !level) return alert("Fill all fields!");

  const student = { name, email, course, level, date: new Date().toLocaleString() };

  // Get previous students or empty array
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);

  localStorage.setItem("students", JSON.stringify(students));
  alert("Registration successful!");

  form.reset();
});
