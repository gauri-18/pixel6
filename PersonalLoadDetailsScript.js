function validateFullName() {
  var fullNamField = document.forms.personalDetailsForm.fullName || {};
  var fullNameValue = fullNamField ? fullNamField.value : "";
  var lettersWithSpacesRegex = /^[a-zA-Z\s]*$/;

  if (fullNameValue.match(lettersWithSpacesRegex)) {
    const wordsInFullName = fullNameValue.split(" ");
    if (wordsInFullName.length >= 2) {
      for (var i = 0; i < wordsInFullName.length; i++) {
        const charInWords = wordsInFullName[i].split("") || [];
        if (charInWords.length < 4) {
          alert("Every word in Full Name should have atleast 4 characters !!!");
          fullNamField.focus();
          localStorage.setItem("firstName", "");
          return false;
        }
      }
    } else {
      alert("Full Name should consist minimum two words !!!");
      fullNamField.focus();
      localStorage.setItem("firstName", "");
      return false;
    }
  } else {
    alert("Please enter alphabets or spaces only !!!");
    fullNamField.focus();
    localStorage.setItem("firstName", "");
    return false;
  }
  localStorage.setItem("firstName", fullNameValue.split(" ")[0]);
  return true;
}

function validateEmailId() {
  var emailIdField = document.forms.personalDetailsForm.emailId;
  var emailIdValue = emailIdField ? emailIdField.value : "";
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (emailIdValue.match(emailRegex)) {
    localStorage.setItem("email", emailIdValue);
    return true;
  } else {
    alert("Email ID should be correct !!!");
    emailIdField.focus();
    localStorage.setItem("email", "");
    return false;
  }
}

function validatePanNumber() {
  var panNumberField = document.forms.personalDetailsForm.panNumber;
  var panNumberValue = panNumberField ? panNumberField.value : "";
  const panRegex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  if (panNumberValue.match(panRegex)) {
    return true;
  } else {
    alert("PAN Number must be in ABCDE1234F format !!!");
    panNumberField.focus();
    return false;
  }
}

function validateLoanAmount() {
  var loanAmountField = document.forms.personalDetailsForm.loanAmount;
  var loanAmountValue = loanAmountField ? loanAmountField.value : "";
  if (loanAmountValue.length <= 9) {
    return true;
  } else {
    alert("Loan Amount can have maximum 9 digits !!!");
    loanAmountField.focus();
    return false;
  }
}

function handleFormSubmit() {
  var isFullNameValid = validateFullName();
  var isEmailIdValid = validateEmailId();
  var isPanNumberValid = validatePanNumber();
  var isLoanAmountValid = validateLoanAmount();

  return (
    isFullNameValid && isEmailIdValid && isPanNumberValid && isLoanAmountValid
  );
}

var a = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen "
];
var b = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];

function inWords(num) {
  console.log("Entered Number :", num);
  if (num.toString().length > 9) return "overflow";
  var n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = "";
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
      : "";
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
      (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
      "only "
      : "";
  return str;
}

function toCamelCase(str) {
  return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
}

function convertLoanAmountToWords() {
  var numberValue = document.getElementById("loanAmount").value;
  var numberInWords = inWords(numberValue);
  var numberInWordsCamelCase = toCamelCase(numberInWords);
  document.getElementById("words").innerHTML = numberInWordsCamelCase;
}