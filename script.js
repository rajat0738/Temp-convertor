const TempConv = () =>{
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('unit');
    const valueTemp = unit.options[tempSelected.selectedIndex].value;

    const celtofeh = (cel) =>{
        let fehrenheit = ((cel * 9/5 + 32)).toFixed(1);
        return "Result: " + fehrenheit;
    }

    const fehtocel = (feh) =>{
        let celsius = ((feh - 32) * 5/9).toFixed(1);
        return "Result: " + celsius;
    }

    if(valueTemp == 'cel'){
        document.getElementById('result').innerHTML = celtofeh
        (inputTemp) + " °Fehrenheit"
    }

    if(valueTemp == 'feh'){
        document.getElementById('result').innerHTML = fehtocel
        (inputTemp) + " °Celsius"
    }
}