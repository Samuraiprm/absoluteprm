document.addEventListener('DOMContentLoaded', function() {
    // Sticky header
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
// Обработчик для видео в портфолио
//document.querySelectorAll('.video-wrapper').forEach(item => {
//    item.addEventListener('click', function() {
  //      const videoSrc = this.getAttribute('data-src');
    //    let finalSrc = videoSrc;
      //  
        // Если это Vimeo-видео, добавляем параметры
      //  if (videoSrc.includes('vimeo.com')) {
        //    finalSrc = videoSrc + '?autoplay=1&background=0';
        //}
        
      //  document.getElementById('videoFrame').src = finalSrc;
  //      const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    //    videoModal.show();
 //   });
//});

// Сбрасываем src при закрытии модального окна
//document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
  //  document.getElementById('videoFrame').src = '';
//});
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
                
                // Update active nav link
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

    // Set active nav item based on scroll position
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
    
    // Play portfolio videos in modal
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    const videoFrame = document.getElementById('videoFrame');
    
    document.querySelectorAll('.video-wrapper').forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-src');
            videoFrame.setAttribute('src', videoSrc + '&autoplay=1');
            videoModal.show();
        });
    });
    
    // Reset video src when modal is closed
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', function() {
        videoFrame.setAttribute('src', '');
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Send email using a service like EmailJS or similar
            // This is just a placeholder - you'll need to implement actual email sending
            sendEmail(formData);
        });
    }
    
    function sendEmail(data) {
        // This is a placeholder for the actual email sending functionality
        // In a real implementation, you would use a service like EmailJS, FormSubmit, or your own backend
        
        // Example using fetch to send to a backend endpoint
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
        
        // For demonstration purposes, just show success
        showFormSuccess();
        contactForm.reset();
    }
    
    function showFormSuccess() {
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success mt-3';
        successMessage.role = 'alert';
        successMessage.textContent = 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.';
        
        // Insert after form
        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
    
    function showFormError() {
        // Create error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger mt-3';
        errorMessage.role = 'alert';
        errorMessage.textContent = 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.';
        
        // Insert after form
        contactForm.parentNode.insertBefore(errorMessage, contactForm.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
    }
    
    // Initialize AOS animation library if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});
