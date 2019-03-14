window.addEventListener('load', function() {
  new Typed("#headline", {
    strings: ["typed.js example", "it animtiso", "it animates text", "Try it out!"],
    typeSpeed: 45,
    backSpeed: 20,
    backDelay: 200,
    });
});

function exampleOne() {
  new Typed("#example1", {
    strings: ["Grüß Gott", "mein Name lautet Philipp Edlinger", "und ich möchte Sie herzlich zu meiner Website", "über eines der ikonischten Tiere Asiens begrüßen", "den PANDA!"],
    typeSpeed: 50,
    backSpeed: 50,
    attr: 'placeholder',
    loop: true
  });
}

function exampleTwo() {
  new Typed("#example2Out", {
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
    strings: ["wow, that's amazing", "Try it out!", "try out something new"],
    typeSpeed: 50,
    backSpeed: 50,
    attr: 'value',
    loop: true,
    fadeOut: true
  });
}
