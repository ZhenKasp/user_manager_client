import axios from 'axios';

const logout = (changeView, setToken, createFlashMessage) => {
  axios.delete("http://localhost:8000/api/v1/logout", { headers: { authorization: localStorage.getItem('token') }}, {})
  .then(res => {
    setToken("");
    changeView("signin");
    createFlashMessage(res.data.message, res.data.variant)
  })
  .catch(error => {
    createFlashMessage(error.message, "danger");
  });
}

export default logout;