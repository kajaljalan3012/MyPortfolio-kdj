function setup(){
    createCanvas(300, 200);
    background(51);
    loadJSON('all', gotData);
    console.log('running');

    var button = select('#submit');
    button.mousePressed(submitWord);
}
    function submitWord() {
        var word = select('#word').value();
        var score = select('#score').value();
        console.log(word, score);

    loadJSON('add/' + word + '/' + score, finished);

  function finished(){
      console.log(data);
  }


}

function gotData(data){
    background(51);
    console.log(data);
    var keys = Object.keys(data);
    for (var i=0; i < keys/length; i++){
        var word = keys[i];
        var score = data[word];
        var x = random(widht);
        var y = random(height);
        fill(255);
        textSize(16);
        text(word, x, y);
        }
}