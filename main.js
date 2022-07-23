function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tAz0E_C3f/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('imagen') 
   

    if (results[0].label == "Perro") {
      img.src = 'Perro.jpg';

    } else if (results[0].label == "Gato") {
      img.src = 'Gato.jpg';
    
    } else if (results[0].label == "Caballo") {
      img.src = 'Caballo.jpg';

    } else if (results[0].label == "Oveja") {
      img.src = 'Oveja.jpg';  
      
    }else{
      img.src = 'venado_escucha.jpg';
     
    }
  }
}
