// create a function and following the progressions inside the function.\
// Progression 1: Create a promise call which fetches data
function populateData(){
  const gridElement = document.getElementById('message');
  axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((res)=>{
  console.log(res.data);
    const result = res.data;

    result.forEach((contact)=>{
      const contactElement = document.createElement('div');
      // contactElement.setAttribute('id','player');
      contactElement.setAttribute('class','player');

      const nameElement = document.createElement('div');
      nameElement.setAttribute('class','strength');
      const emailElement = document.createElement('div');
      const cityElement = document.createElement('div');
      const phoneElement = document.createElement('div');
      const companyElement = document.createElement('div');

      nameElement.innerText= contact.name;
      emailElement.innerText= contact.email;
      cityElement.innerText = contact.address.city;
      phoneElement.innerText = contact.phone;
      companyElement.innerText =contact.company;


      contactElement.append(nameElement);
      contactElement.append(emailElement);
      contactElement.append(cityElement);
      contactElement.append(phoneElement);
      contactElement.append(companyElement);

      gridElement.append(contactElement);
    })
  })
  .catch((err)=>{
    console.log(err);
  });
}



// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error
