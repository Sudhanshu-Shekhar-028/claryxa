// auth.js
const API_URL = "http://127.0.0.1:8000";

function getToken() {
    return sessionStorage.getItem('token');
}

function authHeaders() {
    const token = getToken();
    return {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
    };
}

function requireAuth() {
    if (!getToken()) {
        window.location.href = 'index.html';
    }
}

async function logout() {
    try {
        const response = await fetch(`${API_URL}/auth/logout`, {
            method: 'POST',
            headers: authHeaders()
        });
        if (!response.ok) {
            console.error("Logout request failed");
        }
    } catch (err) {
        console.error("Logout fetch failed", err);
    } finally {
        sessionStorage.removeItem('token');
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1 & 2. Dynamic user profile display
    const email = sessionStorage.getItem('userEmail');
    const name = sessionStorage.getItem('userName');
    
    if (email && name) {
        document.querySelectorAll('#accLoggedIn').forEach(el => el.style.display = 'block');
        document.querySelectorAll('#accLoggedOut').forEach(el => el.style.display = 'none');

        const nameEls = document.querySelectorAll('#accName');
        const emailEls = document.querySelectorAll('#accEmail');
        const initialEls = document.querySelectorAll('#accInitial');
        
        nameEls.forEach(el => el.textContent = name);
        emailEls.forEach(el => el.textContent = email);
        initialEls.forEach(el => el.textContent = name.charAt(0).toUpperCase());

        // 3. Dynamic greeting on dashboard.html
        const dashboardGreeting = document.getElementById('dashboard-greeting');
        if (dashboardGreeting) {
            dashboardGreeting.textContent = `Hi, ${name}!`;
        }

        const calendarGreeting = document.querySelector('#greeting h2');
        if (calendarGreeting && (calendarGreeting.textContent.includes('Hello') || calendarGreeting.textContent.includes('Hi'))) {
            calendarGreeting.textContent = `Hello, ${name}!`;
        }
    }

    // 4. Update the live tracking tile date and day on dashboard.html
    const liveDate = document.getElementById('live-date');
    const liveDay = document.getElementById('live-day');
    
    if (liveDate && liveDay) {
        const now = new Date();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        liveDate.textContent = `${monthNames[now.getMonth()]} ${now.getDate()}`;
        liveDay.textContent = dayNames[now.getDay()];
    }
});
