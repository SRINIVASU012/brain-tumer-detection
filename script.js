// Simple Routing Logic
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');
        navigateTo(target);
    });
});

function navigateTo(pageId) {
    // Update Active Link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-target="${pageId}"]`).classList.add('active');

    // Show Section
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// File Upload Preview
const fileInput = document.getElementById('file-input');
const dropZone = document.getElementById('drop-zone');
const previewImg = document.getElementById('mri-preview');

dropZone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImg.src = e.target.result;
            document.getElementById('preview-container').classList.remove('hidden');
            dropZone.classList.add('hidden');
        }
        reader.readAsDataURL(file);
    }
});

// Simulation of AI Analysis
document.getElementById('analyze-btn').addEventListener('click', function() {
    this.innerText = "Analyzing System...";
    
    setTimeout(() => {
        // Switch to result page
        navigateTo('result');
        document.getElementById('analyzed-img').src = previewImg.src;
        
        // Mock Results (You would fetch these from your Python backend)
        document.getElementById('tumor-type').innerText = "Meningioma";
        document.getElementById('confidence-level').innerText = "97.4%";
        document.getElementById('tumor-size').innerText = "18.5 mm²";
        this.innerText = "Run AI Analysis";
    }, 2000);
});