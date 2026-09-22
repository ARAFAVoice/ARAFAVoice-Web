const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const language = document.getElementById("language");
const dialect = document.getElementById("dialect");
const voice = document.getElementById("voice");

textInput.addEventListener("input", function () {
    charCount.textContent = textInput.value.length + " حرف";
});

language.addEventListener("change", function () {
    if (language.value === "ar") {
        dialect.innerHTML =
            '<option value="ar-EG">المصرية</option>' +
            '<option value="ar-SA">السعودية</option>' +
            '<option value="ar-AE">الخليجية</option>' +
            '<option value="ar">العربية الفصحى</option>';

        voice.innerHTML =
            '<option value="female">صوت نسائي</option>' +
            '<option value="male">صوت رجالي</option>';
    } else {
        dialect.innerHTML =
            '<option value="en-US">American English</option>' +
            '<option value="en-GB">British English</option>' +
            '<option value="en-AU">Australian English</option>' +
            '<option value="en-CA">Canadian English</option>';

        voice.innerHTML =
            '<option value="female">Female Voice</option>' +
            '<option value="male">Male Voice</option>';
    }
});
