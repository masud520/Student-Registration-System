const tbody = document.querySelector("#studentsTable tbody");
const clearBtn = document.getElementById("clearBtn");
const searchInput = document.getElementById("searchInput");

function displayStudents(filter = "") {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  tbody.innerHTML = "";

  students
    .filter(s => 
      s.name.toLowerCase().includes(filter.toLowerCase()) || 
      s.course.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach((s) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td data-label="Name">${s.name}</td>
        <td data-label="Email">${s.email}</td>
        <td data-label="Course">${s.course}</td>
        <td data-label="Level">${s.level}</td>
        <td data-label="Date">${s.date}</td>
      `;
      tbody.appendChild(row);
    });
}

// Search event
searchInput.addEventListener("input", (e) => {
  displayStudents(e.target.value);
});

// Clear all students
clearBtn.addEventListener("click", () => {
  if (confirm("Clear all students?")) {
    localStorage.removeItem("students");
    displayStudents();
  }
});

// Initial display
displayStudents();
