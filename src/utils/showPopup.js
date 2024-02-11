import Swal from 'sweetalert2'

const showPopup = (condition, text) => {
  return Swal.fire({
    title: condition,
    text: text,
    icon: condition
  })
}

export default showPopup