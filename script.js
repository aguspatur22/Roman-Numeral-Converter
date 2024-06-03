const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanCombination = {
  M:1000,
  CM:900,
  D:500,
  CD:400,
  C:100,
  XC:90,
  L:50,
  XL:40,
  X:10,
  IX:9,
  V:5,
  IV:4,
  I:1
}

const displayResult = (result) => {
  output.innerText = result;
}

const checkInput = (input) => {
  let number = parseInt(input);
  let pass = false;
  if (isNaN(number)) {
    output.innerText = "Please enter a valid number";
  } else if (number < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";  
  } else if (number > 3999) {
      output.innerText = "Please enter a number less than or equal to 3999";
  } else {
      pass = true;
  }
  return pass;
};


const convertInput = (input) => {
  let result = "";
  let substract;
  while (input > 0){
      substract = Object.entries(romanCombination).find((x) => x[1] <= input);
      result += substract[0];
      input-= substract[1];
  }
  return result;
};


convertBtn.addEventListener("click", () => {
  output.classList.remove("hidden");
  if (checkInput(input.value)) {
    let roman = convertInput(input.value);
    displayResult(roman);
  }
});
