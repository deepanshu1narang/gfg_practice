function quadraticRoots(a, b, c) {
    // code here
    const root1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    const root2 = (-1 * b - Math.pow((b ** 2 - 4 * a * c), 0.5)) / (2 * a);
    return [root1, root2];
}

console.log(quadraticRoots(752, 904, 164));