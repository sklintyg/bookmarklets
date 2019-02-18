var today = new Date();
var todayDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);




$("#pnr").val("19710301-1032").change();
$("#skapapersonnummerfortsatt").click();
select name"#intygTypeFortsatt-lisjp").click();

$("#intygType").val('string:fk7263').change();


$("#intygType").click();
$("[id$=Läkarintyg FK 7263]").click();


$("#underlag-1-typ > div.ui-select-match > span").click();
$("[id$=-3]").click();
$("#underlag-1-typ").val('string:LOGOPED').change();
$("#underlag-1-datum").val(todayDateString).change();
$("#underlag-1-hamtasFran").val('CSK').change();

$("#underlag-2-typ > div.ui-select-match > span").click();
$("[id$=-4]").click();
$("#underlag-2-typ").val('string:FYSIOTERAPEUT').change();
$("#underlag-2-datum").val(todayDateString).change();
$("#underlag-2-hamtasFran").val('CentralSjukhuset!!').change();




<
option label = "Läkarintyg FK 7263"
value = "string:fk7263" > Läkarintyg FK 7263 < /option>

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
        $("#diagnoseCodeOpt2").val('G000').change();
        clearInterval(checkForElement2);
    }
}, 1000);

var checkForElement3 = setInterval(function() {
    if ($("li[id*='option-0']").children("a:contains('G000')").length) {
        $("li[id*='option-0']").children("a:contains('G000')").click();
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
$("#capacityForWorkActualWorkingHoursPerWeek").val("40").change();
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
$("#rekommendationKontaktAf").click();
$("#rekommendationKontaktForetagshalsovard").click();
$("#rekommendationOvrigt").click();
$("#rekommendationOvrigtBeskrivning").val("Ge grabben en ordentlig soffa.").change();
$("#garej").prop("checked", true).trigger("click");
$("#kontaktFk").click();
$("#otherInformation").val("Gillar ostbågar.");
