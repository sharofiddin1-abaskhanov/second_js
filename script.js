
// Homework 1

var user1 = +prompt(' Yoshingizni kirirting! ')

if( user1 > 0 && user1 <= 18 ) {
    alert ( ' Siz hali yoshsiz, Oqishingiz kerak')
}

else if ( user1 > 18 && user1 <= 50) {
    alert ( ' Siz ishlashingiz kerak!')
}

else if ( user1 > 50 && user1 <= 59) {
    alert ( ' Siz yaqinda nafaqaga ketasiz!')
}

else if ( user1 > 59 && user1 <= 150) {
    alert ( ' Siz nafaqaxursiz!')
}

else {
    alert (' Nimadir notugri ketti ')
}