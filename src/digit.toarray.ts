// covert digit into value array
export default function digitToValueArray(number: number): number[] {
    // convert to string
    const numberString = number.toString();
    const length = numberString.length;
    const result = [];
    // loop the converted digit
    for (let i = 0; i < length; i++) {
        const digit = parseInt(numberString[i]);
        const placeValue = 10 ** (length - i - 1);
        // push to new value array
        result.push(digit * placeValue);
    }

    return result;
}
