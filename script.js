document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    const resumeContent = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
    `;

    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').classList.remove('hidden');
});

document.getElementById('shareLinkButton').addEventListener('click', function() {
    const uniqueId = Date.now(); // Simple unique ID based on timestamp
    const shareableLink = `${window.location.href}?resumeId=${uniqueId}`;
    
    document.getElementById('shareableLink').innerHTML = `
        <p>Share this link: <a href="${shareableLink}" target="_blank">${shareableLink}</a></p>
    `;
    document.getElementById('shareableLink').classList.remove('hidden');
});