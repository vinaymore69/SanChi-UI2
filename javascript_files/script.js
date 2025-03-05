document.addEventListener("DOMContentLoaded", function () {

function page4Animation() {

    var elemC = document.querySelector('#elem-container');
    var fixed = document.querySelector("#fixed-image");

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";

    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";

    });

    var elems = document.querySelectorAll(".elem");

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url('${image}')`;
        });
    });
    
}
page4Animation();
});




var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




// language area


const content = {
    english: {
        // content0: 'SanChi',
        content1: "Volunteering is the key to empowering communities and creating a brighter future for all.",
        content2: "Vidyalankar <br />Volunteering <br /> Committee",
        content3: `Vidyalankar Volunteering Committee is dedicated to creating a positive impact in society by encouraging students to engage in various volunteering activities. <br/>
These activities not only help students learn about global issues but also allow them to contribute to the community and bring positive changes to people's lives. <br/><br/>
The committee collaborates with different NGOs to focus on important areas like Primary Education, Girl Education, Unprivileged Students Wellfare, Antinarcotics Awareness, Mental Health, Environment, and Health Camps. The Vidyalankar Volunteering Committee comprises the following faculty coordinators as well as Student coordinators. <br/><br/>
<b style="font-weight: 500;"> <u>Mentor</u>: </b> Ms.Vaishali Malkar <br/>
<b style="font-weight: 500;"><u>Convenor</u>:</b> Ms. Hemangi Naikare <br/>
<b style="font-weight: 500;"><u>Member</u>:</b> Ms. Prerana Jalgaonkar <br/>
<b style="font-weight: 500;"><u>Member</u>:</b> Mr. Suyog Satawalekar <br/>
<b style="font-weight: 500;"><u>Student President</u>:</b> Mr. Ishaan Salgaonkar <br/>
<b style="font-weight: 500;"><u>Student Vice-President</u>:</b> Ms. Janhavi Raikar<br/>`,
        content4: "Volunteering is essential for empowering individuals and strengthening communities. It fosters unity, drives positive change, and creates lasting impact. A dedicated team of volunteers contributes to social well-being, inspires collective action, and builds a brighter future for all.",
        content5: "01: Girls Education",
        content6: "02: Primary Education",
        content7: "03: Unprivileged Students Wellfare",
        content8: "04: Physical Health",
        content9: "05:  Mental Health",
        content10: "Home",
        content11: "About",
        content12: "Language",
        content13: "Contact",
        content14: "Resources",
        content15: "Volunteerism Is the Voice of People Put Into Action",
        content16: "Act Today Change Tomorrow",
        content17: "Volunteer For Better World",
        content18: "Small Steps Big Changes",
        content19: "Share Your Time Share Your Heart",
        content20: "Small Act's Big Impact",
        content21: "Give Back Move Forward",
        content22: "Do Good Feel Good",
        content23: "Serve Inspire Transform",
        content24: "<u>Brand</u> <u>Sponsor</u>s",
        // content25: "Vidyalankar Polytechnic",
        content26: "RedBox Agency",
        content27: "Sponsor",
        content28: "DadsInTown",
        // content29: "SanChi <br> Education for Girls",
        // content30: "The Girls Education Committee at Vidyalankar Polytechnic empowers female students by promoting inclusivity, bridging educational gaps, and inspiring success. It fosters a culture of learning, equality, and growth for all through various impactful initiatives.",
        content31: "RedBox Agency supports impactful initiatives like SanChi to empower education and uplift underprivileged communities. Their commitment to innovation and inclusivity creates meaningful change, making a difference in students’ lives and society as a whole.",
        content32: "DadsInTown, parent company of RedBox, proudly supports SanChi, promoting education and inclusivity. Their dedication to innovation and community development inspires change, enriching the lives of students and society as a whole.",
        // content33: "SanChi Education for Girls",
        content34: "06: Environment",
        content35: "07: Digital Literacy",
        content36: "08: Antinarcotics",
    },
    hindi: {
        // content0: 'सांची',
        content1: "स्वयंसेवा समुदायों को सशक्त बनाने और सभी के लिए उज्जवल भविष्य बनाने की कुंजी है।",
        content2: "विद्यालंकार <br> स्वयंसेवी <br> समिति",
        content3: `विद्यालंकार स्वयंसेवी समिति छात्रों को विभिन्न स्वयंसेवी गतिविधियों में भाग लेने के लिए प्रोत्साहित करके समाज में सकारात्मक प्रभाव पैदा करने के लिए समर्पित है। <br/> ये गतिविधियाँ न केवल छात्रों को वैश्विक मुद्दों के बारे में जानने में मदद करती हैं, बल्कि उन्हें समुदाय में योगदान करने और लोगों के जीवन में सकारात्मक बदलाव लाने का अवसर भी देती हैं। <br/><br/>
समिति प्राथमिक शिक्षा, बालिका शिक्षा, वंचित छात्र कल्याण, मादक द्रव्य विरोधी जागरूकता, मानसिक स्वास्थ्य, पर्यावरण और स्वास्थ्य शिविर जैसे महत्वपूर्ण क्षेत्रों पर ध्यान केंद्रित करने के लिए विभिन्न गैर सरकारी संगठनों के साथ सहयोग करती है। विद्यालंकार स्वयंसेवी समिति में निम्नलिखित संकाय समन्वयक और छात्र समन्वयक शामिल हैं। <br/><br/>
<b style="font-weight: 500;"><u>मेंटर</u>: </b> सुश्री वैशाली मलकर <br/>
<b style="font-weight: 500;"><u>मेंटर</u>: </b> सुश्री वैशाली मलकर <br/>
<b style="font-weight: 500;"><u>संयोजक</u>:</b> सुश्री हेमांगी नाइकरे <br/>
<b style="font-weight: 500;"><u>सदस्य</u>:</b> सुश्री प्रेरणा जलगांवकर <br/>
<b style="font-weight: 500;"><u>सदस्य</u>:</b> श्री सुयोग सतावलेकर <br/>
<b style="font-weight: 500;"><u>छात्र अध्यक्ष</u>:</b> श्री ईशान सालगांवकर <br/>
<b style="font-weight: 500;"><u>छात्र उपाध्यक्ष</u>:</b> सुश्री जान्हवी रायकर<br/>`,
        content4: "स्वयंसेवा व्यक्तियों को सशक्त बनाने और समुदायों को मजबूत करने के लिए आवश्यक है। यह एकता को बढ़ावा देती है, सकारात्मक बदलाव लाती है और स्थायी प्रभाव पैदा करती है। समर्पित स्वयंसेवकों की एक टीम सामाजिक कल्याण में योगदान देती है, सामूहिक कार्रवाई को प्रेरित करती है और सभी के लिए एक उज्जवल भविष्य का निर्माण करती है।",
        content5: "01: बालिका शिक्षा",
        content6: "02: प्राथमिक शिक्षा",
        content7: "03: वंचित छात्र कल्याण",
        content8: "04: शारीरिक स्वास्थ्य",
        content9: "05: मानसिक स्वास्थ्य",
        content10: "&nbsp; मुखपृष्ठ &nbsp;",
        content11: "परिचय",
        content12: "&nbsp; भाषा &nbsp;",
        content13: "&nbsp; संपर्क करें &nbsp;",
        content14: "&nbsp; संसाधन &nbsp;",
        content15: "स्वयंसेवा लोगों की आवाज़ को क्रियान्वित करने का माध्यम है",
        content16: "आज करें कार्य, कल लाएं बदलाव",
        content17: "बेहतर दुनिया के लिए स्वयंसेवा करें",
        content18: "छोटे कदम, बड़े बदलाव",
        content19: "अपना समय बाँटें, अपना दिल बाँटें",
        content20: "छोटे कार्य का बड़ा प्रभाव",
        content21: "वापस दें, आगे बढ़ें",
        content22: "अच्छा करें, अच्छा महसूस करें",
        content23: "सेवा करें, प्रेरित करें, परिवर्तित करें",
        content24: "<u>ब्रांड</u> <u>प्रायोजक</u>",
        // content25: "विद्यालंकार पॉलिटेक्निक",
        content26: "रेडबॉक्स एजेंसी",
        content27: "प्रायोजक",
        content28: "डैड्स इन टाउन",
        // content29: "सांची - <br> लड़कियों के लिए शिक्षा",
        // content30: "विद्यालंकार पॉलिटेक्निक की गर्ल्स एजुकेशन कमेटी महिला छात्रों को सशक्त बनाकर, समावेशिता बढ़ाने और सफलता के लिए प्रेरित करने का काम करती है। यह सीखने, समानता और विकास की संस्कृति को प्रोत्साहित करती है।",
        content31: "रेडबॉक्स एजेंसी संची जैसे प्रभावशाली प्रोजेक्ट्स का समर्थन करती है, जो शिक्षा को सशक्त और वंचित समुदायों को बेहतर बनाते हैं। नवाचार और समावेशिता के प्रति उनकी प्रतिबद्धता छात्रों और समाज के जीवन में बदलाव लाती है।",
        content32: "डैड्सइनटाउन, रेडबॉक्स की मूल कंपनी, संची का समर्थन करती है, जो शिक्षा और समावेशिता को बढ़ावा देती है। उनका नवाचार और सामुदायिक विकास के प्रति समर्पण छात्रों और समाज में सकारात्मक बदलाव लाता है।",
        // content33: "सांची - लड़कियों के लिए शिक्षा",
        content34: "06: पर्यावरण",
        content35: "07: डिजिटल साक्षरता",
        content36: "08: मादक द्रव्य निरोधक"
    },
    marathi: {
        // content0: 'सांची',
        content1: "स्वयंसेवा ही समाजाला सशक्त बनवण्याची आणि सर्वांसाठी उज्ज्वल भविष्य घडवण्याची किल्ली आहे",
        content2: "विद्यालंकार <br> स्वयंसेवा <br> समिती",
        content3: `विद्यालंकार स्वयंसेवा समिती विद्यार्थ्यांना विविध स्वयंसेवा उपक्रमांमध्ये सहभागी होण्यास प्रोत्साहित करून समाजात सकारात्मक प्रभाव निर्माण करण्यासाठी समर्पित आहे. <br/>
या उपक्रमांमुळे विद्यार्थ्यांना जागतिक समस्यांबद्दल जाणून घेण्यास मदत होतेच, परंतु त्यांना समाजात योगदान देण्यास आणि लोकांच्या जीवनात सकारात्मक बदल घडवून आणण्यास देखील मदत होते. <br/><br/>
ही समिती प्राथमिक शिक्षण, मुलींचे शिक्षण, वंचित विद्यार्थ्यांचे कल्याण, अंमली पदार्थविरोधी जागरूकता, मानसिक आरोग्य, पर्यावरण आणि आरोग्य शिबिरे यासारख्या महत्त्वाच्या क्षेत्रांवर लक्ष केंद्रित करण्यासाठी विविध स्वयंसेवी संस्थांशी सहयोग करते.
विद्यालंकार स्वयंसेवा समितीमध्ये खालील प्राध्यापक समन्वयक तसेच विद्यार्थी समन्वयक असतात. <br/><br/>
<b style="font-weight: 500;"><u>मार्गदर्शक:</u> </b> सुश्री वैशाली मालकर <br/>
<b style="font-weight: 500;"><u>मार्गदर्शक:</u> </b> सुश्री वैशाली मालकर <br/>
<b style="font-weight: 500;"><u>संयोजक:</u> </b> सुश्री हेमांगी नाईकरे <br/>
<b style="font-weight: 500;"><u>सदस्य:</u> </b> सुश्री प्रेरणा जळगावकर <br/>
<b style="font-weight: 500;"><u>सदस्य:</u> </b> श्री. सुयोग सातावळेकर <br/>
<b style="font-weight: 500;"><u>विद्यार्थी अध्यक्ष:</u> </b> श्री. ईशान साळगावकर <br/>
<b style="font-weight: 500;"><u>विद्यार्थी उपाध्यक्ष:</u> </b> कु. जान्हवी रायकर<br/>`,
        content4: "स्वयंसेवा व्यक्तींना सशक्त बनवण्यासाठी आणि समुदाय बळकट करण्यासाठी महत्त्वाची आहे। ही एकतेला चालना देते, सकारात्मक बदल घडवते आणि दीर्घकालीन प्रभाव निर्माण करते। समर्पित स्वयंसेवकांची टीम सामाजिक कल्याणासाठी योगदान देते, सामूहिक कृतीला प्रेरणा देते आणि सर्वांसाठी उज्ज्वल भविष्य घडवते।",
        content5: "01 : मुलींचे शिक्षण",
        content6: "02 : प्राथमिक शिक्षण",
        content7: "03: वंचित विद्यार्थी कल्याण",
        content8: "04: शारीरिक आरोग्य",
        content9: "05: मानसिक आरोग्य",
        content10: "&nbsp; मुख्यपृष्ठ &nbsp;",
        content11: "आमच्याबद्दल",
        content12: "भाषा",
        content13: "संपर्क करा",
        content14: "स्रोत",
        content15: "स्वयंसेवा म्हणजे लोकांच्या आवाजाला कृतीत उतरणे",
        content16: "आज कृती करा, उद्या बदल घडवा",
        content17: "उत्तम जगासाठी स्वयंसेवा करा",
        content18: "लहान पावलांनी मोठे बदल",
        content19: "आपला वेळ वाटा, आपले हृदय वाटा",
        content20: "लहान कृतीचा मोठा प्रभाव",
        content21: "पुन्हा द्या, पुढे जा",
        content22: "चांगले करा, चांगले वाटेल",
        content23: "सेवा करा, प्रेरणा द्या, परिवर्तन घडवा",
        content24: "<u>ब्रँड</u> <u>प्रायोजक</u>",
        // content25: "विद्यालंकार पॉलिटेक्निक",
        content26: "रेडबॉक्स एजन्सी",
        content27: "प्रायोजक",
        content28: "डॅड्स इन टाऊन",
        // content29: "सांची:<br> मुलींच्या शिक्षणासाठी",
        // content30: "विद्यालंकार पॉलिटेक्निकमधील गर्ल्स एज्युकेशन कमिटी महिला विद्यार्थिनींना सशक्त बनवते, समावेशिता वाढवते व यशासाठी प्रेरणा देते. विविध उपक्रमांद्वारे ती शिकणे, समानता व प्रगती यांचे वातावरण निर्माण करते.",
        content31: "रेडबॉक्स एजन्सी संचीसारख्या प्रभावी प्रकल्पांना पाठिंबा देते, जे शिक्षण सशक्त करतात आणि वंचित समुदायांचे उत्थान करतात. त्यांच्या नवकल्पना व समावेशकतेच्या बांधिलकीमुळे विद्यार्थ्यांच्या व समाजाच्या जीवनात सकारात्मक बदल घडतो.",
        content32: "डॅड्सइनटाउन, रेडबॉक्सची मूळ कंपनी, संचीला पाठिंबा देते, शिक्षण आणि समावेशकतेला प्रोत्साहन देते. त्यांचे नवकल्पना व समाज विकासासाठीचे समर्पण विद्यार्थ्यांमध्ये आणि समाजात सकारात्मक बदल घडवते.",
        content34: "06: पर्यावरण",
        content35: "07: डिजिटल साक्षरता",
        content36: "08: मादक द्रव्य निरोधक"
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




document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle1");
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



