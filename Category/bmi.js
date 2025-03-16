document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight && height) {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 18.5 && bmi <= 24.9) category = "NORMAL WEIGHT";
    else if (bmi >= 25 && bmi <= 29.9) category = "OVERWEIGHT";
    else category = "OBESE";

    document.getElementById("result").innerHTML = `
          <h3>BMI: ${bmi}</h3>
          <p>CATEGORY: ${category.toUpperCase()}</p>

        `;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p class="text-danger">Please fill in all fields.</p>`;
  }
});
