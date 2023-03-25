async function displayUI() {
    await signIn();

    // Display info from user profile
    const user = await getUser();
    var userName = document.getElementById('userName');
    userName.innerText = user.displayName;

    // Hide login button and initial UI
    var signInButton = document.getElementById('signin');
    signInButton.style = "display: none";
    var content = document.getElementById('content');
    content.style = "display: block";


}

async function callMe() {
    if (sessionStorage.getItem('displayName')) {
        const displayName = sessionStorage.getItem('displayName');
        var userName = document.getElementById('userName');
        userName.innerText = displayName;

        var signInButton = document.getElementById('signin');
        signInButton.style = "display: none";
        var content = document.getElementById('content');
        content.style = "display: block";
    } else {
        displayUI();
    }
}
callMe();





