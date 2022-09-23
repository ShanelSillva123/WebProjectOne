const button1 = document.getElementById("apply1");
button1.addEventListener("click", function marketMH() {
    let ref = document.getElementById("refCodeM").value;
    localStorage.setItem("refCode", ref);
    console.log("It works");
})

const button2 = document.getElementById("apply2")
button2.addEventListener("click", function hrMHandle() {
    let ref2 = document.getElementById("refCodeHM").value;
    localStorage.setItem("refCode", ref2)
    console.log("It works");
})

