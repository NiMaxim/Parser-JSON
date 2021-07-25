//Проверка загружаемого JSON на наличие ключей

function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    let jsonResult = JSON.parse(reader.result);
    console.log(jsonResult);

    for (let key in jsonResult) {
      switch (key) {
        case "name":
          console.log("NAME имеется");
          document.querySelector(
            ".content"
          ).innerHTML = `<div class="name"></div>`;
          let jsonName = document.createElement("h2");
          jsonName.innerHTML = JSON.stringify(jsonResult["name"]);
          document.querySelector(".name").appendChild(jsonName);

          break;

        case "fields":
          console.log("FIELDS имеется");
          break;

        case "references":
          console.log("REFERENCES имеется");
          break;

        case "buttons":
          console.log("BUTTONS имеется");
          break;

        default:
          break;
      }
    }
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}

//Очистка содержимого

let node = document.getElementById("content_box");
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetFunction);

function resetFunction() {
  node.innerHTML = "";
}
