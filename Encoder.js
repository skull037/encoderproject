//Caesar cipher converter object
var CaesarCipher= {
  "a":"z",
  "b":"a",
  "c":"b",
  "d":"c",
  "e":"d",
  "f":"e",
  "g":"f",
  "h":"g",
  "i":"h",
  "j":"i",
  "k":"j",
  "l":"k",
  "m":"l",
  "n":"m",
  "o":"n",
  "p":"o",
  "q":"p",
  "r":"q",
  "s":"t",
  "t":"s",
  "u":"t",
  "v":"u",
  "w":"v",
  "x":"w",
  "y":"x",
  "z":"y"
}

//event Handler
$("input[type='radio']").click(function(a) {
$("input:checked").prop('checked',false);
$(this).prop('checked',true);
checkClicked();
});

//checks which radio is active
function checkClicked(){
if($("input:checked").val() == "echo"){
  //echos input if echo radio is pressed down
  $("#inputArea").keydown(function(e){
         $("#textArea").append(String.fromCharCode(event.which));
    });
}
else if($("input:checked").val() == "Heiroglyphics"){
  console.log("Heiroglyphics");

}
else if($("input:checked").val() == "Caesar cipher"){
  $("#inputArea").keydown(function(e){
         $("#textArea").append("A");
    });

}
}
