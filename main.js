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