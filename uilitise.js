function PlayerSelector(elementId,BtnId){
    const playerbtn=document.getElementById(BtnId);
    const playerFild = document.getElementById(elementId);
    const playerStr = playerFild.innerText;
    const selectFild = document.getElementById("main-ol");
    const li = document.createElement("li");
    li.innerText = playerStr;
    // Limit the number of <li> elements
    const maxLiCount = 5; // Set the maximum number of <li> elements
    const currentLiCount = selectFild.getElementsByTagName("li").length;
    if (currentLiCount < maxLiCount) {
       selectFild.appendChild(li);
       playerbtn.setAttribute("disabled",true)
    }
    
}


