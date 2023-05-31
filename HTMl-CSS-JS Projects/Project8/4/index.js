let arr = [],
  i = 0,
  j,
  high = 0;

function update(values) {
  arr[i] = parseInt(values);
  i++;
}

function show() {
  for (j = 0; j < arr.length; j++) {
    if (high < arr[j]){
        high = arr[j];
    }
  }
  console.log("Highest Marks is " + high);
}
