var nameInput = document.getElementById("inputText");
var outputLine = document.getElementById("outputTag");
//var numberInput = document.getElementById("inputNumber")

//variable to store the data that the user inputs-in this case the income. 
var incomeAmount;

function buttonPress()
    {
         //positioning this here means that the variable inputAmount is changed each time a new value is typed in
        incomeAmount = document.getElementById("inputText").value;
        
         //this is how the button works
     
            var number = 0;      
            if (incomeAmount <16001) {        
                incomeAmount = "Your tax amount is" + "$0";    
            } else if (incomeAmount <52501) {        
                incomeAmount = "Your tax amount is " incomeAmount - 1600 * 0.1;  
            } else if (incomeAmount <113001) {
                incomeAmount = "Your tax amount is " incomeAmount - 52500 + incomeAmount * 0.16 + 3650;
            } else if (incomeAmount <184501) {                
                incomeAmount = "Your tax amount is " incomeAmount - 113000 + incomeAmount * 0.24 + 13330;
            }else{        
                incomeAmount = "Your tax amount is " income amount - 185400 + incomeAmount * 0.36 + 30490;    
    }
