	var x,y;
	var i=0;
	var c = document.getElementById("primer1");
	var ctx=c.getContext("2d");	
	var prvic=0;
	var arrayX=[];
	var arrayY=[];
	var arrayXId=[];
	var arrayYId=[];
	var st=0;
		function graf()
		{
		
		
	ctx.canvas.width=ctx.canvas.width;
	ctx.moveTo(250,0);
	ctx.lineTo(250,500);
	ctx.moveTo(0,250);
	ctx.lineTo(495,250);
	ctx.lineWidth=2;
	ctx.stroke();
	ctx.lineWidth=1;
	st=0;
	for(x=230;x>0;x-=20)
	{
	ctx.moveTo(x,240);
	ctx.lineTo(x,260);
	ctx.stroke();
	if(prvic==0)
	{
		arrayX.push(x-5);
		st--;
		arrayXId.push(st);
		
	
	}
	}
	st=1;
	for(x=270;x<470;x+=20)
	{
		ctx.moveTo(x,240);
		ctx.lineTo(x,260);
		ctx.stroke();
		if(prvic==0)
	{
		arrayX.push(x-5);
		arrayXId.push(st);
		st++;
	}
	}
	st=1;
	for(y=230;y>30;y-=20)
	{
		ctx.moveTo(240,y);
		ctx.lineTo(260,y);
		ctx.stroke();
		if(prvic==0)
	{
		arrayY.push(y-5);
		arrayYId.push(st);
		st++;
	}
	
	}
	st=-1;
	for(y=270;y<500;y+=20)
	{
		ctx.moveTo(240,y);
		ctx.lineTo(260,y);
		ctx.stroke();
		if(prvic==0)
	{
		arrayY.push(y-5);
		arrayYId.push(st);
		st--;
	}
	 
	 
	}
	
	
	
	
	ctx.moveTo(250,0);
	ctx.lineTo(240,20);
	ctx.moveTo(250,0);
	ctx.lineTo(260,20); 
	ctx.moveTo(495,250);
	ctx.lineTo(480,240);
	ctx.moveTo(495,250);
	ctx.lineTo(480,260)
	ctx.stroke();
	var tmpX=Math.floor(Math.random()*arrayXId.length);
	var tmpY=Math.floor(Math.random()*arrayYId.length);
	var randX=arrayX[tmpX];
	var randY=arrayY[tmpY];
	var idX=arrayXId[tmpX];
	var idY=arrayYId[tmpY];
	ctx.fillRect(randX,randY,10,10);
	var number1=document.getElementById("x_os_vrednost");
	var number2=document.getElementById("y_os_vrednost");
		prvic++;
		number1.value=idX;
		number2.value=idY;
	var clearX=document.getElementById("x");
	var clearY=document.getElementById("y");
	clearX.value='';
	clearY.value='';
		
		
}
	graf();
		function handleClick(radio)
		{	
		var x1,y1;
		 
			if(radio.value=="x")
			{
				
				graf();
				
			}
			else if(radio.value=="y")
			{
					graf();
					
	
			}
			else if(radio.value=="xy")
			{
			graf();
			
			}
		}
		
		
		function preveri()
		{
			var odgovor=document.getElementById("odgovor");
			var x=document.getElementById("x");
			var y=document.getElementById("y");
			var testX=document.getElementById("x_os_vrednost");
			var testY=document.getElementById("y_os_vrednost");
			var radio1=document.getElementById("x_os");
			var radio2=document.getElementById("y_os");
			var radio3=document.getElementById("xy_os");
			var val;
			if(radio1.checked)
			{
				if(y.value==-testY.value && x.value==testX.value)
						{
							odgovor.value='Odgovor je pravilen';
						}
						else
						{
							odgovor.value='Napačen odgovor. Namig: Premisli skozi katero os zrcališ.';
						}
			}
			else if(radio2.checked)
			{
				if(x.value==-testX.value && y.value==testY.value)
						{
							odgovor.value='Odgovor je pravilen';
						}
						else
						{
							odgovor.value='Napačen odgovor. Namig: Premisli skozi katero os zrcališ.';
						}
			}
			else if(radio3.checked)
			{
				if(x.value==-testX.value && y.value==-testY.value)
						{
							odgovor.value='Odgovor je pravilen';
						
						}
						else
						{
							odgovor.value='Napačen odgovor. Namig: Zrcališ skozi koordinatno izhodišče.';
						}
			}
					}
					
				
	
			
		