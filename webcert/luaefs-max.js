var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

function createEnterEvent() {
	var e = jQuery.Event("keydown");
	e.which = 13;
	return e;
}


$("input[id*='date_undersokningAvPatienten_']").click();
$("input[id*='_date_journaluppgifter_']").click();
$("input[id*='_date_anhorigsBeskrivningAvPatienten_']").click();
$("input[id*='_date_annatGrundForMU_']").click();
$("#annatGrundForMUBeskrivning").val("En vÃ¤ldigt stark magkÃ¤nsla").change();
$("#datepicker_kannedomOmPatient").val("1905-02-21").change();
$("#underlagFinnsYes").prop("checked", true).trigger("click");

$("#underlag-0-typ > div.ui-select-match > span").click();
$("[id$=-2]").click();
$("#underlag-0-datum").val(todayDateString).change();
$("#underlag-0-hamtasFran").val('VÃ¥rdcentralen Smultronet').change();

$("#underlag-1-typ > div.ui-select-match > span").click();
$("[id$=-3]").click();
$("#underlag-1-typ").val('string:LOGOPED').change();
$("#underlag-1-datum").val(todayDateString).change();
$("#underlag-1-hamtasFran").val('CSK').change();

$("#underlag-2-typ > div.ui-select-match > span").click();
$("[id$=-4]").click();
$("#underlag-2-typ").val('string:FYSIOTERAPEUT').change();
$("#underlag-2-datum").val(todayDateString).change();
$("#underlag-2-hamtasFran").val('CentralSjukhuset!!').change();

$("#diagnoseCode-0").val('S47').change();
var firstFound = false;
var checkForElement1 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('S47')").length && firstFound === false) {
		$("li[id*='option-0']").click();
		firstFound = true;
	}
	if ($("li[id*='option-0']").children("a:contains('S47')").length === 0 && firstFound === true) {
		$("#laggTillDiagnos").click().blur();
		$("#diagnoseCode-1").val('F000').change();
		clearInterval(checkForElement1);
	}
}, 1000);

var secondFound = false;
var checkForElement2 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('F000')").length && secondFound === false) {
		$("li[id*='option-0']").click();
		secondFound = true;
	}
	if ($("li[id*='option-0']").children("a:contains('F000')").length === 0 && secondFound === true) {
		$("#laggTillDiagnos").click().blur();
		$("#diagnoseCode-2").val('M659B').change();
		clearInterval(checkForElement2);
	}
}, 1000);

var checkForElement3 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('M659B')").length) {
		$("li[id*='option-0']").children("a:contains('M659B')").click();
		clearInterval(checkForElement3);
	}
}, 1000);
$("#funktionsnedsattningDebut").val('Detta blir en kort text. Detta blir en kort text.').change();
$("#funktionsnedsattningPaverkan").val("Patienten gÃ¶r pga av sitt problem alldeles fÃ¶r mycket lÃ¤xor.").change();
$("#ovrigt").val("Inget Ã–vrigt.");
$("input[id*='kontaktMedFk']").click();
$("#anledningTillKontakt").val("Nej.").change();


$("textarea[id*='tillaggsfragor[0]']").val("JÃ¤tte.").change();
$("textarea[id*='tillaggsfragor[1]']").val("TillrÃ¤ckligt.").change();