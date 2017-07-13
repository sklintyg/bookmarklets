var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);
var text1 = "Läkarintyg FK 7263"

$("#pnr").val("195201282232").change();
$("#skapapersonnummerfortsatt").click().blur();
$('select[name="intygType"]').val('string:luae_fs');

$('#intygType > option').each(function() {
	this.attr('selected', 'selected');
	console.log(this);
});