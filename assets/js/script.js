setTimeout(() => {
    let main = document.getElementById('main');
    let preload = document.getElementById('preload');

    preload.classList.add('preload-hidden');
    main.classList.remove('hidden');
}, 4000);

window.addEventListener('scroll', function() {
    let topButton = document.querySelector('.top-button');

    topButton.classList.toggle('top-button-visible', this.window.scrollY > 500);
});

document.onscroll = function() {
    let card1 = document.querySelector('.card1');
    let card2 = document.querySelector('.card2');
    let card3 = document.querySelector('.card3');
    let bot = document.querySelector('.paranormal-bot');

    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        card1.classList.add('card-visible');
    }

    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        card2.classList.add('card-visible');
    }

    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 1000) {
        card3.classList.add('card-visible');
    }

    if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1400) {
        bot.classList.add('paranormal-bot-visible');
    }
}

function toTop() {
    window.scroll(0, 0);
}