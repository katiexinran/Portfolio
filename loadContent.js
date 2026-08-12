document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
            const currentPath = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('nav ul li a');
            const activeNavByPage = {
                '': 'index.html',
                'index.html': 'index.html',
                'systems-ai.html': 'systems-ai.html',
                'google.html': 'systems-ai.html',
                'isoftstone.html': 'systems-ai.html',
                'research.html': 'research.html',
                'dialect-bias.html': 'research.html',
                'llm-debugging.html': 'research.html',
                'about.html': 'about.html'
            };
            const activeNavHref = activeNavByPage[currentPath];

            navLinks.forEach(link => {
                const star = link.querySelector('.star');
                if (link.getAttribute('href') === activeNavHref) {
                    link.classList.add('active');
                    if (star) star.textContent = '★'; // Full star for the active page
                } else if (star) {
                    star.textContent = '☆'; // Empty star for other pages
                }
            });
        })
        .catch(error => console.error('Error loading the navbar:', error));

    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading the footer:', error));
});


document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project-overlay');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            // Remove 'active' class from all projects except the one clicked
            projects.forEach(p => {
                if (p !== project) {
                    p.classList.remove('active');
                }
            });

            // Toggle the 'active' class on the clicked project
            project.classList.toggle('active');
        });
    });

    // Close the overlay if clicking outside the project (optional)
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.project-overlay')) {
            projects.forEach(p => p.classList.remove('active'));
        }
    });
});

// 1-Click Copy Email Handler
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('click', function(e) {
        const copyBtn = e.target.closest('.copy-email');
        if (copyBtn) {
            e.preventDefault();
            const email = 'katiexinran@gmail.com';
            navigator.clipboard.writeText(email).then(function() {
                showToast('✓ Copied katiexinran@gmail.com to clipboard!');
            }).catch(function() {
                window.location.href = 'mailto:' + email;
            });
        }
    });

    function showToast(message) {
        let toast = document.getElementById('copy-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'copy-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
        }, 2500);
    }
});

// Floating "Back to Top" Scroll Handler
document.addEventListener("DOMContentLoaded", function() {
    let topBtn = document.getElementById('back-to-top');
    if (!topBtn) {
        topBtn = document.createElement('button');
        topBtn.id = 'back-to-top';
        topBtn.setAttribute('aria-label', 'Back to top');
        topBtn.title = 'Back to top';
        topBtn.innerHTML = '↑';
        document.body.appendChild(topBtn);
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });

    topBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
