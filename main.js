// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.querySelector("nav");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let timelineShowing = false
// Get timeline button
let timelineBtn = document.querySelector('#timelineBtn button');

// Get hidden box that contains entire timeline
let hiddenTimeLine = document.querySelector('.hidden');


timelineBtn.addEventListener('click', showOrHideTimeLine)

function showOrHideTimeLine() {
    if(timelineShowing){
        hiddenTimeLine.classList.remove('fade')
        hiddenTimeLine.style.display = 'none'
    this.textContent = 'See Entire Timeline'
    return timelineShowing = false
    }else {
        hiddenTimeLine.classList.add('fade')
        hiddenTimeLine.style.display = 'block'
    this.textContent = 'Hide Timeline'
    return timelineShowing = true
    }
}

// Get the modals
let modal = document.getElementById("myModal");
let vidModal = document.getElementById("myModalVid");

let vidBtn = document.getElementById('vidBtn');

vidBtn.addEventListener('click', showVideoModal);

let imageToShow = document.getElementById('imageToShow')
// Get the images that open the modal
let evidenceImages = document.querySelectorAll('.imgGrid img')

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span2 = document.querySelector(".close2")

let iframe = document.querySelector('#theVid');

// When the user clicks on the button, open the modal
function showModal(e) {
  modal.style.display = "block";
  imageToShow.innerHTML = ` <p>${this.getAttribute('data-text')}</p><img src="${this.src}" alt="evidence photo">`
}

function showVideoModal(e) {
  vidModal.style.display = "block";
  playVideo()
}


evidenceImages.forEach(img => {
  img.addEventListener('click', showModal)
 
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  console.log('clicked')
  vidModal.style.display = "none";
  stopVideo()
}

const stopVideo = function (  ) {
	iframe.src = ''
};

const playVideo = function() {
  iframe.src = 'https://www.youtube.com/embed/lYFDFc8esRw'
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if(event.target == vidModal){
    vidModal.style.display = "none";
    stopVideo()
  }
}

let navOpen = false

let mobileNav = document.querySelector('.mobileNav')
let openMobile = document.querySelector('.openMobile')

openMobile.addEventListener('click', handleNav)


function handleNav() {
  if(navOpen){
    mobileNav.classList.remove('fadeInLeft')
  mobileNav.style.display = 'none'
  openMobile.innerHTML = '<svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.333496 0.5H33.6668V4.66667H0.333496V0.5ZM0.333496 10.9167H33.6668V15.0833H0.333496V10.9167ZM0.333496 21.3333H33.6668V25.5H0.333496V21.3333Z" fill="white"/></svg>'
  return navOpen = false
  }else {
    mobileNav.classList.add('fadeInLeft')
  mobileNav.style.display = 'block'
  openMobile.innerHTML = '<svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.333496 10.9167H25.3335V15.0833H0.333496V10.9167ZM0.333496 0.5H33.6668V4.66667H0.333496V0.5ZM0.333496 25.5H15.4064V21.3333H0.333496V25.5Z" fill="white"/></svg>'
  return navOpen = true
  }
}

let mobileLinks = document.querySelectorAll('.mobileNav a')

mobileLinks.forEach(link => {
  link.addEventListener('click', handleNav)
})


let options = {
  root:null,
  rootMargin: '0px',
  threshold: 0.25
}


let callback = (entries, observer) => {
  entries.forEach(entry => {
      if(entry.isIntersecting 
          && entry.target.className == 'observed'){
              let vidUrl = entry.target.getAttribute('data-src')
              if(vidUrl){
                  entry.target.src = vidUrl
                  observer.unobserve(entry.target)
                  console.log(entry.target)
              }
          }
  })
}

let observer = new IntersectionObserver(callback, options)
let alllazy = document.querySelectorAll('.observed')
alllazy.forEach(vid => observer.observe(vid));
 