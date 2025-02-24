const form = document.getElementById('setup-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Profile setup completed!');
});

document.querySelector('.go-back').addEventListener('click', () => {
    alert('Going back!');
});
