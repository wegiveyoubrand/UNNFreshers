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
        } else if (lowerData == "airtime and data") {
          modalContent.innerHTML = AirtimeandData;
        } else if (lowerData == "online payment") {
          modalContent.innerHTML = OnlinePayment;
        } else {
          alert("error");
          modalContent.innerHTML = "";
        }
      }
    }
  });
});

// Set Modal Content
const ComputerServicesContent = `Hello Computer Services`;
const AirtimeandData = `<div class="form-container">
<form>
    <div class="form-group">
      <label>Enter mobile number</label>
      <input type="text">
    </div>
    <button>Continue</button>
  </form>
</div>
`;
const OnlinePayment = `<div class ="form-container"><form>
<div class="form-group">

  <input type="radio" name="payment"> Remita
  <input type="radio" name="payment">Etranzact
  <input type="radio" name="payment">Bank Transfer

</div>
<div class="form-group">

<input type="text">
</div>
<button>Continue</button>
</form></div>
`;
