document.getElementById("buttons").addEventListener("click",function(event) {

        calculateTotal(event.target.innerText); 
    
})

function calculateCustom(){
    let CustomPercent = parseFloat(document.querySelector(".custom").innerText)
    handleMath(CustomPercent)
}

document.querySelector(".reset").addEventListener("click",function() {
    
    document.querySelector(".input").value = null;
    document.querySelector(".amount").innerText = "0$";
    document.querySelector(".tip").innerText = "0$";
    document.querySelector(".total").innerText = "0$";
    document.querySelector(".input").placeholder = "Please type an amount";
   
})


function calculateTotal(per) {
    if(parseFloat(document.querySelector(".input").value) <= 0 || isNaN(parseFloat(document.querySelector(".input").value)) ||
    (document.querySelector(".input").value) == null ){
        document.querySelector(".input").value = null;
        document.querySelector(".input").placeholder = "NOT VALID!!";
        return;
    }
    handleMath(per);
}

function handleMath(per){

    let value = parseFloat(document.querySelector(".input").value);

    document.querySelector(".amount").innerText = value + "$";
     
    switch (per) {
        
     case "5%":
        percent(value, 0.05);
        break;   
    case "10%":
        percent(value, 0.1);
        break;
    case "15%":
        percent(value, 0.15);
        break;
    case "25%":
        percent(value, 0.25);
        break;
    case "50%":
        percent(value, 0.5);
        break;
    default:
        percent(value, (parseFloat(per) / 100))
        break;
    }
  
}

function percent(value,percent) {
     document.querySelector(".tip").innerText = value * percent + "$";
     document.querySelector(".total").innerText = value + parseFloat(document.querySelector(".tip").innerText) + "$";
}



