document.getElementById("loginEmpButton").addEventListener("click", function () { 
    let phone = document.getElementById("loginPhone").value.trim(); 
    let password = document.getElementById("loginPassword").value.trim(); 

    let employees = JSON.parse(localStorage.getItem("employees")) || []; 
    let employee = employees.find(emp => emp.phone === phone && emp.password === password); 

    if (!employee) { 
        alert("❌ بيانات الدخول غير صحيحة!"); 
        return; 
    } 

    localStorage.setItem("loggedInEmployee", JSON.stringify(employee)); 
    alert("✅ تسجيل الدخول ناجح!"); 
    window.location.href = "dashboard.html"; 
});
