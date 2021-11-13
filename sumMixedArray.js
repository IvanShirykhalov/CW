function sumMix(x) {
    x = x.map(Number);
    return x.reduce((previous, current) => previous + current)
}