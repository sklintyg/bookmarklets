var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

function createEnterEvent() {
	var e = jQuery.Event("keydown");
	e.which = 13;
	return e;
}

$("#checkbox_undersokningAvPatienten").click();
$("#checkbox_journaluppgifter").click();
$("#checkbox_anhorigsBeskrivningAvPatienten").click();
$("#checkbox_annatGrundForMU").click();
$("#annatGrundForMUBeskrivning").val("En väldigt stark magkänsla").change();
$("#datepicker_kannedomOmPatient").val("1905-02-21").change();
$("#underlagFinnsYes").prop("checked", true).trigger("click");

$("#underlag-0--typ-HABILITERING").click();
$("#datepicker_underlag\\[0\\].datum".replace(".","\\.")).val(todayDateString).change(); // Bort med brackets och punkt i ID
$("#underlag-0--hamtasFran").val('Vårdcentralen Smultronet').change();


$("#underlag-1--typ-LOGOPED").click();
$("#datepicker_underlag\\[1\\].datum".replace(".","\\.")).val(todayDateString).change(); // Bort med brackets och punkt i ID
$("#underlag-1--hamtasFran").val('CSK').change();


$("#underlag-2--typ-FYSIOTERAPEUT").click();
$("#datepicker_underlag\\[2\\].datum".replace(".","\\.")).val(todayDateString).change(); // Bort med brackets och punkt i ID
$("#underlag-2--hamtasFran").val('CentralSjukhuset!!').change();

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
$("#funktionsnedsattningPaverkan").val("Patienten gör pga av sitt problem alldeles för mycket läxor.").change();
$("#ovrigt").val("Lite vanlig hederlig text.").change();
$("input[id*='kontaktMedFk']").click();
$("#anledningTillKontakt").val("Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\n Visst ska det gå. Visst ska det gå.\n Visst\n ska\n det\n gå.\n Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå.").change();


$("textarea[id*='tillaggsfragor[0]']").val("Jätte.").change();
$("textarea[id*='tillaggsfragor[1]']").val("Tillräckligt.").change();