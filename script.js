// Contact form
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

// Smooth navigation:
document.querySelectorAll("a.smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    console.log("Anchor clicked:", targetId);
    console.log("Target element:", targetElement);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.error("Target element not found:", targetId);
    }
  });
});

// Scroll to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
