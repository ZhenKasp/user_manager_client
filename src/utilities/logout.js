import axios from 'axios';

const logout = (changeView, createFlashMessage) => {
  axios.delete("http://localhost:8000/api/v1/logout", {}, { withCredentials: true })
  .then(res => {
      if (res) {
        if (!localStorage.getItem('user')) {
          createFlashMessage("User was blocked or deleted", "danger")
        } else {
          createFlashMessage(res.data.message, res.data.variant);
        }
        localStorage.removeItem('user');
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