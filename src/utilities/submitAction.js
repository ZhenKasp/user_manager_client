import axios from 'axios';

const submitAction = (event, path, createFlashMessage, viewHandler) => {
  event.preventDefault();
  const data = new FormData(event.target);
  let object = {};
  data.forEach((value, key) => {object[key] = value});

  axios.post('http://localhost:8000/api/v1/' + path, object, { withCredentials: true })
  .then(res => {
    if (!res.data.username) {
      createFlashMessage(res.data.error, res.data.variant);
    } else {
      viewHandler('userstable');
      createFlashMessage(res.data.message, res.data.variant);
    }
  })
  .catch((err) => {
    createFlashMessage(err.message, "danger");
  });
}

export default submitAction;