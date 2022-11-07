function resultaverage(){
    let a = document.getElementById('physics').value;
    let b = document.getElementById('chemistry').value;
    let average = (Number(a) + Number (b))/2;
    

    document.getElementById('result').innerHTML = average;
}