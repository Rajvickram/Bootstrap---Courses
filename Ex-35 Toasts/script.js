// let toast = document.getElementById('toastBtn')

// let element = document.getElementById('toastElement')

// toast.addEventListener('click',disp)

// function disp() {
//     let tost = new bootstrap.Toast(element)

//     tost.show()
// }




let arr = [].slice.call(document.querySelectorAll('.toast'))

arr.map(function(toastEl){
    let currentToast = new bootstrap.Toast(toastEl);

    currentToast.show();
})