function updateSubtotalAndTotal(){
    var prd1Bill = parseFloat(document.getElementById('prd1TotalCostText').innerText);
    var prd2Bill = parseFloat(document.getElementById('prd2TotalCostText').innerText);
    document.getElementById('subtotalText').innerText=prd1Bill+prd2Bill;
    var tax = parseFloat(document.getElementById('taxText').innerText);
    document.getElementById('totalText').innerText=prd1Bill+prd2Bill-tax;
}

function budgetCalculator(pricePerPiece,quantity){
    if(quantity<=0){
        return 0;
    }
    else{
        return pricePerPiece*quantity;
    }
}

document.getElementById('prd1RemoveButton').addEventListener('click',function(){
    var prd1CountVariable = parseInt(document.getElementById('prd1Count').value);
    if(prd1CountVariable>0){
        document.getElementById('prd1Count').value=prd1CountVariable-1;
        document.getElementById('prd1TotalCostText').innerText=parseFloat(budgetCalculator(1219,prd1CountVariable-1));
        updateSubtotalAndTotal();
    }
    else{
        alert("You can not buy negative amounts of iPhone 11 128GB Black");
        return ;
    }
})

document.getElementById('prd1AddButton').addEventListener('click',function(){
    var prd1CountVariable = parseInt(document.getElementById('prd1Count').value);
    document.getElementById('prd1Count').value=prd1CountVariable+1;
    document.getElementById('prd1TotalCostText').innerText=parseFloat(budgetCalculator(1219,prd1CountVariable+1));
    updateSubtotalAndTotal();
})

document.getElementById('prd2RemoveButton').addEventListener('click',function(){
    var prd2CountVariable = parseInt(document.getElementById('prd2Count').value);
    if(prd2CountVariable>0){
        document.getElementById('prd2Count').value=prd2CountVariable-1;
        document.getElementById('prd2TotalCostText').innerText=parseFloat(budgetCalculator(59,prd2CountVariable-1));
        updateSubtotalAndTotal();
    }
    else{
        alert("You can not buy negative amounts of iPhone 11 Silicon Case - Black");
        return ;
    }
})

document.getElementById('prd2AddButton').addEventListener('click',function(){
    var prd2CountVariable = parseInt(document.getElementById('prd2Count').value);
    document.getElementById('prd2Count').value=prd2CountVariable+1;
    document.getElementById('prd2TotalCostText').innerText=parseFloat(budgetCalculator(59,prd2CountVariable+1));
    updateSubtotalAndTotal();
})

document.getElementById('prd1Discard').addEventListener('click',function(){
    document.getElementById('prd1TotalCostText').innerText=0;
    document.getElementById('prd1').style.display='none';
    updateSubtotalAndTotal();
})

document.getElementById('prd2Discard').addEventListener('click',function(){
    document.getElementById('prd2TotalCostText').innerText=0;
    document.getElementById('prd2').style.display='none';
    updateSubtotalAndTotal();
})

document.getElementById('checkOutButton').addEventListener('click',function(){
    if(parseFloat(document.getElementById('totalText').innerText)<=0){
        alert('Nothing To Checkout!');
    }
    else{
        alert('Your Total Bill $'+parseFloat(document.getElementById('totalText').innerText));
    }
    location.reload();
})