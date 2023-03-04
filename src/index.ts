import flattenArray from "./flatten.array";
import digitToValueArray from "./digit.toarray";

/*
===================================================================
********************* CASE I (Flatten Array) **********************
===================================================================
- input: [1, 2, [3, 4], 5, [6, 7], 8] 
- expected output: [1, 2, 3, 4, 5, 6, 7, 8]
-------------------------------------------------------------------
*/

// example input case
const case_1_input = [1, 2, [3, 4], 5, [6, 7], 8];
const case_1_output = flattenArray(case_1_input);
console.log("===================== CASE 1 ========================")
console.log('--------- Multi to single dimensional array ---------')
console.log("-----------------------------------------------------")
console.log("input: ", case_1_input) //input
console.log("result: ", case_1_output); //result

/* =====================  END OF CASE 1 ======================== */

/*
===================================================================
***************** CASE 2 (Digit to Value Array) *******************
===================================================================
- input: 5623847 
- expected output: [5000000, 600000, 20000, 3000, 800, 40, 7]
-------------------------------------------------------------------
*/

// example input case
const case_2_input = 5623847;
const case_2_output = digitToValueArray(case_2_input);
console.log("====================== CASE 2 =======================")
console.log('---------------- Digit to Value Array ---------------')
console.log("-----------------------------------------------------")
console.log("input: ", case_2_input) //input
console.log("result: ", case_2_output); //result
console.log("=====================================================")

/* ======================  END OF CASE 2 ======================== */

