// listen to keyboard input
// - change the class of that specific key
// - play the sound

window.addEventListener('keydown', function(e){
    
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key = document.querySelector(`.key[data-key=${e.key}]`);
    if(!audio) return; // if press keys other than listed in "audio", then don't run anything
    audio.currentTime = 0; // allowing it to repeat, rewind to the start
    audio.play(); // play the music
    key.classList.add('playing');

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; 
        this.classList.remove('playing')
    }

    // transition
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))

})