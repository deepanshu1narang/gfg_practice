function lcm(a, b) {
    if (a < b)
        [a, b] = [b, a];
    for (let i = a; i <= a * b; i++) {
        if (i % a === 0 && i % b === 0) {
            return i;
        }
    }
}
// O(a*b - a) a is max(a, b) ...or... O(lcm(a, b) - max(a, b))
console.log(lcm(12, 15));
console.log(lcm(12, 115)); i
console.log(lcm(112, 115));
console.log(lcm(112, 15));

// w/o hfc
function lcmWithoutHCF(a, b) {
    if (a < b) {
        [a, b] = [b, a];
    }
    let i = 1;
    while (a % b !== 0) {
        a *= i;
        i++;
    }
}

// O(min(a, b))
function lcmWithoutHCF2(a, b) {
    if (a < b)
        [a, b] = [b, a];
    if (a > Number.MAX_SAFE_INTEGER || a < Number.MIN_SAFE_INTEGER)
        throw new Error("werty");
    if (b > Number.MAX_SAFE_INTEGER || b < Number.MIN_SAFE_INTEGER)
        throw new Error("sdfg");

    for (let i = 1; i <= b; i++) {
        if (a * i % b === 0)
            return a * i;
        i++;
    }
}

// O(log min(a, b))
function lcfWithHCF(a, b, hfc) {
    return (a * b) / hfc(a, b);
}

function hcf(a, b) {
    if (b === 0)
        return a;
    return hfc(a, a % b);
}

function hcf2(a, b) {
    while (b !== 0) {
        a = a % b;
        [a, b] = [b, a];
    }
    return a;
}

