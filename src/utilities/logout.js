import axios from 'axios';

const logout = (changeView, createFlashMessage) => {
  axios.delete("http://localhost:8000/api/v1/logout", {}, { withCredentials: true })
  .then(res => {
      createFlashMessage(res.data.message, res.data.variant);
      if (res) {
        // res.json({ success: true, view: "login"});
        changeView("signin");
      } else {
        res.json({ success: false, error: "logout error"});
      }
  }).catch(error => {
    createFlashMessage(error, "danger");
  });
}

export default logout;