window.addEventListener('load', function() {
  new Typed("#headline", {
    strings: ["typed.js example^750", "it animarw", "it animates text^1000", "Try it out!^750", "Typed.js"],
    typeSpeed: 45,
    backSpeed: 15,
    backDelay: 25,
    });
});

function exampleOne() {
  new Typed("#example1", {
    strings: ["Grüß Gott", "mein Name lautet Philipp Edlinger", "und ich möchte Sie herzlich zu meiner Website", "über eines der ikonischten Tiere Asiens begrüßen", "den PANDA!"],
    typeSpeed: 50,
    backSpeed: 50,
    attr: 'placeholder',
    loop: true,
  });
}

function exampleTwo() {
  new Typed("#example2", {
    strings: [document.getElementById('exampleText').value],
    typeSpeed: 50,
    attr: 'value',
  });
}

function exampleThree() {
  new Typed("#example3", {
    strings: ["create something unique", "use typed.js", "be creative"],
    typeSpeed: 50,
    backSpeed: 50,
    attr: 'value',
    shuffle: true,
    loop: true
  });
}

function exampleFour() {
  new Typed("#example4", {
    strings: ["wow, that's amazing^2000", "Try it out!^1500", "try out something new^100"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    attr: 'value',
    loop: true,
  });
}
