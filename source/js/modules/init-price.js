const rangeInput = document.querySelectorAll(".main-filters__range-input input"),
priceInput = document.querySelectorAll(".main-filters__price-input input"),
range = document.querySelector(".main-filters__slider .main-filters__progress");
let priceGap = 100;

export default function initPrice() {
  priceInput.forEach(input => {
      input.addEventListener("input", e => {
          let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

          if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "main-filters__input-min") {
              rangeInput[0].value = minPrice;
              range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
              rangeInput[1].value = maxPrice;
              range.style.right = 105 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
          }
      });
  });

  rangeInput.forEach(input => {
    input.addEventListener("input", e => {
      let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

      if ((maxVal - minVal) < priceGap) {
        if (e.target.className === "main-filters__range-min") {
          rangeInput[0].value = maxVal - priceGap
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
          range.style.right = 105 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
  });
}
