var users = [
    {id: "O-00-00", password:"123", role:"admin"},
    {id: "A-10-13", password:"123", role:"resident"},
    {id: "B-10-14", password:"123", role:"resident"},
]

$('.login-form').submit(function(e){
    input_id= $('.login-form input[id="id"]').val();
    input_pass= $('.login-form input[id="password"]').val();
    input_role= $('#role').val();
    var success = false;
    for(user of users){
        if(input_id===user.id && input_pass===user.password && input_role===user.role){
            success = true
            if(input_role === "admin"){
                window.location.replace("admin-dashboard.html"); //admin dashboard
            }else{
                window.location.replace("dashboard.html"); //resident dashboard
            }
        }
    }
    if(success===false){
        alert("Login ID/Password/Credidential does not match. Try again.")
    }
    e.preventDefault();
})
