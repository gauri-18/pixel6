window.onload = function () {
  var contentLine1 = "Dear " + localStorage.getItem("firstName") + ".";
  var contentLine2 = "Thank you for your inquiry.";
  var contentLine3 =
    "A 4 digit verification number has been sent to your email : " +
    localStorage.getItem("email") +
    ",";
  var contentLine4 =
    "Please enter it in the following box and submit for confirmation:";

  document.getElementById("contentLine1").innerHTML = contentLine1;
  document.getElementById("contentLine2").innerHTML = contentLine2;
  document.getElementById("contentLine3").innerHTML = contentLine3;
  document.getElementById("contentLine4").innerHTML = contentLine4;

  var fourDigitOTP = Math.floor(1000 + Math.random() * 9000);
  localStorage.setItem("OTP", fourDigitOTP);
  console.log(fourDigitOTP);
};

function handleOtpFormSubmit() {
  var otpValidationField = document.forms.otpValidationForm.otpValue;
  var otpValidationValue = otpValidationField ? otpValidationField.value : "";
  if (localStorage.getItem("OTP") == otpValidationValue) {
    alert("OTP validation successfull.");
  } else {
    alert("OTP validation failed.");
  }
}
