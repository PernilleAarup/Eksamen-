// Kontaktformularen på foodtruck underside 
function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    } 
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormessage').innerHTML="Please enter a valid message"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
    return true; 
}

function myFunction() {
    if (validateForm == false)
        alert("Formularen er ikke udfyldt korrekt");
    else
        alert("Tak for din besked! Vi vil kontakte dig hurtigst muligt -Brødrenes Original ");
    window.location.reload(true);
    }


// Geolocation og ruteplanlægning
function geoFindMe() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.google.com/maps/dir/?api=1&origin=${latitude}/${longitude}&destination=56.16266234861956/10.219443722413853&travelmode=driving`;
    mapLink.textContent = `Vis min rute`;
    }

    function error() {
    status.textContent = 'Vi kunne ikke finde din placering';
    }

    if(!navigator.geolocation) {
    status.textContent = 'Din browser understøtter ikke geolocation';
    } else {
    status.textContent = 'Finder…';
    navigator.geolocation.getCurrentPosition(success, error);
    }

}

document.querySelector('#find-mig').addEventListener('click', geoFindMe);    

// Slideshow 
var slideIndex = 0;
        showSlides();
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none"; 
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1} 
            slides[slideIndex-1].style.display = "block"; 
            setTimeout(showSlides, 5000); // Change image every 5 seconds
          }




// Footer 
function myFunction() {
    alert("Du er nu tilmeldt Brødrenes nyhedsbrev");
    window.location.reload(true);
    }
