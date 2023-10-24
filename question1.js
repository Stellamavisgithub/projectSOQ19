
   function multipleNum(arr){
    let oneElement = arr[0];
    let newArr = [];

    for(let i= 0; i < arr.lenghth; i++) {
    result = arr[i] *= 2;
    newArr.push(result);
   }
   const last_array = [oneElement].concat(newArr);
   }
   console.log(multipleNum[1,2,4,6,8,10]);