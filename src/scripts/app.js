import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

(() => {
    const keyboard = document.getElementById("keyboard");
    const keyDisplay = document.getElementById("key");


    keyboard.addEventListener("mousedown", (e) => {
        let note = e.target.dataset.note;
        if (!note) return;
        // add class
        e.target.classList.add("pressed");
        keyDisplay.innerHTML = note;
        synth.triggerAttack(note);
    })

    keyboard.addEventListener("mousemove", (e) => {
        let note = e.target.dataset.note ?? null;
        if (!note) return;
        keyDisplay.innerHTML = note;
        // synth.setNote(note, "8n");
    });

    document.addEventListener("mouseup", (e) => {
        keyDisplay.innerHTML = "";
        synth.triggerRelease();
        e.target.classList.remove("pressed");
    })

    /* document.addEventListener("keydown", (e) => {
        if (e.code == 'KeyA') {
            synth.triggerAttack('C4', '8n');
            document.getElementById("c4").classList.add("pressed");
        }
    });

    document.addEventListener("keyup", (_) => {
        // synth.triggerRelease();
    }); */

})();