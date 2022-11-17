// ------------------------------------ circletypse js, function necessary for splitter  //

function _circletype () {
    new CircleType(document.querySelector('#topring'), (string) => (string + ' ').split('')), 
    new CircleType(document.querySelector('#middlering'), (string) => (string + ' ').split('')),
    new CircleType(document.querySelector('#bottomring'), (string) => (string + ' ').split(''));
    }

_circletype();


// ----------------------------------------------------------- gsap scroll ani //

gsap.registerPlugin(ScrollTrigger);

  // ---- plant slider ani
  gsap.from('.plant, #plant1text, #plant1textB', {
    scrollTrigger: {
        trigger: '.plant' ,
        toggleActions: 'play reverse play reverse',
        start: 'top 40%',
        end: () => '+=700',
    },
    duration: 1.2, x:-1200, 
    ease: 'power1', 
    stagger: 0.5,
});

gsap.from('.bodyimage2', {
    scrollTrigger: {
        trigger: '.plant' ,
        toggleActions: 'play reverse play reverse',
        start: 'top 40%',
        end: () => '+=700',
    },
    duration: 1.5, x:2500, 
    ease: 'power1', 
    stagger: 0,
});

gsap.from('#plantbody2', {
    scrollTrigger: {
        trigger: '.plant' ,
        toggleActions: 'play reverse play reverse',
        start: 'top 40%',
        end: () => '+=700',
    },
    duration: 1.2, x:1300, 
    ease: 'power1', 
    stagger: 0.5,
});

// ----------------------------- people section ani

gsap.from('#peopleh1, #peoplebody1', {
    scrollTrigger: {
        trigger: '#peopleh1' ,
        toggleActions: 'play reverse play reverse',
        start: 'top 40%',
        end: () => '+=700',
    },
    duration: 1, x:2000, 
    ease: 'power1', 
    stagger: 0.5
});

gsap.from('.mySwiper2', {
    scrollTrigger: {
        trigger: '#peopleh1' ,
        toggleActions: 'play reverse play reverse',
        start: 'top 40%',
        end: () => '+=700',
    },
    duration: 1.5, x:-2000, 
    ease: 'power1', 
    stagger: 0,
});

gsap.from('#people2img', {
    scrollTrigger: {
        trigger: '#people2text' ,
        toggleActions: 'play reverse play reverse',
        start: 'top 40%',
        end: () => '+=700',
    },
    duration: 1, x:2000, 
    ease: 'power1', 
    stagger: 0.5
});

gsap.from('#people2text, .businessimg', {
    scrollTrigger: {
        trigger: '.pplbusiness' ,
        toggleActions: 'play reverse play reverse',
        start: 'top 40%',
        end: () => '+=700',
    },
    duration: 1, x:-2000, 
    ease: 'power1', 
    stagger: 0.5,
});

// -------------------------------- planet section ani

gsap.from('#planeth1, #planet1body, .mySwiper4', {
    scrollTrigger: {
        trigger: '#planeth1' ,
        toggleActions: 'play reverse play reverse',
        start: 'top 40%',
        end: () => '+=700',
    },
    duration: 1.2, x:2000, 
    ease: 'power1', 
    stagger: 0.5,
});

gsap.from('.mySwiper3', {
    scrollTrigger: {
        trigger: '#planeth1' ,
        toggleActions: 'play reverse play reverse',
        start: 'top 40%',
        end: () => '+=700',
    },
    duration: 1.5, x:-2000, 
    ease: 'power1', 
    stagger: 0,
});

// ---- plant slider ani

gsap.from('#planet2', {
    scrollTrigger: {
        trigger: '#planet2' ,
        toggleActions: 'play reverse play reverse',
        start: 'top center',
        end: () => '+=1000',
    },
    duration: 2,
    opacity: 0,
    ease: 'power1', 
    stagger: 0,
});




// ----------------------------------------------------- svg map linking with div

