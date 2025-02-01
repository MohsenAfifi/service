document.getElementById("registerEmpButton").addEventListener("click", function () { 
    let name = document.getElementById("empName").value.trim(); 
    let phone = document.getElementById("empPhone").value.trim(); 
    let password = document.getElementById("empPassword").value.trim(); 

    if (!name || !phone || !password) { 
        alert("❌ جميع الحقول مطلوبة!"); 
        return; 
    } 

    let employees = JSON.parse(localStorage.getItem("employees")) || []; 
    employees.push({ name, phone, password }); 
    localStorage.setItem("employees", JSON.stringify(employees)); 

    alert("✅ تم تسجيل الموظف بنجاح!"); 
    window.location.href = "employee_login.html"; 
});
