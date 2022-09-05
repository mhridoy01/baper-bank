document.getElementById('btn-submit').addEventListener('click',function(){
    //console.log('submit button clicked');
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(email, password);

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href ='bank.html'
    }
    else{
        console.log('tui password vule gesos!! toke ami teijjo sontan gosona korlam');
    }
})