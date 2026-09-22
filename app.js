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


/* عداد الحروف */
textInput.addEventListener("input", () => {
    charCount.textContent = `${textInput.value.length} حرف`;
});


/* خيارات اللهجات حسب اللغة */
language.addEventListener("change", () => {

    dialect.innerHTML = "";

    if (language.value === "ar") {

        dialect.innerHTML = `
            <option value="ar-EG">المصرية</option>
            <option value="ar-SA">السعودية</option>
            <option value="ar-AE">الخليجية</option>
            <option value="ar">العربية الفصحى</option>
        `;

        voice.innerHTML = `
            <option value="female">صوت نسائي</option>
            <option value="male">صوت رجالي</option>
        `;

    } else {

        dialect.innerHTML = `
            <option value="en-US">American English</option>
            <option value="en-GB">British English</option>
            <option value="en-AU">Australian English</option>
            <option value="en-CA">Canadian English</option>
        `;

        voice.innerHTML = `
            <option value="female">Female Voice</option>
            <option value="male">Male Voice</option>
        `;
    }
});


/* السرعة */
speed.addEventListener("input", () => {
    speedValue.textContent = `${speed.value}x`;
});


/* حدة الصوت */
pitch.addEventListener("input", () => {
    pitchValue.textContent = pitch.value;
});


/* زر إنشاء الصوت */
generateBtn.addEventListener("click", () => {

    const text = textInput.value.trim();

    if (!text) {
        alert("من فضلك اكتب النص أولًا.");
        textInput.focus();
        return;
    }

    generateBtn.disabled = true;
    generateBtn.innerHTML = "⏳ جاري إنشاء الصوت...";
    audioStatus.textContent = "جاري تجهيز الصوت...";

    /*
      سيتم ربط هذا الجزء بمحرك TTS الحقيقي
      في الخطوة الخاصة بالـ API.
    */

    setTimeout(() => {

        generateBtn.disabled = false;
        generateBtn.innerHTML = "🎙️ إنشاء الصوت";

        audioStatus.textContent =
            "الواجهة جاهزة — سيتم ربط محرك الصوت الحقيقي في الخطوة التالية.";

    }, 1200);
});


/* زر التحميل */
downloadBtn.addEventListener("click", () => {

    if (!audioPlayer.src) {
        return;
    }

    const link = document.createElement("a");
    link.href = audioPlayer.src;
    link.download = "ARAFAVoice-output.mp3";
    link.click();

});
```

