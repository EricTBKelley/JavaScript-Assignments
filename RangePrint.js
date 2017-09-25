/*Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.*/

function printRange(start,end,skip){
    var i = start;
    while (i<end){
        console.log(i);
        i += skip;
    }
}
return(printRange(1,16,3));
