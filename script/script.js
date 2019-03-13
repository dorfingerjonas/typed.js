window.addEventListener('load', function() {
  new Typed("#headline", {
    strings: ["Typed.js example"],
    typeSpeed: 50,
    cursorChar: '',
  });
});

function exampleOne() {
  new Typed("#example1", {
    strings: ["everything is possible", "typed.js", "add everything!"],
    typeSpeed: 50,
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
    attr: 'value',
    shuffle: true,
    loop: true
  });
}

function exampleFour() {
  new Typed("#example4", {
    strings: ["wow, that's amazing", "Try it out!", "try out something new"],
    typeSpeed: 50,
    attr: 'value',
    loop: true,
    fadeOut: true
  });
}
