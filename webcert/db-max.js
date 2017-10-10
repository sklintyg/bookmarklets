var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);


$("#identitetStyrkt").val("Körkort").change();
$("#dodsdatumSakertYes").prop("checked", true).trigger("click");
$("#form_dodsdatum").val(todayDateString).change();
$("#form_dodsdatum > div > div:nth-child(2) > span > span > input").val(todayDateString).change();
$("#dodsplatsKommun").val("Hades Kommun").change();
$("#dodsplatsBoende-SJUKHUS").prop("checked", true).trigger("click");
$("#barnYes").prop("checked", true).trigger("click");
$("#explosivImplantatYes").prop("checked", true).trigger("click");
$("#explosivAvlagsnatNo").prop("checked", true).trigger("click");
