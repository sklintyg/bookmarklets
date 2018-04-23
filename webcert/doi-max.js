var today = new Date();
var todayDateString = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2);

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


var ddMarker = "";

function clickDropdownBox(index, multiOrsak) {
    index = (index !== undefined) ? index : "";
    index = ddMarker = (multiOrsak) ? "#orsak-multi-" + index + "-specifikation" : "#orsak-" + index + "-specifikation";
    if (multiOrsak) {
        $(index + " > div.ui-select-match > span").click();
    } else {
        $(index + " > div.ui-select-match > span > span.ui-select-match-text.pull-left > span").click();
    }
}

function selectInDropdown(index) {
    $(ddMarker + " > ul > li > div").each(function() {
        var ddElementId = $(this).attr("id");
        if (ddElementId !== undefined) {
            if (parseInt(ddElementId.substr((ddElementId.length - 1), ddElementId.length)) === index) {
                $("#" + ddElementId).click();
            }
        }
    });
}

clickDropdownBox(undefined, false);
selectInDropdown(3);
clickDropdownBox(0, false);
selectInDropdown(1);
clickDropdownBox(1, false);
selectInDropdown(2);
clickDropdownBox(2, false);
selectInDropdown(3);

clickDropdownBox(0, true);
selectInDropdown(3);
clickDropdownBox(1, true);
selectInDropdown(2);
clickDropdownBox(2, true);
selectInDropdown(1);
clickDropdownBox(3, true);
selectInDropdown(3);
clickDropdownBox(4, true);
selectInDropdown(1);
clickDropdownBox(5, true);
selectInDropdown(2);
clickDropdownBox(6, true);
selectInDropdown(1);
clickDropdownBox(7, true);
selectInDropdown(2);


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
$("#operationAnledning").val("Det behövdes").change();
$("#forgiftningYes").prop("checked", true).trigger("click");
$("#forgiftningOrsak-OKLART").prop("checked", true).trigger("click");
$("#datepicker_forgiftningDatum").val(todayDateString).change();
$("#forgiftningUppkommelse").val("Detta är en kort text.").change();
$("#grunder-UNDERSOKNING_FORE_DODEN").click();
$("#grunder-UNDERSOKNING_EFTER_DODEN").click();
$("#grunder-KLINISK_OBDUKTION").click();
$("#grunder-RATTSMEDICINSK_OBDUKTION").click();
$("#grunder-RATTSMEDICINSK_BESIKTNING").click();