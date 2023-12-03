var selectedOption1;

function selectDropDownMenu(idd){
  var parent_id = $("#"+idd).attr('for');
  const selectedOption = document.querySelector("#"+idd);
  selectedOption1 = document.getElementById(parent_id);
  selectedOption1.value = document.querySelector("[for="+idd+"]").innerHTML;
  return;

}
