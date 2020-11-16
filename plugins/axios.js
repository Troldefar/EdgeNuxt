export default function ({ $axios, redirect, app }) {

  if(app.store.getters['user/logged']) {
    $axios.defaults.headers = {
      Authorization: localStorage.getItem('api_token')
    }
  }

  $axios.onRequest(config => {
    console.log(config);
  });

  $axios.onError(err => {
    console.log(err);
  });
}