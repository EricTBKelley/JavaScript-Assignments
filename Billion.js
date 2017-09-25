

function reward(day,penny){
    for (day = 1; day < 31; day++){
        if (day == 1){
            penny = .01;
            console.log("Day " + day + ": $" + penny);
        }
        else if (day > 1){
            penny = penny*2;
            console.log("Day " + day + ": $" + penny);
        }
    }

}
return reward();
