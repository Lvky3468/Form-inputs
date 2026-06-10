const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const contact = document.getElementById("contact").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const about = document.getElementById("about").value;

  const imageInput = document.getElementById("profieimg");
  const file = imageInput.files[0];
  const imageUrl = file ? URL.createObjectURL(file) : "";
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const checkedCheckboxes = document.querySelectorAll(
    'input[name="language"]:checked',
  );

  const selectedValues = Array.from(checkedCheckboxes).map(
    (checkbox) => checkbox.value,
  );

  const language = document.getElementsByName("language");
  const user = {
    image: imageUrl,
    name: name,
    email: email,
    contact: contact,
    age: age,
    state: state,
    country: country,
    about: about,
    gender: gender,
    language: selectedValues.join(", "),
  };

  let tableHTML = "<table border = '1'>";

  for (let key in user) {
    if (key == "image") {
      tableHTML += `<img src=${user[key]} width='200px' height='160px' />`;
    } else {
      tableHTML += `<tr>
                <th>${key}</th>`;
      tableHTML += `<td>${user[key]}</td>`;
    }

    tableHTML += `</tr>`;
  }
  tableHTML += `
</table>

<section class="about-project">
    <h2>About This Project</h2>
    <p>
        This project is a dynamic user profile generator built using HTML, CSS, and JavaScript.
        User information entered through the form is collected, stored in a JavaScript object,
        and displayed instantly in a structured table. It demonstrates form handling,
        DOM manipulation, event handling, file uploads, radio buttons, and checkboxes.
    </p>
</section>
`;
  tableHTML += "</table>";

  document.getElementById("output").innerHTML = tableHTML;
  form.style.display = "none";
  document.getElementById("titleSection").style.display = "none";
});