const plantTextBody = document.querySelector("#plant1text2");
const plantHBlank = document.querySelector("#blankplanth");
var plantTextInsert1 = document.querySelector("#plant1insert1").innerText;
var plantTextInsert2 = document.querySelector("#plant1insert2").innerText;
var plantTextInsert3 = document.querySelector("#plant1insert3").innerText;
var plantTextInsert4 = document.querySelector("#plant1insert4").innerText;
var plantTextInsert5 = document.querySelector("#plant1insert5").innerText;

var plantHInsert1 = document.querySelector("#plant1h1").innerText;
var plantHInsert2 = document.querySelector("#plant1h2").innerText;
var plantHInsert3 = document.querySelector("#plant1h3").innerText;
var plantHInsert4 = document.querySelector("#plant1h4").innerText;
var plantHInsert5 = document.querySelector("#plant1h5").innerText;

const linkOne = document.querySelector("#maplink1");
const linkTwo = document.querySelector("#maplink2");
const linkThree = document.querySelector("#maplink3");
const linkFour = document.querySelector("#maplink4");
const linkFive = document.querySelector("#maplink5");
const linkSix = document.querySelector("#maplink6");
const linkSeven = document.querySelector("#maplink7");
const linkEight = document.querySelector("#maplink8");
const linkNine = document.querySelector("#maplink9");
const linkTen = document.querySelector("#maplink10");

linkOne.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert1,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert1;
});

linkFive.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert1,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert1;
});

linkTwo.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert2,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert2;
});

linkThree.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert2,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert2;
});
linkFour.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert2,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert2;
});

linkSix.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert3,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert3;
});

linkSeven.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert3,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert3;
});

linkNine.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert4,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert4;
});

linkTen.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert4,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert4;
});

linkEight.addEventListener('click', (e) => {
    plantHBlank.innerText = plantHInsert5,
    plantHBlank.style.display = "block",
    plantTextBody.innerText = plantTextInsert5;
});


/* function to tuck away the svg links*/



// -------------------------- carousel code --------------------------- //

//----------------------------- plant 1 swiper


// ----------------------------- people 1 swiper

var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    effect: 'fade',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  });

// ----------------------------- planet swiper
// ------ slider thumbnails in div 1
var swiper4 = new Swiper(".mySwiper4", {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });

// ------ slides in div 2
  var swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper4,
    },
  });
  

/* custom script to link planet slides to planet content -  v1 without any loop or array */
  
//--------------------------Planet Caro/Swiper

// declaring variables; the text element targeted, the text inserts to replace it based on slide change
  var swiperText = document.getElementById('planettext').innerText;
  let planetTextInsertOne = document.getElementById('textinsert1').innerText;
  let planetTextInsertTwo = document.getElementById('textinsert2').innerText;
  let planetTextInsertThree = document.getElementById('textinsert3').innerText;
  let planetTextInsertFour = document.getElementById('textinsert4').innerText;
  
  
// logging the index for each slide as it becomes active; this variable necessary for the function, the  console.log is to check that it is detecting
// 
swiper3.on('slideChange', function (e) {
    console.log(swiper3.activeIndex),
    contentShift();
    });
  

// ---------- function for changing div content based on swiper slide (targets the index) 
function contentShift (){
    // if the slide index = 0, show the original text for the div (swiperText)
    if (swiper3.activeIndex == 0){
        document.getElementById('planettext').innerText = swiperText;
    // else if the slide index = 1/slide number 1 is visible, replace the text of the div with text insert 1 
    } else if (swiper3.activeIndex == 1){
        document.getElementById('planettext').innerText = planetTextInsertOne;
    // else if the slide index = 2/slide number 2 is visible, replace the text of the div with text insert 2
    } else if (swiper3.activeIndex == 2){
        document.getElementById('planettext').innerText = planetTextInsertTwo;
    // else if the slide index = 3/slide number 3 is visible, replace the text of the div with text insert 3 
    } else if (swiper3.activeIndex == 3){
        document.getElementById('planettext').innerText = planetTextInsertThree;
    // else if the slide index = 4/slide number 4 is visible, replace the text of the div with text insert 4 
    } else if (swiper3.activeIndex == 4){
        document.getElementById('planettext').innerText = planetTextInsertFour;
    // else the slide index is not picked up/somehow goes above 4/etc, just show the original div text 
    } else {
    swiperText;
  }};

