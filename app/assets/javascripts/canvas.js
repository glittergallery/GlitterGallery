// calculates the total number of files in repo by
// reading the data attr of li span.file_num
function totalFiles(){
  total = 0;
  $(".file_num").each(function(){ total+=$(this).data("num"); });
  return total;
}

function drawCircle(ctx, start_x, start_y){
  ctx.moveTo(start_x, start_y);
  ctx.arc(start_x, start_y, 2.5, 0, 2*Math.PI);
}

// reads file type from data attr of li span.file_type
// and appends number of that file type
function drawText(ctx, n, start_x, num){
  type = $($("#file_data").find(".file_type")[n]).data("type");
  ctx.font = "bold 0.9em sans-serif";
  ctx.fillText(''+type+' '+num+'', start_x, 17);
}

// Draws on the canvas used to show the file info.
// uses gray scale for all file types.
function draw() {
  var center_width = $(".project").width()
  var c = document.getElementById("file_info");
  // set width ( = parent - approx h2 width) and height of canvas
  c.width = center_width - ($('.project header h2').width() + 15);
  c.height = 32;
  var ctx = c.getContext("2d");
  ctx.lineWidth = 4;
  total = totalFiles();
  line_pos = 0;
  // loop to draw circle, text and lines at bottom
  for (i = 15, j = 1; i < c.width; i+= c.width/4, j++){
    cur_num = $($("#file_data").find(".file_num")[j-1]).data("num");
    ctx.beginPath();
    drawCircle(ctx, i, 12);
    drawText(ctx, j-1, i+10, cur_num);
    ctx.moveTo(line_pos,27);
    // find line's width percentage of each file type 
    line_pos = line_pos+(c.width*(cur_num/total));
    ctx.lineTo(line_pos, 27);
    ctx.fillStyle = ctx.strokeStyle = 'rgb(' + 56*j + ',' + 56*j + ','+ 56*j +')';
    ctx.stroke();
    ctx.fill();
  }
}

$("document").ready(draw);

