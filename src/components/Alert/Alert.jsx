import Swal from 'sweetalert2';
/**
 *
 * @param {String} title Alert title
 * @param {String} text Alert description
 * @param {String} icon 'success' / 'error' / 'warning' / 'info' / 'question'

 */
export const Alert = (title, text, icon) => {
  Swal.fire({
    title,
    text,
    icon,
  });
};
