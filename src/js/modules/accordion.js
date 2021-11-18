export default function accordion() {
    let accordionItem = document.querySelectorAll(".js-accordion");

    [...accordionItem].map(item => {
        let accordionHeader = item.querySelector(".js-accordion-header");
        let accordionContent = item.querySelector(".js-accordion-content");

        accordionHeader.addEventListener("click", () => {
            item.classList.toggle("is-active");
            accordionHeader.classList.toggle("is-active");
            accordionContent.classList.toggle("is-active");
        });
    });
}
