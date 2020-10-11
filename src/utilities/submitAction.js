import axios from 'axios';

const submitAction = (event, path, createFlashMessage) => {
  event.preventDefault();
  const data = new FormData(event.target);
  let object = {}
  data.forEach((value, key) => {object[key] = value});

  axios.post('http://localhost:8000/api/v1/' + path, object)
  .then(res => {
    if (res) {
      createFlashMessage(res.data.error);
    }
  })
  .catch((err) => {
    createFlashMessage(JSON.stringify(err));
  });
}

export default submitAction;