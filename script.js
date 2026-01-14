document.addEventListener("DOMContentLoaded", function() {
    
    const modal = document.getElementById("contact-modal");
    const btn = document.querySelector("#start button"); 
    const closeBtn = document.getElementsByClassName("close-btn")[0]; 
    
    const formContainer = document.getElementById("form-container");
    const successContainer = document.getElementById("success-container");
    
    const form = document.getElementById("my-form");
    const errorMsg = document.getElementById("form-error-msg");

    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
            resetModal(); 
        }
    }

    function closeModal() {
        if(modal) modal.style.display = "none";
        resetModal();
    }

    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    function resetModal() {
        if(formContainer) formContainer.style.display = "block";   
        if(successContainer) successContainer.style.display = "none"; 
        if(form) form.reset();                            
        if(errorMsg) errorMsg.innerHTML = "";                 
    }

    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault(); 
            
            const submitBtn = form.querySelector("button[type='submit']");
            errorMsg.innerHTML = "";

            const formData = new FormData(form);
            const email = formData.get("email");
            const phone = formData.get("phone");
            const honeypot = formData.get("_gotcha");

            if (honeypot) {
                formContainer.style.display = "none";
                successContainer.style.display = "block";
                return; 
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errorMsg.innerHTML = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
                return; 
            }

            if (phone && phone.trim() !== "") {
                const phonePattern = /^[+0-9\s\-\(\)]{6,}$/;
                if (!phonePattern.test(phone)) {
                    errorMsg.innerHTML = "Bitte geben Sie eine gültige Telefonnummer ein.";
                    return; 
                }
            }

            submitBtn.disabled = true;
            submitBtn.innerText = "Senden...";

            fetch(event.target.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    formContainer.style.display = "none";
                    successContainer.style.display = "block";
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