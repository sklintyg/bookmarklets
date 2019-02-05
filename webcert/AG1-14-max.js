var today = new Date();

function createDateString(today, daysToAdd) {
	if (daysToAdd) {
		today.setDate(new Date().getDate() + daysToAdd);
	}
	var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
	return todayDateString;
}
$("#nuvarandeArbete").val("Lite vanlig hederlig text.").change();
$("#onskarFormedlaDiagnosYes").prop("checked", true).trigger("click");
$("#diagnoseCode-0").val("S47").change();

var firstFound = false;
var checkForElement1 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('S47')").length && firstFound === false) {
		$("li[id*='option-0']").click();
		firstFound = true;
	}
	if ($("li[id*='option-0']").children("a:contains('S47')").length === 0 && firstFound === true) {
		$("#laggTillDiagnos").click().blur();
		$("#diagnoseCode-1").val('Y1113').change();
		clearInterval(checkForElement1);
	}
}, 1000);

var secondFound = false;
var checkForElement2 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('Y1113')").length && secondFound === false) {
		$("li[id*='option-0']").click();
		secondFound = true;
	}
	if ($("li[id*='option-0']").children("a:contains('Y1113')").length === 0 && secondFound === true) {
		$("#laggTillDiagnos").click().blur();
		$("#diagnoseCode-2").val('M659B').change();
		clearInterval(checkForElement2);
	}
}, 1000);

var checkForElement3 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('M659B')").length) {
		$("li[id*='option-0']").children("a:contains('M659B')").click().blur();
		clearInterval(checkForElement3);
	}
}, 1000);

$("#S47-funktionsnedsattning-dropdown").click();
$("#S47-funktionsnedsattning-plate > div.kategori-content > div > ue-icf-kategori:nth-child(5) > div > div > input").click();
$("#S47-funktionsnedsattning-plate > div.kategori-footer > input.btn.btn-success.kategori-add").click();

$("#nedsattArbetsformaga").val("Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\n Visst ska det gå. Visst ska det gå.\n Visst\n ska\n det\n gå.\n Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå.").change();
$("#arbetsformagaTrotsSjukdomYes").prop("checked", true).trigger("click");
$("#arbetsformagaTrotsSjukdomBeskrivning").val("en massa text.").change();
$("#sjukskrivningsgrad").val("75").change();
$("#datepicker_sjukskrivningsperiod\\.from").val(createDateString(today)).change();
$("#datepicker_sjukskrivningsperiod\\.tom").val(createDateString(today, 5)).change();
$("#ovrigaUpplysningar").val("textertextertexter").change();
$("#kontaktMedArbetsgivaren").click();
$("#anledningTillKontakt").val("Banankontakt banankontakt.....av tredje graaaden.").change();

//$("li[id*='option-0']").click();