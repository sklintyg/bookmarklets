var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);


$("#identitetStyrkt").val("Körkort").change();
$("#dodsdatumSakertNo").prop("checked", true).trigger("click");
$("#dodsdatum-year").val("1900").change();
$("#dodsdatum-month").val("01").change();
$("#dodsdatum-day").val("01").change();
$("#form_antraffatDodDatum > div > div:nth-child(2) > span > span > input").val(todayDateString).change();
$("#dodsplatsKommun").val("Hades Kommun").change();
$("#dodsplatsBoende-SJUKHUS").prop("checked", true).trigger("click");
$("#barnYes").prop("checked", true).trigger("click");
$("#explosivImplantatYes").prop("checked", true).trigger("click");
$("#explosivAvlagsnatNo").prop("checked", true).trigger("click");
$("#undersokningYttre-UNDERSOKNING_GJORT_KORT_FORE_DODEN").prop("checked", true).trigger("click");
$("#form_undersokningDatum > div > div:nth-child(2) > span > span > input").val(todayDateString).change();
$("#polisanmalanYes").prop("checked", true).trigger("click");
