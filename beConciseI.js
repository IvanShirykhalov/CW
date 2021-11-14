function describeAge(a) {
    return `You're a(n) ${a < 13 ? 'kid' : a < 18 ? 'teenager' : a < 65 ? 'adult' : 'elderly'}`
}

/*
function describeAge(age) {return age<13?"You're a(n) kid":age<18?"You're a(n) teenager":age<65?"You're a(n) adult":"You're a(n) elderly"}
*/