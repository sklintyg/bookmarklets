var today = new Date();

function createDateString(today, daysToAdd) {
	if(daysToAdd) {
		today.setDate(new Date().getDate() + daysToAdd);
	}
	var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);
	return todayDateString;
}
$("#diagnoseCode-0").val('S47').change();

var firstFound = false;
var checkForElement1 = setInterval(function() {
   if ($("li[id*='option-0']").children("a:contains('S47')").length && firstFound === false) {
			$("li[id*='option-0']").click();
			firstFound = true;
   }
	 if ($("li[id*='option-0']").children("a:contains('S47')").length === 0 && firstFound === true) {
		 $("#laggTillDiagnos").click().blur();
		 $("#diagnoseCode-1").val('F000').change();
		 clearInterval(checkForElement1);
	 }
}, 1000);

var secondFound = false;
var checkForElement2 = setInterval(function() {
   if ($("li[id*='option-0']").children("a:contains('F000')").length && secondFound === false) {
			$("li[id*='option-0']").click();
			secondFound = true;
   }
	 if ($("li[id*='option-0']").children("a:contains('F000')").length === 0 && secondFound === true) {
		 $("#laggTillDiagnos").click().blur();
		 $("#diagnoseCode-2").val('M659B').change();
		 clearInterval(checkForElement2);
	 }
}, 1000);

var checkForElement3 = setInterval(function() {
   if ($("li[id*='option-0']").children("a:contains('M659B')").length) {
			$("li[id*='option-0']").children("a:contains('M659B')").click();
      clearInterval(checkForElement3);
   }
}, 1000);

$("input[id*='_avstangningSmittskydd_0']").click();
$("input[id*='_sjukskrivningar_sjukskrivningar_']").val("40").change();
$("#sjukskrivningar-EN_FJARDEDEL-from").val(createDateString(today)).change();
$("#sjukskrivningar-EN_FJARDEDEL-tom").val(createDateString(today, 5)).change();
$("#sjukskrivningar-HALFTEN-from").val(createDateString(today, 6)).change();
$("#sjukskrivningar-HALFTEN-tom").val(createDateString(today, 11)).change();
$("#sjukskrivningar-TRE_FJARDEDEL-from").val(createDateString(today, 12)).change();
$("#sjukskrivningar-TRE_FJARDEDEL-tom").val(createDateString(today, 17)).change();
$("#sjukskrivningar-HELT_NEDSATT-from").val(createDateString(today, 18)).change();
$("#sjukskrivningar-HELT_NEDSATT-tom").val(createDateString(today, 23)).change();
$("#ovrigt").val("Allt klart! Försvinn!").change();