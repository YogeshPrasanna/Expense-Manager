(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC8dk303hPmAy1-9EbncnQ39yP598zdu0c",
        authDomain: "expense-manager-d4f85.firebaseapp.com",
        databaseURL: "https://expense-manager-d4f85.firebaseio.com",
        projectId: "expense-manager-d4f85",
        storageBucket: "expense-manager-d4f85.appspot.com",
        messagingSenderId: "298142002884"
    };
    firebase.initializeApp(config);


    //Get elements
    const txtEmail = document.getElementById('login-username');
    const txtPassword = document.getElementById('login-password');
    const txtEmailSignup = document.getElementById('signup-name');
    const txtPasswordSignup = document.getElementById('signup-password');
    const btnLogin = document.getElementById('btn-login');
    const btnSignup = document.getElementById('btn-signup');
    // const btnLogout = document.getElementById();

    //Add login event
    $('#btnLogin').on('click', function () {
        
        alert("Runnig")
        // login details
        const email = txtEmail.value();
        const password = txtPassword.value();

        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));
    })

    console.log(txtEmail, txtPassword, txtEmailSignup, txtPasswordSignup);

}());