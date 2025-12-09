document.addEventListener('DOMContentLoaded', function() {
    
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');

    
    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    function resetGame() {
        deadCounter.textContent = '0';
        lostCounter.textContent = '0';
    }

    function endGame(message) {
        alert(message);
        resetGame();
    }

    
    function handleHoleClick(hole) {
        const hasMole = hole.classList.contains('hole_has-mole');

        if (hasMole) {
            
            let currentDead = parseInt(deadCounter.textContent);
            deadCounter.textContent = currentDead + 1;

            
            if (currentDead + 1 >= 10) {
                endGame('Поздравляем! Вы победили, убив 10 кротов!');
            }
        } else {
            
            let currentLost = parseInt(lostCounter.textContent);
            lostCounter.textContent = currentLost + 1;

            
            if (currentLost + 1 >= 5) {
                endGame('Игра окончена! Вы допустили 5 промахов.');
            }
        }
    }

    
    for (let i = 1; i <= 9; i++) {
        const hole = getHole(i);
        hole.addEventListener('click', function() {
            handleHoleClick(hole);
        });
    }
});
