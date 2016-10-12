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
  "L":"L",
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

//event Handler
$("input[type='radio']").click(function() {
$("input:checked").prop('checked',false);
$(this).prop('checked',true);

//checks which radio is active
  //echos input if echo radio is pressed down
  if($("input:checked").val() == "echo"){
  $("#inputArea").keydown(function(){
         $("#textArea").append(String.fromCharCode(event.which));
    });
}
else if($("input:checked").val() == "Heiroglyphics"){
  $("#inputArea").keydown(function(){
         $("#textArea").append("2");
    });

}
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
