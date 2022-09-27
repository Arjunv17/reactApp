import Swal from 'sweetalert2';



export const toastConfig = () => {
    return Swal.mixin({
        customClass: {
            container: 'sweet-toast',
        },
        toast: true,
        icon: 'success',
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        confirmButtonText: 'close',
        confirmButtonColor: 'white',
        timerProgressBar: true,
        showCloseButton: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })
}

export const fireToast = (icon, title) => {
    toastConfig().fire({
      icon,
      title,
    })
  }