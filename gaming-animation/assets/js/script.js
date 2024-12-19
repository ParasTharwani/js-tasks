 var sheraPosition = 20
 var sheraForward= false ;
 var sheraBackward= false;
 var sheraPower = false;
 var chachaPosition = 20
 var chachaForward= false ;
 var chachaBackward= false;
 var chachaPower = false;
 var shera = document.getElementById('shera');
 var chacha = document.getElementById('chacha');


function moveShera(type) {

    if(type === 'sheraForward'){
        sheraBackward= false;
        sheraPosition += 20;
        shera.style.left = sheraPosition + 'px'
        if (!sheraForward) {
             shera.src = "assets/images/leo-warzard-walkf-fwd.gif"
        }
        sheraForward= true;
    }
     if (type === 'sheraBackward') {
        sheraForward= false;
        sheraPosition -= 20;
        shera.style.left = sheraPosition + 'px'
        if(!sheraBackward) {
            shera.src = "assets/images/leo-warzard-walkb-bkwd.gif"
        }
        sheraBackward= true;
    }
    if (type === " ") {
        if(!sheraPower){
       shera.src = "assets/images/leo_win.gif"
        }
        sheraPower = true;
    }
}

function moveChacha(type) {

    if(type === 'chachaForward'){
        chachaBackward= false;
        chachaPosition += 20;
        chacha.style.right = chachaPosition + 'px';
        chacha.style.width = 600 + 'px';
        chacha.style.height = 500 + 'px';
        if (!chachaForward) {
             chacha.src = "assets/images/chacha-move.gif"
        }
        chachaForward= true;
    }
     if (type === 'chachaBackward') {
        chachaForward= false;
        chachaPosition -= 20;
        chacha.style.right = chachaPosition + 'px';
        chacha.style.width = 600 + 'px';
        chacha.style.height = 500 + 'px';
        if(!chachaBackward) {
            chacha.src = "assets/images/chacha-move.gif"
        }
        chachaBackward= true;
    }
    if (type === " ") {
        if(!chachaPower){
       chacha.src = "assets/images/leo_win.gif"
        }
        chachaPower = true;
    }
}

function action(event) {
    if(event.key === "d") {
        moveShera("sheraForward");
    }
    else if (event.key === "a") {
        moveShera("sheraBackward");
    }
    else if (event.key === " ") {
        moveShera(" ");
    }
    else if (event.key === "ArrowLeft") {
        moveChacha("chachaForward")
    }
    else if (event.key === "ArrowRight") {
        moveChacha("chachaBackward")
    }
}

window.addEventListener('keydown', action)

function reset() {
    shera.src = "assets/images/leo-warzard-stand.gif";
    chacha.src = "assets/images/choi-99-altcolor.gif"
    sheraForward= false;
    sheraBackward= false;  
    sheraPower = false;
     chachaForward= false ;
     chachaBackward= false;
     chachaPower = false;
     chacha.style.width = 400 + 'px';
    chacha.style.height = 300 + 'px';
    
}
window.addEventListener('keyup', reset)