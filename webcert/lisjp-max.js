var today = new Date();

function createDateString(today, daysToAdd) {
	if (daysToAdd) {
		today.setDate(new Date().getDate() + daysToAdd);
	}
	var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
	return todayDateString;
}

function createEnterEvent() {
	var e = jQuery.Event("keydown");
	e.which = 13;
	return e;
}

$("#checkbox_undersokningAvPatienten").click();
$("#checkbox_telefonkontaktMedPatienten").click();
$("#checkbox_journaluppgifter").click();
$("#checkbox_annatGrundForMU").click();
$("#annatGrundForMUBeskrivning").val('Journal from down below').change();
$("#sysselsattning-NUVARANDE_ARBETE").click();
$("#nuvarandeArbete").val("Blomplockare").change();
$("#sysselsattning-ARBETSSOKANDE").click();
$("#sysselsattning-FORALDRALEDIG").click();
$("#sysselsattning-STUDIER").click();
$("#arbetsmarknadspolitisktProgram").val("Plantskole rektor").change();



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
		waitForElementToDisplay("#S47-funktionsnedsattning-dropdown", 3000);
		clearInterval(checkForElement3);
	}
}, 1000);

function waitForElementToDisplay(selector, time) {
    if(document.querySelector(selector)!=null) {
        setTimeout(function() {
			$("#S47-funktionsnedsattning-dropdown").click();
			$("#S47-funktionsnedsattning-plate :input").each(function(i,item) {
				$(item).click();
			});
			$("#S47-aktivitetsbegransning-dropdown").click();
			$("#S47-aktivitetsbegransning-plate :input").each(function(i,item) {
				$(item).click();
			});
        }, 3000);
    } else {
        setTimeout(function() {
        	waitForElementToDisplay(selector, time);
        }, time);
    }
}


$("#funktionsnedsattning").val("Kan inte plocka blommor.").change();
$("#aktivitetsbegransning").val("Se föregående.").change();
$("#pagaendeBehandling").val("Smörjer med diverse krämer.").change();
$("#planeradBehandling").val("Mer krämer.").change();

$("#form_sjukskrivningar > div > div > div > label > input").val("40").change();

$("#sjukskrivningar-EN_FJARDEDEL-from").val(createDateString(today)).change();
$("#sjukskrivningar-EN_FJARDEDEL-tom").val(createDateString(today, 5)).change();
$("#sjukskrivningar-HALFTEN-from").val(createDateString(today, 6)).change();
$("#sjukskrivningar-HALFTEN-tom").val(createDateString(today, 11)).change();
$("#sjukskrivningar-TRE_FJARDEDEL-from").val(createDateString(today, 12)).change();
$("#sjukskrivningar-TRE_FJARDEDEL-tom").val(createDateString(today, 17)).change();
$("#sjukskrivningar-HELT_NEDSATT-from").val(createDateString(today, 18)).change();
$("#sjukskrivningar-HELT_NEDSATT-tom").val(createDateString(today, 366)).change();
$("#motiveringTillForLangSjukskrivning").val("Varför inte?").change();
$("#forsakringsmedicinsktBeslutsstod").val("Det krävdes mer kräm.").change();
$("#arbetstidsforlaggningYes").prop("checked", true).trigger("click");
$("#arbetstidsforlaggningMotivering").val("HejHejHej").change();
$("#arbetsresor").click();
$("#checkbox").prop("checked", true);
$("input[id*='_arbetsresor_4']").click();
$("input[id*='-ATER_X_ANTAL_DGR']").prop("checked", true).trigger("click");
$("#prognosDagarTillArbete-1-typ-NITTIO_DGR").click();
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
$("#ovrigt").val('!#$%&*+,-./0123456789:<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^)_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™šžŸ ¡¢£¤¥¦§¨©ª«¬­¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ)').change();
$("#kontaktMedFk").click();
$("#anledningTillKontakt").val("Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\n Visst ska det gå. Visst ska det gå.\n Visst\n ska\n det\n gå.\n Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå.").change();


