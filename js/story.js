$(document).ready(function(){
  $("#hide").hide();
  /*let inp1=$("input#input1").val();
  let inp2=$("input#input2").val();
  let inp3=$("input#input3").val();
  let inp4=$("input#input4").val();
  let inp5=$("input#input5").val();
  let inp6=$("input#input6").val();
  let inp7=$("input#input7").val();
  $(".bl1").text(inp1);
  $(".bl2").text(inp2);
  $(".bl3").text(inp3);
  $(".bl4").text(inp4);
  $(".bl5").text(inp5);
  $(".bl6").text(inp6);
  $(".bl7").text(inp7);*/
  $("button#story").click(function(){
    let inp1=$("input#input1").val();
    $(".bl1").html(inp1);
    let inp2=$("input#input2").val();
    $(".bl2").html(inp2);
    let inp3=$("input#input3").val();
    $(".bl3").html(inp3);
    let inp4=$("input#input4").val();
    $(".bl4").html(inp4);
    let inp5=$("input#input5").val();
    $(".bl5").html(inp5);
    let inp6=$("input#input6").val();
    $(".bl6").html(inp6);
    let inp7=$("input#input7").val();
    $(".bl7").html(inp7);
  $("#hide").show("slow",function(){
    $("#quiz").hide();
  });
  
  })
})