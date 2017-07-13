var today = new Date();

function createDateString(today, daysToAdd) {
	if(daysToAdd) {
		today.setDate(new Date().getDate() + daysToAdd);
	}
	var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);
	return todayDateString;
}

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
$("#funktionsnedsattning").val("Kan inte plocka blommor.").change();
$("#aktivitetsbegransning").val("Se föregående.").change();
$("#pagaendeBehandling").val("Smörjer med diverse krämer.").change();
$("#planeradBehandling").val("Mer krämer.").change();
$("input[id*='_sjukskrivningar_sjukskrivningar_']").val("35.5").change();
$("#sjukskrivningar-EN_FJARDEDEL-from").val(createDateString(today)).change();
$("#sjukskrivningar-EN_FJARDEDEL-tom").val(createDateString(today, 5)).change();
$("#sjukskrivningar-HALFTEN-from").val(createDateString(today, 6)).change();
$("#sjukskrivningar-HALFTEN-tom").val(createDateString(today, 11)).change();
$("#sjukskrivningar-TRE_FJARDEDEL-from").val(createDateString(today, 12)).change();
$("#sjukskrivningar-TRE_FJARDEDEL-tom").val(createDateString(today, 17)).change();
$("#sjukskrivningar-HELT_NEDSATT-from").val(createDateString(today, 18)).change();
$("#sjukskrivningar-HELT_NEDSATT-tom").val(createDateString(today, 366)).change();
$("#forsakringsmedicinsktBeslutsstod").val("Det krävdes mer kräm.").change();
$("#arbetstidsforlaggningYes").prop("checked", true).trigger("click");
$("#arbetstidsforlaggningMotivering").val("En massa text En massa text En massa text En massa text En massa text.     
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.   
	En massa text En massa text En massa text En massa text En massa text.     En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa textEn massa text En massa text En massa text En massa text En massa text.     
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.    En massa text En massa text En massa text En massa text En massa text.    
	En massa text En massa text En massa text En massa text En massa text.").change();
$("input[id*='_arbetsresor_4']").click();
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
$("textarea[id*='tillaggsfragor[0]']").val("Det kan diskuteras.").change();
$("textarea[id*='tillaggsfragor[1]']").val("Jag gillar mer den sneda sorten.").change();