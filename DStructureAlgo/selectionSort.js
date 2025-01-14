let myArr = [10, 9, 8, 5, 6, 1, 3, 4, 2, 1];

function selectionSort([...arr]) {
  for (let i = 0; i < arr.length; i++) {
    // 가장 작은 원소의 인덱스 번호를 0으로 초기화합니다.
    let minimumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      // 버블정렬과의 차이 1: 버블정렬은 원소와 바로 다음 원소를 비교합니다. 
      // 하지만 선택정렬은 가장 작은 인덱스의 원소와 나머지 원소를 비교합니다.

      // 버블정렬과의 차이 2: 버블정렬은 원소와 원소를 비교하고 위치를 교환합니다.
      // 하지만 선택정렬은 가장 작은 인덱스를 저장합니다.

      if (arr[minimumIndex] > arr[j]) {
        console.log(minimumIndex);
        minimumIndex = j;
      }

    }

    // 가장 작은 원소의 인덱스가 바뀌었다면.
    if (i !== minimumIndex) {
      // 선택정렬은 중간에 불필요한 원소의 위치 교환이 없고 두번째 포문의 가장 마지막에 딱 한변 교환을 합니다.
      [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]]
    }
    console.log(arr);
  }

  return arr
}

console.log(selectionSort(myArr));