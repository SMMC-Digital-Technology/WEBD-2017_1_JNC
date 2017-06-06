//variable to store the data that the user inputs-in this case the income. 
var incomeAmount;

function buttonPress()
    {
         //positioning this here means that the variable inputAmount is changed each time a new value is typed in
        incomeAmount = document.getElementById("inputIncome").value;
        
        if (incomeAmount <16001 )
            {
                outputDisplay.innerHTML = "Your tax amount will be $0"
            }
    }