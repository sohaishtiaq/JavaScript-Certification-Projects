function maskEmail(email) {
  let start = email[0];
  let end_index = email.indexOf('@') - 1;
  let starts = email.slice(1, end_index);


  return start + "*".repeat(starts.length) + email.slice(end_index);
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));
