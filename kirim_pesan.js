$(document).ready(function() {
	var sent_form = $("#sent_form");
	var form_kirim_pesan = $("#form_kirim_pesan");
	var form_alert = $("#form_alert");
	var list_file = $("#list_file");
	var uploadBtn = $("#uploadBtn");
	var tulis_pesan = $("#tulis_pesan");

	tulis_pesan.on("click", function(event) {
		sent_form.show();
	});

	$('#sent_form .close').on('click', function() {
		$(this).closest(sent_form).css( "display", "none" );
		form_kirim_pesan[0].reset();
		form_kirim_pesan.form('clear');
		form_alert.text('');
		list_file.empty();
		list_file.hide();
		uploadBtn.removeClass('loading');
	});

	uploadBtn.on("click", function() {
		list_file.empty();
	});

	form_kirim_pesan.form({
		on: 'blur',
		fields: {
			penerima_kirim_pesan: {
				identifier: 'penerima_kirim_pesan',
				rules: [
					{
						type   : 'empty',
						prompt : 'Pilih penerima pesan!'
					}
				]
			},
			subyek_kirim_pesan: {
				identifier: 'subyek_kirim_pesan',
				rules: [
					{
						type   : 'empty',
						prompt : 'Tulis isi subyek pesan!'
					}
				]
			},
			isi_kirim_pesan: {
				identifier: 'isi_kirim_pesan',
				rules: [
					{
						type   : 'empty',
						prompt : 'Tulis isi pesan!'
					}
				]
			}
		},
		onSuccess: function (event) {
			uploadBtn.addClass('loading');
			event.preventDefault();
			$.ajax({
					type: "POST",
					url: "proses_kirim_pesan.php",
					data: new FormData(this),
					contentType: false,
					cache: false,
					processData: false,
					success: function() {
						uploadBtn.removeClass('loading');
						form_alert.text('');
						list_file.empty();
						form_kirim_pesan[0].reset();
						sent_form.css("display", "none");
						$('.ui.result').modal('show');
						$('.result').find('p').html("Pesan berhasil terkirim.");
					},
					error:function(data) {
						uploadBtn.removeClass('loading');
						$('.ui.result').modal('show');
						$('.result').find('p').html(data);
					}
				});
			return false;
		}
	});
});