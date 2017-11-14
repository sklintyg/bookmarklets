var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);
var ddMarker = "";

$("#identitetStyrkt").val("Anhörig").change();
$("#land").val("Mordor").change();
$("#dodsdatumSakertNo").prop("checked", true).trigger("click");
$("#dodsdatum-year").val("2017").change();
$("#dodsdatum-month").val("00").change();
$("#dodsdatum-day").val("00").change();
$("#form_antraffatDodDatum > div > div:nth-child(2) > span > span > input").val(todayDateString).change();
$("#dodsplatsKommun").val("Vattnadal").change();
$("#dodsplatsBoende-ORDINART_BOENDE").prop("checked", true).trigger("click");
$("#barnNo").prop("checked", true).trigger("click");
function clickDropdownBox(index, multiOrsak) {
	index = (index !== undefined) ? index : '';
	index = ddMarker = (multiOrsak) ? `#orsak-multi-${index}-specifikation` : `#orsak-${index}-specifikation`;
	if (multiOrsak) {
		$(`${index} > div.ui-select-match > span`).click();
	} else {
		$(`${index} > div.ui-select-match > span > span.ui-select-match-text.pull-left > span`).click();
	}
}

function selectInDropdown(index) {
	$(`${ddMarker} > ul > li > div`).each(function() {
		var ddElementId = $(this).attr("id");
		if (ddElementId !== undefined) {
			if (parseInt(ddElementId.substr((ddElementId.length - 1), ddElementId.length)) === index) {
				$(`#${ddElementId}`).click();
			}
		}
	});
}

function maximizeMultiFields() {
	for (var i = 0; i <= 7; i++) {
		$('#form_bidragandeSjukdomar > div > button').click();
	}
	setTimeout(function() {
		console.log("Sleep 500 ms");
	}, 500);

}

maximizeMultiFields();

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


$("#orsak--beskrivning").val("HjÃ¤rtat slutade slÃ¥.").change();
$("#orsak--datum").val(todayDateString).change();
$("#orsak-0-beskrivning").val("Att hjÃ¤rtat stannade.").change();
$("#orsak-0-datum").val(todayDateString).change();
$("#orsak-0-specifikation > div.ui-select-match > span").click();
$("#orsak-1-beskrivning").val("NÃ¥got annat.").change();
$("#orsak-1-datum").val(todayDateString).change();
$("#orsak-2-beskrivning").val("Ytterligare nÃ¥got annat.").change();
$("#orsak-2-datum").val(todayDateString).change();
$("#orsak-multi-0-beskrivning").val("Denguefeber").change();
$("#orsak-multi-0-datum").val(todayDateString).change();
$("#orsak-multi-1-beskrivning").val("Nageltrång").change();
$("#orsak-multi-1-datum").val(todayDateString).change();
$("#orsak-multi-2-beskrivning").val("Kluvna hårtoppar").change();
$("#orsak-multi-2-datum").val(todayDateString).change();
$("#orsak-multi-3-beskrivning").val("Tummen mitt i handen").change();
$("#orsak-multi-3-datum").val(todayDateString).change();
$("#orsak-multi-4-beskrivning").val("Lyssnat på Dansband").change();
$("#orsak-multi-4-datum").val(todayDateString).change();
$("#orsak-multi-5-beskrivning").val("Blå tumme").change();
$("#orsak-multi-5-datum").val(todayDateString).change();
$("#orsak-multi-6-beskrivning").val("nåt hemskt").change();
$("#orsak-multi-6-datum").val(todayDateString).change();
$("#orsak-multi-7-beskrivning").val("Pest och pina").change();
$("#orsak-multi-7-datum").val(todayDateString).change();
$("#operation-JA").prop("checked", true).trigger("click");
$("#form_operationDatum > div > div:nth-child(2) > span > span > input").val(todayDateString).change();
$("#operationAnledning").val("Det behövdes").change();
$("#forgiftningYes").prop("checked", true).trigger("click");
$("#forgiftningOrsak-OKLART").prop("checked", true).trigger("click");
$("#form_forgiftningDatum > div > div:nth-child(2) > span > span > input").val(todayDateString).change();
$("#forgiftningUppkommelse").val(`Detta blir en lång text. Detta blir en lång text. Detta blir en lång text. 
Detta blir en lång text. Detta blir en lång text. Detta blir en lång text. Detta blir en lång text. 
Detta blir en lång text. Detta blir en lång text. Detta blir en lång text. 
Detta blir en lång text. Detta blir en lång text. Detta blir en lång text. Detta blir en lång text. Detta blir en lång text. 
Detta blir en lång.`).change();
$("#grunder-UNDERSOKNING_FORE_DODEN").click();
$("#grunder-UNDERSOKNING_EFTER_DODEN").click();
$("#grunder-KLINISK_OBDUKTION").click();
$("#grunder-RATTSMEDICINSK_OBDUKTION").click();
$("#grunder-RATTSMEDICINSK_BESIKTNING").click();