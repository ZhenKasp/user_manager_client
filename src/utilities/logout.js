import axios from 'axios';

const logout = (changeView) => {
  axios.delete("http://localhost:8000/api/v1/logout", {}, { withCredentials: true })
  .then(res => {
      if (res) {
        // res.json({ success: true, view: "login"});
        changeView("signin");
      } else {
        res.json({ success: false, error: "logout error"});
      }
  }).catch(error => {
    console.log(error)
  });
}

export default logout;