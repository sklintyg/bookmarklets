$("#nuvarandeArbete").val("textertextertexter").change();
$("#onskarFormedlaDiagnosYes").prop("checked", true).trigger("click");
$("#diagnoseCode-0").val("S47").change();

var firstFound = false;
var checkForElement1 = setInterval(function() {
	if ($("#diagnoseCode-0").children("a:contains('S47')").length && firstFound === false) {
		$("#diagnoseCode-0']").click().blur();
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
		clearInterval(checkForElement3);
	}
}, 1000);

$("#S47-funktionsnedsattning-dropdown").click();
$("#S47-funktionsnedsattning-plate > div.kategori-content > div > ue-icf-kategori:nth-child(5) > div > div > input").click();
$("#S47-funktionsnedsattning-plate > div.kategori-footer > input.btn.btn-success.kategori-add").click();


