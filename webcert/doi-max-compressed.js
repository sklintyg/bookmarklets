function clickDropdownBoxYearMonth(t){"year"===t?$("#dodsdatum-year > div.ui-select-match > span > span.ui-select-match-text.pull-left > span").click():"month"===t&&$("#dodsdatum-month > div.ui-select-match > span > span.ui-select-match-text.pull-left > span").click()}function selectInDropdownYearMonth(t,e){"year"===e?$("#dodsdatum-year > ul > li > div").each(function(){var e=$(this).attr("id");void 0!==e&&parseInt(e.substr(e.length-1,e.length))===t&&$("#"+e).click()}):"month"===e&&$("#dodsdatum-month > ul > li > div").each(function(){var e=$(this).attr("id");void 0!==e&&parseInt(e.substr(e.length-1,e.length))===t&&$("#"+e).click()})}function clickDropdownBox(t,e){t=void 0!==t?t:"",t=ddMarker=e?"#orsak-multi-"+t+"-specifikation":"#orsak-"+t+"-specifikation",e?$(t+" > div.ui-select-match > span").click():$(t+" > div.ui-select-match > span > span.ui-select-match-text.pull-left > span").click()}function selectInDropdown(t){$(ddMarker+" > ul > li > div").each(function(){var e=$(this).attr("id");void 0!==e&&parseInt(e.substr(e.length-1,e.length))===t&&$("#"+e).click()})}var today=new Date,todayDateString=today.getFullYear()+"-"+("0"+(today.getMonth()+1)).slice(-2)+"-"+("0"+today.getDate()).slice(-2);$("#identitetStyrkt").val("AnhÃ¶rig").change(),$("#land").val("Mordor").change(),$("#dodsdatumSakertNo").prop("checked",!0).trigger("click"),$("#form_antraffatDodDatum > div > div:nth-child(2) > span > span > input").val(todayDateString).change(),$("#dodsplatsKommun").val("Vattnadal").change(),$("#dodsplatsBoende-ORDINART_BOENDE").prop("checked",!0).trigger("click"),$("#barnNo").prop("checked",!0).trigger("click"),clickDropdownBoxYearMonth("year"),selectInDropdownYearMonth(2,"year"),clickDropdownBoxYearMonth("month"),selectInDropdownYearMonth(5,"month");var ddMarker="";clickDropdownBox(void 0,!1),selectInDropdown(3),clickDropdownBox(0,!1),selectInDropdown(1),clickDropdownBox(1,!1),selectInDropdown(2),clickDropdownBox(2,!1),selectInDropdown(3),clickDropdownBox(0,!0),selectInDropdown(3),clickDropdownBox(1,!0),selectInDropdown(2),clickDropdownBox(2,!0),selectInDropdown(1),clickDropdownBox(3,!0),selectInDropdown(3),clickDropdownBox(4,!0),selectInDropdown(1),clickDropdownBox(5,!0),selectInDropdown(2),clickDropdownBox(6,!0),selectInDropdown(1),clickDropdownBox(7,!0),selectInDropdown(2),$("#orsak--beskrivning").val("HjÃ¤rtat slutade slÃ¥.").change(),$("#orsak--datum").val(todayDateString).change(),$("#orsak-0-beskrivning").val("Att hjÃ¤rtat stannade.").change(),$("#orsak-0-datum").val(todayDateString).change(),$("#orsak-0-specifikation > div.ui-select-match > span").click(),$("#orsak-1-beskrivning").val("NÃ¥got annat.").change(),$("#orsak-1-datum").val(todayDateString).change(),$("#orsak-2-beskrivning").val("Ytterligare nÃ¥got annat.").change(),$("#orsak-2-datum").val(todayDateString).change(),$("#orsak-multi-0-beskrivning").val("Denguefeber").change(),$("#orsak-multi-0-datum").val(todayDateString).change(),$("#operation-JA").prop("checked",!0).trigger("click"),$("#datepicker_operationDatum").val(todayDateString).change(),$("#operationAnledning").val("Det behÃ¶vdes").change(),$("#forgiftningYes").prop("checked",!0).trigger("click"),$("#forgiftningOrsak-OKLART").prop("checked",!0).trigger("click"),$("#datepicker_forgiftningDatum").val(todayDateString).change(),$("#forgiftningUppkommelse").val("Detta Ã¤r en kort text.").change(),$("#grunder-UNDERSOKNING_FORE_DODEN").click(),$("#grunder-UNDERSOKNING_EFTER_DODEN").click(),$("#grunder-KLINISK_OBDUKTION").click(),$("#grunder-RATTSMEDICINSK_OBDUKTION").click(),$("#grunder-RATTSMEDICINSK_BESIKTNING").click();