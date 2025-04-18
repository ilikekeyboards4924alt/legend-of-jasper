let titleScreenMusic: HTMLAudioElement = new Audio('./audio/titleScreenMusic.mp3');
document.addEventListener('click', event => {
    console.log(event);
    titleScreenMusic.play().then(_ => {
        titleScreenMusic.controls = true;
        titleScreenMusic.volume = 0.2;
        titleScreenMusic.loop = true;
    })
    // titleScreenMusic.addEventListener('canplaythrough', (event2) => {
    // });
})

export { titleScreenMusic };