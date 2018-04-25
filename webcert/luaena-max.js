var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

// function createEnterEvent() {
	// var e = jQuery.Event("keydown");
	// e.which = 13;
	// return e;
// }

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

$("#checkbox_undersokningAvPatienten").click();
$("#checkbox_journaluppgifter").click();
$("#checkbox_anhorigsBeskrivningAvPatienten").click();
$("#checkbox_annatGrundForMU").click();
$("#annatGrundForMUBeskrivning").val("En väldigt stark magkänsla").change();
$("#datepicker_kannedomOmPatient").val("1905-06-12").change();
$("#underlagFinnsYes").prop("checked", true).trigger("click");

$("#underlag-0--typ-NEUROPSYKIATRISKT").click();
$("#datepicker_underlag\\[0\\].datum".replace(".","\\.")).val(todayDateString).change(); // Bort med brackets och punkt i ID
$("#underlag-0--hamtasFran").val('Vårdcentralen Smultronet').change();

$("#underlag-1--typ-ARBETSTERAPEUT").click();
$("#datepicker_underlag\\[1\\].datum".replace(".","\\.")).val(todayDateString).change(); // Bort med brackets och punkt i ID
$("#underlag-1--hamtasFran").val('CSK').change();

$("#underlag-2--typ-LOGOPED").click();
$("#datepicker_underlag\\[2\\].datum".replace(".","\\.")).val(todayDateString).change(); // Bort med brackets och punkt i ID
$("#underlag-2--hamtasFran").val('CentralSjukhuset!!').change();

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
$("#diagnosgrund").val("I tidernas begynnelse ställdes diagnosen för patienten på Sahlgrenska").change();
$("#nyBedomningDiagnosgrundYes").prop("checked", true);
$("#nyBedomningDiagnosgrundYes").click();
$("#diagnosForNyBedomning").val("G000").change();
$("#sjukdomsforlopp").val('Detta blir en kort text.').change();

$("#toggle-funktionsnedsattningIntellektuell").click();
$("#toggle-funktionsnedsattningKommunikation").click();
$("#toggle-funktionsnedsattningKoncentration").click();
$("#toggle-funktionsnedsattningPsykisk").click();
$("#toggle-funktionsnedsattningSynHorselTal").click();
$("#toggle-funktionsnedsattningBalansKoordination").click();
$("#toggle-funktionsnedsattningAnnan").click();

$("#aktivitetsbegransning").val("Patienten kan inte räcka upp armen.").change();
$("#avslutadBehandling").val("Rehabträning").change();
$("#pagaendeBehandling").val("Smärtlindring och akupunktur").change();
$("#planeradBehandling").val("För tidigt att säga något.").change();

$("#substansintag").val("Smärtlindring").change();
$("#medicinskaForutsattningarForArbete").val("Rehabträning.").change();
$("#formagaTrotsBegransning").val("Laga mat går bra.").change();
$("#forslagTillAtgard").val("En bra planering.").change();


$("#funktionsnedsattningIntellektuell").val("A living mummy stalks the beautiful woman he believes is the reincarnation of his lover.").change();
$("#funktionsnedsattningKommunikation").val("When a young boy disappears, his mother, a police chief, and his friends, must confront terrifying forces in order to get him back.").change();
$("#funktionsnedsattningKoncentration").val("The crew of a Royal Naval expedition searching for the Arctic's treacherous Northwest Passage discovers instead a monstrous predator.").change();
$("#funktionsnedsattningPsykisk").val("Swedes travel to the Canary Islands on a package trip.").change();
$("#funktionsnedsattningSynHorselTal").val("Vispa samman äggen med hälften av mjölken.").change();
$("#funktionsnedsattningBalansKoordination").val("Det gör ont").change();
$("#funktionsnedsattningAnnan").val("Tillsätt mjölet").change();

$("input[id*='_avslutadBehandling_']").click();
$("input[id*='_pagaendeBehandling_']").click();
$("input[id*='_planeradBehandling_']").click();
$("input[id*='_substansintag_']").click();

$("#ovrigt").val("Mycket material är hemligstämplat").change();

$("input[id*='kontaktMedFk']").click();
$("#anledningTillKontakt").val("Jag har hemligt material på mitt skrivbord som kan vara intressant för er").change();