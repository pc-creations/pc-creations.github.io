document.addEventListener("DOMContentLoaded", function () {

    const isEnglish = window.location.pathname.includes('/en/');
    const basePath = isEnglish ? '../' : '';
    const currentFile = window.location.pathname.split("/").pop() || "index.html";

    const headerHTML = `
    <header>
        <nav>
            <div class="nav-left">
                <a href="index.html" id="logo-link">
                    <img src="${basePath}logo.jpg" alt="PC-Creations Logo" width="100">
                </a>
            </div>
            
            <ul class="nav-center">
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="services.html" id="nav-services">${isEnglish ? 'Services' : 'Leistungen'}</a></li>
                <li><a href="faq.html" id="nav-faq">FAQ</a></li>
                <li><a href="contact.html" id="nav-contact">${isEnglish ? 'Contact' : 'Kontakt'}</a></li>
            </ul>

            <div class="nav-right">
                <div class="settings-dropdown">
                    <button class="dropbtn" aria-label="${isEnglish ? 'Settings' : 'Einstellungen'}">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                        </svg>
                    </button>
                    <div class="dropdown-content">
                        <div class="dropdown-header">${isEnglish ? 'Theme' : 'Design'}</div>
                        <div class="theme-options">
                            <button class="theme-option" data-theme="auto">${isEnglish ? 'Automatic' : 'Automatisch'}</button>
                            <button class="theme-option" data-theme="light">${isEnglish ? 'Light' : 'Hell'}</button>
                            <button class="theme-option" data-theme="dark">${isEnglish ? 'Dark' : 'Dunkel'}</button>
                        </div>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-header">${isEnglish ? 'Language' : 'Sprache'}</div>
                        <div class="theme-options">
                            <a href="${isEnglish ? '../' + currentFile : currentFile}" class="lang-option ${!isEnglish ? 'active' : ''}">${isEnglish ? 'German' : 'Deutsch'}</a>
                            <a href="${isEnglish ? currentFile : 'en/' + currentFile}" class="lang-option ${isEnglish ? 'active' : ''}">${isEnglish ? 'English' : 'Englisch'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    `;

    const placeholder = document.getElementById("header-placeholder");
    if (placeholder) {
        placeholder.outerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML("afterbegin", headerHTML);
    }

    const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-left">
                &copy; 2026 PC-Creations.<br>${isEnglish ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}
            </div>
            
            <div class="footer-center">
                <a href="impressum.html">${isEnglish ? 'Imprint' : 'Impressum'}</a>
                <span class="separator">|</span>
                <a href="datenschutz.html">${isEnglish ? 'Privacy Policy' : 'Datenschutz'}</a>
                <span class="separator">|</span>
                <a href="#" id="open-cookie-settings">${isEnglish ? 'Cookie Settings' : 'Cookie-Einstellungen'}</a>
            </div>

            <div class="footer-right social-icons">
                <a href="https://www.instagram.com/pc_creations_at/" target="_blank" aria-label="Instagram"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                <a href="https://www.facebook.com/people/PC-Creations-by-Samuel/100089715983825/" target="_blank" aria-label="Facebook"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.64l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
                <a href="https://www.youtube.com/@pc-creations" target="_blank" aria-label="YouTube"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    const path = window.location.pathname;
    const page = path.split("/").pop();

    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => link.classList.remove("active"));

    if (page === "services.html") {
        document.getElementById("nav-services").classList.add("active");
    } else if (page === "faq.html") {
        document.getElementById("nav-faq").classList.add("active");
    } else if (page === "contact.html") {
        document.getElementById("nav-contact").classList.add("active");
    } else if (page === "index.html" || page === "" || page === "/") {
        document.getElementById("nav-home").classList.add("active");
    }

    function renderCookieBannerContent(isEng) {
        return `
            <div class="cookie-header">
                <div class="cookie-icon">🍪</div>
                <div class="cookie-lang-switch">
                    <button class="lang-switch-btn ${!isEng ? 'active' : ''}" data-lang="de">DE</button>
                    <button class="lang-switch-btn ${isEng ? 'active' : ''}" data-lang="en">EN</button>
                </div>
            </div>
            
            <h2>${isEng ? 'Cookie Settings' : 'Cookie-Einstellungen'}</h2>
            <p>
                ${isEng ? 
                'This website uses cookies and similar technologies to improve the user experience, analyze traffic and embed external services like Google Maps. By clicking "Accept all", you consent to this processing.' : 
                'Diese Webseite verwendet Cookies und ähnliche Technologien, um das Nutzererlebnis zu verbessern, den Traffic zu analysieren und externe Dienste wie Google Maps einzubinden. Mit Klick auf "Alle akzeptieren" willigen Sie in diese Verarbeitung ein.'}
                <br><br>
                <a href="impressum.html" class="cookie-legal-link">${isEng ? 'Imprint' : 'Impressum'}</a> | <a href="datenschutz.html" class="cookie-legal-link">${isEng ? 'Privacy Policy' : 'Datenschutz'}</a>
            </p>

            <div class="cookie-toggles">
                <div class="cookie-toggle-row">
                    <div class="cookie-toggle-info">
                        <p class="toggle-title">${isEng ? 'Necessary' : 'Notwendig'}</p>
                        <p class="toggle-desc">${isEng ? 'Required for basic functions.' : 'Für die Grundfunktionen erforderlich.'}</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" id="cookie-necessary" checked disabled>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                <div class="cookie-toggle-row">
                    <div class="cookie-toggle-info">
                        <p class="toggle-title">${isEng ? 'Functional (Maps)' : 'Funktionell (Maps)'}</p>
                        <p class="toggle-desc">${isEng ? 'Embeds Google Maps.' : 'Bindet Google Maps ein.'}</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" id="cookie-functional">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                <div class="cookie-toggle-row">
                    <div class="cookie-toggle-info">
                        <p class="toggle-title">${isEng ? 'Analytics' : 'Statistik'}</p>
                        <p class="toggle-desc">${isEng ? 'Helps us improve the website.' : 'Hilft uns, die Webseite zu verbessern.'}</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" id="cookie-analytics">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>

            <div class="cookie-buttons">
                <button id="cookie-decline" class="btn-necessary">${isEng ? 'Necessary only' : 'Nur Notwendige'}</button>
                <button id="cookie-save" class="btn-save">${isEng ? 'Save selection' : 'Auswahl bestätigen'}</button>
            </div>
            <button id="cookie-accept" class="btn-accept-all">${isEng ? 'Accept all' : 'Alle akzeptieren'}</button>
        `;
    }

    const cookieHTML = `
    <div id="cookie-banner" class="cookie-banner-wrapper" style="display: none;">
        <div class="cookie-backdrop"></div>
        <div class="cookie-modal" id="cookie-modal-content">
            ${renderCookieBannerContent(isEnglish)}
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", cookieHTML);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }

    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
    });

    let script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-6NJ2MFR660";
    document.head.appendChild(script);

    gtag('js', new Date());
    gtag('config', 'G-6NJ2MFR660', { 'anonymize_ip': true });

    function loadGoogleMaps() {
        const iframe = document.getElementById("google-map-iframe");
        const placeholder = document.getElementById("map-placeholder");

        if (iframe && iframe.getAttribute("data-src")) {
            iframe.src = iframe.getAttribute("data-src");
            iframe.style.display = "block";
            iframe.removeAttribute("data-src");
        }
        if (placeholder) {
            placeholder.style.display = "none";
        }
    }

    const banner = document.getElementById("cookie-banner");

    let consentData = null;
    try {
        const stored = localStorage.getItem("cookieConsent");
        if (stored === "accepted") {
            consentData = { functional: true, analytics: true };
        } else if (stored === "declined") {
            consentData = { functional: false, analytics: false };
        } else if (stored) {
            consentData = JSON.parse(stored);
        }
    } catch(e) {}

    function applyConsent(data) {
        if (data.analytics) {
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
            });
        } else {
            gtag('consent', 'update', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
            });
        }

        if (data.functional) {
            loadGoogleMaps();
        }
    }

    if (consentData) {
        applyConsent(consentData);
        
        const toggleFunctional = document.getElementById("cookie-functional");
        const toggleAnalytics = document.getElementById("cookie-analytics");
        if (toggleFunctional) toggleFunctional.checked = consentData.functional;
        if (toggleAnalytics) toggleAnalytics.checked = consentData.analytics;
    } else {
        const isLegalPage = page === 'datenschutz.html' || page === 'impressum.html';
        if (banner && !isLegalPage) banner.style.display = "flex";
    }

    function saveAndClose(data) {
        localStorage.setItem("cookieConsent", JSON.stringify(data));
        applyConsent(data);
        if (banner) banner.style.display = "none";
        
        const toggleFunctional = document.getElementById("cookie-functional");
        const toggleAnalytics = document.getElementById("cookie-analytics");
        if (toggleFunctional) toggleFunctional.checked = data.functional;
        if (toggleAnalytics) toggleAnalytics.checked = data.analytics;

        
        // Redirect if language was changed in banner
        if (banner.dataset.selectedLang) {
            const wantsEnglish = banner.dataset.selectedLang === 'en';
            if (wantsEnglish !== isEnglish) {
                const currentFile = window.location.pathname.split("/").pop() || "index.html";
                if (wantsEnglish) {
                    window.location.href = isEnglish ? currentFile : 'en/' + currentFile;
                } else {
                    window.location.href = isEnglish ? '../' + currentFile : currentFile;
                }
            }
        }
    }

    if (banner) {
        banner.addEventListener("click", function(e) {
            if (e.target.closest("#cookie-accept")) {
                saveAndClose({ functional: true, analytics: true });
            } else if (e.target.closest("#cookie-decline")) {
                saveAndClose({ functional: false, analytics: false });
            } else if (e.target.closest("#cookie-save")) {
                const toggleFunctional = document.getElementById("cookie-functional");
                const toggleAnalytics = document.getElementById("cookie-analytics");
                saveAndClose({
                    functional: toggleFunctional ? toggleFunctional.checked : false,
                    analytics: toggleAnalytics ? toggleAnalytics.checked : false
                });
            } else if (e.target.closest(".lang-switch-btn")) {
                const btn = e.target.closest(".lang-switch-btn");
                const newIsEng = btn.dataset.lang === "en";
                
                // Store the selected language
                banner.dataset.selectedLang = newIsEng ? 'en' : 'de';
                
                const toggleFunctional = document.getElementById("cookie-functional");
                const toggleAnalytics = document.getElementById("cookie-analytics");
                const funcState = toggleFunctional ? toggleFunctional.checked : false;
                const anaState = toggleAnalytics ? toggleAnalytics.checked : false;
                
                document.getElementById("cookie-modal-content").innerHTML = renderCookieBannerContent(newIsEng);
                
                const newToggleFunctional = document.getElementById("cookie-functional");
                const newToggleAnalytics = document.getElementById("cookie-analytics");
                if (newToggleFunctional) newToggleFunctional.checked = funcState;
                if (newToggleAnalytics) newToggleAnalytics.checked = anaState;
            }
        });
    }

    const loadMapBtn = document.getElementById("load-map-btn");
    if (loadMapBtn) {
        loadMapBtn.addEventListener("click", function (e) {
            e.preventDefault();
            loadGoogleMaps();
        });
    }

    const settingsLink = document.getElementById("open-cookie-settings");
    if (settingsLink) {
        settingsLink.addEventListener("click", function (e) {
            e.preventDefault();
            if (banner) banner.style.display = "flex";
        });
    }

    // Theme Logic
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const validThemes = ["auto", "light", "dark"];
    const currentTheme = validThemes.includes(storedTheme) ? storedTheme : "auto";

    function applyThemeSelection(theme) {
        const isDarkSystem = window.matchMedia("(prefers-color-scheme: dark)").matches;
        let applyDark = false;
        
        if (theme === "dark") applyDark = true;
        else if (theme === "light") applyDark = false;
        else if (theme === "auto") applyDark = isDarkSystem;

        if (applyDark) {
            root.classList.add("dark-mode");
            root.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            root.classList.remove("dark-mode");
            root.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
        }

        // Update UI buttons
        document.querySelectorAll('.theme-option').forEach(btn => {
            if (btn.dataset.theme === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Initialize theme based on localStorage or system preference
    applyThemeSelection(currentTheme);

    // React to OS-level dark/light mode changes in real time
    const systemDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    systemDarkQuery.addEventListener("change", function () {
        if (!localStorage.getItem("theme") || localStorage.getItem("theme") === "auto") {
            applyThemeSelection("auto");
        }
    });

    // Add click listeners to theme options
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedTheme = this.dataset.theme;
            localStorage.setItem("theme", selectedTheme);
            applyThemeSelection(selectedTheme);
        });
    });
});