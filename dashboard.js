document.addEventListener("DOMContentLoaded", function () { 
    let loggedInEmployee = JSON.parse(localStorage.getItem("loggedInEmployee")); 
    if (!loggedInEmployee) { 
        alert("❌ يرجى تسجيل الدخول أولًا!"); 
        window.location.href = "employee_login.html"; 
        return; 
    } 

    document.getElementById("empName").innerText = loggedInEmployee.name; 

    let orders = JSON.parse(localStorage.getItem("orders")) || []; 
    let ordersList = document.getElementById("ordersList"); 

    orders.forEach((order, index) => { 
        let listItem = document.createElement("li"); 
        listItem.innerHTML = `🔹 ${order.details} <button onclick="acceptOrder(${index})">✅ قبول الطلب</button>`; 
        ordersList.appendChild(listItem); 
    }); 
});

function acceptOrder(index) { 
    let orders = JSON.parse(localStorage.getItem("orders")) || []; 
    let selectedOrder = orders[index]; 

    document.getElementById("orderText").innerText = selectedOrder.details; 
    document.getElementById("orderDetails").style.display = "block"; 
}

document.getElementById("sendPrice").addEventListener("click", function () { 
    let price = document.getElementById("orderPrice").value.trim(); 
    if (!price || isNaN(price) || price <= 0) { 
        alert("❌ يرجى إدخال سعر صحيح!"); 
        return; 
    } 

    alert(`✅ تم إرسال السعر: ${price} د.ك للمستخدم!`); 
    document.getElementById("paymentSection").style.display = "block"; 
});

document.getElementById("sendPayment").addEventListener("click", function () { 
    let paymentLink = `https://bank.com/pay?amount=${document.getElementById("orderPrice").value}`; 
    let whatsappURL = `https://wa.me/?text=💰 رابط الدفع: ${encodeURIComponent(paymentLink)}`; 
    window.open(whatsappURL, "_blank"); 
});

document.getElementById("startOrder").addEventListener("click", function () { 
    alert("🚀 بدأ تنفيذ الطلب!"); 
    document.getElementById("chatSection").style.display = "block"; 
    document.getElementById("fileSection").style.display = "block"; 
});

document.getElementById("sendMessage").addEventListener("click", function () { 
    let message = document.getElementById("chatMessage").value.trim(); 
    if (message) { 
        alert(`📩 تم إرسال الرسالة: ${message}`); 
    } 
});

document.getElementById("sendFile").addEventListener("click", function () { 
    let whatsappURL = `https://wa.me/?text=📎 رابط الملف النهائي: https://example.com/file.pdf`; 
    window.open(whatsappURL, "_blank"); 
});

document.getElementById("logout").addEventListener("click", function () { 
    localStorage.removeItem("loggedInEmployee"); 
    alert("🚪 تم تسجيل الخروج!"); 
    window.location.href = "employee_login.html"; 
});
