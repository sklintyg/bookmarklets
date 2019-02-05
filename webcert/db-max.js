var today = new Date();
var todayDateString = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2)  + "-" + ("0" + today.getDate()).slice(-2);
$("#identitetStyrkt").val("Lite text.").change();
$("#dodsdatumSakertNo").prop("checked", true).trigger("click");
$("#datepicker_antraffatDodDatum").val(todayDateString).change();
$("#dodsplatsKommun").val("*3*5*7*9*12*15*18*21*24*27*30*33*36*39*42*45*48*51*54*57*60*63*66*69*72*75*78*81*84*87*90*93*96*100*").change();
$("#dodsdatum-year-selected-item-label").click();
$("#dodsdatum-year-2018").click();
$("#dodsdatum-month-selected-item-label").click();
$("#dodsdatum-month-04").click();
$("#dodsplatsBoende-ORDINART_BOENDE").prop("checked", true).trigger("click");
$("#barnNo").prop("checked", true).trigger("click");
$("#explosivImplantatYes").prop("checked", true).trigger("click");
$("#explosivAvlagsnatYes").prop("checked", true).trigger("click");
$("#undersokningYttre-UNDERSOKNING_GJORT_KORT_FORE_DODEN").prop("checked", true).trigger("click");
$("#datepicker_undersokningDatum").val(todayDateString).change();
$("#polisanmalanYes").prop("checked", true).trigger("click");


