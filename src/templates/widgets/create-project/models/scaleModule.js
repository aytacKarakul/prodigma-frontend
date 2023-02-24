export default function ScaleModel() {
  let createProjctLeft = document.querySelector(".create-project-left");

  let scaleProperties = document.createElement("div");
  scaleProperties.className = "create-project-scales";

  scaleProperties.innerHTML = `
        <div class='create-project-scales-inner'>
            <div class='create-project-scales-lft'>
                <div class='active'>82,6</div>
                <div>202,3</div>
                <div>97,8</div>
            </div>
            <div class='create-project-scales-rgh'>
                <div class='active'>MM</div>
                <div>CM</div>
                <div>M</div>
                <div>INCH</div>
            </div>
        </div>
    `;

  createProjctLeft.appendChild(scaleProperties);
  return scaleProperties;
}
