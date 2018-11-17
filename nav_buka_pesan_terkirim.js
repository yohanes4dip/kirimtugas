$(document).ready(function() {
	var kembali = $('#kembali');
	var hapus = $('.hapus');
	var sub_content = $("#sub_content");
	var content = $("#content");

	kembali.popup();
	hapus.popup();
	
	$('#sub_content #kembali').on('click', function() {
		sub_content.empty().css( "display", "none" );
		content.show();
	});
});