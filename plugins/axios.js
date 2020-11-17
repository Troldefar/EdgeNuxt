export default function ({ $axios, app }) {

  $axios.onRequest(config => {
    if(app.store.getters['user/logged']) {
      config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('api_token');
    }
  });

  $axios.onError(err => {
    console.log(err);
  });
}