// js/logo-animate.js - без кнопки
const leftLogo = document.querySelector('.logo--left');
const rightLogo = document.querySelector('.logo--right');

function startAnimations() {
    if (leftLogo) {
        leftLogo.classList.add('animate-in');
    }
    
    if (rightLogo) {
        rightLogo.classList.add('animate-in');
        
        setTimeout(() => {
            rightLogo.style.animation = 'fadeIn 0.8s ease-out forwards';
            rightLogo.style.transform = 'rotate(90deg)';
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', startAnimations);