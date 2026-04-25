// Ждем полной загрузки HTML
document.addEventListener('DOMContentLoaded', function() {
    const leftLogo = document.querySelector('.logo--left');
    const rightLogo = document.querySelector('.logo--right');
    
    function startAnimations() {
        if (leftLogo) {
            leftLogo.classList.add('animate-in');
        }
        
        if (rightLogo) {
            rightLogo.classList.add('animate-in');
            
            setTimeout(() => {
                rightLogo.style.animation = 'none';
                rightLogo.style.opacity = '1';
                rightLogo.style.transform = 'translateX(0) rotate(360deg)';
            }, 1500);
        }
    }
    
    startAnimations();
    
    // Создаем кнопку перезапуска
    const replayButton = document.createElement('button');
    replayButton.textContent = '🔄 Перезапустить анимацию';
    replayButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 24px;
        background: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        color: #667eea;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    replayButton.onmouseenter = () => {
        replayButton.style.transform = 'translateY(-2px)';
        replayButton.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    };
    
    replayButton.onmouseleave = () => {
        replayButton.style.transform = 'translateY(0)';
        replayButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    };
    
    function replayAnimations() {
        if (leftLogo) {
            leftLogo.classList.remove('animate-in');
            leftLogo.style.opacity = '';
            leftLogo.style.transform = '';
        }
        
        if (rightLogo) {
            rightLogo.classList.remove('animate-in');
            rightLogo.style.animation = '';
            rightLogo.style.opacity = '';
            rightLogo.style.transform = '';
        }
        
        // Форсируем перерисовку
        void leftLogo?.offsetWidth;
        void rightLogo?.offsetWidth;
        
        startAnimations();
    }
    
    replayButton.onclick = replayAnimations;
    document.body.appendChild(replayButton);
});