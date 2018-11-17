$(document).ready(function() {
	var pesanMasuk = $("#pesanMasuk");
	var pesanTerkirim = $("#pesanTerkirim");
	var content = $("#content");
	var sub_content = $("#sub_content");
	var profil = $('.profil');
	var penerima_kirim_pesan = $('.penerima_kirim_pesan');
	var textLoading = $('.textLoading');

	profil.dropdown();
	penerima_kirim_pesan.dropdown({
		maxSelections: 1
	});

	pesanMasuk.click(function() {
		pesanMasuk.addClass("active");
		pesanTerkirim.removeClass("active");

		$.ajax({
			url: "../dashB/pesan.php",
			success: function(result) {
				content.html(result);
				content.show();
			}
		});

		sub_content.empty().css( "display", "none" );
	});

	pesanTerkirim.click(function() {
		pesanMasuk.removeClass("active");
		pesanTerkirim.addClass("active");

		$.ajax({
			url: "../dashB/pesan_terkirim.php",
			success: function(result) {
				content.html(result);
				content.show();
			}
		});
		
		sub_content.empty().css( "display", "none" );
	});

	pesanMasuk.click();
});