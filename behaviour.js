var outputLine = document.getElementById("outputTag");
drawGraph();

//variable to store the data that the user inputs-in this case the income. 
var taxAmount;
function buttonPress()
    {
         //positioning this here means that the variable inputAmount is changed each time a new value is typed in
        var incomeAmount = document.getElementById("incomeAmount").value;
        
         //this is how the button works
     
            var number = 0;      
            if (incomeAmount <16000) 
            {        
                taxAmount = "Your tax amount is $" + "0";  
                outputLine.value=taxAmount;
            } 
        else if (incomeAmount <52500) 
                
            {    
                var number = (incomeAmount - 16000);
                var taxAmount = (number*0.1);  
                outputLine.value = "Your2 tax amount is $" + taxAmount;
            } 
        else if (incomeAmount <113000) 
            {
                    var number = (incomeAmount - 52500);
                    var taxAmount = ((number * 0.16) + 3650);
                    outputLine.value = "Your tax amount is $" + taxAmount;                    
                    
            } 
       else if (incomeAmount <184500) 
            {                
                 var number = (incomeAmount - 113000);
                 var taxAmount = ((number * 0.24) + 13330);
                outputLine.value = "Your tax amount is $" + taxAmount;
            } 
        else if (incomeAmount >184501)
            {        
                var number = (incomeAmount - 184500);
                var taxAmount = (30490 +(number * 0.36));
                outputLine.value = "Your tax amount is $" + taxAmount;
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
    
    layout = {
        title: "Income Tax",
        yaxis: {
            title: "tax",
            zerolinewidth: 1.5,
        },
        xaxis: {
            title: "income",
            zerolinewidth: 1.5,
        },
        width: 1000,
        height: 500,
       
    };
    
    Plotly.newPlot("graph", data, layout);
}