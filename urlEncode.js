//Nicholas Huaman 2018
function checkurl(params,whattodo,iferror){
  try{
      var variable=window.location.toString();
      variable=variable.split('?');
      variable.shift();
      try{
          variable=variable[0].split('&').join(',');
      }catch(err){
          //
      }
      variable=variable.split('=').join(',');
      variable=variable.split(',');
      for(l=0;l<params.length;l++){
        if(variable.includes(params[l])==true){
          eval(whattodo[l]);
        }
      }
  }catch(err){
    //Execute as normal
    eval(iferror)
  }
}
