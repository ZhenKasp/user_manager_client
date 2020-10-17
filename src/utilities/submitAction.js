import axios from 'axios';

const submitAction = (event, path, createFlashMessage, setToken) => {
  event.preventDefault();
  const data = new FormData(event.target);
  let object = {};
  data.forEach((value, key) => {object[key] = value});

  axios.post('http://localhost:8000/api/v1/' + path, object, { withCredentials: true })
  .then(res => {
    if (!res.data.token) {
      createFlashMessage(res.data.error, res.data.variant);
    } else {
      setToken(res.data.token);
      createFlashMessage(res.data.message, res.data.variant);
    }
  })
  .catch((err) => {
    createFlashMessage(err.message, "danger");
  });
}

export default submitAction;