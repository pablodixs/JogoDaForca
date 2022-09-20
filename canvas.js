function drawCanvas() {
    tables.lineWidth = 8;
    tables.lineCap = "round";
    tables.lineJoin = "round";
    tables.fillStyle = "#F3F5FC";
    tables.strokeStyle = "#0A3871";
    tables.fillRect(0,0,1200,800);
    tables.beginPath();
    tables.moveTo(650,500);
    tables.lineTo(900,500);
    tables.stroke();
    tables.closePath();
  };

  function drawLines() {
    let width = 600 / palavraSecreta.length;

    tables.lineWidth = 6;
    tables.lineCap = "round";
    tables.lineJoin = "round";
    tables.strokeStyle = "#0A3871";
    tables.beginPath();

    for (let i = 0; i < palavraSecreta.length; i++){
      tables.moveTo(500+(width*i),640);
      tables.lineTo(550+(width*i),640);
    };
    
    tables.stroke();
    tables.closePath();
  };