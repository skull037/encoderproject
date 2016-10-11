//event Handler
$("input[type='radio']").mousedown(function(a) {
$("input:checked").prop('checked',false);
$(this).prop('checked',true);
});

$("#inputArea").keydown(function(e){
       $("textArea").append(String.fromCharCode(event.which));
  });

//echos input if echo radio is pressed down
if($("input:checked").val() == "echo"){
  console.log("echo");

}
if($("input:checked").val() == "Heiroglyphics"){
  console.log("Heiroglyphics");

}
if($("input:checked").val() == "Caesar cipher"){
  console.log("Caesar cipher");

}
