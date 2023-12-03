function menuCollapse(){
  // collapse and uncollapse the menu
  document.querySelector("#menuSideForCollapse").classList.toggle("menu-collapsed");
  $(".single-menu-o-item .single-menu-btn").attr("aria-expanded","false");
  // document.querySelector("nav .menuCollapseBtn").classList.toggle("rotate-180");
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

window.onscroll = function (e) {
  if(window.scrollY>75){
    document.querySelector(".menu-title").classList.remove("hideOut");
    document.querySelector(".menu-title").classList.toggle("slider");
  }
  if(window.scrollY<=75){
    document.querySelector(".menu-title").classList.add("hideOut");
    document.querySelector(".menu-title").classList.toggle("slider");
  }
};

// add space after every 4 digits in iban
$('.iban-no').on('keypress change', function () {
  $(this).val(function (index, value) {
	  return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  });
});


// file upload button
function fileUpload(id){
  // var inputFieldID = document.querySelector("#" + id);
  var inputFieldID = document.querySelector("#" + id);
  var filename = $("#"+id).val();
  if (/^\s*$/.test(filename)) {
    document.getElementById(id).nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = "No file chosen...";
  }
  else {
    document.getElementById(id).nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = filename.replace("C:\\fakepath\\", "");
  }
}

// close all collapse when clicked outside for left menu only
$(document).click(function(e) {
	if  ((!$(e.target).is('.single-menu-item-dropdown')) &&
  (!$(e.target).is('.single-menu-item-dropdown a')) &&
  (!$(e.target).is('.single-menu-item-dropdown a div')) &&
  (!$(e.target).is('.single-menu-item-dropdown a div p')) &&
  (!$(e.target).is('.single-menu-o-item'))) {
    	$('.single-menu-o-item .collapse').collapse('hide');
      // $(".single-menu-o-item .single-menu-btn").attr("aria-expanded","false");
    }
});


// function selectRedeem(e){
//   if ($(e).attr("id") == "amount") {
//     alert("eweew");
//   }else if ($(e).attr("id")=="quantity") {
//     alert("62500");
//   }
//
// }
