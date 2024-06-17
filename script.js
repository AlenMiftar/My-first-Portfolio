emailjs.init("o8QFGd5JPp5HiYGWf");

function sendEmail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Fyll i alla fält tack!");
    return;
  }
  emailjs
    .send("service_q9azldg", "template_2tnh8jm", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      function (res) {
        alert("Tack för ditt mail!");
        document.getElementById("contact-form").reset();
      },
      function (err) {
        alert("Oops! Något gick fel");
      }
    );
}

document.getElementById("contact-form").addEventListener("submit", sendEmail);
