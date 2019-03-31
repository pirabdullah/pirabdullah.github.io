window.onload = function(){
    const togglerButton = document.querySelector('.toggler-icon');
    const navBar = document.getElementById('navbar');

    togglerButton.addEventListener('click', function(event){
        navBar.classList.toggle('show');
    });
}






















