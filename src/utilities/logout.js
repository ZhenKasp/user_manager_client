import axios from 'axios';

const logout = (changeView, createFlashMessage) => {
  axios.delete("http://localhost:8000/api/v1/logout", { headers: { authorization: localStorage.getItem('token') }}, {})
  .then(res => {
      if (res.data.success) {
        localStorage.removeItem('token');
        changeView("signin");
      } else {
        res.json({ success: false, error: "logout error"});
      }
  })
  .catch(error => {
    createFlashMessage(error, "danger");
  });
}

export default logout;