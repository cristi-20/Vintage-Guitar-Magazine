// Hide and show p



let modals = document.getElementsByClassName('modal');
let modalBtns = document.getElementsByClassName('modal-btn');
let closeBtns = document.getElementsByClassName('close');

for(let modalBtn of modalBtns) {
    modalBtn.onclick = function(event) {
        document.querySelector(event.target.getAttribute('href') ).style.display = 'block';
    }
}

for(let closeBtn of closeBtns) {
    closeBtn.onclick = function(event) {
        event.target.parentNode.parentNode.style.display = 'none';
    }
}

window.onclick = function(event) {
    if(event.target.classList.contains('modal') ) {
        for(let modal of modals) {
            if(typeof modal.style !== 'undefined') {
                modal.style.display = 'none';    
            }
        }
    }
}

window.onkeydown = function(event) {
    if (event.key == 'Escape') {
        for(let modal of modals) {
            modal.style.display = 'none';
        }
    }
}

// // Hide show p
//     function show(elem) {	
//     var p = document.getElementsByClassName("hidden");
//     if (p[elem] != undefined) {
//         if (p[elem].style.display == "none") {
//           p[elem].style.display = "block";
//       } else {
//           p[elem].style.display = "none";
//       }
//     }
//   }
