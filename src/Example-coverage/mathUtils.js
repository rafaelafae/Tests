export function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid arguments: Both must be numbers');
    }
    return a + b;
}

export function divide(a, b) {
    if (b === 0) throw new Error('Division by zero is not allowed');
    return a / b;
}

export async function fetchAndSim(apiClient, x, y) {
    const response = await apiClient.get('/validate', { params: { x, y } });

    if (!response.valid) {
        throw new Error('Invalid inputs from API');
    }

    return sum(x, y);
}