export function Thermoplastics() {
  const termoplastics = [
    {
      ppla: {
        name: "ppla",
        head1: "Test (ASTM)",
        head2: "P-PLA",
        title:
          "Özellikle hızlı prototipleme için kullanılan, basılması kolay ve uygun maliyetli bir termoplastik çeşididir",
        baskiKapasite: "Baskı kapasitesi: 320mm x132mm x154mm",
        property: [
          {
            title: "Çekme Modülü (GPa)",
            obj: { t1: "D638", t2: "2.3" },
          },
          {
            title: "Eğilme Modülü (GPa)",
            obj: { t1: "D790", t2: "2.3", t1sm: "1" },
          },
        ],
      },
      onyx: {
        name: "onyx",
      },
    },
  ];
  const material = document.querySelectorAll(
    ".pmaterials-thermoplastics-content li .pmaterials-thermoplastics-content-material-detail a"
  );
  const modalPopup = document.querySelector("#modal-cnc-process");
  const modalPopupWrapper = document.querySelector(
    "#modal-cnc-process .modal-container"
  );

  material.forEach((items) => {
    items.addEventListener("click", function () {
      const attr = this.getAttribute("data-attr");

      termoplastics.forEach((item) => {
        const dataname = item["ppla"];

        if (attr === item["ppla"].name) {
          let temp = document.createElement("ul");
          let headerLi = document.createElement("li");
          let headerLiFirstDiv = document.createElement("div");
          let headerLiLastDiv = document.createElement("div");
          let titleDiv = document.createElement("div");
          let subTitleDiv = document.createElement("div");

          temp.className = "border border-custom-100";

          //-class add
          headerLi.className =
            "flex justify-end px-2 py-2 border-b border-custom-100 text-sm";

          //-append
          headerLi.appendChild(headerLiFirstDiv);
          headerLi.appendChild(headerLiLastDiv);

          headerLiFirstDiv.textContent = dataname.head1;
          headerLiLastDiv.textContent = dataname.head2;

          titleDiv.textContent = dataname.title;
          titleDiv.className = "text-sm mb-5";
          subTitleDiv.textContent = dataname.baskiKapasite;
          subTitleDiv.className = "text-sm mt-5";

          dataname.property.forEach((items) => {
            temp.innerHTML += `
                <li class="flex items-center justify-between px-2 py-2 border-b border-custom-100 last:border-b-0 text-sm"><div>${items.title}</div><div>${items.obj.t1}</div><div>${items.obj.t2}</div></li>
            `;
          });
          temp.prepend(headerLi);

          modalPopupWrapper.appendChild(titleDiv);
          modalPopupWrapper.appendChild(temp);
          modalPopupWrapper.appendChild(subTitleDiv);

          modalPopup.classList.add("open");
        } else if (attr === item["onyx"].name) {
          console.log("bu ONYX");
        } else {
          console.log("Bu nedir anlamadım");
        }
      });
    });
  });
}
