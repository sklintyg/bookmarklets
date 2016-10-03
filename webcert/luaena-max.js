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
$("#underlag-0-typ").val('string:NEUROPSYKIATRISKT').change();
$("#underlag-0-datum").val(todayDateString).change();
$("#underlag-0-hamtasFran").val("Centralsjukhuset").change();
$("#laggTillUnderlag").click();
$("#underlag-1-typ").val('string:FYSIOTERAPEUT').change();
$("#underlag-1-datum").val(todayDateString).change();
$("#underlag-1-hamtasFran").val("Centralsjukhuset").change();
$("#laggTillUnderlag").click();
$("#underlag-2-typ").val('string:LOGOPED').change();
$("#underlag-2-datum").val(todayDateString).change();
$("#underlag-2-hamtasFran").val("Centralsjukhuset").change();
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
$("#diagnosgrund").val("I tidernas begynnelse ställdes diagnosen för patienten på Sahlgrenska").change();
$("#nyBedomningDiagnosgrundYes").prop("checked", true);
$("#nyBedomningDiagnosgrundYes").click();
$("#diagnosForNyBedomning").val("G000").change();
$("#sjukdomsforlopp").val("Olika anledningar").change();
$("#funktionsnedsattningIntellektuell").val("Pga smärtan påverkas intellektet").change();
$("#funktionsnedsattningKommunikation").val("Får svårt att kommunicera då humöret inte är på topp").change();
$("#funktionsnedsattningKoncentration").val("Har svårt att koncentrera sig längre än 2 minuter").change();
$("#funktionsnedsattningPsykisk").val("Påverkar inget annat enligt patienten").change();
$("#funktionsnedsattningSynHorselTal").val("Har fått sämre syn med åldern").change();
$("#funktionsnedsattningBalansKoordination").val("Det gör ont").change();
$("#funktionsnedsattningAnnan").val("Ställer till det en hel del").change();
$("#aktivitetsbegransning").val("Patienten kan inte räcka upp armen. Stelhet i axelpartiet").change();
$("#avslutadBehandling").val("Rheabträning").change();
$("#pagaendeBehandling").val("Smärtlindring och akupunktur").change();
$("#planeradBehandling").val("För tidigt att säga något om planerade åtgärder").change();
$("#substansintag").val("Smärtlindring").change();
$("#medicinskaForutsattningarForArbete").val("Rehabträning ska ge resultat om 1 år").change();
$("#formagaTrotsBegransning").val("Laga mat går bra, men endast på fredagar").change().blur();
$("#forslagTillAtgard").val("En bra planering.").change().blur();
$("#ovrigt").val("Mycket material är hemligstämplat").change();
$("input[id*='kontaktMedFk']").click();
$("#anledningTillKontakt").val("Jag har hemligt material på mitt skrivbord som kan vara intressant för er").change();