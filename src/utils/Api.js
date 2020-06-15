import axios from 'axios'

export default axios.create({
    baseURL: "https://fl-backend.herokuapp.com",
    responseType: "json"
  })

// export const detect = newTweet => {
//     return base
//     .post('/detect', {
//         tweet: newTweet.tweet,
//         url: newTweet.url,
//         result: newTweet.result
//     })
//     .then(res => {
//         console.log("Registered")
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

