import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const toastStyles = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  progress: '',
  id: 'hello',
}

export const toastSuccess = (message) => toast.success(message, toastStyles)
export const toastError = (message) => toast.error(message, toastStyles)
