function area() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = document.getElementById("result");

  let answer = num1 * num2;
  result.innerHTML = `<span>Area Of Rectangle Is</span><h3>\n${answer}</h3>`;
}
