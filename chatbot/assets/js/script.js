
var list = document.getElementById('list');
var typing = document.getElementById('typing');


function sendMessage() {
    if(event.keyCode === 13) {
        var elem = event.target;
        list.innerHTML += "<li class='right'>" + elem.value + "</li>";
        
        if ( ['hi', 'hello', 'hey there !', 'hello there', 'hie', 'greetings'].indexOf(elem.value.toLowerCase()) !== -1){
            typing.style.display = "block"
            setTimeout(function () {
                list.innerHTML += "<li class='left'> hi</li>";
            }, 2000)
            setTimeout(function () {
                  list.innerHTML += "<li class='left'>How can i help you today ? </br> <button class='btn' id='info' onclick='btnClick(this)'>Need Information about Admissions.</button><button class='btn' id='courses' onclick='btnClick(this)'>Courses you offer ?</button></li>"
                   typing.style.display = "none"
            }, 4000)
        }
        else {
            setTimeout(function() {
                list.innerHTML += "<li> Sorry i couldn't understand..</li>";
                 typing.style.display = "none"
            }, 3000)
        }
        
        elem.value = "";
    }
}
 var info = document.getElementById('info');
 var courses = document.getElementById('courses');

function btnClick(button) {
    const today = "mon"
   var btnValue = event.target
    list.innerHTML += "<li class='right'>" + btnValue.textContent  + "</li>";
    const buttonId = button.id;
    if(buttonId === 'info'){
           typing.style.display = "block"
           setTimeout(function () {
               list.innerHTML += "<li class='left'>We open admissions Thrice a year, our admissions are about to open next month in different programs. </br> <button class='btn' id='criteria'  onclick='moreInfo(this)'>Eligibility Criteria ?</button>  <button class='btn' id='programs' onclick='moreInfo(this)' >Programs ?</button></li>"
                typing.style.display = "none"
           }, 2000)       
    }
    else if (buttonId === 'courses' ) {
        typing.style.display = "block"
        setTimeout(function () {
            list.innerHTML += "<li class='left'> courses include </br> <button class='btn' id='web'>Web Development</button>  <button class='btn' id='android'>Android Development</button> <button class='btn' id='machine'>Machine Learning</button> <button class='btn' id='Ai'>Ai Engineering</button></li>"
             typing.style.display = "none"
        }, 2000)

    }
}

function moreInfo(button) {
    var btnValue = event.target
    list.innerHTML += "<li class='right'>" + btnValue.textContent  + "</li>";
    var idButton = button.id
    if(idButton === 'criteria'){
        typing.style.display = "block"
       setTimeout(function (button) {
           list.innerHTML += "<li class='left'>The Criteria includes <ol><li>1. Matriculation</li> <li>2. Basic Computer Knowledge</li> <li>3. Basic HTML & CSS Knowledge</li></ol></li>" 
           list.innerHTML += "<li class='left'> <button class='btn' id='eligible' onclick='open(this)'>Eligible </button> <button class='btn' id='notEligible' onclick='open(this)'>Not Eligible</button> </li>"
            typing.style.display = "none"
       }, 2000)   
  }
  else if (idButton === 'programs') {
    typing.style.display = "block"
    setTimeout(function (button) {
        list.innerHTML += "<li class='left'> courses include </br> <button class='btn' id='web'>Web Development</button>  <button class='btn' id='android'>Android Development</button> <button class='btn' id='machine'>Machine Learning</button> <button class='btn' id='Ai'>Ai Engineering</button></li>"
         typing.style.display = "none"
    }, 2000) 
  }
}

function open(button) {
    var butnValue = event.target
    list.innerHTML += "<li class='right'>" + butnValue.textContent  + "</li>";
    var idsButton = button.id;
    if(idsButton === "eligible"){
         typing.style.display = "block"
        setTimeout(function(button) {
            list.innerHTML += "<li class='left'> We'll inform you as soon as admissions open..Subscribe to our newsletter for new updates.</li>"
             typing.style.display = "none"
        }, 2000);
    }
    else if (idsButton === "notEligible") {
        typing.style.display = "block"
        setTimeout(function(button) {
            list.innerHTML += "<li class='left'> fill the criteria first...Subscribe to our newsletter for new updates.</li>"
             typing.style.display = "none"
        }, 2000);
    }
}