const readline = require('readline');

function getNumberInput(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question, (input) => {
            rl.close();
            resolve(Number(input)); 
        });
    });
}

function calculateSum(n) {
    return (n + 1) * n / 2;
}

async function main() {
    const number = await getNumberInput("Enter a number: ");

    if (isNaN(number) || number < 0) {
        console.log("Please enter a valid positive number.");
        return;
    }

    const sum = calculateSum(number);
    
    return sum; // Returning the computed sum
}

// Call the function
main().then((result) => {
    console.log("Returned value:", result);
});
