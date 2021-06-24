  var canvas = new fabric.Canvas("canvas_for_super");
  player_x=10;
  player_y=10;
  block_width=30;
  block_height=30;
  var player_object="";
  var super_object="";
  function player_update(){
      fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
          player_object = Img;
          player_object.scaleToWidth(150);
          player_object.scaleToHeight(140);
          player_object.set({
            top:player_y,
            left:player_x
          });
          canvas.add(player_object);
      })
  }
  function new_img(get_image){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
        super_object = Img;
        super_object.scaleToWidth(block_width);
        super_object.scaleToHeight(block_height);
        super_object.set({
          top:player_y,
          left:player_x
        });
        canvas.add(super_object);
    })
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
  keypressed=e.keyCode;
  if(e.shiftKey==true && keypressed=="80"){
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("current width").innerHTML=block_width;
    document.getElementById("current height").innerHTML=block_height;
  }
  if(e.shiftKey==true && keypressed=="77"){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current width").innerHTML=block_width;
    document.getElementById("current height").innerHTML=block_height;
  }
  if(keypressed=="70"){
    new_img("https://i.postimg.cc/hGnyTPLB/ironman-face.png");
  }
  if(keypressed=="66"){
    new_img("https://i.postimg.cc/FscwL6M0/spiderman-body.png");
  }
  if(keypressed=="76"){
    new_img("https://drive.google.com/file/d/1PHnkIw5TK441tEvAbSwJ5NlS5ZtDCKSD/view?usp=sharing");
  }
  if(keypressed=="76"){
    new_img("https://drive.google.com/file/d/1PHnkIw5TK441tEvAbSwJ5NlS5ZtDCKSD/view?usp=sharing");
  }
  if(keypressed=="82"){
    new_img("https://drive.google.com/file/d/1drXx-jBFqBCrWyJ7fUTmFtGN8RuqCY-D/view?usp=sharing");
  }
  if(keypressed=="38"){
    up();
  }
  if(keypressed=="40"){
    down();
  }
  if(keypressed=="37"){
    left();
  }
  if(keypressed=="39"){
    right();
  }
}