var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);


$("#pnr").val("195201282232").change();
$("#skapapersonnummerfortsatt").click().blur();
$("#select-intyg-type-table > div:nth-child(1)").click();
$("#div:contains(['intygTypeFortsatt-af00213'])").click();

$('#intygType-row-af00213').click();

$('select[name="intygType"]').val('string:luae_fs');

$('#intygType > option').each(function() {
	this.attr('selected', 'selected');
	console.log(this);
})


;


#intygTypeFortsatt-af00213
#select-intyg-type-table > div:nth-child(1)
#intygTypeFortsatt-af00213