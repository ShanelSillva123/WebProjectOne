const submitButton = document.getElementById("sub");
document.getElementById("contact").maxLength = "10";
document.getElementById("ref").value = localStorage.getItem("refCode");
submitButton.addEventListener('click', function handleClick() {
    // Get the date
    let date = document.getElementById("dob").value;
    let regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    if (regex.test(date)) {
        let parts = date.split("/");
        let newDate = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        let currentDate = new Date();
        let ageLimit = currentDate.getFullYear() - newDate.getFullYear();
        const form = document.getElementById("jobApplication");
        if (ageLimit <= 15 || ageLimit >= 80) {
            form.addEventListener('submit', (e) =>  {
                e.preventDefault();
                document.getElementById("DateError").innerText = "Age is not within range to proceed or field is empty";

            })
        }else {
            form.addEventListener('submit', (e) =>  {
                const regex = /[a-zA-Z0-9]{5}/;
                let refNo = document.getElementById('ref').value;
                if (!regex.test(refNo)) {
                    e.preventDefault();
                    document.getElementById("RefError").innerText = "Invalid Job Reference number format or field is empty";
                }
            })

            form.addEventListener('submit', (e) =>  {
                if (document.getElementById("fName").value === "" || document.getElementById("fName").value === null) {
                    e.preventDefault();
                    document.getElementById('fError').innerText = "First name is required";
                }
            })

            form.addEventListener('submit', (e) =>  {
                if (document.getElementById("lName").value === "" || document.getElementById("lName").value === null) {
                    e.preventDefault();
                    document.getElementById('lError').innerText = "Last name is required";
                }
            })

            form.addEventListener('submit', (e) =>  {
                if (document.getElementById("addr1").value === "" || document.getElementById("addr1").value === null) {
                    e.preventDefault();
                    document.getElementById('addr1Error').innerText = "Street name is required";
                }
            })

            form.addEventListener('submit', (e) =>  {
                if (document.getElementById("addr2").value === "" || document.getElementById("addr2").value === null) {
                    e.preventDefault();
                    document.getElementById('addr2Error').innerText = "Town name is required";
                }
            })

            form.addEventListener('submit', (e) =>  {
                let email = document.forms["jobApplication"]["mailaddr"].value;
                let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                if (!emailRegex.test(email)) {
                    e.preventDefault();
                    document.getElementById("emailError").innerText = "Invalid email format or field is empty";
                }
            })
            form.addEventListener('submit', (e) =>  {
                let contact = document.forms["jobApplication"]["phonenum"].value;
                let contactNRegex = /[0-9/ /]{8,12}/;
                if (!contactNRegex.test(contact)) {
                    e.preventDefault();
                    document.getElementById("contactError").innerText = "Contact number format is invalid or field is empty";
                }

            })
            form.addEventListener('submit', (e) =>  {
                const regexP = /^\d{5}(?:[-\s]\d{4})?$/;
                const postalCode = document.getElementById('post').value;
                if (!regexP.test(postalCode)) {
                    e.preventDefault();
                    document.getElementById('postError').innerText = "Entered code format invalid or field is empty";
                }
            })
        }
    }else {
        const form = document.getElementById("jobApplication");
        form.addEventListener('submit', (e) =>  {
            if (document.getElementById("dob").value === "" || document.get) {
                document.getElementById("DateError").innerText = "Date is required in order to determine the age of the applicant";
                e.preventDefault();
                setTimeout(function () {
                    document.getElementById('jobApplication').reset();
                }, 3000);

            }
        })
    }
})

const syncButton = document.getElementById("sync");
syncButton.addEventListener('click', function handle() {
    let postCode = document.getElementById("post").value;
    let postcodeFD = postCode[0];
    function reset() {
        document.getElementById("state").options[0].disabled = false;
        document.getElementById("state").options[1].disabled = false;
        document.getElementById("state").options[2].disabled = false;
        document.getElementById("state").options[3].disabled = false;
        document.getElementById("state").options[4].disabled = false;
        document.getElementById("state").options[5].disabled = false;
        document.getElementById("state").options[6].disabled = false;
        document.getElementById("state").options[7].disabled = false;
    }
    switch (postcodeFD) {
        case "3":
        case "8":
            reset();
            document.getElementById("state").options[1].disabled = true;
            document.getElementById("state").options[2].disabled = true;
            document.getElementById("state").options[3].disabled = true;
            document.getElementById("state").options[4].disabled = true;
            document.getElementById("state").options[5].disabled = true;
            document.getElementById("state").options[6].disabled = true;
            document.getElementById("state").options[7].disabled = true;
            break;
        case "1":
        case "2":
            reset();
            document.getElementById("state").options[0].disabled = true;
            document.getElementById("state").options[2].disabled = true;
            document.getElementById("state").options[3].disabled = true;
            document.getElementById("state").options[4].disabled = true;
            document.getElementById("state").options[5].disabled = true;
            document.getElementById("state").options[6].disabled = true;
            document.getElementById("state").options[7].disabled = true;
            break
        case "4":
        case "9":
            reset();
            document.getElementById("state").options[0].disabled = true;
            document.getElementById("state").options[1].disabled = true;
            document.getElementById("state").options[3].disabled = true;
            document.getElementById("state").options[4].disabled = true;
            document.getElementById("state").options[5].disabled = true;
            document.getElementById("state").options[6].disabled = true;
            document.getElementById("state").options[7].disabled = true;
            break;
        case "0":
            reset();
            document.getElementById("state").options[0].disabled = true;
            document.getElementById("state").options[1].disabled = true;
            document.getElementById("state").options[2].disabled = true;
            document.getElementById("state").options[4].disabled = true;
            document.getElementById("state").options[5].disabled = true;
            document.getElementById("state").options[6].disabled = true;
            break;
        case "6":
            reset();
            document.getElementById("state").options[0].disabled = true;
            document.getElementById("state").options[1].disabled = true;
            document.getElementById("state").options[2].disabled = true;
            document.getElementById("state").options[3].disabled = true;
            document.getElementById("state").options[5].disabled = true;
            document.getElementById("state").options[6].disabled = true;
            document.getElementById("state").options[7].disabled = true;
            break;
        case "5":
            reset();
            document.getElementById("state").options[0].disabled = true;
            document.getElementById("state").options[1].disabled = true;
            document.getElementById("state").options[2].disabled = true;
            document.getElementById("state").options[3].disabled = true;
            document.getElementById("state").options[4].disabled = true;
            document.getElementById("state").options[6].disabled = true;
            document.getElementById("state").options[7].disabled = true;
        case "7":
            reset();
            document.getElementById("state").options[0].disabled = true;
            document.getElementById("state").options[1].disabled = true;
            document.getElementById("state").options[2].disabled = true;
            document.getElementById("state").options[3].disabled = true;
            document.getElementById("state").options[4].disabled = true;
            document.getElementById("state").options[5].disabled = true;
            document.getElementById("state").options[7].disabled = true;
            break;
    }

})

const clickButton = document.getElementById('sync');
clickButton.click();



const checkBox = document.getElementById("other");
checkBox.addEventListener('change', function () {
    if (this.checked) {
        document.getElementById("otherSkills").required = true;
    }else {
        document.getElementById("otherSkills").required = false;
    }
})
