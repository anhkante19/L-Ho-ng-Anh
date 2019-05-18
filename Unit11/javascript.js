$('#submit').on('click',function(){
	var input=$('input').val()
	$('#content').append(`<div id="' +i+ '">` + input + `<button class="del" data-id="` +i+ `">Xóa</button></div>`);
	$('input').val('');
	i++;


})

$('body').on("click", ".del", function(){
	var id= $(this).attributes('xoa')
	$('#' + id).remove()

})