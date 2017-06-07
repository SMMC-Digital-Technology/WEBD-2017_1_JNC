var outputLine = document.getElementById("outputTag");
drawGraph();

//variable to store the data that the user inputs-in this case the income. 
var taxAmount;
function buttonPress()
    {
         //positioning this here means that the variable inputAmount is changed each time a new value is typed in
        var incomeAmount = document.getElementById("incomeAmount").value;
        
         //this is how the button works, the income amount is taken and it is decided which tax bracket it fits into, the math is then applied to calculate the tax amount, which is outputted. The "taxAmount.toFied(2)" means that only two decimal places are shown, even if there are many more. 
            // tax brackers are;
                        //0-16000 tax rate of 0,
                        //16001-52500 tax rate of 10% of every dollar over 16000,
                        //52501-113000 tax rate of 16% of every dollar over 52500+3650, 
                        //113001-184500 tax rate of 24% of every dollar over 113000 + 13330
                        //184501 + tax rate of 36% of every dollar over 184500 + 30490
        
            var number = 0;      
            if (incomeAmount <16000) 
            {        
                taxAmount = "Your tax amount is $" + "0";  
                outputLine.value=taxAmount.toFixed(2);
            } 
        else if (incomeAmount <52500) 
                
            {    
                var number = (incomeAmount - 16000);
                var taxAmount = (number*0.1);  
                outputLine.value = "Your tax amount is $" + taxAmount.toFixed(2);
            } 
        else if (incomeAmount <113000) 
            {
                    var number = (incomeAmount - 52500);
                    var taxAmount = ((number * 0.16) + 3650);
                    outputLine.value = "Your tax amount is $" + taxAmount.toFixed(2);                    
                    
            } 
       else if (incomeAmount <184500) 
            {                
                 var number = (incomeAmount - 113000);
                 var taxAmount = ((number * 0.24) + 13330);
                outputLine.value = "Your tax amount is $" + taxAmount.toFixed(2);
            } 
        else if (incomeAmount >184501)
            {        
                var number = (incomeAmount - 184500);
                var taxAmount = (30490 +(number * 0.36));
                outputLine.value = "Your tax amount is $" + taxAmount.toFixed(2);
            }
        
       
    }
//plotly graph, ensures that graph appears at the same time as the rest of the content//
function drawGraph()
{
    taxThresholds = {
     x: [0, 50000, 100000, 150000, 200000, 250000],
	    y: [0, 3400, 11250, 22210, 36070, 54070],
        type: 'scatter',
        mode: 'lines+marker',
        name: 'taxes',
        };
    
    data=[taxThresholds];
//layout of plotly graph, sizing and names of axis
    layout = {
        title: "Income Tax",
        yaxis: {
            title: "Tax",
            zerolinewidth: 1.5,
        },
        xaxis: {
            title: "income",
            zerolinewidth: 1.5,
        },
        width: 1000,
        height: 500,
       
    };
//tells to plot graph. 
    
    Plotly.newPlot("graph", data, layout);
}