





// Wrap every letter in a span
console.log("TEST");

var textWrapper = document.querySelector('.ml7 .text-wrapper');
console.log(textWrapper);

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




const boxes = document.
querySelectorAll('.box');

window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
}

boxes.forEach((box) => {
  const boxTop = box.
  getBoundingClientRect().top;

  if (boxTop < triggerBottom) {
    box.classlist.add('show');
  } else {
    box.classlist.remove('show');
  }
});

// language change

        // function changeLanguage(lang) {
        //   location.hash = lang;
        //   location.reload();
        // }

        // var language = {
        //   eng: {
        //     welcome: "Who am I?"
        //   },
        //   eng: {
        //     whoAmIContent: "English"
        //   },
        //   nl: {
        //     welcome: "Wie ben ik?"
        //   },
        //   nl: {
        //     whoAmIContent: "Nederlands"
        //   },
        // };
      
        // // Check if a hash value exists in the URL
        // if (window.location.hash) {
      
        //   // Set the content of the webpage 
        //   // depending on the hash value
        //   if (window.location.hash == "#nl") {
        //     whoAmI.textContent =
        //       language.nl.welcome;

        //     whoAmIContent.textContent =
        //       language.nl.whoAmIContent;
        //   }
        //   else if (window.location.hash == "#eng") {
        //     whoAmI.textContent =
        //       language.eng.welcome;

        //     whoAmIContent.textContent =
        //       language.eng.whoAmIContent;
        //   }
        // }



        // $('[lang="es"]').hide();

        // $('#switch-lang').click(function() {
        //   $('[lang="es"]').toggle();
        //   $('[lang="en"]').toggle();
        // });