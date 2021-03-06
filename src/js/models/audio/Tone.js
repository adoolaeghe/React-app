var synth = new Tone.Synth().toMaster();
// synth.triggerAttackRelease("C2", "8n");
var sampler = new Tone.Player({url: "src/js/models/animation/AA.mp3",
  loop  : true,
  loopStart : 70,
  loopEnd : 78,
  autostart: true,
  volume: -50
}).toMaster();

//// TONE FILTER VOLUME LOOP
Tone.Buffer.on('load', function() {
  var x = 0;
  window.setInterval(function(){
    if(x === 70) {
      console.log("1", x, sampler.volume.value);
      sampler.volume.value -= 10;
      x = 0;
    } else if (x <= 30) {
      console.log("2", x, sampler.volume.value);
      x += 1;
      sampler.volume.value += 10;
    } else if (x > 30) {
      console.log("3", x, sampler.volume.value);
      sampler.volume.value -= 10;
      x += 1;
    }
  }, 1000);
})
