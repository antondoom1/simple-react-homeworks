import axios from 'axios'

export const requestsAPI = {
  testRequest(isChecked: boolean) {
    return axios
      .post('https://neko-cafe-back.herokuapp.com/auth/test', {
        success: isChecked
      })
      .then(response => response.data)
  }
}