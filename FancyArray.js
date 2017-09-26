/*

Normally, if you print an array such as ["James", "Jill", "Jane", "Jack"], you will see the following:

[ "James", "Jill", "Jane", "Jack" ]
Let's make it look fancy! Write a function that will make it print like:

0 -> James
1 -> Jill
2 -> Jane
3 -> Jack
Bonus (Only If You Have Time):

Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")

*/

var arr = ["James","Jill", "Jane", "Jack"];
var arrows = ['->','=>','::','----']
function fancy(arrows,arr){
    for (var i = 0; i<arr.length; i++){
        console.log(i + "  " + arrows[2] /*Pick which arrow you'd like. 0-3*/
        + "  " + arr[i]);
    }
}
return fancy(arrows,arr);
