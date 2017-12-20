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
$("#annatGrundForMUBeskrivning").val('Journal from down below').change();
$("#datepicker_kannedomOmPatient").val("1901-01-20").change();
$("input[id*='-toggle']").click();
$("#underlagFinnsYes").prop("checked", true);
$("#underlagFinnsYes").click();

$("#underlag-0-typ > div.ui-select-match > span").click();
selectInDropdown('#underlag-0-typ', 1);
$("#underlag-0-datum").val(todayDateString).change();
$("#underlag-0-hamtasFran").val('VÃ¥rdcentralen Smultronet').change();

$("#underlag-1-typ > div.ui-select-match > span").click();
selectInDropdown('#underlag-1-typ', 3);
$("#underlag-1-datum").val(todayDateString).change();
$("#underlag-1-hamtasFran").val('CSK').change();

$("#underlag-2-typ > div.ui-select-match > span").click();
selectInDropdown('#underlag-2-typ', 5);
$("#underlag-2-datum").val(todayDateString).change();
$("#underlag-2-hamtasFran").val('CentralSjukhuset!!').change();

$("#diagnoseCode-0").val("S47").change();

var firstFound = false;
var checkForElement1 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('S47')").length && firstFound === false) {
		$("li[id*='option-0']").click();
		firstFound = true;
	}
	if ($("li[id*='option-0']").children("a:contains('S47')").length === 0 && firstFound === true) {
		$("#laggTillDiagnos").click().blur();
		$("#diagnoseCode-1").val('F205').change();
		clearInterval(checkForElement1);
	}
}, 1000);

var secondFound = false;
var checkForElement2 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('F205')").length && secondFound === false) {
		$("li[id*='option-0']").click();
		secondFound = true;
	}
	if ($("li[id*='option-0']").children("a:contains('F205')").length === 0 && secondFound === true) {
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
$("#diagnosgrund").val('Detta blir en kort text.').change();
$("#nyBedomningDiagnosgrundYes").prop("checked", true);
$("#nyBedomningDiagnosgrundYes").click();
$("#diagnosForNyBedomning").val("alla och ingen.").change();
$("#sjukdomsforlopp").val("Patienten har haft besvÃ¤ren i olika omgÃ¥ngar...");
$("#sjukdomsforlopp").change();
$("input[id*='_funktionsnedsattningIntellektuell_']").click();
$("input[id*='_funktionsnedsattningKommunikation_']").click();
$("input[id*='_funktionsnedsattningKoncentration_']").click();
$("input[id*='_funktionsnedsattningPsykisk_']").click();
$("input[id*='_funktionsnedsattningSynHorselTal_']").click();
$("input[id*='_funktionsnedsattningBalansKoordination_']").click();
$("input[id*='_funktionsnedsattningAnnan_']").click();
$("#funktionsnedsattningAnnan").val("StÃ¤ller till det en hel del").change();
$("#aktivitetsbegransning").val("Patienten kan inte rÃ¤cka upp armen. Stelhet i axelpartiet").change();
$("input[id*='_avslutadBehandling_']").click();
$("input[id*='_pagaendeBehandling_']").click();
$("input[id*='_planeradBehandling_']").click();
$("input[id*='_substansintag_']").click();
$("#substansintag").val("SmÃ¤rtlindring").change();
$("#medicinskaForutsattningarForArbete").val("RehabtrÃ¤ning ska ge resultat om 1 Ã¥r").change();
$("#formagaTrotsBegransning").val("Laga mat gÃ¥r bra, men endast pÃ¥ fredagar").change();
$("#ovrigt").val("Mycket material Ã¤r hemligstÃ¤mplat").change();
$("input[id*='kontaktMedFk']").click();

$("#funktionsnedsattningIntellektuell").val("Pga smÃ¤rtan pÃ¥verkas intellektet").change();
$("#funktionsnedsattningKommunikation").val("FÃ¥r svÃ¥rt att kommunicera dÃ¥ humÃ¶ret inte Ã¤r pÃ¥ topp").change();
$("#funktionsnedsattningKoncentration").val("Har svÃ¥rt att koncentrera sig lÃ¤ngre Ã¤n 2 minuter").change();
$("#funktionsnedsattningPsykisk").val("PÃ¥verkar inget annat enligt patienten").change();
$("#funktionsnedsattningSynHorselTal").val("Har fÃ¥tt sÃ¤mre syn med Ã¥ldern").change();
$("#funktionsnedsattningBalansKoordination").val("Det gÃ¶r ont").change();

$("#avslutadBehandling").val("RheabtrÃ¤ning").change();
$("#pagaendeBehandling").val("SmÃ¤rtlindring och akupunktur").change();
$("#planeradBehandling").val("FÃ¶r tidigt att sÃ¤ga nÃ¥got om planerade Ã¥tgÃ¤rder").change();
$("#anledningTillKontakt").val("Jag har hemligt material pÃ¥ mitt skrivbord som kan vara intressant fÃ¶r er").change();