function strReverser() {
    let stre = document.getElementById("input").value;
    let newp = document.querySelector('#newp')

    let newstr = stre.split(' ');
    let reverse = 'fef'

    for (let i = 0; i < newstr.length-1; i--) {
        reverse += newstr[i];
    }
    console.log(reverse);
    newp.innerHTML = reverse;
}
