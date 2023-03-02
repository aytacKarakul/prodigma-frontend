export function Viewer() {
  const dragArea = document.querySelector(".drag-area");
  const dragAreadContent = document.querySelector(".drag-area-contents");
  const nextSelectionBtnFirst = document.querySelector(
    ".create-project-right-nextbtn .btn-next-to-bid"
  );
  const nextBtnLast = document.querySelector(
    ".create-project-right-nextbtn .btn-next-bid"
  );

  let file;

  if (dragArea) {
    dragArea.addEventListener("dragover", (event) => {
      event.preventDefault();
      dragArea.classList.add("active");

      nextSelectionBtnFirst.classList.add("btn-green");
      nextSelectionBtnFirst.removeAttribute("disabled");
      console.log("File is inside the drag area");
    });
    dragArea.addEventListener("dragleave", () => {
      console.log("File left the drag area");
      dragArea.classList.remove("active");
      nextSelectionBtnFirst.classList.remove("btn-green");
    });

    dragArea.addEventListener("drop", (event) => {
      event.preventDefault();
      file = event.dataTransfer.files[0];
      displayFile();
    });

    function displayFile() {
      let fileType = file.type;
      console.log(fileType);

      let validExtensions = ["image/jpeg", "image/jpg", "image/png"];

      if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();

        fileReader.onload = () => {
          let fileUrl = fileReader.result;

          let imgTag = `<img src="${fileUrl}" alt="" />`;

          dragArea.innerHTML = imgTag;
          dragAreadContent.remove();
          nextBtnLast.setAttribute("img", file.name);
        };
        fileReader.readAsDataURL(file);
      } else {
        alert("This file is not an Image");
        dragArea.classList.remove("active");
      }
      console.log(file);
    }
  }
}
