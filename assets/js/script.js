setTimeout(() => {
    let main = document.getElementById('main');
    let preload = document.getElementById('preload');

    preload.classList.add('preload-hidden');
    main.classList.remove('hidden');
}, 4000);