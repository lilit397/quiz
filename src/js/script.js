(function(){
    let slideIndex = 1;
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    prev.addEventListener('click', function(e) {
        e.preventDefault();
        plusSlides(-1);
    });
    next.addEventListener('click', function(e){
        e.preventDefault();
        plusSlides(1)
    });

    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
      console.log(slideIndex)
    }
    
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
   
    slides[slideIndex-1].style.display = "block";
  }
})();

(function(){
  const form1Radio = document.querySelectorAll('.form1-radio');
  const inputsf1 = document.querySelectorAll('.inputf1');

  for(let i = 0; i < form1Radio.length; i++) {
    form1Radio[i].addEventListener('click', function(e) {
      e.defaultPrevented;

      if(inputsf1[i].checked = true) {
        let j = 0;
          while(j < form1Radio.length) {
            form1Radio[j].classList.remove('form1-active');
            j++
          }

        form1Radio[i].classList.add('form1-active');
      }
    })
  }
})()



