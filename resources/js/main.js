const form = document.getElementById("form");

const scriptUrl = 'https://script.google.com/macros/s/AKfycbxm2RB-MTxq0EHT3zNXjpc7-m7BowYSMnG1ldFANOFy9DFQvmcpqFf5BJpGVUpXqAd-/exec';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let requestBody = new FormData(e.target);

    fetch(scriptUrl, {
        method: 'POST',
        body: new URLSearchParams(requestBody)
    })
    .then(response => {
        alert('success', response);
    })
    .catch(error => {
        alert('error', error.message);
    })
})