// --------------------------------------------------------------------------------  SL Drawer//

const drawer = document.querySelector('.drawer-contained');
const openButton = document.querySelector('.indigiearth');
const closeButton = drawer.querySelector('sl-button[variant="primary"]');

openButton.addEventListener('click', () => drawer.show());
closeButton.addEventListener('click', () => drawer.hide());

const drawer2 = document.querySelector('.drawer-contained2');
const openButton2 = document.querySelector('.ausnativefoodco');
const closeButton2 = drawer.querySelector('sl-button[variant="primary"]');

openButton2.addEventListener('click', () => drawer2.show());
closeButton2.addEventListener('click', () => drawer2.hide());

const drawer3 = document.querySelector('.drawer-contained3');
const openButton3 = document.querySelector('.warndu');
const closeButton3 = drawer.querySelector('sl-button[variant="primary"]');

openButton3.addEventListener('click', () => drawer3.show());
closeButton3.addEventListener('click', () => drawer3.hide());

const drawer4 = document.querySelector('.drawer-contained4');
const openButton4 = document.querySelector('.natif');
const closeButton4 = drawer.querySelector('sl-button[variant="primary"]');

openButton4.addEventListener('click', () => drawer4.show());
closeButton4.addEventListener('click', () => drawer4.hide());

const drawer5 = document.querySelector('.drawer-contained5');
const openButton5 = document.querySelector('.chocolate');
const closeButton5 = drawer.querySelector('sl-button[variant="primary"]');

openButton5.addEventListener('click', () => drawer5.show());
closeButton5.addEventListener('click', () => drawer5.hide());

const drawer6 = document.querySelector('.drawer-contained6');
const openButton6 = document.querySelector('.mabumabu');
const closeButton6 = drawer.querySelector('sl-button[variant="primary"]');

openButton6.addEventListener('click', () => drawer6.show());
closeButton6.addEventListener('click', () => drawer6.hide());

//--------------------------- close drawer when clicked off

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(openButton);
  const withinBoundariesTwo = event.composedPath().includes(drawer);

  if (withinBoundaries) {
    drawer.show();
  } else if (withinBoundariesTwo) {
    drawer.style.visibility = 'visible';
  }  else {
    //drawer.hide important to use over visibility or display as it still uses the closing animation, the others do not
    drawer.hide();
  } 
});

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(openButton2);
  const withinBoundariesTwo = event.composedPath().includes(drawer2);

  if (withinBoundaries) {
    drawer2.show();
  } else if (withinBoundariesTwo) {
    drawer2.style.visibility = 'visible';
  }  else {
    drawer2.hide();
  } 
});

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(openButton3);
  const withinBoundariesTwo = event.composedPath().includes(drawer3);

  if (withinBoundaries) {
    drawer3.show();
  } else if (withinBoundariesTwo) {
    drawer3.style.visibility = 'visible';
  }  else {
    drawer3.hide();
  } 
});

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(openButton4);
  const withinBoundariesTwo = event.composedPath().includes(drawer4);

  if (withinBoundaries) {
    drawer4.show();
  } else if (withinBoundariesTwo) {
    drawer4.style.visibility = 'visible';
  }  else {
    drawer4.hide();
  } 
});

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(openButton5);
  const withinBoundariesTwo = event.composedPath().includes(drawer5);

  if (withinBoundaries) {
    drawer5.show();
  } else if (withinBoundariesTwo) {
    drawer5.style.visibility = 'visible';
  }  else {
    drawer5.hide();
  } 
});

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(openButton6);
  const withinBoundariesTwo = event.composedPath().includes(drawer6);

  if (withinBoundaries) {
    drawer6.show();
  } else if (withinBoundariesTwo) {
    drawer6.style.visibility = 'visible';
  }  else {
    drawer6.hide();
  } 
});