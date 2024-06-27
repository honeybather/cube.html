function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    state: document.querySelector('#state-field').value,
  };

  // make request to server to get the data
    fetch('/api/profile',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'appliation/json'
      },
    })
  // add the data the server returns to the document
    .then(response => response.json())
    .then(jsonData => {
      document.querySelector('#profiles').insertAdjacentHTML('beforeend',
  // (you can add it to the end of the div with ID "profiles")
    ` <li>${jsonData.fullname} the ${jsonData.occupation} is ${jsonData.age}</li>`);
});
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
