document.getElementById("btn-price").addEventListener("click",function () {
   const priceFild=document.getElementById("price-fild")
   const priceValue=priceFild.value;
   const priceTotal=parseFloat(priceValue);
   const playersPrice=priceTotal*5;

   // text player Price

   const priceText=document.getElementById("price-text");
   const priceTextStr=priceText.innerText;
   const current=parseFloat(priceTextStr);
   const currentPrice=current+playersPrice;
   priceText.innerText=currentPrice;

   // total
   document.getElementById("btn-total").addEventListener("click",function () {
      const coachPayment = document.getElementById("coach-fild").value;
      const coachPaymentTotal = parseFloat(coachPayment);
   
      // Get the value from the manager-field input
      const managerPayment = document.getElementById("coach-fild").value;
      const managerPaymentTotal = parseFloat(managerPayment);
   
      // Calculate the total payment
      const totalPayment = coachPaymentTotal + managerPaymentTotal + currentPrice;
   
      // Update the total text element with the calculated total payment
      const totalText = document.getElementById("total-text");
     const totalTextsStr=totalText.innerText;
     const current=parseFloat(totalTextsStr);
     const currentText=current+totalPayment;
     totalText.innerText=currentText;
   
   })
})

