var def = 1867;
var yeon = new Array("明治","大正","昭和","平成","令和");

function meigicheck(){
  var inputstr = document.getElementById("meigivalue");
  var yearname = inputstr.options[inputstr.selectedIndex].text;
  var inputnum = document.getElementById("meigi").value *1;

  if(yearname == yeon[0]&&inputnum <=44){
    document.getElementById("meigiresult").innerText = (def + inputnum)+"년";
  }
  else if(yearname == yeon[1]&&inputnum <=14){
    document.getElementById("meigiresult").innerText = (def + inputnum + 44 )+"년";
  }
  else if(yearname == yeon[2]&&inputnum <=63){
    document.getElementById("meigiresult").innerText = (def + inputnum + 58)+"년";
  }
  else if(yearname == yeon[3]&&inputnum <=30){
    document.getElementById("meigiresult").innerText = (def + inputnum + 121)+"년";
  }
  else if(yearname == yeon[4]){
    document.getElementById("meigiresult").innerText = (def + inputnum + 151)+"년";
  }
  else{
    alert('숫자가 잘못되었거나, 연호를 선택하지 않으셨습니다.');
  }
}

function yearcheck(){
  var input = document.getElementById("year").value *1 - def;
  if(input<=44){
    document.getElementById("yearresult").innerText = yeon[0] + " " + input+"년";
  }
  else if(input<=58){
    document.getElementById("yearresult").innerText = yeon[1] + " " + (input-44)+"년";
  }
  else if(input<=121){
    document.getElementById("yearresult").innerText = yeon[2] + " " + (input-58)+"년";
  }
  else if(input<=151){
    document.getElementById("yearresult").innerText = yeon[3] + " " + (input-121)+"년";
  }
  else if(input>=152){
    document.getElementById("yearresult").innerText = yeon[4] + " " + (input-151)+"년";
  }
  else{
    alert('잘못된 입력입니다. 다시 입력해주세요');
  }
}
