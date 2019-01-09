var today = new Date();

function createDateString(today, daysToAdd) {
	if (daysToAdd) {
		today.setDate(new Date().getDate() + daysToAdd);
	}
	var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
	return todayDateString;
}

$("#checkbox_undersokningsDatum").click();
$("#checkbox_annatDatum").click();
$("#annatBeskrivning").val("Baseras på min goda vilja.").change();
$("#arbetsmarknadspolitisktProgram-medicinskBedomning").val("Ett djäkligt bra program.").change();
$("#arbetsmarknadspolitisktProgram\\.omfattning-DELTID").prop("checked", true).trigger("click");
$("#arbetsmarknadspolitisktProgram-omfattningDeltid").val("12").change();
$("#funktionsnedsattning").val("Blånagel.").change();
$("#aktivitetsbegransning").val("Kan inte dansa balett.").change();
$("#harForhinderYes").prop("checked", true).trigger("click");
$("#sjukfranvaro-1-niva").val("35").change();
$("#sjukfranvaro-1-from").val(createDateString(today)).change();
$("#sjukfranvaro-1-tom").val(createDateString(today, 5)).change();
$("#sjukfranvaro-addRow").click();
$("#sjukfranvaro-2-niva").val("30").change();
$("#sjukfranvaro-2-from").val(createDateString(today, 6)).change();
$("#sjukfranvaro-2-tom").val(createDateString(today, 11)).change();
$("#sjukfranvaro-addRow").click();
$("#sjukfranvaro-3-niva").val("25").change();
$("#sjukfranvaro-3-from").val(createDateString(today, 12)).change();
$("#sjukfranvaro-3-tom").val(createDateString(today, 17)).change();
$("#begransningSjukfranvaro-kanBegransasYes").prop("checked", true).trigger("click");
$("#begransningSjukfranvaro-beskrivning").val("Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\n Visst ska det gå. Visst ska det gå.\n Visst\n ska\n det\n gå.\n Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå. Visst ska det gå.\nVisst ska det gå. Visst ska det gå. Visst ska det gå.Visst ska det gå. Visst ska det gå. Visst ska det gå.").change();
$("#prognosAtergang\\.prognos-ATERGA_MED_ANPASSNING").prop("checked", true).trigger("click");
$("#prognosAtergang-anpassningar").val("!#$%&*+,-./0123456789:<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^)_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™šžŸ ¡¢£¤¥¦§¨©ª«¬­¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ)").change();
