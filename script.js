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


// Homework 2

var clock = +prompt(' Soat vaqtini kiriting: ')


if (clock == 0 && clock <= 3) 

{alert (' Xozirgi vaqt tungi soat: ' + clock)}

else if( clock > 3 && clock < 11)

{alert (' Xozirgi vaqt tongi soat ' + clock)}

else if( clock == 12 )

{alert (' Xozirgi vaqt tushki soat' + clock)}

else if( clock > 13 && clock <= 18 )

{alert (' Xozirgi vaqt tushki soat ' + (clock - 12))}

else if( clock >= 19 && clock <= 24 )

{alert (' Xozirgi vaqt kechki soat ' + (clock -12))}

else if (isNaN(clock))

{alert ( ' Siz raqam kiritmadingiz! ')}


else {alert(' Siz xich nima kiritmadingiz! ')}


// Homework 3

var nomer1 = +prompt(' Birinchi raqamni kiriting: ') 

var nomer2 = +prompt(' Ikkinchi raqamni kiriting: ') 

var nomer3 = +prompt(' Uchinchi raqamni kiriting: ')

if (nomer1 > nomer2 && nomer2 > nomer3 || nomer1 < nomer2 && nomer2 < nomer3)

{ alert (' Orta qiymat:' + nomer2)}

else if (nomer1 > nomer3 && nomer3 > nomer2 || nomer1 < nomer3 && nomer3 < nomer2)

{ alert (' Orta qiymat:' + nomer3)}

else if (nomer3> nomer1 && nomer1 > nomer2 || nomer3 < nomer1 && nomer1 < nomer2)

{ alert (' Orta qiymat:' + nomer1)}

else if (nomer1 == nomer2 && nomer2 == nomer3)

{alert (' Barcha kiritilgan raqamlar uzaro teng')}

else if (nomer1 > nomer2 && nomer2 == nomer3 || nomer1 < nomer2 && nomer2 == nomer3 )

{alert (' Orta qiymat ' + 'Ikkinchi raqam ' + nomer2 + ' xamda ' + 'Uchinchi raqam ' + nomer3)}

else if (nomer2 > nomer1 && nomer1 == nomer3 || nomer2 < nomer1 && nomer1 == nomer3)

{alert (' Orta qiymat ' + 'Birinchi raqam ' + nomer1 + ' xamda ' + 'Uchinchi raqam ' + nomer3)}

else if (nomer3 > nomer1 && nomer1 == nomer2 || nomer3 < nomer1 && nomer1 == nomer2)

{alert (' Orta qiymat ' + 'Birinchi raqam ' + nomer1 + ' xamda ' + 'Ikkinchi raqam ' + nomer2)}

else {
    if (isNaN(nomer1) && isNaN(nomer2) && isNaN(nomer3))
    alert ( 'Siz raqam kiritmadingiz ')
    else if (isNaN(nomer1) && isNaN(nomer2))
    {alert('Birinchi hamda ikkinchi soningiz raqam emas')}
    else if (isNaN(nomer2) && isNaN(nomer3))
    {alert('Ikkinchi hamda uchinchi soningiz raqam emas')}
    else if (isNaN(nomer1) && isNaN(nomer3))
    {alert('Birinchi hamda uchinchi soningiz raqam emas')}
    else if (isNaN(nomer1))
    {alert(' Birinchi kiritgan soningiz son emas')}
    else if (isNaN(nomer2))
    {alert(' Ikkinchi kiritgan soningiz son emas')}
    else if (isNaN(nomer3))
    {alert(' Uchinchi kiritgan soningiz son emas')}
    
}
