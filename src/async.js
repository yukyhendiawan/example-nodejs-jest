export const myName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(`My Name Is ${name}`);
            } else {
                reject("Name Is Empty");
            }
        }, 1000);
    });
};
