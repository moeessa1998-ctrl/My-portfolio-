// تفعيل التمرير الناعم (Smooth Scroll) للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// تأثير بسيط عند التمرير لظهور العناصر
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.project-card');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}
