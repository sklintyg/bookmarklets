var today = new Date();
var todayDateString = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2)  + "-" + ("0" + today.getDate()).slice(-2);

$("#identitetStyrkt").val("AnhÃ¶rig").change();
$("#land").val("Mordor").change();
$("#dodsdatumSakertNo").prop("checked", true).trigger("click");
$("#form_antraffatDodDatum > div > div:nth-child(2) > span > span > input").val(todayDateString).change();
$("#dodsplatsKommun").val("Vattnadal").change();
$("#dodsplatsBoende-ORDINART_BOENDE").prop("checked", true).trigger("click");
$("#barnNo").prop("checked", true).trigger("click");

function clickDropdownBox(index) {
    if("year" === index) {
        $("#dodsdatum-year > div.ui-select-match > span > span.ui-select-match-text.pull-left > span").click();
    } else if("month" === index) {
		$("#dodsdatum-month > div.ui-select-match > span > span.ui-select-match-text.pull-left > span").click();
    }
}

function selectInDropdown(index, type) {
	if("year" === type) {
		$("#dodsdatum-year > ul > li > div").each(function() {
			var ddElementId = $(this).attr("id");
			if (ddElementId !== undefined) {
				if (parseInt(ddElementId.substr((ddElementId.length - 1), ddElementId.length)) === index) {
					$("#" + ddElementId).click();
				}
			}
		});
	} else if("month" === type) {
		$("#dodsdatum-month > ul > li > div").each(function() {
			var ddElementId = $(this).attr("id");
			if (ddElementId !== undefined) {
				if (parseInt(ddElementId.substr((ddElementId.length - 1), ddElementId.length)) === index) {
					$("#" + ddElementId).click();
				}
			}
		});
	}

}

clickDropdownBox("year");
selectInDropdown(2, "year");
clickDropdownBox("month");
selectInDropdown(5, "month");

$("#explosivImplantatYes").prop("checked", true).trigger("click");
$("#explosivAvlagsnatYes").prop("checked", true).trigger("click");
$("#undersokningYttre-JA").prop("checked", true).trigger("click");
$("#polisanmalanYes").prop("checked", true).trigger("click");