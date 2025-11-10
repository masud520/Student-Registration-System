const tbody = document.querySelector("#studentsTable tbody");
const clearBtn = document.getElementById("clearBtn");

function displayStudents() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  tbody.innerHTML = "";
  students.forEach((s) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${s.name}</td>
      <td>${s.email}</td>
      <td>${s.course}</td>
      <td>${s.level}</td>
      <td>${s.date}</td>
    `;
    tbody.appendChild(row);
  });
}

clearBtn.addEventListener("click", () => {
  if (confirm("Clear all students?")) {
    localStorage.removeItem("students");
    displayStudents();
  }
});

displayStudents();
