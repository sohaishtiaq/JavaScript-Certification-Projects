const form = document.querySelector("form");

const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const orderNo = document.querySelector("#order-no");
const productCode = document.querySelector("#product-code");
const quantity = document.querySelector("#quantity");

const complaintsGroup = document.querySelector("#complaints-group");
const complaintDescription = document.querySelector("#complaint-description");

const solutionsGroup = document.querySelector("#solutions-group");
const solutionDescription = document.querySelector("#solution-description");

function validateForm() {
  const otherComplaint = complaintsGroup.querySelector(
    'input[value="other"]'
  );

  const otherSolution = solutionsGroup.querySelector(
    'input[value="other"]'
  );

  const complaintChecked = complaintsGroup.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length > 0;

  const solutionChecked = solutionsGroup.querySelector(
    'input[type="radio"]:checked'
  );

  return {
    "full-name": fullName.value.trim() !== "" && fullName.checkValidity(),

    email: email.value.trim() !== "" && email.checkValidity(),

    "order-no":
      /^2024\d{6}$/.test(orderNo.value) && orderNo.checkValidity(),

    "product-code":
      /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(
        productCode.value
      ) && productCode.checkValidity(),

    quantity:
      /^\d+$/.test(quantity.value) &&
      Number(quantity.value) > 0 &&
      quantity.checkValidity(),

    "complaints-group": complaintChecked,

    "complaint-description":
      !otherComplaint?.checked ||
      complaintDescription.value.trim().length >= 20,

    "solutions-group": Boolean(solutionChecked),

    "solution-description":
      !otherSolution?.checked ||
      solutionDescription.value.trim().length >= 20
  };
}

function isValid(formData) {
  return Object.values(formData).every(value => value === true);
}

function setBorder(element, valid) {
  element.style.borderColor = valid ? "green" : "red";
}

function validateField(element, valid) {
  setBorder(element, valid);
}

function validateCurrentForm() {
  const result = validateForm();

  setBorder(fullName, result["full-name"]);
  setBorder(email, result.email);
  setBorder(orderNo, result["order-no"]);
  setBorder(productCode, result["product-code"]);
  setBorder(quantity, result.quantity);

  setBorder(complaintsGroup, result["complaints-group"]);
  setBorder(
    complaintDescription,
    result["complaint-description"]
  );

  setBorder(solutionsGroup, result["solutions-group"]);
  setBorder(
    solutionDescription,
    result["solution-description"]
  );

  return result;
}

const fields = [
  fullName,
  email,
  orderNo,
  productCode,
  quantity,
  complaintDescription,
  solutionDescription
];

fields.forEach(field => {
  field.addEventListener("change", () => {
    const result = validateForm();

    const fieldMap = {
      "full-name": fullName,
      email: email,
      "order-no": orderNo,
      "product-code": productCode,
      quantity: quantity,
      "complaint-description": complaintDescription,
      "solution-description": solutionDescription
    };

    const key = Object.keys(fieldMap).find(
      key => fieldMap[key] === field
    );

    setBorder(field, result[key]);
  });
});

[complaintsGroup, solutionsGroup].forEach(group => {
  group.addEventListener("change", () => {
    const result = validateForm();
    const key =
      group === complaintsGroup
        ? "complaints-group"
        : "solutions-group";

    setBorder(group, result[key]);
  });
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const result = validateCurrentForm();

  if (isValid(result)) {
    console.log("Form is valid!");
  }
});
