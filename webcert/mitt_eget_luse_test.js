var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);

$("input[id*='date_undersokningAvPatienten_']").click();
$("#form_kannedomOmPatient > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > input:nth-child(1)").val(todayDateString).change();
$("input[id*='-toggle']").click();
$("#diagnoseCode-0").val('S47').change();

$("#underlagFinnsNo").prop("checked", true);
$("#underlagFinnsNo").click();
$("#sjukdomsforlopp").val("Har blivit sjuk, är nu ännu sjukare");
$("#sjukdomsforlopp").change();
$("#diagnoseCode").val("A00").change().blur();
$("#diagnoseDescription").val("Kolera").change().blur();
$("#diagnosgrund").val("I hemmet").change();
$("#nyBedomningDiagnosgrundNo").prop("checked", true);
$("#nyBedomningDiagnosgrundNo").click();
$("input[id*='_funktionsnedsattningIntellektuell_']").click();
$("#funktionsnedsattningIntellektuell").val("instabil").change();
$("input[id*='_funktionsnedsattningKommunikation_']").click();
$("#funktionsnedsattningKommunikation").val("Mycket liten måttligt stor nedsättning").change();
$("#aktivitetsbegransning").val("Kan knappt röra sig").change();
$("#medicinskaForutsattningarForArbete").val("I det närmaste obefintlig").change();

var firstFound = false;
var checkForElement1 = setInterval(function() {
   if ($("li[id*='option-0']").children("a:contains('S47')").length && firstFound === false) {
			$("li[id*='option-0']").click();
			firstFound = true;
   }
}, 1000);

$("#grundData\\.skapadAv\\.vardenhet\\.postadress").val("Knäsvagstigen 2").change();
$("#grundData\\.skapadAv\\.vardenhet\\.postnummer").val("12345").change();
$("#grundData\\.skapadAv\\.vardenhet\\.postort").val("Blindtarmsboda").change();
$("#grundData\\.skapadAv\\.vardenhet\\.telefonnummer").val("0708070807").change();
