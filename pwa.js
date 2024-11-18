let deferredPrompt;

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;

    // Show your install button
    const installButton = document.getElementById("installButton");
    installButton.style.display = "block";

    installButton.addEventListener("click", () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the install prompt");
            } else {
                console.log("User dismissed the install prompt");
            }
            deferredPrompt = null;
        });
    });
});