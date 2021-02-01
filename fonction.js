// Chaine
var text = "Texte a afficher avec une fonction"
var array = ['Apple', 'Strawberry', 'Orange', 'Banana']
afficherTableau(text,array)
fonctionIF();
fonctionFOR();
fonctionFORARRAY();

function afficherTableau(text, array) {
    document.write(text)

    document.write('<table width="80%" cellpadding="10" border="1">')
    document.write('<tr>')
    document.write('<td>' + array[0] + '</td>')
    document.write('<td>' + array[1] + '</td>')
    document.write('<td>' + array[2] + '</td>')
    document.write('<td>' + array[3] + '</td>')
    document.write('</tr>')
    document.write('</table>')
}

function fonctionIF() {
    var variable = 15
    alert("La valeur de fonctionIF est " + variable)
    if(variable < 10 ) {
        alert("Plus petit que 10")
    } else {
        alert("Plus grand que 10")
    }
}


function fonctionFOR() {
    for (let pas = 0; pas <= 10; pas++) {
        document.write('</br>' + pas + '</br>')
    } 
}

function fonctionFORARRAY() {
    document.write('<table width="80%" cellpadding="10" border="1">')
    for (let step = 0; step <= 10; step++) {
        document.write('<tr>')
        for (let step2 = 0; step2 <= 10; step2++) {
            document.write('<td>' + step + "," + step2 + '</td>')
        }
        document.write('</tr>')
    }
    document.write('</table>')
}
