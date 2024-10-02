window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.href;
        document.body.classList.remove('loaded');
        setTimeout(() => {
            window.location.href = target;
        }, 500);
    });
});
