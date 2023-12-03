
// $(".gregorion-date-selector").click(function(){
//   hijriCalenderDate('idHijriDateCalendar1DateCalendarParent1');
// });
$(document).ready(function() {


	var y = document.getElementsByClassName("gregorion-date-selector");
  var i;
  for (i = 0; i < y.length; i++) {
		gregorionCalenderDate($(y[i]).attr('id'));
  }

	var z = document.getElementsByClassName("hijri-date-selector");
  var j;
  for (j = 0; j < z.length; j++) {
		hijriCalenderDate($(z[j]).attr('id'));
  }
 });

function gregorionCalenderDate(idParentDiv){

	var idToShowCalendar = $("#" + idParentDiv + " input").attr("id");

	gregorionDateCalendar(idParentDiv,idToShowCalendar);
	changeZIndexOfThisSectionCalendar11(idToShowCalendar);
}


function hijriCalenderDate(idParentDiv){
	var idToShowCalendar = $("#" + idParentDiv + " input").attr("id");

	hijriDateCalendar(idParentDiv,idToShowCalendar);
	changeZIndexOfThisSectionCalendar11(idToShowCalendar);
}

function gregorionDateCalendar(idParentDiv,idToShowCalendar){

	reloadIssueElements11(idParentDiv,idToShowCalendar);


	calendarIdDates = new $("#"+idToShowCalendar).hijriDatePicker({
		locale: "en",
		format: "DD-MM-YYYY",
		viewMode:'days',
		hijri: false,
		debug: false,
		showClear: true,
		useCurrent: false,
		showSwitcher:false,
		showTodayButton: true,
		showClose: true,
		icons: {
			time: 'fa fa-clock text-primary',
			date: 'glyphicon glyphicon-calendar',
			up: 'fa fa-chevron-up text-primary',
			down: 'fa fa-chevron-down text-primary',
			previous: '<<',
			next: '>>',
			today: 'Today',
			clear: '',
			close: 'Close',
		},

	});

}
function hijriDateCalendar(idParentDiv,idToShowCalendar){
	reloadIssueElements11(idParentDiv,idToShowCalendar);
		calendarIdDates = new $("#"+idToShowCalendar).hijriDatePicker({
			locale: "ar-sa",
			format: "iDD-iMM-iYYYY",
			hijriFormat:"iDD-iMM-iYYYY",
            dayViewHeaderFormat: "MMMM YYYY",
            hijriDayViewHeaderFormat: "iMMMM iYYYY",
			viewMode:'days',
			hijri: true,
			debug: false,
			useCurrent: false,
			showClear: true,
			showSwitcher:false,
			showTodayButton: true,
			showClose: true,
			icons: {
				time: 'fa fa-clock text-primary',
				date: 'glyphicon glyphicon-calendar',
				up: 'fa fa-chevron-up text-primary',
				down: 'fa fa-chevron-down text-primary',
				previous: '<<',
				next: '>>',
				today: 'اليوم',
				clear: '',
				close: 'اغلاق'
			},

		});


		/*.hijriDatePicker({
		locale: "ar-sa",
		format: "DD-MM-YYYY",
		viewMode:'days',
		hijri: true,
		debug: false,
		showClear: true,
		useCurrent: false,
		showSwitcher:false,
		showTodayButton: true,
		showClose: true,
		icons: {
			time: 'fa fa-clock text-primary',
			date: 'glyphicon glyphicon-calendar',
			up: 'fa fa-chevron-up text-primary',
			down: 'fa fa-chevron-down text-primary',
			previous: '<<',
			next: '>>',
			today: 'Today',
			clear: '',
			close: 'Close',
		},

	});*/



}
function reloadIssueElements11(idParentDiv,idToShowCalendar){


	document.getElementById(idToShowCalendar).remove();

	var elementt = document.createElement("div");
	elementt.innerHTML = "<input type='text' id = '" + idToShowCalendar + "' name='' value='' placeholder='DD-MM-YYYY' onclick='changeZIndexOfThisSectionCalendar11(this.id)'>";

	document.getElementById(idParentDiv).appendChild(elementt);

}




function changeZIndexOfThisSectionCalendar11(idd){

  var selectedSectionChild = document.getElementById(idd);
  var parentFormSection = selectedSectionChild.closest(".form-single-section");

  var y = document.getElementsByClassName("form-single-section");
  var i;
  for (i = 0; i < y.length; i++) {
    y[i].style.zIndex = "4";
  }
  parentFormSection.style.zIndex = "6";


}
