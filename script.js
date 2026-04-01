document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const previewSection = document.getElementById('preview-section');
    const previewImg = document.getElementById('mri-preview');
    const cancelBtn = document.getElementById('cancel-btn');
    const analyzeBtn = document.getElementById('analyze-btn');

    // Trigger file input
    if (dropZone) {
        dropZone.addEventListener('click', () => fileInput.click());
    }

    // Handle File Selection
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    previewImg.src = event.target.result;
                    previewSection.classList.remove('hidden');
                    dropZone.classList.add('hidden');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Cancel Selection
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            previewSection.classList.add('hidden');
            dropZone.classList.remove('hidden');
            fileInput.value = "";
        });
    }

    // Move to Result Page after simulated analysis
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
            analyzeBtn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> AI Analyzing...";
            setTimeout(() => {
                window.location.href = "result.html";
            }, 2500);
        });
    }
});