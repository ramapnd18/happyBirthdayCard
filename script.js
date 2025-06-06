const tiupButton = document.getElementById("tiup");
tiupButton.addEventListener("click", () => {
    document.querySelectorAll('.fuego').forEach(element => {
        element.style.animation = 'disapear 1s ease-out forwards';
        element.addEventListener('animationend', () => {
        element.style.display = 'none';
        });
    });
const message = document.getElementById("message");
    message.style.transform = 'translateX(-100%)';
    message.style.animation = 'in 600ms 0.1s ease-out forwards';
    message.style.opacity = '0';
    message.style.display = 'block';
    message.style.opacity = '1';
    message.style.top = '50%';

});