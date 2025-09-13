
// Function to show specific section and hide others
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the requested section
    document.getElementById(sectionId).classList.add('active');
}

// Function to generate random captcha
function generateCaptcha(elementId) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 4; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById(elementId).textContent = captcha;
}
let generatedOTPs = {}; // store OTPs temporarily

// Function to generate OTP
function generateOTP(userType) {
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    generatedOTPs[userType] = otp;

    // For demo, show OTP in alert (in real life: send via email/SMS)
    alert("Your OTP is: " + otp);

    // Show confirmation message
    document.getElementById(userType + "OTPMsg").style.display = "block";
}

// Login functions
function loginStudent(event) {
    event.preventDefault();
    const enteredOTP = document.getElementById("studentOTP").value;
    const captchaInput = document.getElementById("studentCaptchaInput").value;
    const captchaText = document.getElementById("studentCaptcha").textContent;

    if (enteredOTP != generatedOTPs['student']) {
        alert("Invalid OTP! Please try again.");
        return;
    }

    if (captchaInput !== captchaText) {
        alert("Invalid Captcha! Please try again.");
        return;
    }

    showSection('studentDashboard');
}

function loginFaculty(event) {
    event.preventDefault();
    const enteredOTP = document.getElementById("facultyOTP").value;
    const captchaInput = document.getElementById("facultyCaptchaInput").value;
    const captchaText = document.getElementById("facultyCaptcha").textContent;

    if (enteredOTP != generatedOTPs['faculty']) {
        alert("Invalid OTP! Please try again.");
        return;
    }
    if (captchaInput !== captchaText) {
        alert("Invalid Captcha! Please try again.");
        return;
    }
    showSection('facultyDashboard');
}

function loginAdmin(event) {
    event.preventDefault();
    const enteredOTP = document.getElementById("adminOTP").value;
    const captchaInput = document.getElementById("adminCaptchaInput").value;
    const captchaText = document.getElementById("adminCaptcha").textContent;

    if (enteredOTP != generatedOTPs['admin']) {
        alert("Invalid OTP! Please try again.");
        return;
    }
    if (captchaInput !== captchaText) {
        alert("Invalid Captcha! Please try again.");
        return;
    }
    showSection('adminDashboard');
}

// Logout function
function logout() {
    showSection('home');
}

// Generate initial captchas
window.onload = function () {
    generateCaptcha('studentCaptcha');
    generateCaptcha('facultyCaptcha');
    generateCaptcha('adminCaptcha');
};

