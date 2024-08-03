module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundred = "hundred";

    let firstRank = number.toString().slice(-1);
    let secondRank = number.toString().slice(-2, -1);
    let thirdRank = number.toString().slice(-3, -2);

    if (number < 20) return units[number];
    if (number < 100) {
        if (firstRank == 0) return tens[secondRank];
        return `${tens[secondRank]} ${units[firstRank]}`;
    }
    if (number >= 100) {
        if (firstRank == 0 && secondRank == 0)
            return `${units[thirdRank]} ${hundred}`;
        return `${units[thirdRank]} ${hundred} ${toReadable(
            Number(number.toString().slice(-2))
        )}`;
    }
};
