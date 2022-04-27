
// Function to set active class on list item menu

// const currentLocation = location.href;
// console.log('currentlocation = '+currentLocation);
// const menuItem = document.querySelectorAll('.menu_a');
// const menuLength = menuItem.length;
// for(let i = 0; i< menuLength; i++){
//     menuItem[i].classList.remove("active");
//     if(menuItem[i].href === currentLocation){
//         // console.log('menu item: '+ menuItem[i]);
//         // console.log("menu href: " + menuItem[i].href);
//         menuItem[i].className += " active";
//     }
// }

const currentLocation = location.href;
console.log('currentlocation = '+currentLocation);
const menuItem = document.querySelectorAll('.menu_a');
const menuLength = menuItem.length;
for(let i = 0; i< menuLength; i++){
    menuItem[i].classList.remove("active");
    if(menuItem[i].href === currentLocation){
        menuItem[i].className += " active";
    }
}

// sweet alert
function showAlert(title,messageBody,type){
    Swal.fire(
        title,
        messageBody,
        type
      )
}

// countdown toast
function showSweetToast(icon,title){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: icon,
        title: title
      })
}