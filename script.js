const saveButton = document.getElementById("save");

let nameArray = [];

saveButton.addEventListener("click", function () {
  let nameUser = document.getElementById("name").value;
  nameArray.push(nameUser);
  localStorage.setItem("NameList", JSON.stringify(nameArray));
  console.log(localStorage);
});

const removeButton = document.getElementById("remove");

removeButton.addEventListener("click", function () {
  nameArray.pop();
  localStorage.setItem("NameList", JSON.stringify(nameArray));
  console.log(localStorage);
});
