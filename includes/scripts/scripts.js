function startSlide(){
    const elements = document.querySelectorAll('.subtitle-text');
    let i = 0;
    const timer = setInterval(function(){
        if(i < 4){
            elements[i].classList.add('hidden');
            i++;
            elements[i].classList.remove('hidden');
        }
        else{
            elements[i].classList.add('hidden');
            i = 0;
            elements[i].classList.remove('hidden');
        }
    }, 3000);
}