
const content = {
    english: {
        // content0: 'SanChi',
        
        content1: "Home",
        content2: "About",
        content3: "Language",
        content4: "Contact",
        content5: "Resources",
        content6: "Subtitles Preview",
        content7: "Edit Subtitles",
        content8: "Audio Preview",
        content9: "Editing",
        content10: "Audio Subtitle Editor",
        content11: "Dashboard",

        content201: `© 2025 Vidyalankar Polytechnic. All Rights Reserved.`,
        content202: `Privacy Policy`,
        content203: `Gallery`,
        content204: `Volunteering is at the very core of being a human. No one has made it through life without someone else's help. — Heather French Henry`,
        content205: `Innovators`,
        content206: `Sponcers`,
    },
    hindi: {

        content1: " &nbsp; मुखपृष्ठ &nbsp;",
        content2: "परिचय",
        content3: "&nbsp; भाषा &nbsp;",
        content4: "&nbsp; संपर्क करें &nbsp;",
        content5: "&nbsp; संसाधन &nbsp;",
        content6: "उपशीर्षक पूर्वावलोकन",
        content7: "उपशीर्षक संपादित करें",
        content8: "ऑडियो पूर्वावलोकन",
        content9: "संपादन",
        content10: "ऑडिओ सबटायटल एडिटर",
        content11: "डैशबोर्ड",





        // FOOTER CONTENT HINDI START
        content201: `© 2025 विद्यालंकार पॉलिटेक्निक। सर्वाधिकार सुरक्षित।`,
        content202: `गोपनीयता नीति`,
        content203: `गैलरी`,
        content204: `"स्वयंसेवा मानव होने की मूल आत्मा में है। किसी ने भी जीवन में बिना किसी अन्य की मदद के नहीं चला है।" — हेदर फ्रेंच हेनरी`,
        content205: `नवाचारी`,
        content206: `प्रायोजक`,
        // FOOTER CONTENT HINDI END 
    },
    marathi: {
 
        content1: "&nbsp; मुख्यपृष्ठ &nbsp;",
        content2: "आमच्याबद्दल",
        content3: "भाषा",
        content4: "संपर्क करा",
        content5: "स्रोत",
        content6: "सबटायटल पूर्वावलोकन",
        content7:"उपशीर्षके संपादित करा",
        content8: "ऑडिओ पूर्वावलोकन",
        content9: "संपादन",
        content10: "ऑडियो उपशीर्षक संपादक",
        content11: "डॅशबोर्ड",

        content201: `© २०२५ विद्यालंकार पॉलिटेक्निक. सर्व हक्क राखीव`,
        content202: `गोपनीयता धोरण`,
        content203: `गॅलरी`,
        content204: `"स्वयंसेवा ही मानव असण्याचा गाभा आहे. दुसऱ्याच्या मदतीशिवाय कोणीही आयुष्यात यशस्वी झालेले नाही." - हीदर फ्रेंच हेन्री`,
        content205: `नवोन्मेषक`,
        content206: `प्रायोजक`,
    }
};
  







const fonts = {
    english: "Poppins",
    hindi: "Hind",
    marathi: "Tiro Devanagari Marathi"
};


document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle");
    languageToggle.addEventListener("click", toggleLanguageMenu);

    const closingButton = document.getElementById("closing-span");
    closingButton.addEventListener("click", toggleLanguageMenu);

    const englishOption = document.getElementById("english-option");
    const hindiOption = document.getElementById("hindi-option");
    const marathiOption = document.getElementById("marathi-option");

    englishOption.addEventListener("click", () => updateLanguage("english"));
    hindiOption.addEventListener("click", () => updateLanguage("hindi"));
    marathiOption.addEventListener("click", () => updateLanguage("marathi"));

    const language = getCookie("language") || "english"; // Default to English
    updateLanguage(language);
});

// Toggle the visibility of the language menu (slide animation)
function toggleLanguageMenu() {
    const languageMenu = document.getElementById("languages-section");

    if (languageMenu.style.top === "0px") {
        languageMenu.style.top = "-150vh"; // Hide it off-screen
    } else {
        languageMenu.style.top = "0"; // Slide it into view
    }
}

// Update the page content based on the selected language
function updateLanguage(language) {
    document.cookie = "language=" + language; // Set the language cookie

    if (content[language]) {
        Object.keys(content[language]).forEach(key => {
            console.log(key);
            document.getElementById(key).innerHTML = content[language][key];
        });

        document.body.style.fontFamily = fonts[language];
    }

    document.getElementById("languages-section").style.top = "-150vh";
    document.body.style.overflow = "auto";
}

// Get the value of a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
    }, {});
    return cookies[name];
}
