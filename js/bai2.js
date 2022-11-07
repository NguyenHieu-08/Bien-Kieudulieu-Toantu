function resultTemperate(){
    let c = document.getElementById('temperate').value;
    
    // C/5 = (F-32)/9
    let f = ((Number(c))/5)*9 +32
    

    document.getElementById('result').innerHTML = f;
}