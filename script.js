const boxes = document.querySelectorAll(".boxes");

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    const answer = box.nextElementSibling;
    const plus = box.querySelector(".plus");

    // Safety check (important for beginners)
    if (!answer || !plus) return;

    const isOpen = answer.style.maxHeight;

    // Close all other FAQ items
    boxes.forEach((otherBox) => {
      const otherAnswer = otherBox.nextElementSibling;
      const otherPlus = otherBox.querySelector(".plus");

      if (otherAnswer && otherPlus && otherAnswer !== answer) {
        otherAnswer.style.maxHeight = null;
        otherPlus.classList.remove("active");
      }
    });

    // Toggle current FAQ
    if (isOpen) {
      answer.style.maxHeight = null;
      plus.classList.remove("active");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      plus.classList.add("active");
    }

  });
});
