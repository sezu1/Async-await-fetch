const getBtn = document.getElementById('getBtn');
const textUsers = document.getElementById('textUsers');

const input = document.getElementById('ageInput');
const submitAge = document.getElementById('submitAge');

const userInput = document.getElementById('userInput');
const getUsersBtn = document.getElementById('getUsers');
const userText = document.getElementById('userText');

const url = 'https://jsonplaceholder.typicode.com/users';

//Task 1 , 2
async function getUsers () {
    const response = await fetch(url)
    const users = await response.json()
    textUsers.innerHTML = JSON.stringify(users)
}

getBtn.addEventListener('click', getUsers);




//Task 3
async function checkAge() {
    const userInput = input.value;

      if (parseInt(userInput) === 31) {
        console.log('Правильно!');
      } else {
        throw "Ошибка!";
      }
  }

checkAge().then(result => {
console.log(result);
}).catch(error => error);

submitAge.addEventListener('click', checkAge);




//Task 4
async function getUsersId () {
    const userId = userInput.value
    const response = await fetch(`${url}/${userId}`) 
    const users = await response.json()
    userText.innerHTML += `${users.name}, ${users.username},  ${users.email},  ${users.phone},  ${users.website}`
    }

getUsersBtn.addEventListener('click', getUsersId);