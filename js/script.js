const translations = {
    en: {
        'nav-home': 'Home',
        'nav-services': 'IT Consulting',
        'nav-offerings': 'Services',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Beyond the conventional',
        'hero-text': 'Your journey with Kri8 Solutions begins here. We place great value on consulting quality and excellent service. Join us on our shared path to growth and success. We\'re glad you\'re here and part of our story!',
        'hero-cta': 'Let\'s go! <i class="bi bi-arrow-right-short"></i>',
        'stories-title': 'Stories told in pixels',
        'stories-text': 'At Kri8 Solutions, we\'re proud of our adaptability and commitment to excellence in every area of our IT consulting. Explore our offerings and discover how we can contribute to your success.',
        'business-title': 'Business',
        'business-text': 'Comprehensive IT consulting tailored to your individual business needs.',
        'read-more': 'Read more <i class="bi bi-arrow-right"></i>',
        'business-back-title': 'Business details',
        'business-back-text': 'We provide comprehensive IT consulting for your business, tailored to your individual needs. Our approach focuses on understanding your business requirements and developing effective, practical IT solutions.',
        'back': '<i class="bi bi-arrow-left"></i> Back',
        'enterprise-title': 'Enterprise',
        'enterprise-text': 'Tailor-made IT services and goal-oriented solutions for your company.',
        'enterprise-back-title': 'Enterprise details',
        'enterprise-back-text': 'Kri8 Solutions supports companies with customized IT consulting services. We understand your corporate goals and provide effective, goal-oriented solutions tailored to your specific needs.',
        'testimonial': '“I cannot praise the excellent service I received from your company enough. Your team went above and beyond to meet our needs and exceed our expectations.”',
        'services-heading': 'Services',
        'software-title': 'Software Development',
        'software-text': 'Guiding clients through digital transformation with tailored solutions.',
        'software-back-title': 'Software Development',
        'software-back-text': 'We deliver comprehensive software development and consulting services, guiding clients through digital transformation with tailored solutions from strategy and custom software to integration and managed services. Leveraging agile methodologies and cutting-edge technologies, we empower businesses to innovate, scale, and achieve measurable business outcomes.',
        'automation-title': 'Industrial Automation',
        'automation-text': 'Scalable MES/MOM and IIoT solutions, bridging shop floor and enterprise IT.',
        'automation-back-title': 'Industrial Automation',
        'automation-back-text': 'Expertise in scalable manufacturing execution systems and smart digital transformation.<br>Automation system implementation across project stages.<br>Design and implement Proof-of-Concept systems.<br>IIoT integration and system interoperability through MES, SCADA, PLC, and ERP interfaces using standardized protocols.<br>Digital manufacturing and Industry 4.0 solutions, utilizing automation tools and cloud/container platforms.<br>Agile development, mentoring, and collaboration with IT/OT leaders.',
        'embedded-title': 'Embedded Systems',
        'embedded-text': 'End-to-end AI-powered product development services.',
        'embedded-back-title': 'Embedded Systems',
        'embedded-back-text': 'We offer end-to-end AI-powered product development services, including embedded system design, custom firmware, and scalable manufacturing with quality assurance. Our solutions feature advanced edge AI, FPGA computing, workflow automation, and intelligent IoT SDKs for real-time, efficient, and reliable product innovation.',
        'product-title': 'Product Management',
        'product-text': 'We are by your side, from the initial design all the way to your product\'s success.',
        'product-back-title': 'Product Management',
        'product-back-text': 'Our experts specialize in end-to-end product management for embedded and software technologies, supporting clients from initial design and development through product import/export logistics. We provide comprehensive field test and analysis services to ensure product performance and reliability in real-world conditions, enabling seamless market entry and sustained product success.',
        'contact-heading': 'Contact us',
        'contact-name': 'Name *',
        'contact-email': 'Email address *',
        'contact-message': 'Message *',
        'contact-submit': 'Submit',
        'imprint': 'Imprint'
        ,
        'imp-title': 'Imprint',
        'imp-info-heading': 'Information according to § 5 TMG',
        'imp-address': 'Kri8 Solutions UG (limited liability)<br>Freiligrathstr. 13<br>55131 Mainz',
        'imp-register': 'Commercial Register: HRB 53307<br>Register Court: Local Court Mainz',
        'imp-represented': 'Represented by:<br>Ketan Joon',
        'imp-contact-heading': 'Contact',
        'imp-contact': 'Phone: +49 (0) 176 66181159<br>Email: kri8.solutions@gmail.com',
        'imp-vat-heading': 'VAT ID',
        'imp-vat-text': 'VAT identification number according to § 27 a Value Added Tax Act: DE450419020',
        'imp-content-heading': 'Liability for Content',
        'imp-content-text1': 'As a service provider, we are responsible for our own content on these pages in accordance with § 7 para.1 TMG under the general laws. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
        'imp-content-text2': 'Obligations to remove or block the use of information under the general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove this content immediately.',
        'imp-links-heading': 'Liability for Links',
        'imp-links-text': 'Our offer contains links to external websites of third parties on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.',
        'imp-copyright-heading': 'Copyright',
        'imp-copyright-text1': 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.',
        'imp-copyright-text2': 'Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such content immediately.',
        'imp-dispute-heading': 'Dispute Resolution',
        'imp-dispute-text1': 'The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>.<br>Our email address can be found above in the imprint.',
        'imp-dispute-text2': 'We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.'
    }
};

const originalTexts = {};
const alertMessages = {
    de: 'Vielen Dank! Ihre Nachricht wurde gesendet.',
    en: 'Thank you! Your message has been sent.'
};
let currentAlertMessage = alertMessages.de;

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!originalTexts[key]) {
            originalTexts[key] = el.innerHTML;
        }
        if (lang === 'en') {
            const translation = translations.en[key];
            if (translation) {
                el.innerHTML = translation;
            }
        } else if (originalTexts[key]) {
            el.innerHTML = originalTexts[key];
        }
    });
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.textContent = lang === 'de' ? 'EN' : 'DE';
    }
    currentAlertMessage = alertMessages[lang];
    localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('lang') || 'de';
    setLanguage(savedLang);

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const newLang = document.documentElement.lang === 'de' ? 'en' : 'de';
            setLanguage(newLang);
        });
    }

    // Contact form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(currentAlertMessage);
            form.reset();
        });
    }

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTop.classList.add('active');
        } else {
          backToTop.classList.remove('active');
        }
      };
      window.addEventListener('load', toggleBackToTop);
      document.addEventListener('scroll', toggleBackToTop);
    }

    // Card flipper functionality
    const flipTriggers = document.querySelectorAll('.flipper-btn');
    flipTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const flipCard = e.target.closest('.flip-card');
            if (flipCard) {
                flipCard.classList.toggle('is-flipped');
            }
        });
    });
});