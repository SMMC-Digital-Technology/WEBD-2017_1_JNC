var outputLine = document.getElementById("outputTag");

//variable to store the data that the user inputs-in this case the income. 
var taxAmount;
function buttonPress()
    {
         //positioning this here means that the variable inputAmount is changed each time a new value is typed in
        var incomeAmount = document.getElementById("inputText").value;
        
         //this is how the button works
     
            var number = 0;      
            if (incomeAmount <16001) 
            {        
                taxAmount = "Your tax amount is $" + "$0";  
                outputLine.value=taxAmount;
            } 
        else if (incomeAmount <52501) 
                
            {    
                var number = (incomeAmount - 1600)
                var taxAmount = number * 0.1;  
                outputLine.value = "your tax amount is $" + taxAmount;
            } 
        else if (incomeAmount <113001) 
            {
                    var number = (incomeAmount - 52500);
                    var taxAmount = (number * 0.16) + 3650;
                    outputLine.value = "your tax amount is $" + taxAmount;                    
                    
            } 
        else if (incomeAmount <184501) 
            {                
                 var number = (incomeAmount - 113000);
                 var taxAmount = (number * 0.24) + 13330;
                outputLine.value = "your tax amount is $" + taxAmount;
            } 
        else
            {        
                var number = (income amount - 185400)
                var taxAmount = (incomeAmount * 0.36) + 30490;
                outputLine.value = "your tax amount is $" + taxAmount;
            }
        
       
    }

