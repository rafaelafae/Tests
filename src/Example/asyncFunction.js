export function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

export function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 1000);
    });
}
