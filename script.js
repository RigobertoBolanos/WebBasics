correct = 0;
correctColor = "white";
squares = document.querySelectorAll(".square");
level = squares.length;
buttons = document.querySelectorAll(".mode");

function randomColor(X)
{
    return Math.floor((Math.random() * X));
}

function rgbText()
{
	var x = randomColor(255);
    var y = randomColor(255);
    var z = randomColor(255);
	return "rgb("+x+", "+y+", "+z+")";
}

function paint()
{
	correctColor = rgbText();
	correct = randomColor(level);
    squares[correct].style.backgroundColor = correctColor;
	document.getElementById("rgb").innerHTML  = correctColor;

	for (var i = 0; i < level; i++) {
        if(i!==correct)
        {
            squares[i].style.backgroundColor = rgbText();
        }
    }
}

function addListener()
{
	for (var i = 0; i < level; i++) {
        
            
        squares[i].addEventListener("click",function()
        {
            if(this.style.backgroundColor!==correctColor)
            {

                this.style.backgroundColor = "#232323";
                document.getElementById("message").innerHTML="intente de nuevo";
                

            }else{
                document.getElementById("title").style.background = correctColor;
                winnerPaint();
                document.getElementById("message").innerHTML="Gano !!!!";
            }
        });
    }
}

function winnerPaint()
{
    for (let index = 0; index < squares.length; index++) {

        if(squares[index].style.backgroundColor !== "rgb(35, 35, 35)")
        {
            squares[index].style.backgroundColor = correctColor;
        }
        
    }
}

function selectLevel(count)
{
    level = count;
    for (var i = level; i < 9; i++) 
    {
        squares[i].style.background = "#232323";
    }
    deSelectButtons();
    switch (level) {
        case 3:
            var button = document.getElementById("beginner");
            button.style.backgroundColor = "steelblue";
            button.style.color = "whitesmoke";
            break;
        case 6:
            var button = document.getElementById("normal");
            button.style.backgroundColor = "steelblue";
            button.style.color = "whitesmoke";
            break;
        case 9:
            var button = document.getElementById("advanced");
            button.style.backgroundColor = "steelblue";
            button.style.color = "whitesmoke";
            break;
    
        default:
            break;
    }

    initialize();
}

function initialize()
{
	paint();
    addListener();
    document.getElementById("message").innerHTML="";
    document.getElementById("title").style.background = "steelblue";
}

function deSelectButtons() 
{
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.backgroundColor = "whitesmoke";
        buttons[index].style.color = "steelblue";
    }
}