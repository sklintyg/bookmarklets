var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);
var week = todayDateString +7;


function createEnterEvent() {
	var e = jQuery.Event("keydown");
	e.which = 13;
	return e;
}

$("input[id*='date_undersokningAvPatienten_']").click();
$("input[id*='_date_journaluppgifter_']").click();
$("input[id*='_date_telefonkontaktMedPatienten_']").click();
$("input[id*='_date_annatGrundForMU_']").click();
$("#annatGrundForMUBeskrivning").val('Journal from down below').change();
$("#sysselsattning-NUVARANDE_ARBETE").click();
$("#nuvarandeArbete").val("Blomplockare").change();
$("#sysselsattning-ARBETSSOKANDE").click();
$("#sysselsattning-FORALDRALEDIG").click();
$("#sysselsattning-STUDIER").click();
$("#sysselsattning-PROGRAM").click();
$("#arbetsmarknadspolitisktProgram").val("Plantskole rektor").change();

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
$("#funktionsnedsattning").val("Kan inte plocka blommor.").change();
$("#aktivitetsbegransning").val("Se föregående.").change();
$("#pagaendeBehandling").val("Smörjer med diverse krämer.").change();
$("#planeradBehandling").val("Mer krämer.").change();
$("#sjukskrivningar-HELT_NEDSATT-from").val(todayDateString).change();
$("#sjukskrivningar-HELT_NEDSATT-tom").val(week).change();
$("#forsakringsmedicinsktBeslutsstod").val("Det krävdes mer kräm.").change();
$("#arbetsresorYes").prop("checked", true).trigger("click");
$("input[id*='-ATER_X_ANTAL_DGR']").prop("checked", true).trigger("click");
$("#prognosDagarTillArbete-1-typ > div.ui-select-match > span > span.ui-select-match-text.pull-left > span").click();
$("[id$=-3]").click();  
$("#arbetslivsinriktadeAtgarder-ARBETSTRANING").click();
$("#arbetslivsinriktadeAtgarderBeskrivning").val("Träna på att arbeta.").change();
$("#arbetslivsinriktadeAtgarder-ARBETSANPASSNING").click();
$("#arbetslivsinriktadeAtgarder-SOKA_NYTT_ARBETE").click();
$("#arbetslivsinriktadeAtgarder-BESOK_ARBETSPLATS").click();
$("#arbetslivsinriktadeAtgarder-ERGONOMISK").click();
$("#arbetslivsinriktadeAtgarder-HJALPMEDEL").click();
$("#arbetslivsinriktadeAtgarder-KONFLIKTHANTERING").click();
$("#arbetslivsinriktadeAtgarder-KONTAKT_FHV").click();
$("#arbetslivsinriktadeAtgarder-OMFORDELNING").click();
$("#arbetslivsinriktadeAtgarder-OVRIGA_ATGARDER").click();
$("#arbetslivsinriktadeAtgarderAktuelltBeskrivning").val("Patienten behöver hjälp med allt.").change();
$("#ovrigt").val("Allt är sagt.").change();
$("input[id*='_checkbox-inline_kontaktMedFk_0']").click();
$("#anledningTillKontakt").val("Därför.").change();
$("#tillaggsfragor[0]\\.svar").val("test").change();