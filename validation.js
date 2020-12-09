// SIT SIN TING, CHO CHEUK YING
function validation(){
    var roles = document.getElementById('role').value;
    var loginId = document.getElementById('id').value;
    var password = document.getElementById('pw').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    //check whether it contains an @
    var upload = document.getElementById('upload').value;
    var gender = document.getElementById('gender').value;
    var birthday = document.getElementById('birthday').value;
    var course = document.getElementById('course').value;

    //overall case: omitting the birthday and course and check others is empty or not
    message ="";
    if (roles=="")
    {
        console.log("empty");
        message += "Please choose your role, either student or teacher.\n";
    }
    if (loginId=="")
    {
        console.log("empty");
        message += "Please enter your login ID";
    }
    if ( message !="")
    {
        console.log(message);

        alert(message);
    }


    //var rates = document.getElementById('rates').value;

}