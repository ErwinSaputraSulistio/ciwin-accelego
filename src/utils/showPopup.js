import Swal from 'sweetalert2'

const showPopup = (title, text, icon, settings = {}) => {
  return Swal.fire({
    title,
    text,
    icon,
    ...settings
  })
}

export default showPopup