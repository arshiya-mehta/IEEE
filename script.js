const translations = {
    en: {
        logo: "NAME",
        home: "HOME",
        about: "ABOUT",
        service: "SERVICE",
        design: "DESIGN",
        contact: "CONTACT",
        searchPlaceholder: "Type To text",
        searchButton: "Search",
        header: "Web Design & <br><span>Development</span> <br>Course",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        joinUs: "JOIN US",
        loginHeader: "Login Here",
        emailPlaceholder: "Enter Email Here",
        passwordPlaceholder: "Enter Password Here",
        loginButton: "Login",
        noAccount: "Don't have an account<br><a href='#'>Sign up</a> here",
        loginWith: "Log in with"
    },
    hi: {
        logo: "नाम",
        home: "मुख्य पृष्ठ",
        about: "हमारे बारे में",
        service: "सेवा",
        design: "डिज़ाइन",
        contact: "संपर्क करें",
        searchPlaceholder: "पाठ लिखें",
        searchButton: "खोजें",
        header: "वेब डिज़ाइन और <br><span>डेवलपमेंट</span> <br>कोर्स",
        description: "यह पाठ्यक्रम आपको वेबसाइट डिज़ाइन और विकास में मदद करेगा।",
        joinUs: "हमसे जुड़ें",
        loginHeader: "यहाँ लॉगिन करें",
        emailPlaceholder: "ईमेल यहाँ दर्ज करें",
        passwordPlaceholder: "पासवर्ड यहाँ दर्ज करें",
        loginButton: "लॉगिन करें",
        noAccount: "कोई खाता नहीं है?<br><a href='#'>साइन अप करें</a>",
        loginWith: "के साथ लॉगिन करें"
    }
};

// Language Selector Event
document.getElementById("language-selector").addEventListener("change", function () {
    const selectedLang = this.value;
    applyTranslations(selectedLang);
});

// Function to Apply Translations
function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang][key]) {
            if (el.tagName === "INPUT") {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

// Set Default Language
applyTranslations("en");
