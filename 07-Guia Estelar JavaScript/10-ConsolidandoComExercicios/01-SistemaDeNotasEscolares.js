/* ### Transformar notas escolares

    Crie um algoritmo que transforme as notas dos sistema numérico ára sistema de notas em caravteres tipo A B C

    * de  90 para cima - A
    * entre 80 - 89    - B
    * entre 70 - 79    - C
    * entre 60 - 69    - D
    * menor que 60     - F
    
*/


let Notas = 59;

if (Notas >= 90) {
    console.log('A')

}else if (Notas <= 90 && Notas >= 80) {
    console.log('B')

}else if (Notas <= 80 && Notas >= 70) {
    console.log('C')
    
}else if (Notas <= 70 && Notas >= 60) {
    console.log('D')

}else {
    console.log('F')
}


