function convertCurrency(event) {
    event.preventDefault();

    var amount = parseFloat(document.getElementById('amount').value);
    var currency = document.getElementById('exchange').value;
    var resultElement = document.getElementById('result');

    if (isNaN(amount)) {
        resultElement.textContent = 'Please enter a valid number';
        console.log('Please enter a valid number');
        return;
    }

    var convertedAmount;

    switch (currency) {
        case 'dollar':
            convertedAmount = convertToDollar(amount);
            break;
        case 'dinar':
            convertedAmount = convertToDinar(amount);
            break;
        case 'nis':
            convertedAmount = convertToNis(amount);
            break;
        default:
            resultElement.textContent = 'Please select a valid currency';
            console.log('Please select a valid currency');
            return;
    }

    resultElement.textContent = `Converted amount: ${convertedAmount} ${currency}`;
    console.log(`Converted amount: ${convertedAmount} ${currency}`);
}

function convertToDollar(amount) {
   return amount * 0.276; 
}

function convertToDinar(amount) {
    return amount * 0.1961; 
}

function convertToNis(amount) {
    return amount; // Assuming the input is already in NIS
}
