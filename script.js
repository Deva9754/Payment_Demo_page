const subscriptionToggleBtnElem = document.getElementsByClassName(
  "subscription_toggle_btn"
);
Array.from(subscriptionToggleBtnElem).forEach((el) => {
  el.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      const currentSelectedElem = e.target.dataset.value;
      const activeElem = document.getElementById("subscription_toggle_active");
      if (currentSelectedElem === "yearly") {
        activeElem.style.right = "4px";
        activeElem.style.width = "193px";
      } else {
        activeElem.style.width = "118px";
        activeElem.style.right = "calc(100% - 122px)";
      }
    },
    true
  );
});

const silderElem = document.getElementById("input_clip_range");
silderElem.addEventListener("input", (e) => {
  let showClipElem = document.getElementById("total_clips");
  const tooltipElem = document.getElementById("range_tooltip");
  if (e.target.value < 100) {
    showClipElem.style.minWidth = "27px";
  } else if (e.target.value < 200) {
    showClipElem.style.minWidth = "37px";
  } else {
    showClipElem.style.minWidth = "41px";
  }
  showClipElem.innerText = e.target.value || 50;
  tooltipElem.innerText = `${e.target.value} clips` || 50;
  let currentSliderValue = Math.floor((parseInt(e.target.value) - 50) / 1.5);
  silderElem.style.backgroundSize = `${currentSliderValue}%`;
  tooltipElem.style.right = `calc(${100 - currentSliderValue}% - 54px)`;
});

const accordionElem = document.getElementsByClassName("accordion-body");
Array.from(accordionElem).forEach((el) => {
  el.children[0].addEventListener("click", (e) => {
    const accordionState = e.target.dataset.open;
    if (accordionState === "true") {
      el.children[0].setAttribute("data-open", "false");
    } else {
      el.children[0].setAttribute("data-open", "true");
    }
  });
});

const selectElement = document.getElementById("select_minute");
selectElement.addEventListener("change", (e) => {
  console.log(e.target.value);
  const selectedValue = e.target.value;
  const customPricing = document.getElementById("custom_pricing");
  switch (selectedValue) {
    case "1":
      customPricing.innerText = "200";
      break;
    case "2":
      customPricing.innerText = "400";
      break;
    case "3":
      customPricing.innerText = "600";
      break;
    default:
      customPricing.innerText = "00";
      break;
  }
});
