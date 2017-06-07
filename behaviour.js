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
            if (incomeAmount <16001) 
            {        
                taxAmount = "Your tax amount is $" + "$0";  
                outputLine.value=taxAmount;
            } 
        else if (incomeAmount <52501) 
                
            {    
                var number = (incomeAmount - 1600);
                var taxAmount = number * 0.1;  
                outputLine.value = "Your tax amount is $" + taxAmount;
            } 
        else if (incomeAmount <113001) 
            {
                    var number = (incomeAmount - 52500);
                    var taxAmount = (number * 0.16) + 3650;
                    outputLine.value = "Your tax amount is $" + taxAmount;                    
                    
            } 
        else if (incomeAmount <184501) 
            {                
                 var number = (incomeAmount - 113000);
                 var taxAmount = (number * 0.24) + 13330;
                outputLine.value = "Your tax amount is $" + taxAmount;
            } 
        else
            {        
                var number = (incomeAmount - 185400);
                var taxAmount = (incomeAmount * 0.36) + 30490;
                outputLine.value = "Your tax amount is $" + taxAmount;
            }
        
       
    }
function drawGraph()
{
    taxThresholds = {
     x: [0, 50000, 100000, 150000, 200000, 250000],
	    y: [0, 3400, 11250, 22210, 36070, 54070],
        type: 'scatter',
        mode: 'lines+marker',
        name: 'taxes'
    };
    
    data=[taxThresholds];
    
    layout = {
        title: "Title here",
        yaxis: {
            title: "tax",
            zerolinewidth: 1.5,
        },
        xaxis: {
            title: "income",
            zerolinewidth: 1.5,
        },
        
    };
    
    Plotly.newPlot("graph", data, layout);
}

 /*
         <!---Plotly Graph code--->
                
        <div id="tester" style="width:600px;height:250px;"></div>    
        <!--script-this opens the javascript 'section' of the hmtl file--->
        <script>
	       TAX AMOUNT= document.getElementById('taxAmount');
	       Plotly.plot( taxGraph, [{
	       x: [0, 50000, 100000, 150000, 200000, 250000],
	       y: [0, 3400, 11250, 22210, 36070, 54070}], {
	       margin: { t: 0 } } );
        </script>
        */