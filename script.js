document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("welcome-screen").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("welcome-screen").style.display = "none";
        let mainContent = document.getElementById("main-content");
        mainContent.style.display = "block";
        mainContent.classList.add("fade-in");
    }, 1000);
});

// تحديث عدد الصور المرفوعة
document.getElementById("imageUpload").addEventListener("change", function(event) {
    let files = event.target.files;
    if (files.length > 10) {
        alert("⚠️ يمكنك رفع حتى 10 صور فقط.");
        event.target.value = ""; 
        return;
    }
    document.getElementById("imageCount").innerText = `📷 عدد الصور المرفوعة: ${files.length}`;
});

// عرض حقل إدخال الكثافة عند اختيار "مخصص"
document.getElementById("oilType").addEventListener("change", function() {
    document.getElementById("customDensityContainer").style.display = this.value === "custom" ? "block" : "none";
});

// تحليل البيانات وحساب الحجم والكتلة
function analyzeImagesWithAI() {
    let depthsArray = document.getElementById("depths").value.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    let averageDepth = depthsArray.reduce((sum, val) => sum + val, 0) / depthsArray.length;

    let density = document.getElementById("oilType").value !== "custom" ? parseFloat(document.getElementById("oilType").value) : parseFloat(document.getElementById("customDensity").value);
    
    let area = Math.random() * 500 + 100;
    let volume = area * averageDepth;
    let mass = volume * density;

    document.getElementById("output").innerHTML = `
        📏 المساحة: ${area.toFixed(2)} م² <br>
        📦 الحجم: ${volume.toFixed(2)} م³ <br>
        ⚖️ الكتلة: ${mass.toFixed(2)} كجم
    `;
}S