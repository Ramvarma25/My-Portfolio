// typed js
let typed = new Typed(".text", {
  strings: [
    "Frontend Developer.",
    "Java Developer.",
    "UI/UX Designer.",
    "Web Developer.",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//toogle menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//smpt js for contact form
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const msg = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${msg.value}`;

  Email.send({
    SecureToken: "901877dc-a981-4269-8d93-c867b330b7ba",
    To: "ramavtarv9370@gmail.com",
    From: "ramavtarv9370@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      //sweet alert2 code
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      form.reset();
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

// valaditing email
function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

// send email data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !msg.classList.contains("error")
  ) {
    sendEmail();
    // form.reset();
    // return false;
  }
});

function downloadResume() {
  const resumeLink =
    "https://drive.google.com/file/d/1FXYmjELRbEyG8iRoyKFSQZR4Eq68RKEn/view?usp=drive_link";
  window.open(resumeLink, "_blank");
}
