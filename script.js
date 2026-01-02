// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form handling
document.getElementById('feePaymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        country: document.getElementById('country').value,
        institution: document.getElementById('institution').value,
        studentId: document.getElementById('studentId').value,
        amount: document.getElementById('amount').value,
        currency: document.getElementById('currency').value
    };
    
    // Basic validation
    if (!formData.country || !formData.institution || !formData.studentId || !formData.amount || !formData.currency) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate payment processing
    alert(`Payment request submitted!\n\nDetails:\nCountry: ${formData.country.toUpperCase()}\nInstitution: ${formData.institution}\nStudent ID: ${formData.studentId}\nAmount: ${formData.amount} ${formData.currency}\n\nYou will be redirected to the secure payment gateway.`);
    
    // Here you would typically redirect to a payment processor
    // window.location.href = 'payment-gateway-url';
});

// Auto-update currency based on country selection
document.getElementById('country').addEventListener('change', function() {
    const currency = document.getElementById('currency');
    const countryValue = this.value;
    
    // Reset currency selection
    currency.value = '';
    
    // Set default currency based on country
    switch(countryValue) {
        case 'uk':
            currency.value = 'GBP';
            break;
        case 'us':
            currency.value = 'USD';
            break;
        case 'canada':
            currency.value = 'CAD';
            break;
    }
});