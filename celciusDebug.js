function weatherInfo(temp) {
    let x = (temp - 32) * (5 / 9);
    if (x > 0) {
        return x + ' is above freezing temperature'
    } else if (x < 0) {
        return x + ' is freezing temperature'
    }
}