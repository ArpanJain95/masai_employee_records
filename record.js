// fill in javascript code here
const myForm = document.querySelector("form");
const nameStudent = document.getElementById("name");
const emplID = document.getElementById("employeeID");
const dept = document.getElementById("department");
const experience = document.getElementById("exp");
const emailId = document.getElementById("email");
const mobile  = document.getElementById("mbl");
const tbody = document.querySelector("tbody");

let allData = [];
myForm.addEventListener("submit", function(noDefault){
    noDefault.preventDefault();
    let data = {
        studentName : nameStudent.value,
        employeeID : parseFloat(emplID.value),
        department : dept.value,
        experience : parseFloat(experience.value),
        emailID : emailId.value,
        mobileNumber : parseFloat(mobile.value),
        role : function(){
            if(this.experience>=5){
                return "Senior";
            }else if(this.experience>=2 && this.experience<5){
                return "Junior";
            }else if(this.experience<2){
                return "Fresher";
            }
        }
    }
    // console.log(data);
    allData.push(data);
    tbody.innerHTML = "";
    allData.map((ele)=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");
        td1.innerText = ele.studentName;
        td2.innerText = ele.employeeID;
        td3.innerText = ele.department;
        td4.innerText = ele.experience;
        td5.innerText = ele.emailID;
        td6.innerText = ele.mobileNumber;
        td7.innerText = ele.role();
        const button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click",()=>{
            const index = Array.from(tbody.children).indexOf(tr);
            allData.splice(index, 1);
            tr.remove();
        });
        td8.appendChild(button);
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr);
        clearForm();
    })
})
function clearForm(){
    nameStudent.value = "";
    emplID.value = "";
    dept.value = "";
    experience.value = "";
    emailId.value = "";
    mobile.value = "";
}