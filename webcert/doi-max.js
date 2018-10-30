var today = new Date();

var todayDateString = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2);

//test

$("#identitetStyrkt").val("Anhörig").change();

$("#land").val("Mordor").change();

$("#dodsdatumSakertNo").prop("checked", true).trigger("click");

$("#datepicker_antraffatDodDatum").val(todayDateString).change();

$("#dodsplatsKommun").val("Vattnadal").change();

$("#dodsdatum-year-selected-item-label").click();

$("#dodsdatum-year-2018").click();

$("#dodsdatum-month-selected-item-label").click();

$("#dodsdatum-month-04").click();

$("#dodsplatsBoende-ORDINART_BOENDE").prop("checked", true).trigger("click");

$("#barnNo").prop("checked", true).trigger("click");



$("#orsak--specifikation-KRONISK").click();
$("#orsak-0-specifikation-PLOTSLIG").click();
$("#orsak-1-specifikation-UPPGIFT_SAKNAS").click();
$("#orsak-2-specifikation-PLOTSLIG").click();
$("#orsak-multi-0-specifikation-UPPGIFT_SAKNAS").click();
$("#form_bidragandeSjukdomar > div > button").click();
$("#orsak-multi-1-beskrivning").val("Nageltrång").change();
$("#orsak-multi-1-datum").val(todayDateString).change();
$("#orsak-multi-1-specifikation-PLOTSLIG").click();


$("#orsak--beskrivning").val("Hjärtat slutade slå.").change();

$("#orsak--datum").val(todayDateString).change();

$("#orsak-0-beskrivning").val("Att hjärtat stannade.").change();

$("#orsak-0-datum").val(todayDateString).change();

$("#orsak-0-specifikation > div.ui-select-match > span").click();

$("#orsak-1-beskrivning").val("Något annat.").change();

$("#orsak-1-datum").val(todayDateString).change();

$("#orsak-2-beskrivning").val("Ytterligare något annat.").change();

$("#orsak-2-datum").val(todayDateString).change();

$("#orsak-multi-0-beskrivning").val("Denguefeber").change();

$("#orsak-multi-0-datum").val(todayDateString).change();

$("#operation-JA").prop("checked", true).trigger("click");

$("#datepicker_operationDatum").val(todayDateString).change();

$("#operationAnledning").val("!#$%&*+,-./0123456789:<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^)_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™šžŸ ¡¢£¤¥¦§¨©ª«¬­¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ)").change();

$("#forgiftningYes").prop("checked", true).trigger("click");

$("#forgiftningOrsak-OKLART").prop("checked", true).trigger("click");

$("#datepicker_forgiftningDatum").val(todayDateString).change();

$("#forgiftningUppkommelse").val("Detta är en kort text.").change();

$("#grunder-UNDERSOKNING_FORE_DODEN").click();

$("#grunder-UNDERSOKNING_EFTER_DODEN").click();

$("#grunder-KLINISK_OBDUKTION").click();

$("#grunder-RATTSMEDICINSK_OBDUKTION").click();

$("#grunder-RATTSMEDICINSK_BESIKTNING").click();