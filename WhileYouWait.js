var daysUntilMyBirthday = 60;

function BirthdayCountdown(daysUntilMyBirthday){

while (daysUntilMyBirthday >30){
    console.log (daysUntilMyBirthday + ' days until my birthday. Heck.' );
    daysUntilMyBirthday --;
}
while (daysUntilMyBirthday >5){
    console.log (daysUntilMyBirthday + ' days until my birthday! oooooooooooooooo!' );
    daysUntilMyBirthday --;
}
while (daysUntilMyBirthday >1) {
    console.log (daysUntilMyBirthday + ' days until my birthday!!! O SHIT' );
    daysUntilMyBirthday --;

}
while (daysUntilMyBirthday >0) {
    console.log (daysUntilMyBirthday + ' day until THE DAY' );
    daysUntilMyBirthday --;
}
if (daysUntilMyBirthday==0) {
    console.log ('...only 365 days until my birthday');
}


}
return  BirthdayCountdown(daysUntilMyBirthday);
