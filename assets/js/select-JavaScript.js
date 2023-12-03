// const optionsList = document.querySelectorAll(".single-select-option");
// // const selectedOption = document.querySelector("#dropdownMenuButton1");
// // optionsList.forEach(o => {
// //   o.addEventListener("click",() => {
// //     selectedOption.value = o.querySelector("label div").innerHTML;
// //   })
// // });
//
//
// function selectDropDown(idd){
//   const selectedOption = document.querySelector("#"+idd);
//   // alert(idd);
//   optionsList.forEach(o => {
//     o.addEventListener("click",() => {
//       selectedOption.value = o.querySelector("label div").innerHTML;
//     })
//   });
//   return;
//
// }

var selectedOption1;
function selectDropDownMenu(idd){
  var parent_id = $("#"+idd).attr('for');
  selectedOption1 = document.getElementById(parent_id);

  selectedOption1.value = document.querySelector("[for="+idd+"] div").innerHTML;
  return;
}

var selectedSectionChild;
function changeZIndexOfThisSection(idd){

	selectedSectionChild = document.getElementById(idd);
	var parentFormSection = selectedSectionChild.closest(".form-single-section");

  var y = document.getElementsByClassName("form-single-section");
  var i;
  for (i = 0; i < y.length; i++) {
    y[i].style.zIndex = "4";
  }
  parentFormSection.style.zIndex = "6";
  // var allFormSections = document.getElementsByClassName("form-single-section");
  // allFormSections.style.zIndex = "4";

}

