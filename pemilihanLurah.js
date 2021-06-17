function cariLurahBaru(calons) {
    calons.sort((x, y) => x - y);

    var bestStreak = 1;
    var bestElem = calons[0];
    var currentStreak = 1;
    var currentElem = calons[0];

    for (let i = 1; i < calons.length; i++) {
        if (calons[i - 1] !== calons[i]) {
            if (currentStreak > bestStreak) {
                bestStreak = currentStreak;
                bestElem = currentElem;
            }

            currentStreak = 0;
            currentElem = calons[i];
        }

        currentStreak++;
    }

    return currentStreak > bestStreak ? currentElem : bestElem;

}

console.log(cariLurahBaru([1, 2, 3, 2, 1, 3, 2, 3])); // pemilihan ulang
console.log(cariLurahBaru([1, 2, 3, 2, 1, 3, 3])); // 3
console.log(cariLurahBaru([1])); // 1
console.log(cariLurahBaru([])); // -1