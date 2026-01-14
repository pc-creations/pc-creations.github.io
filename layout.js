document.addEventListener("DOMContentLoaded", function() {

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

    const path = window.location.pathname;
    const page = path.split("/").pop(); 

    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => link.classList.remove("active"));

    if (page === "faq.html") {
        const faqLink = document.getElementById("nav-faq");
        if(faqLink) faqLink.classList.add("active");
    }

    const isHome = page === "index.html" || page === "" || page === "/";

    if (isHome) {
        const homeLinks = document.querySelectorAll('a[href="index.html"]');
        homeLinks.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                history.pushState(null, null, "index.html");
            });
        });
    }

    const cookieHTML = `
    <div id="cookie-banner" style="display: none;">
        <div class="cookie-content">
            <h3>🍪 Cookie-Einstellungen</h3>
            <p>
                Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website zu verbessern.
            </p>
            <p class="cookie-links-text">
                Sie können Ihre Entscheidung jederzeit ändern. Details zur Datennutzung finden Sie unter 
                <a href="datenschutz.html">Mehr erfahren</a>.
            </p>
            
            <div class="cookie-buttons">
                <button id="cookie-decline">Nur notwendige</button>
                <button id="cookie-accept">Alle akzeptieren</button>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", cookieHTML);

    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("cookie-accept");
    const declineBtn = document.getElementById("cookie-decline");

    function loadAnalytics() {
        console.log("Analytics loading...");
        
        let script = document.createElement('script');
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-6NJ2MFR660";
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6NJ2MFR660', { 'anonymize_ip': true });
    }

    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
        if(banner) banner.style.display = "block";
    } else if (consent === "accepted") {
        loadAnalytics();
    }

    if (acceptBtn) {
        acceptBtn.addEventListener("click", function() {
            localStorage.setItem("cookieConsent", "accepted");
            if(banner) banner.style.display = "none";
            loadAnalytics();
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener("click", function() {
            localStorage.setItem("cookieConsent", "declined");
            if(banner) banner.style.display = "none";
        });
    }
});