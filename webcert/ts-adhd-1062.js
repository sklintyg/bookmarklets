var today = new Date();
var todayDateString = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2)  + "-" + ("0" + today.getDate()).slice(-2);

$('#intygAvser\\.behorigheter-IAV11').click();
$('#intygAvser\\.behorigheter-IAV12').click();
$('#intygAvser\\.behorigheter-IAV13').click();
$('#intygAvser\\.behorigheter-IAV14').click();
$('#intygAvser\\.behorigheter-IAV15').click();
$('#intygAvser\\.behorigheter-IAV16').click();
$('#intygAvser\\.behorigheter-IAV17').click();
$('#intygAvser\\.behorigheter-IAV1').click();
$('#intygAvser\\.behorigheter-IAV2').click();
$('#intygAvser\\.behorigheter-IAV3').click();
$('#intygAvser\\.behorigheter-IAV4').click();
$('#intygAvser\\.behorigheter-IAV5').click();
$('#intygAvser\\.behorigheter-IAV6').click();
$('#intygAvser\\.behorigheter-IAV7').click();
$('#intygAvser\\.behorigheter-IAV8').click();
$('#intygAvser\\.behorigheter-IAV9').click();
$('#idKontroll\\.typ-ID_KORT').prop('checked', true).trigger('click');
$(('#diagnosRegistrering\\.typ-DIAGNOS_KODAD')).prop('checked', true).trigger('click');
$("#diagnoseCode-0").val("S47").change();

var firstFound = false;
var checkForElement1 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('S47')").length && firstFound === false) {
		$("li[id*='option-0']").click();
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
	if ($("li[id*='option-0']").children("a:contains('M659B')").length && secondFound === false) {
		$("li[id*='option-0']").click();
		secondFound = true;
	}
	if ($("li[id*='option-0']").children("a:contains('M659B')").length === 0 && secondFound === true) {
		$("#laggTillDiagnos").click().blur();
		$("#diagnoseCode-3").val('W58').change();
		clearInterval(checkForElement3);
	}
}, 1000);

var checkForElement4 = setInterval(function() {
	if ($("li[id*='option-0']").children("a:contains('W58')").length) {
		$("li[id*='option-0']").children("a:contains('W58')").click().blur();
		waitForElementToDisplay("#S47-funktionsnedsattning-dropdown", 3000);
		clearInterval(checkForElement3);
	}
}, 1000);



function waitForElementToDisplay(selector, time) {
    if(document.querySelector(selector)!=null) {
        setTimeout(function() {
			$("#S47-funktionsnedsattning-dropdown").click();
			$("#S47-funktionsnedsattning-plate :input").each(function(i,item) {
				$(item).click();
			});
			$("#S47-aktivitetsbegransning-dropdown").click();
			$("#S47-aktivitetsbegransning-plate :input").each(function(i,item) {
				$(item).click();
			});
        }, 3000);
    } else {
        setTimeout(function() {
        	waitForElementToDisplay(selector, time);
        }, time);
    }
}

$('#diagnosKodad-0--diagnosArtal').val('2019').change();
$('#diagnosKodad-1--diagnosArtal').val('2018').change();
$('#diagnosKodad-2--diagnosArtal').val('2017').change();
$('#diagnosKodad-3--diagnosArtal').val('2017').change();
$('#lakemedelsbehandling-harHaftYes').prop('checked', true).trigger('click');
$('#lakemedelsbehandling-pagarYes').prop('checked', true).trigger('click');
$('#lakemedelsbehandling-aktuell').val('Patienten har tittat mycket på Days of our lives.').change();
$('#lakemedelsbehandling-pagattYes').prop('checked', true).trigger('click');
$('#lakemedelsbehandling-effektYes').prop('checked', true).trigger('click');
$('#lakemedelsbehandling-foljsamhetYes').prop('checked', true).trigger('click');
$('#bedomningAvSymptom').val('Patienten mår väl lite sådär.').change();
$('#prognosTillstand\\.typ-JA').prop('checked', true).trigger('click');
$('#ovrigaKommentarer').val('Inget övrigt att säga.').change();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR12').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR13').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR14').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR15').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR16').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR17').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR18').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR1').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR2').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR3').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR4').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR5').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR6').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR7').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR8').click();
$('#bedomning\\.uppfyllerBehorighetskrav-VAR9').click();
