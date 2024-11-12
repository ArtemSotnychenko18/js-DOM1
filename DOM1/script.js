function calculate(operation) {
    const num1Input = document.getElementById("num1").value.trim();
    const num2Input = document.getElementById("num2").value.trim();
    const error = document.getElementById("error");
    const result = document.getElementById("result");

    error.textContent = "";  
    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);
    if (isNaN(num1) || isNaN(num2) || num1Input === "" || num2Input === "") {
        error.textContent = "Введіть дійсні числа в обидва поля...";
        result.textContent = "Результат: ";
        return;
    }

    let calculation;

    switch (operation) {
        case 'add':
            calculation = num1 + num2;
            break;
        case 'subtract':
            calculation = num1 - num2;
            break;
        case 'multiply':
            calculation = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                error.textContent = "Не можна ділити на нуль.";
                result.textContent = "Результат: ";
                return;
            }
            calculation = num1 / num2;
            break;
    }

    calculation = Math.round(calculation * 100) / 100;

    result.textContent = "Результат: " + calculation;
}
