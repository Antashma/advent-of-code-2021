import {data} from './data-d1.js';

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

    function getThreeMeasurementSums(arr) {
        let sumArr = []
        arr.map(
            function(el, i) {
                if (arr[i+2]) {
                    sumArr.push(el + arr[i+1] + arr[i + 2])
                }
            }
        )
        return sumArr
    }

export const resDay1Part1 = checkIncreasedFromPrev(data);
export const resDay1Part2 = checkIncreasedFromPrev(getThreeMeasurementSums(data))