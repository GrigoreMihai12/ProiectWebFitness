jQuery(document).ready(function ($) {
	var timp = Number($('#selct').val()) * 1000;
    var id = setInterval(function () {
        moveRight();
    }, timp);
	

	var slideCount = $('#slider ul li').length;
	var slideWidth = Number($('#selc').val()) * $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');
	
	$('#selct').change(function(){
		//console.log('Sunt aici.')
		clearInterval(id);
		//console.log(Number($(this).val()))
		timp = Number($('#selct').val()) * 1000;
		id = setInterval(function () {
			moveRight();
		}, timp);
	});
	
	$('#selc').change(function(){
		//console.log('Sunt aici.')
		clearInterval(id);
		slideWidth = Number($(this).val()) * $('#slider ul li').width();
		//console.log(Number($(this).val()))
		id = setInterval(function () {
			moveRight();
		}, timp);
		$('#slider').css({ width: slideWidth, height: slideHeight });
		$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
		$('#slider ul li:last-child').prependTo('#slider ul');
	});
	
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
			
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
