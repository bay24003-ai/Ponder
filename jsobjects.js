const course = {
  name: "JavaScript Fundamentals",
  code: "JS101",
  sections: [
    {
      section: "001",
      room: "STC 353",
      enrolled: 25,
      days: "MWF",
      instructor: "Bro Smith"
    },
    {
      section: "002",
      room: "STC 354",
      enrolled: 22,
      days: "TTH",
      instructor: "Sis Jones"
    }
  ]
};

// Display course information
document.querySelector("#courseName").textContent = course.name;
document.querySelector("#courseCode").textContent = course.code;

// Build table rows
function renderSections(sections) {
  const html = sections.map(section => `
    <tr>
      <td>${section.section}</td>
      <td>${section.room}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>
  `).join("");

  document.querySelector("#sections").innerHTML = html;
}

renderSections(course.sections);

// Enroll student
function enrollStudent() {
  const sectionNumber = document.querySelector("#sectionNumber").value;

  const section = course.sections.find(
    sec => sec.section === sectionNumber
  );

  if (section) {
    section.enrolled++;
    renderSections(course.sections);
  }

  document.querySelector("#sectionNumber").value = "";
}

document
  .querySelector("#enrollStudent")
  .addEventListener("click", enrollStudent);