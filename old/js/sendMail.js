function sendMail(e){
    e.preventDefault();
    console.log("sendMail");
    var name = document.getElementById("form-name").value;
    var email = document.getElementById("form-email").value;
    var message = document.getElementById("form-message").value;

    if(name && email && message){
        (async () => {
            const rawResponse = await fetch('https://pf-mailserver.herokuapp.com/', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({"name": name, "email": email, "message":message})
            });
            const content = await rawResponse.json();
            if (content.status == "success"){
                alert('Your response has been recorded');
            }
          
            // console.log(content);
          })();
    }
    else{
        alert('Please fill Form Properly');
    }

    


}