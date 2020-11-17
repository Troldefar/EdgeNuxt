export default function ({ $axios, redirect, app }) {

  $axios.onRequest(config => {
    if(app.store.getters['user/logged']) {
      console.log(localStorage.getItem('api_token'));
      config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('api_token');
    }
    console.log(config);
  });

  $axios.onError(err => {
    console.log(err);
  });
}