function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
    } else {
        sidenav.style.width = "250px";
    }
}
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Phone number copied to clipboard: ' + text);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy the phone number.');
        });
}