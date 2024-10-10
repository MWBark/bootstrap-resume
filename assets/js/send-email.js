function sendMail(contactForm) {
    var templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    };

    emailjs.send('service_pzzlhc4', 'template_t437tow', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response);
        },
        (error) => {
            console.log('FAILED', error);
        },
    );

    return false;
}