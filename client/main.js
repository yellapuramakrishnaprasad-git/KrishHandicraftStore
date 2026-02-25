document.addEventListener('DOMContentLoaded', () => {

    const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset:true
    })
    
    sr.reveal('.text', {delay: 200, origin: 'top'});
    sr.reveal('.form-container form', {delay: 800, origin: 'left' });
    sr.reveal('heading', {delay: 800, origin: 'top'});
    sr.reveal('.service-container.box', {delay: 600, origin: 'top'});
    sr.reveal('.products-container.box', {delay:800, origin: 'top'});
    sr.reveal('.about-container.about-text', {delay: 800, origin: 'top'});
    sr.reveal('.reviews-container', {delay: 800, origin: 'top'});
    sr.reveal('.newsletter.box', {delay: 400, origin: 'bottom'});

    });

let token = null;

document.getElementById('signup-form').addEventListener('submit', async (e) => { 
    e.preventDefault(); 
    const name = document.getElementById('signup-name').value; 
    const email = document.getElementById('signup-email').value; 
    const password = document.getElementById('signup-password').value; 
 
    try { 
        const response = await fetch('http://localhost:5000/api/auth/register', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ email, password, name }), 
        }); 
        if (!response.ok) { 
            throw new Error(`HTTP error! status: ${response.status}`); 
        } 
        const data = await response.json(); 
        alert(data.message); 
        if (response.ok) { 
            authForm.style.display = 'block'; 
            registerForm.style.display = 'none'; 
            orderForm.style.display = 'none'; 
        } 
    } catch (error) { 
        console.error('Error during signup:', error); 
        alert(`An error occurred during signup: ${error.message}`); 
    } 
});

document.getElementById('login-form').addEventListener('submit', async (e) => { 
    e.preventDefault(); 
    const email = document.getElementById('login-email').value; 
    const password = document.getElementById('login-password').value; 
    try { 
    const response = await fetch('http://localhost:5000/api/auth/login', { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({ email, password }), 
    }); 
    if (!response.ok) { 
    throw new Error(`HTTP error! status: ${response.status}`); 
     
            } 
            const data = await response.json(); 
            if (data.token) { 
                token = data.token; 
                showSection(dashboard); 
                fetchOrders(); 
                updateNavbar(); 
            } else { 
                alert(data.message); 
            } 
        } catch (error) { 
            console.error('Error during login:', error); 
            alert(`An error occurred during login: ${error.message}`); 
        } 
});

document.getElementById('logout').addEventListener('click', () => { 
    token = null; 
    showSection(homeSection); 
    authForm.style.display = 'block'; 
    registerForm.style.display = 'none'; 
    orderForm.style.display = 'none'; 
    updateNavbar(); 
});


/*document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const registerForm = document.getElementById('register-form');
    const orderForm = document.getElementById('order-form');
    const dashboard = document.getElementById('dashboard');
    const homeSection = document.getElementById('Home');

    function showSection(section) {
        homeSection.style.display = section === homeSection ? 'grid' : 'none';
        dashboard.style.display = section === dashboard ? 'block' : 'none';
    }

    // Initialize the UI
    showSection(homeSection);
});node */