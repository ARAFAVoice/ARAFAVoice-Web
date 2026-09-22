```javascript
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const language = document.getElementById("language");
const dialect = document.getElementById("dialect");
const voice = document.getElementById("voice");
const speed = document.getElementById("speed");
const speedValue = document.getElementById("speedValue");
const pitch = document.getElementById("pitch");
const pitchValue = document.getElementById("pitchValue");
const generateBtn = document.getElementById("generateBtn");
const audioPlayer = document.getElementById("audioPlayer");
const downloadBtn = document.getElementById("downloadBtn");
const audioStatus = document.getElementById("audioStatus");

textInput.addEventListener("input", function () {
    charCount.textContent = textInput.value.length + " حرف";
});

function updateLanguageOptions() {

    dialect.innerHTML = "";
    voice.innerHTML = "";

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
}

language.addEventListener("change", updateLanguageOptions);

speed.addEventListener("input", function () {
    speedValue.textContent = speed.value + "x";
});

pitch.addEventListener("input", function () {
    pitchValue.textContent = pitch.value;
});

generateBtn.addEventListener("click", function () {

    const text = textInput.value.trim();

    if (text === "") {
        alert("من فضلك اكتب النص أولًا.");
        textInput.focus();
        return;
    }

    generateBtn.disabled = true;
    generateBtn.textContent = "جاري إنشاء الصوت...";
    audioStatus.textContent = "جاري تجهيز الصوت...";

    setTimeout(function () {

        generateBtn.disabled = false;
        generateBtn.textContent = "🎙️ إنشاء الصوت";

        audioStatus.textContent =
            "الواجهة تعمل بنجاح. سيتم ربط محرك الصوت الحقيقي لاحقًا.";

    }, 1200);
});

downloadBtn.addEventListener("click", function () {

    if (audioPlayer.src === "") {
        return;
    }

    const link = document.createElement("a");
    link.href = audioPlayer.src;
    link.download = "ARAFAVoice-output.mp3";
    link.click();
});

updateLanguageOptions();
```
