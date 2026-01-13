document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. HEADER EINFÜGEN
    // ==========================================
    const headerHTML = `
    <header>
        <nav>
            <a href="index.html" id="logo-link">
                <img src="logo.jpg" alt="PC-Creations Logo" width="100"> 
            </a>
            
            <ul>
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="index.html#services" id="nav-services">Leistungen</a></li>
                <li><a href="faq.html" id="nav-faq">FAQ</a></li>
                <li><a href="index.html#contact" id="nav-contact">Kontakt</a></li>
            </ul>
        </nav>
    </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // ==========================================
    // 2. AKTIVE SEITE ERKENNEN (Button blau machen)
    // ==========================================
    const path = window.location.pathname;
    const page = path.split("/").pop(); // Holt z.B. "faq.html"

    // Alle active-Klassen entfernen
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => link.classList.remove("active"));

    if (page === "faq.html") {
        document.getElementById("nav-faq").classList.add("active");
    }

    // ==========================================
    // 3. FLACKERN VERHINDERN (Smart Link)
    // ==========================================
    
    // Prüfen: Sind wir gerade auf der Startseite?
    // (index.html oder einfach nur "/" bei GitHub Pages)
    const isHome = page === "index.html" || page === "" || page === "/";

    if (isHome) {
        // Wir suchen das Logo UND den Home-Text-Link
        const homeLinks = document.querySelectorAll('a[href="index.html"]');

        homeLinks.forEach(link => {
            link.addEventListener("click", function(event) {
                // STOPP! Nicht neu laden!
                event.preventDefault();
                
                // Stattdessen weich nach oben scrollen
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                
                // URL in der Adresszeile "säubern" (falls z.B. #contact da stand)
                history.pushState(null, null, "index.html");
            });
        });
    }

    // ==========================================
    // 4. COOKIE BANNER HINZUFÜGEN
    // ==========================================
    const cookieHTML = `
    <div id="cookie-banner" style="display: none;">
        <div class="cookie-content">
            <h3>🍪 Cookie-Einstellungen</h3>
            <p>
                Wir nutzen Cookies, um die Website zu verbessern. 
                Einige sind technisch notwendig, andere helfen uns bei der Analyse.
                <a href="datenschutz.html">Mehr erfahren</a>.
            </p>
            <div class="cookie-buttons">
                <button id="cookie-accept">Alle akzeptieren</button>
                <button id="cookie-decline">Nur notwendige</button>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", cookieHTML);

    // ==========================================
    // 5. COOKIE LOGIK (Consent Manager)
    // ==========================================

    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("cookie-accept");
    const declineBtn = document.getElementById("cookie-decline");

    // Funktion: Externe Skripte laden (z.B. Google Analytics)
    function loadAnalytics() {
        console.log("Analytics Cookies erlaubt - Lade Tracking...");
        // HIER kommt später dein Google Analytics Code rein!
        // Beispiel:
        // let script = document.createElement('script');
        // script.src = "https://www.googletagmanager.com/gtag/js?id=DEIN-ID";
        // document.head.appendChild(script);
    }

    // Prüfen: Wurde schon eine Entscheidung getroffen?
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
        // Noch keine Entscheidung -> Banner anzeigen
        if(banner) banner.style.display = "block";
    } else if (consent === "accepted") {
        // Schon erlaubt -> Analytics direkt laden
        loadAnalytics();
    }

    // Klick auf "Akzeptieren"
    if (acceptBtn) {
        acceptBtn.addEventListener("click", function() {
            localStorage.setItem("cookieConsent", "accepted");
            banner.style.display = "none";
            loadAnalytics(); // Jetzt starten!
        });
    }

    // Klick auf "Ablehnen" (Nur notwendige)
    if (declineBtn) {
        declineBtn.addEventListener("click", function() {
            localStorage.setItem("cookieConsent", "declined");
            banner.style.display = "none";
            // KEIN loadAnalytics() aufrufen!
        });
    }
});