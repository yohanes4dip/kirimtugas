$(document).ready(function(){

	$('#select_all').on('click', function(){
		if (this.checked) {
			$('.checkbox').each(function(){
				this.checked = true;
			});
		} else {
			$('.checkbox').each(function(){
				this.checked = false;
			});
		}
	});

	$("#hapus_pesanMasuk").click(function() {
		var inboxArr = new Array();
		if ($('input:checkbox:checked').length > 0) {
			$('input:checkbox:checked').each(function() {
				inboxArr.push($(this).attr('id'));
				$(this).closest('tr').remove();
			});
			hapusPesanMasuk(inboxArr);
			$("#select_all").prop( "checked", false );
		} else {
			alert("Tidak ada data yang dipilih!");
		}
	});

	$("#hapus_pesanTerkirim").click(function() {
		var sentArr = new Array();
		if ($('input:checkbox:checked').length > 0) {
			$('input:checkbox:checked').each(function() {
				sentArr.push($(this).attr('id'));
				$(this).closest('tr').remove();
			});
			hapusPesanTerkirim(sentArr);
			$("#select_all").prop( "checked", false );
		} else {
			alert("Tidak ada data yang dipilih!");
		}
	});

	$("#periksa_dokumen").click(function() {
		var docArr = new Array();
		if ($('input:checkbox:checked').length > 2) {
			alert("Hanya bisa memindai 2 dokumen!");
			$("#select_all").prop( "checked", false );
			$(".checkbox").prop( "checked", false );
		} else {
			if ($('input:checkbox:checked').length === 2) {
				$('input:checkbox:checked').each(function() {
					docArr.push($(this).attr('id'));
				});
				checkDocument(docArr);
				$(".checkbox").prop( "checked", false );
			} else {
				alert("Tidak ada data yang dipilih!");
				$(".checkbox").prop( "checked", false );
			}
		}

	});

	function checkDocument(docArr) {
		$.ajax({
			type: 'POST',
			url: 'similar.php',
			data: { 'data' : docArr},
			success: function(response) {
				$('.ui.result').modal('show');
				$('.result').find('p').html(response);
				// alert(response);
			},
			error: function(errResponse) {
				alert(errResponse);
			}
		});
	}

	function hapusPesanMasuk(inboxArr) {
		$.ajax({
			type: 'POST',
			url: 'delete_pesan_masuk.php',
			data: { 'data' : inboxArr},
			success: function(response) {
				$("#content").load("../dashB/pesan.php");
				alert(response);
			},
			error: function(errResponse) {
				alert(errResponse);
			}
		});
	}

	function hapusPesanTerkirim(sentArr) {
		$.ajax({
			type: 'POST',
			url: 'delete_pesan_terkirim.php',
			data: { 'data' : sentArr},
			success: function(response) {
				$("#content").load("../dashB/pesan_terkirim.php");
				alert(response);
			},
			error: function(errResponse) {
				alert(errResponse);
			}
		});
	}

});