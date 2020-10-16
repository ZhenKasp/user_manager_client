import axios from 'axios';

const submitAction = (event, path, createFlashMessage, viewHandler, getUser) => {
  event.preventDefault();
  const data = new FormData(event.target);
  let object = {};
  data.forEach((value, key) => {object[key] = value});

  axios.post('http://localhost:8000/api/v1/' + path, object, { withCredentials: true })
  .then(res => {
    if (!res.data.user) {
      createFlashMessage(res.data.error, res.data.variant);
    } else {
      console.log(res.data)
      getUser(res.data.user);
      viewHandler('userstable');
      createFlashMessage(res.data.message, res.data.variant);
    }
  })
  .catch((err) => {
    createFlashMessage(err.message, "danger");
  });
}

export default submitAction;