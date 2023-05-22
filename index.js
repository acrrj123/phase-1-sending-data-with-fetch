function submitData(name, email) {

  const configurationObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ name, email })
  };

  return fetch('http://localhost:3000/users', configurationObj)
  .then(resp => resp.json())
  //.then(data => console.log(data))
  .then(data => 
    document.body.innerHTML += `<p>${data.id}</p>`)
  .catch(error => 
    document.body.innerHTML += `<p>${error.message}</p>`);
};
 
  
  
  









