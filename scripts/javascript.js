var userDimension = 16;
var userSize = 800;
$(document).ready(function() {
    createDivs(userDimension, userSize);
    clearCanvas();
    checkCanvas();
    changeColor();
    changeGridSize();
    changeCanvasSize();
});
// creates the 16 divs to use as squares
function createDivs(gridDimension, canvasSize) {
    $(".container").children().remove();
    $(".container").append("<table>");
    for(i=0; i< gridDimension; i++) {
        $(".container").append("<tr>");
        for(j=0; j < gridDimension; j++) {
            $(".container").append("<td></td>")
            $("td").css("height", canvasSize/gridDimension);
            $("td").css("width", canvasSize/gridDimension);
        }
        $(".container").append("</tr>");
    }
    $(".container").append("</table>");
    drawOnCanvas(getColor());
};

// allows user to draw on canvas
function drawOnCanvas(color) {
    $("td").mouseenter(function() {
        $(this).css("background-color", color);
    });
};

// clears canvas when "Clear" button is clicked
function clearCanvas() {
    $("#clear").click(function() {
        $("td").css("background-color", "white");
    });
};

// checks canvas when "Check" button is clicked
function checkCanvas(){
    $("#check").click(function(){
        $("td").css("background-color", getColor())
    });

};


// changes the dimensions of grid by asking user for new size, only allows numbers
function changeGridSize() {
    $("#gridSize").click(function() {
        userDimension = prompt("Enter the grid size (i.e. enter 10 for a 10x10 grid)")
        while (isNaN(userDimension) === true) {
            userDimension = prompt("Please enter a number for the grid size.");
        }
        createDivs(userDimension, userSize);
    });
};

function changeCanvasSize(){
    $("#canvasSize").click(function(){
        userSize = prompt("Enter the canvas size in pixels ")
        while (isNaN(userSize) == true){
            userSize = prompt("Please enter a number for the canvas size in pixels")
        }
        createDivs(userDimension, userSize);
    });
};

function getColor() {
    return $('#chooseColor').val();
};

// allows user to select color to draw with
function changeColor() {
    $('select').on('change', function() {
        var color = this.value;
        drawOnCanvas(color);
    });
};