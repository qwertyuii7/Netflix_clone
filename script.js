const boxes = document.querySelectorAll(".boxes");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Identify the answer associated with this box
        const answer = box.nextElementSibling;
        const plus = box.querySelector(".plus");
        const isOpen = answer.style.maxHeight;

        // Close all other answers
        document.querySelectorAll(".boxes").forEach((otherBox) => {
            const otherAnswer = otherBox.nextElementSibling;
            const otherPlus = otherBox.querySelector(".plus");

            if (otherAnswer !== answer) {
                otherAnswer.style.maxHeight = null;
                otherPlus.classList.remove("active");
            }
        });

        // Toggle the clicked answer
        if (isOpen) {
            answer.style.maxHeight = null;
            plus.classList.remove("active");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            plus.classList.add("active");
        }
    });
});
