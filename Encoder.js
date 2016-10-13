//Caesar cipher to english converter
var CaesarCipherToEnglish = {
  "Z":"A",
  "A":"B",
  "B":"C",
  "C":"D",
  "D":"E",
  "E":"F",
  "F":"G",
  "G":"H",
  "H":"I",
  "I":"J",
  "J":"K",
  "K":"L",
  "L":"M",
  "M":"N",
  "N":"O",
  "O":"P",
  "P":"Q",
  "Q":"R",
  "R":"S",
  "S":"T",
  "T":"U",
  "U":"V",
  "V":"W",
  "W":"X",
  "X":"Y",
  "Y":"Z",
  "":"",
  " ":" "
}
//Caesar cipher converter object
var CaesarCipher = {
  "A":"Z",
  "B":"A",
  "C":"B",
  "D":"C",
  "E":"D",
  "F":"E",
  "G":"F",
  "H":"G",
  "I":"H",
  "J":"I",
  "K":"J",
  "L":"K",
  "M":"L",
  "N":"M",
  "O":"N",
  "P":"O",
  "Q":"P",
  "R":"Q",
  "S":"R",
  "T":"S",
  "U":"T",
  "V":"U",
  "W":"V",
  "X":"W",
  "Y":"X",
  "Z":"Y",
  "":"",
  " ":" "
}
//where all the Heiroglyphics are stored
var HeiroglyphicImage = new Image();

//Heiroglyphics converter object
var HeiroglyphicCipher = {
  "A": "<img src='images/Heiroglyphics/a.gif'>",
  "B": "<img src='images/Heiroglyphics/b.gif'>",
  "C":"<img src='images/Heiroglyphics/c.gif'>",
  "D": "<img src='images/Heiroglyphics/d.gif'>",
  "E":"<img src='images/Heiroglyphics/e.gif'>",
  "F":"<img src='images/Heiroglyphics/f.gif'>",
  "G":"<img src='images/Heiroglyphics/g.gif'>",
  "H":"<img src='images/Heiroglyphics/h.gif'>",
  "I":"<img src='images/Heiroglyphics/i.gif'>",
  "J":"<img src='images/Heiroglyphics/j.gif'>",
  "K":"<img src='images/Heiroglyphics/k.gif'>",
  "L":"<img src='images/Heiroglyphics/l.gif'>",
  "M":"<img src='images/Heiroglyphics/m.gif'>",
  "N":"<img src='images/Heiroglyphics/n.gif'>",
  "O":"<img src='images/Heiroglyphics/o.gif'>",
  "P":"<img src='images/Heiroglyphics/p.gif'>",
  "Q":"<img src='images/Heiroglyphics/q.gif'>",
  "R":"<img src='images/Heiroglyphics/r.gif'>",
  "S":"<img src='images/Heiroglyphics/s.gif'>",
  "T":"<img src='images/Heiroglyphics/t.gif'>",
  "U":"<img src='images/Heiroglyphics/u.gif'>",
  "V":"<img src='images/Heiroglyphics/v.gif'>",
  "W":"<img src='images/Heiroglyphics/w.gif'>",
  "X":"<img src='images/Heiroglyphics/x.gif'>",
  "Y":"<img src='images/Heiroglyphics/y.gif'>",
  "Z":"<img src='images/Heiroglyphics/z.gif'>",
  "":"",
  " ":" "
}
//event Handler
$("input[type='radio']").click(function() {
$("input:checked").prop('checked',false);
$(this).prop('checked',true);

//checks which radio is active
//echos input if  the echo radio is true
  if($("input:checked").val() == "echo"){
  $("#inputArea").keydown(function(){
         $("#textArea").append(String.fromCharCode(event.which));
    });
}
//will append Heiroglyphics if the radio is true
else if($("input:checked").val() == "Heiroglyphics"){
  $("#inputArea").keydown(function(){
    var MessageToEncode = String.fromCharCode(event.which);
    var Encoding = MessageToEncode.split('');
    MessageToEncode = HeiroglyphicCipher[Encoding[0]];
             $("#textArea").append( MessageToEncode );
    });

}
//translates message into the cipher if the radio is true
else if($("input:checked").val() == "Caesar cipher"){
  $("#inputArea").keydown(function(){
//message that will be split and encoded
var MessageToEncode = String.fromCharCode(event.which);
var Encoding = MessageToEncode.split('');
MessageToEncode = CaesarCipher[Encoding[0]];
         $("#textArea").append( MessageToEncode );
    });

  }
  else{
    console.log("error");
  }
});
$("#translationInputArea").keydown(function(){
  var MessageToEncode = String.fromCharCode(event.which);
  var Encoding = MessageToEncode.split('');
  MessageToEncode = CaesarCipherToEnglish[Encoding[0]];
           $("#translationArea").append( MessageToEncode );
      });
