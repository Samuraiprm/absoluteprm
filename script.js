document.addEventListener('DOMContentLoaded', function () {
    // ===== Sticky Header =====
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===== Smooth Scroll for Navigation Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Set active link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });

    // ===== Highlight Active Section on Scroll =====
    function setActiveNavItem() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        let current = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavItem);

    // ===== Video Modal Handling =====
    const videoModalEl = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const videoModal = new bootstrap.Modal(videoModalEl);

    document.querySelectorAll('.video-wrapper').forEach(item => {
        item.addEventListener('click', function () {
            const videoSrc = this.getAttribute('data-src');

            if (videoSrc) {
                videoFrame.src = videoSrc.includes('?') ? `${videoSrc}&autoplay=1` : `${videoSrc}?autoplay=1`;
                videoModal.show();
            }
        });
    });

    videoModalEl.addEventListener('hidden.bs.modal', function () {
        videoFrame.src = '';
    });

    // ===== Contact Form Submission =====
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            sendEmail(formData);
        });
    }

    function sendEmail(data) {
        fetch('send-email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: 'werq248@gmail.com',
                subject: 'Новая заявка с сайта ABSOLUTE Studio',
                name: data.name,
                phone: data.phone,
                email: data.email,
                service: data.service,
                message: data.message
            })
        })
        .then(response => {
            if (response.ok) {
                showFormSuccess();
                contactForm.reset();
            } else {
                showFormError();
            }
        })
        .catch(error => {
            console.error('Error sending email:', error);
            showFormError();
        });

        // Убираем это, если реальная отправка
        showFormSuccess();
        contactForm.reset();
    }

    function showFormSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success mt-3';
        successMessage.role = 'alert';
        successMessage.textContent = 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.';

        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);

        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }

    function showFormError() {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger mt-3';
        errorMessage.role = 'alert';
        errorMessage.textContent = 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.';

        contactForm.parentNode.insertBefore(errorMessage, contactForm.nextSibling);

        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
    }

    // ===== AOS Animation Init =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});
