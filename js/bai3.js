function resultCircleArea(){
    let r = document.getElementById('circle').value;
    
    let circleArea = r**2 * Math.PI;
    
    document.getElementById('result').innerHTML = circleArea;
}