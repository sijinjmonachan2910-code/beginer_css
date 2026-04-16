let count = 0;
let grandTotal = 0;

function addItem() {
    if (count >= 5) {
        document.getElementById("output").innerText = "5 purchases completed!";
        return;
    }

    let code = parseInt(document.getElementById("code").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    let price = 0;
    let product = "";

    switch (code) {
        case 1:
            product = "Apple";
            price = 30 * quantity;
            break;

        case 2:
            product = "Banana";
            price = 10 * quantity;
            break;

        case 3:
            product = "Mango";
            price = 50 * quantity;
            break;

        default:
            document.getElementById("output").innerText = "Invalid code! Skipped.";
            return; // similar to continue
    }

    let message = price > 100 ? "High purchase" : "Normal purchase";

    grandTotal += price;
    count++;

    document.getElementById("output").innerText =
        `Product: ${product}, Price: ₹${price}, ${message}`;

    document.getElementById("total").innerText =
        `Total Bill: ₹${grandTotal}`;
}