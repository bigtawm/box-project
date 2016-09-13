$(document).ready(function(){
	generateTable(16,16);
	changeColor();
	newTable();
})

function generateTable(height,width){
	for(var i =0 ; i<height;i++){
		$('table').append('<tr class = "squareRow"></tr>')
	}
	for(var j=0 ; j < width; j++){
		$('tr').append('<td class="square"></td>')
	}

}
function changeColor(){
	$('td').on('mouseenter', function(){
		$(this).addClass('blackBox');
	});
}

function newTable(){
	$('button').on('click',function(){
	$('td').removeClass('blackBox');

	var boxesWide = prompt('How many boxes wide do you want?');
	while (boxesWide > 64 || boxesWide < 0){
		boxesWide = prompt('Please enter a width between 0-64');
	}
	var boxesHigh = prompt('How many boxes high do you want?');
	while (boxesHigh > 64 || boxesHigh < 0){
		boxesHigh = prompt('Please enter a height between 0-64');
	}
	

	$('.square').remove('td');
	generateTable(boxesHigh,boxesWide);
	changeColor();

});
}