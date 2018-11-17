$(document).ready(function() {
	var tabel_pesan_masuk = $("#tabel_pesan_masuk");
	var sub_content = $("#sub_content");
	var content = $("#content");
	var checkbox = $('.checkbox');
	var jpb = $('.jpb').html();
	var jumlah_pesan_baru = $("#jumlah_pesan_baru");
	var paperclip = $('.paperclip').popup();
	var textLoading = $('.textLoading');

	tabel_pesan_masuk.delegate("tbody tr", "click", function() {
		textLoading.show();

		$.post("buka_pesan.php", { id_pesan_masuk: $(this).attr('id') }, function(data) {
			textLoading.hide();
			sub_content.html(data);
		});

		sub_content.show();
		content.hide();
		if ($(this).attr('class') == 'active') {
			$(this).removeClass('active');
			var sub = --jpb;
			jumlah_pesan_baru.html(sub);

			if (sub == 0) {
				jumlah_pesan_baru.removeClass('ui pink label').empty();
			}
		}
	});

	checkbox.click(function(e) {
		e.stopPropagation();
	});
});