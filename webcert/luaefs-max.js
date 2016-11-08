var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);

function createEnterEvent() {
	var e = jQuery.Event("keydown");
	e.which = 13;
	return e;
}


$("input[id*='date_undersokningAvPatienten_']").click();
$("input[id*='_date_journaluppgifter_']").click();
$("input[id*='_date_anhorigsBeskrivningAvPatienten_']").click();
$("input[id*='_date_annatGrundForMU_']").click();
$("#annatGrundForMUBeskrivning").val("En väldigt stark magkänsla").change();
$("#form_kannedomOmPatient > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > input:nth-child(1)").val(todayDateString).change();
$("#underlagFinnsYes").prop("checked", true).trigger("click");

$("#underlag-0-typ > div.ui-select-match > span").click();
$("[id$=-2]").click();
$("#underlag-0-datum").val(todayDateString).change();
$("#underlag-0-hamtasFran").val('Vårdcentralen Smultronet').change();

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
		 $("#diagnoseCode-2").val('G000').change();
		 clearInterval(checkForElement2);
	 }
}, 1000);

var checkForElement3 = setInterval(function() {
   if ($("li[id*='option-0']").children("a:contains('G000')").length) {
			$("li[id*='option-0']").children("a:contains('G000')").click();
      clearInterval(checkForElement3);
   }
}, 1000);
$("#funktionsnedsattningDebut").val("Utvecklades i tonåren, har svårt att säga nej.").change();
$("#funktionsnedsattningPaverkan").val("Patienten gör pga av sitt problem alldeles för mycket läxor.").change();
$("#ovrigt").val("Inget Övrigt.");
$("input[id*='kontaktMedFk']").click();
$("#anledningTillKontakt").val("Nej.").change();


$("textarea[id*='tillaggsfragor[0]']").val("Jätte.").change();
$("textarea[id*='tillaggsfragor[1]']").val("Tillräckligt.").change();



