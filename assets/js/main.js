window.addEventListener('scroll', () => {
    const home = document.getElementById('home').offsetTop; 
    const outils = document.getElementById('outils').offsetTop; 
    const projets = document.getElementById('projets').offsetTop;
    const contact = document.getElementById('contact').offsetTop;
    let wp_position = (window.scrollY + (window.innerHeight / 2));

    function sectionDetection (section) {
        document.querySelectorAll('header a').forEach(a => {
            a.classList.remove('active-header');
        })

        document.querySelector('header a[href = "#'+section+'"]').classList.add('active-header');
    }

    if(wp_position >= home) {
        sectionDetection('home');
    }

    if(wp_position >= outils) {
        sectionDetection('outils');
    }

    if(wp_position >= projets) {
        sectionDetection('projets');
    }

    if(wp_position >= contact) {
        sectionDetection('contact');
    }
});