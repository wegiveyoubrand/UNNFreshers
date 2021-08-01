const services = document.querySelectorAll(".portal");

services.forEach((service) => {
  service.addEventListener("click", (e) => {
    e.preventDefault;
    console.log(service.getAttribute("data-name"));
    let dataAttribute = service.getAttribute("data-name");

    if (dataAttribute === "") {
      alert("error");
    } else {
      let lowerData = dataAttribute.toLowerCase();

      if (lowerData == "computer services") {
        alert("ok");
      } else if (lowerData == "online payment") {
        alert("online payment");
      } else {
        alert("error");
      }
    }
  });
});
