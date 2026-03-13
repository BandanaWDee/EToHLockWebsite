if (!sessionStorage.getItem('warned')) {
    const overlay = document.createElement('div');
    overlay.id = 'warning-overlay';
    overlay.innerHTML = `
        <div id="warning-box">
            <h1 id="warning-title">Sensitive Content</h1>
            <p id="warning-body">This site contains evidence of misconduct including potentially inappropriate language, imagery, and other sensitive material.</p>
            <div id="warning-actions">
                <button id="warning-proceed">I understand, proceed</button>
                <button id="warning-leave">Leave</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('warning-proceed').addEventListener('click', () => {
        sessionStorage.setItem('warned', '1');
        overlay.remove();
    });

    document.getElementById('warning-leave').addEventListener('click', () => {
        window.location.href = 'https://docs.google.com/spreadsheets/d/1fQ7znFTWrQBqkLbKfsQpBKhujcnXbh2XoESjXZmzlis/edit?gid=1427011582#gid=1427011582';
    });
}