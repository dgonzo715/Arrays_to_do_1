function pushfront(arr, val) { 
    for (var i = arr.length - 1; i >=0; i--) {
       arr[i +1] = arr[i];
    }
    arr[0] = val;
    return arr
}
var arr = [1,2];
var val = 0;
var dothis = pushfront(arr,val);
console.log(dothis);

var arr = [1, 2, 3, 4]; 
var theRemovedElement = arr.shift(); // theRemovedElement == 1
console.log(arr); // [2, 3, 4]


var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join()); // Jani,Hege,Stale,Kai Jim,Borge
arr.splice(2, 0, "Lene");
console.log(arr.join()); // Jani,Hege,Lene,Stale,Kai Jim,Borge