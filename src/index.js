module.exports = function toReadable(number) {
    if (number == 0) return 'zero';
    let arr = number.toString().split('');

    let map = new Map([ [0,''],
        [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'],
        [8, 'eight'], [9, 'nine'], [10, 'ten'], [11, 'eleven'], [12, 'twelve'], [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'], [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'], [19, 'nineteen'],
        [20, 'twenty'], [30, 'thirty'],
        [40, 'forty'], [50, 'fifty'], [60, 'sixty'], [70, 'seventy'], [80, 'eighty'], [90, 'ninety'],
    ]);

    if (map.get(number) !== undefined) return map.get(number);

    let resultArr=[];
    let hundred= '';
    let tens='';
    let num='';

    if(arr.length==3) {
        hundred=map.get(+arr[0])+' '+'hundred';
        if(arr[1]>1 ) tens=map.get(+(arr[1]+'0'));
        if(arr[1]==1 ) tens=map.get(+(arr[1]+''+arr[2]));
        if(arr[1]!=1) num=map.get(+arr[2]);
    }

    if(arr.length==2) {
        if(arr[0]>1 ) tens=map.get(+(arr[0]+'0'));
        if(arr[0]==1 ) tens=map.get(+(arr[0]+''+arr[1]));
        if(arr[0]!=1) num=map.get(+arr[1]);
    }


    if(hundred) resultArr.push(hundred);
    if(tens) resultArr.push(tens);
    if(num) resultArr.push(num);

    return resultArr.join(" ");
};
