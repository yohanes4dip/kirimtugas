$(document).ready(function(e) {
	var kembali = $("#kembali");
	var hapus = $('.hapus');
	var sub_content = $("#sub_content");
	var content = $("#content");
	var form_balas_pesan = $("#form_balas_pesan");
	var balas = $('.balas');

	kembali.popup();
	hapus.popup();

	$('#sub_content #kembali').on('click', function() {
		sub_content.empty().css( "display", "none" );
		content.show();
	});

	form_balas_pesan.form({
		on: 'blur',
		fields: {
			isi_balas_pesan : {
				identifier: 'isi_balas_pesan',
				rules : [
					{
						type: 'empty'
					}
				]
			}
		},
		onSuccess: function (event) {
			balas.addClass('loading');
			event.preventDefault();
				$.ajax({
				type: "POST",
				url: "proses_balas_pesan.php",
				data: new FormData(this),
				contentType: false,
				cache: false,
				processData: false,
				success: function() {
					balas.removeClass('loading');
					form_balas_pesan[0].reset();
					sub_content.empty().css( "display", "none" );
					content.show();
					content.load("../dashB/pesan.php");
					alert("Pesan Berhasil Dikirim!");
				},
				error: function(data) {
					alert(data);
				}
			});
			return false;
		}
	});
});