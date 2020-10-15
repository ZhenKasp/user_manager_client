import axios from 'axios';

const submitAction = (event, path, createFlashMessage, viewHandler) => {
  event.preventDefault();
  const data = new FormData(event.target);
  let object = {}
  data.forEach((value, key) => {object[key] = value});

  axios.post('http://localhost:8000/api/v1/' + path, object, { withCredentials: true })
  .then(res => {
    if (!res.data.username) {
      createFlashMessage(res.data.error);
    } else {
      viewHandler('userstable');
    }
  })
  .catch((err) => {
    createFlashMessage(err.message);
  });
}

export default submitAction;