
const action = operacion => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    let op = operacion.value;

    if (num1 == null || num2 == null || num1 == "" || num2 == "") {
        alert("Debe ingresar valores");
    } else {

        switch (op) {
            case "+":
                document.getElementById("result").value = parseFloat(num1) + parseFloat(num2);
                break;
            case "-":
                document.getElementById("result").value = parseFloat(num1) - parseFloat(num2);
                break;
            case "*":
                document.getElementById("result").value = parseFloat(num1) * parseFloat(num2);
                break;
            case "/":
                document.getElementById("result").value = parseFloat(num1) / parseFloat(num2);
                break;
            case "C":
                res = null;
                document.getElementById("result").value = "";
                document.getElementById("num_1").value = "";
                document.getElementById("num_2").value = "";
                break;
        }
    }
}