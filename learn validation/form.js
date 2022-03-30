function check(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mob").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;

    var name_exp = new RegExp('[A-Za-z]');
    var exp = new RegExp('[a-z0-9.]+@[a-z]+\.([a-z]{2,3})$')
    if(name_exp.test(name)){

    }else{
        alert("Name field isn't valid.")
    }
    if(exp.test(email)){
        alert("Valid Email")
    }else{
        alert("Email field isn't valid.")
    }
}