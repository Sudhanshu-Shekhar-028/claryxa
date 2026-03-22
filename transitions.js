// transitions.js

// 1. Add Loading Bar to DOM & handle logic
const progressBar = document.createElement('div');
progressBar.id = 'claryxa-top-progress';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background-color: var(--accent, #0a84ff);
    z-index: 99999;
    width: 0%;
    transition: width 300ms ease-out, opacity 300ms ease-out;
    pointer-events: none;
`;
document.documentElement.appendChild(progressBar);

// Start progressing
let progressWidth = 5;
progressBar.style.width = '5%';
const progressInterval = setInterval(() => {
    if (progressWidth < 90) {
        progressWidth += Math.random() * 15;
        progressBar.style.width = Math.min(progressWidth, 90) + '%';
    }
}, 150);

// Set body opacity transition explicitly in JS if it wasn't caught yet, though the inline styles handle it.
// The patched HTML adds opacity: 0 and transition: opacity 300ms ease.

window.addEventListener('load', () => {
    // Finish progress bar
    clearInterval(progressInterval);
    progressBar.style.width = '100%';
    
    // Fade in
    document.body.classList.add('page-loaded');

    setTimeout(() => {
        progressBar.style.opacity = '0';
    }, 300);
});

document.addEventListener('click', (e) => {
    // Intercept <a> links
    const link = e.target.closest('a');
    if (link && link.href && !link.target && link.hostname === window.location.hostname && !link.href.includes('#')) {
        e.preventDefault();
        
        // Remove class to trigger fade out (opacity 0)
        document.body.classList.remove('page-loaded');
        document.body.style.transition = 'opacity 200ms ease'; // Force 200ms on fade out per request
        
        setTimeout(() => {
            window.location.href = link.href;
        }, 200);
        return;
    }

    // Intercept custom buttons that navigate (like sidebar items)
    const btn = e.target.closest('button, div');
    if (btn && btn.getAttribute('onclick')) {
        const onClickStr = btn.getAttribute('onclick');
        if (onClickStr.includes('window.location.href')) {
            // It navigates. Trigger fade out. 
            // The button itself has its own setTimeout (e.g. 120ms or more), but we initiate fade out immediately.
            document.body.classList.remove('page-loaded');
            document.body.style.transition = 'opacity 200ms ease';
        }
    }
});

// Fallback for browser back/forward buttons or unaccounted navigations
window.addEventListener('beforeunload', () => {
    document.body.classList.remove('page-loaded');
    document.body.style.transition = 'opacity 200ms ease';
});

// In Safari/BFCache, pages might stay invisible when hitting "back". So we need to ensure they fade back in:
window.addEventListener('pageshow', (e) => {
    if (e.persisted) { // Loaded from cache
        document.body.classList.add('page-loaded');
    }
});
