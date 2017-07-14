var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  + '-' + ('0' + today.getDate()).slice(-2);

$("input[id*='basedOnExamination']").click();
$("input[id*='basedOnPhoneContact']").click();
$("input[id*='basedOnJournal']").click();
$("input[id*='basedOnOther']").click();
$("#informationBasedOnOtherText").val('Journal from down under').change();
$("#diagnoseCode").val('S47').change();

var firstFound = false;
var checkForElement1 = setInterval(function() {
   if ($("li[id*='option-0']").children("a:contains('S47')").length && firstFound === false) {
			$("li[id*='option-0']").click();
			firstFound = true;
   }
	 if ($("li[id*='option-0']").children("a:contains('S47')").length === 0 && firstFound === true) {
		 $("#laggTillDiagnos").click().blur();
		 $("#diagnoseCodeOpt1").val('F000').change();
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
		 $("#diagnoseCodeOpt2").val('M659B').change();
		 clearInterval(checkForElement2);
	 }
}, 1000);

var checkForElement3 = setInterval(function() {
   if ($("li[id*='option-0']").children("a:contains('M659B')").length) {
			$("li[id*='option-0']").children("a:contains('M659B')").click();
      clearInterval(checkForElement3);
   }
}, 1000);
$("#diagnoseClarification").val("Olika orsaker till diagnoserna.").change();
$("#diagnoseMultipleDiagnoses").click();
$("#diseaseCause").val("För mycket stillasittande.").change();
$("#disabilities").val("Svaga ben.").change();
$("#activityLimitation").val("Kan inte gå som folk.").change();
$("arbeteNuvarande").click().blur();
$("#currentWork").val("Soffgrupptestare").change();
$("#arbeteArbetslos").click();
$("#arbeteForaldraledig").click().blur();
$("#capacityForWorkActualWorkingHoursPerWeek").val("38,5").change();
$("#nedsattMed25").click();
$("#nedsattMed25beskrivning").val("Någon slags text.").change();
$("#nedsattMed50").click();
$("#nedsattMed50beskrivning").val("Annan text.").change();
$("#nedsattMed75").click();
$("#nedsattMed75beskrivning").val("Ytterligare text.").change();
$("#nedsattMed100").click().blur();
$("#capacityForWorkText").val("Patienten är en riktig soffpotatis.").change();
$("#capacityForWork4").prop("checked", true).trigger("click");
$("#capacityForWorkForecastText").val("Svårt att avgöra").change();
$("#measuresCurrent").val("Planerat soffbyte.").change();
$("#measuresOther").val("Provar med ribbstol.").change();
$("#rekommendationRessatt").prop("checked", true).trigger("click");
$("#rekommendationKontaktAf").prop("checked", true);
$("#rekommendationKontaktForetagshalsovard").prop("checked", true);
$("#rekommendationOvrigt").click();
$("#rekommendationOvrigtBeskrivning").val("Ge grabben en ordentlig soffa.").change();
$("#garej").prop("checked", true).trigger("click");
$("#kontaktFk").click();
$("#otherInformation").val("Gillar ostbågar.");

















