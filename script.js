const a = document.querySelectorAll('.dropdown-content a');

a.forEach(function(content){
    content.addEventListener('click', function(e) {
        e.preventDefault();

        const href = content.getAttribute('href').substring(1);
        
        const section = document.getElementById(href);

        if (section) {
            section.scrollIntoView({behavior : "smooth"})
        }
    })
})