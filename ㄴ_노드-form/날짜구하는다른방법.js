let yearStart = 2022;
let yearEnd = new Date().getFullYear();
let yearOption = "";
for (let i = yearStart; i <= yearEnd; i++) {
  console.log((yearOption += "<option value='" + i + "'>" + i + "</option>"));
}

// document.getElementById("year").innerHTML = yearOption;
