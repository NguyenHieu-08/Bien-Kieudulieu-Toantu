function resultCirclePerimeter(){
    let r = document.getElementById('cirCle').value;
    
    let circlePerimeter = Number(r)*2* Math.PI;
    
    document.getElementById('result').innerHTML = circlePerimeter;
}