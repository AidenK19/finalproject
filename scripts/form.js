const submitbtn = document.getElementById('submit')

const firstname = document.getElementById('fname')
const lastname = document.getElementById('lname')
const email = document.getElementById('email')
const phonenumber = document.getElementById('phonenum')
const message = document.getElementById('message')


submitbtn.addEventListener('click', () => {
    alert('Form Submitted!')
    console.log(firstname, lastname, email, phonenumber, message)
})