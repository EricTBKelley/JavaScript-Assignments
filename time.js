function clock(hour,minute,period) {
    var num="";
    if (minute >0){
        num += hour + ":" + minute + " " + period;
    }
    else if (minute==0) {
        num += hour + ":" + "00" + " " + period;
    }

    return num;
}

function time(hour,minute,period) {
        var whattime="";
        if (minute > 00 && minute <= 15||minute >30 && minute<=45){
                whattime += "It's just after ";
                if (minute <= 15){
                    whattime += hour + ":00 " + period;
                }
                if (minute >30){
                    whattime += hour + ":30 " + period;
                }

            }
        else if (minute > 15 && minute < 30 || minute > 45 && minute < 60) {
                whattime += "It's almost ";
                if (minute >15 && minute < 30){
                    whattime += hour + ":30 " + period;
                }
                if (minute >45){
                    whattime += hour + 1 + ":00 ";{
                        if (hour<11){
                            whattime += period;
                        }
                        else if (hour ==11 && period =="AM"){
                            whattime +="PM";
                        }
                        else if (hour ==11 && period =="PM"){
                            whattime +="AM";
                        }
                    }
                }
            }
        else if (minute == 30) {
                whattime += "It's half past ";
                whattime += hour + ":00" + period;
            }
        else if (minute == 00){
                whattime += "It is ";
                whattime += hour;
                whattime += ":00 " + period;
            }

    return whattime;
}

console.log(clock(11,46,"PM"),time(11,46,"PM"));
console.log(clock(11,46,"AM"),time(11,46,"AM"));
console.log(clock(12,10,"AM"),time(12,10,"AM"));
console.log(clock(12,10,"PM"),time(12,10,"PM"));

console.log(clock(5,10,"PM"),time(5,10,"PM"));
console.log(clock(5,45,"PM"),time(5,45,"PM"));

console.log(clock(4,20,"AM"),time(4,20,"AM"));
console.log(clock(4,50,"AM"),time(4,50,"AM"));

console.log(clock(3,30,"PM"),time(3,30,"PM"));
console.log(clock(3,00,"PM"),time(3,00,"PM"));
