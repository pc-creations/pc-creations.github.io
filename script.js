document.addEventListener("DOMContentLoaded", function() {
    
    // Elemente auswählen
    const modal = document.getElementById("contact-modal");
    
    // Prüfen, ob der Start-Button da ist (damit es auf Unterseiten keine Fehler gibt)
    const btn = document.querySelector("#start button"); 
    
    const closeBtn = document.getElementsByClassName("close-btn")[0]; 
    const formContainer = document.getElementById("form-container");
    const successContainer = document.getElementById("success-container");
    const form = document.getElementById("my-form");
    const errorMsg = document.getElementById("form-error-msg");

    // --- MODAL ÖFFNEN (Nur wenn Button existiert) ---
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
            resetModal(); 
        }
    }

    // --- MODAL SCHLIESSEN ---
    function closeModal() {
        if(modal) modal.style.display = "none";
        resetModal();
    }

    if (closeBtn) closeBtn.onclick = closeModal;

    // Schließen beim Klick neben das Fenster
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // --- ZURÜCKSETZEN ---
    function resetModal() {
        if(formContainer) formContainer.style.display = "block";   
        if(successContainer) successContainer.style.display = "none"; 
        if(form) form.reset();                            
        if(errorMsg) errorMsg.innerHTML = "";                 
    }

    // --- FORMULAR SENDEN ---
    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault(); 
            
            const data = new FormData(event.target);
            const submitBtn = form.querySelector("button[type='submit']");

            submitBtn.disabled = true;
            submitBtn.innerText = "Senden...";

            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    formContainer.style.display = "none";
                    successContainer.style.display = "block";
                    // Nach oben scrollen im Modal
                    document.querySelector('.modal-content').scrollTop = 0;
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            errorMsg.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            errorMsg.innerHTML = "Oops! Es gab ein Problem beim Senden.";
                        }
                    });
                }
            }).catch(error => {
                errorMsg.innerHTML = "Netzwerkfehler. Bitte später erneut versuchen.";
            }).finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = "Absenden";
            });
        });
    }
});