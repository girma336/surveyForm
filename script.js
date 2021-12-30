const tabs=document.querySelector(".bars-tab"),
subButton=document.querySelector("#submit"),
closeTab=document.querySelector(".close-tab .fa-close");

subButton.addEventListener("click", ()=>{
    submitButton();
    console.log("clicked");
});
tabs.addEventListener("click", () =>{
    document.querySelector(".close-tab").style.display="block";
      console.log("clicked");
});

closeTab.addEventListener("click", ()=>{
    document.querySelector(".close-tab").style.display="none";
});


function submitButton(){

    if(subButton){
        window.alert("successfully registered");
    }

}
