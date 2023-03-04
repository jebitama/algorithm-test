// covert multidimensional into a one-dimensional array
export default function flattenArray(arr: string | any[]): any[] {
    // variable to store new array result
    const result = [];
    // array loop
    for (let i = 0; i < arr.length; i++) {
        // check if array is multidimensional
        if (Array.isArray(arr[i])) {
            // store the converted multidimensional
            result.push(...flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
