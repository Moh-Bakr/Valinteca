async function submit() {
  const form = document.getElementById("register-form");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  let response = await fetch("https://goldblv.com/api/hiring/tasks/register", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data),
  })
  if (response.ok) {
    localStorage.setItem("email", data.email);
    location.href = "../pages/welcome.html";
  } else {
    response = await response.json();
    let errors = document.getElementById("errors");
    errors.innerHTML = "";
    console.log(Object.values(response.errors));
    Object.values(response.errors).flat().forEach((error) => {
      const li = document.createElement("li");
      li.innerHTML = error;
      errors.appendChild(li);
    });
  }
};