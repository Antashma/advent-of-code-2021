import {data} from './data.js';

function checkIncreasedFromPrev(arr) {
        let increasedFromPrev = 0;
        arr.map(function(el, i) {
            if (i === 0) {
                increasedFromPrev += 0;
            } else if (el > arr[i - 1] ) {
                increasedFromPrev += 1;
            };
        });
        return increasedFromPrev;
    };

export const res = checkIncreasedFromPrev(data);
console.log(res);
