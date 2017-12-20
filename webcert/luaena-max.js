var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

function createEnterEvent() {
	var e = jQuery.Event("keydown");
	e.which = 13;
	return e;
}

function selectInDropdown(id, index) {
	$(id + " > ul > li > div").each(function() {
		var ddElementId = $(this).attr("id");
		if (ddElementId !== undefined) {
			if (parseInt(ddElementId.substr((ddElementId.length - 1), ddElementId.length)) === index) {
				$("#" + ddElementId).click();
			}
		}
	});
}

$("input[id*='date_undersokningAvPatienten_']").click();
$("input[id*='_date_journaluppgifter_']").click();
$("input[id*='_date_anhorigsBeskrivningAvPatienten_']").click();
$("input[id*='_date_annatGrundForMU_']").click();
$("#annatGrundForMUBeskrivning").val("En vÃ¤ldigt stark magkÃ¤nsla").change();
$("#datepicker_kannedomOmPatient").val("1905-06-12").change();
$("#underlagFinnsYes").prop("checked", true).trigger("click");

$("#underlag-0-typ > div.ui-select-match > span").click();
selectInDropdown('#underlag-0-typ', 1);
$("#underlag-0-datum").val(todayDateString).change();
$("#underlag-0-hamtasFran").val('VÃ¥rdcentralen Smultronet').change();

$("#underlag-1-typ > div.ui-select-match > span").click();
selectInDropdown('#underlag-1-typ', 3);
$("#underlag-1-datum").val(todayDateString).change();
$("#underlag-1-hamtasFran").val('VÃ¥rdcentralen Svanen').change();

$("#underlag-2-typ > div.ui-select-match > span").click();
selectInDropdown('#underlag-2-typ', 5);
$("#underlag-2-datum").val(todayDateString).change();
$("#underlag-2-hamtasFran").val('VC Jupiter').change();

$("#diagnoseCode-0").val("S47").change();
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
$("#diagnosgrund").val("I tidernas begynnelse stÃ¤lldes diagnosen fÃ¶r patienten pÃ¥ Sahlgrenska").change();
$("#nyBedomningDiagnosgrundYes").prop("checked", true);
$("#nyBedomningDiagnosgrundYes").click();
$("#diagnosForNyBedomning").val("G000").change();
$("#sjukdomsforlopp").val('Detta blir en kort text.').change();

$("input[id*='_funktionsnedsattningIntellektuell_']").click();
$("input[id*='_funktionsnedsattningKommunikation_']").click();
$("input[id*='_funktionsnedsattningKoncentration_']").click();
$("input[id*='_funktionsnedsattningPsykisk_']").click();
$("input[id*='_funktionsnedsattningSynHorselTal_']").click();
$("input[id*='_funktionsnedsattningBalansKoordination_']").click();
$("input[id*='_funktionsnedsattningAnnan_']").click();

$("#aktivitetsbegransning").val("Patienten kan inte rÃ¤cka upp armen.").change();
$("#avslutadBehandling").val("RheabtrÃ¤ning").change();
$("#pagaendeBehandling").val("SmÃ¤rtlindring och akupunktur").change();
$("#planeradBehandling").val("FÃ¶r tidigt att sÃ¤ga nÃ¥got.").change();

$("#substansintag").val("SmÃ¤rtlindring").change();
$("#medicinskaForutsattningarForArbete").val("RehabtrÃ¤ning.").change();
$("#formagaTrotsBegransning").val("Laga mat gÃ¥r bra.").change();
$("#forslagTillAtgard").val("En bra planering.").change();


$("#funktionsnedsattningIntellektuell").val("abc").change();
$("#funktionsnedsattningKommunikation").val("abc").change();
$("#funktionsnedsattningKoncentration").val("abc").change();
$("#funktionsnedsattningPsykisk").val("abc").change();
$("#funktionsnedsattningSynHorselTal").val("abc").change();
$("#funktionsnedsattningBalansKoordination").val("Det gÃ¶r ont").change();
$("#funktionsnedsattningAnnan").val("abc").change();

$("input[id*='_avslutadBehandling_']").click();
$("input[id*='_pagaendeBehandling_']").click();
$("input[id*='_planeradBehandling_']").click();
$("input[id*='_substansintag_']").click();

$("#ovrigt").val("Mycket material Ã¤r hemligstÃ¤mplat").change();

$("input[id*='kontaktMedFk']").click();
$("#anledningTillKontakt").val("Jag har hemligt material pÃ¥ mitt skrivbord som kan vara intressant fÃ¶r er").change();