function checkApi() {

    //https://jsonplaceholder.typicode.com/invalid-endpoint

    //https://jsonplaceholder.typicode.com/todos/1000

    //https://mocky.io/v2/5185415ba171ea3a00704eed?status=500
    fetch('https://jsonplaceholder.typicode.com/todos/1000')
      .then((response) => response.json())
      .then((json) => {
        console.log('json response ');
      })
      .catch((ERR) => {
        console.log('error occured');
      });
  }
  
  checkApi();




  