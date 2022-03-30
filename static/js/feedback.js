function check(){
    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("email").value;
    var lastName = document.getElementById("lastName").value;
    var city = document.getElementById("city").value;

    var name_exp = new RegExp('[A-Za-z]');
    var exp = new RegExp('[a-z0-9.]+@[a-z]+\.([a-z]{2,3})$')
    if(name_exp.test(firstName)){
        // alert("Valid Name");
    }else if(name_exp.test(lastName)){
        // alert("Valid Name");
    }else{
        alert("Name field isn't valid.")
    }
    if(exp.test(email)){
        alert("Valid Email")
    }else{
        alert("Email field isn't valid.")
    }
}