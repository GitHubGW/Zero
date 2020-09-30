document.querySelector("#click").addEventListener("click", () => {
  let a = document.querySelector("#first").value;
  let b = document.querySelector("#second").value;
  let result = document.querySelector("#result");

  if (a) {
    if (b) {
      let num_ab = a * b;
      result.textContent = num_ab;
    } else {
      result.textContent = "두 번째 값을 입력해주세요";
    }
  } else {
    result.textContent = "첫 번째 값을 입력해주세요";
  }
});
