let clickCount = 0;
const clickEvent = document.querySelector('#btn');
const lightOne = document.querySelector('#light');
const img = document.querySelector('#img');
        
clickEvent.addEventListener('click', function() {
    clickCount ++;

    if (clickCount === 1) {
        lightOne.classList.add('light-class');
    } else {
        lightOne.classList.remove('light-class');
        lightOne.classList.add('light-class2nd');
        for (let i = 1; i < 15; i++) {
            const swirlPetal = document.createElement('div');
            let num = Math.ceil(Math.random() * 11);
            let numb = Math.ceil(Math.random() * 2);
            swirlPetal.setAttribute('class', 'petal');
            const room = document.querySelector('.room');
            room.appendChild(swirlPetal);
            swirlPetal.style.cssText = 
            `display: inline-block;
            margin-right: calc(${num} * 8px);
            margin-bottom: calc(${num} * 20px); 
            animation: fall calc(${numb} * 5s) calc(${num} * 0.8s) ease-out infinite;`;
        }
        
        let t = setInterval(function(){
            for (let i = 1; i < 5; i++) {
                let num = Math.ceil(Math.random() * 50);
                let numb = Math.ceil(Math.random() * 7);
                let scatterPetals = document.createElement('div');
                scatterPetals.setAttribute('class', 'petals');
                let room = document.querySelector('.room');
                room.appendChild(scatterPetals);
                scatterPetals.style.cssText = 
                `position: absolute;
                top: calc(${numb} * 2vh + 70vh);
                left: calc(${num} * 18px);
                z-index: ${num};
                transform: rotate(calc(${numb} * 30deg)); `;
            }
        }, 5000);
    }  
});
