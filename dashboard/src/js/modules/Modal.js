const Modal = document.querySelector(".modal"),
  ModalComponent = document.querySelector("modal-component"),
  modalContent = document.querySelector(".modal-content"),
  ModalClose = document.querySelector(".modal-close"),
  main = document.querySelector("main"),
  services = document.querySelectorAll(".portal");

ModalClose.addEventListener("click", (e) => {
  e.preventDefault;
  Modal.classList.remove("open");
  main.classList.remove("fixed");
});

services.forEach((service) => {
  service.addEventListener("click", (e) => {
    e.preventDefault;
    Modal.classList.add("open");
    main.classList.add("fixed");
    if (service.getAttribute("data-name") !== null) {
      console.log(service.getAttribute("data-name"));
      let dataAttribute = service.getAttribute("data-name"),
        lowerData;

      if (dataAttribute !== "") {
        lowerData = dataAttribute.toLowerCase();

        if (lowerData == "computer services") {
          modalContent.innerHTML = ComputerServicesContent;
        } else if (lowerData == "online payment") {
          alert("online payment");
        } else {
          alert("error");
        }
      }
    }
  });
});

// Set Modal Content
const ComputerServicesContent = `Hello Computer Services`;
