function typeWriter() {
    var typed = new Typed('.element', {
        strings: [
            'Built by me',
            'Login Page',
            'Hey!',
            "It's time",
            'for',
            'something',
            'new',
            'only',
            'javascript',
        ],
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 2000,
        loop: true
    });
}
typeWriter();


let eyes = true;
function eye() {
    console.log('working');
    if (eyes) {
        document.querySelector('ion-icon').name = "eye-outline";
        eyes = !eyes;
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        }
        } else {
            document.querySelector('ion-icon').name = "eye-off-outline";
            eyes = !eyes;
            var x = document.getElementById("password");
            x.type = "password";
        }
    }