const container = document.getElementsByClassName('content')[0];
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-bar a');

container.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;

        if(container.scrollTop >= sectionTop - (sectionHeight / 4)){
            current = section.getAttribute('id');
        }
    });

    links.forEach((link) => {
        link.classList.remove('selected');
        if(link.getAttribute('href') === `#${current}`){
            link.classList.add('selected');
        }
    });

    sections.forEach((section)=>{
        if(section.getAttribute('id') === current){
            section.classList.remove('hidden');
        }
        else{
            section.classList.add('hidden');
        }
    });
});