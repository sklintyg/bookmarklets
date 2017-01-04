var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);

function createEnterEvent() {
	var e = jQuery.Event("keydown");
	e.which = 13;
	return e;
}

$("#pnr").val("195201282232").change();
$("#skapapersonnummerfortsatt").click().blur();
$("#intygType > option:nth-child(2)").click();



