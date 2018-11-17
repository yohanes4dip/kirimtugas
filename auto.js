/**
 * Site : http:www.smarttutorials.net
 * @author muni
*/

// $('#nama_member').autocomplete({
// 	source: function( request, response ) {
// 		$.ajax({
// 			url : 'ajax.php',
// 			dataType: "json",
// 			data: {
// 				name_startsWith: request.term,
// 				type: 'nama_member'
// 			},
// 			success: function( data ) {
// 				response( $.map( data, function( item ) {
// 					return {
// 						label: item,
// 						value: item
// 					}
// 				}));
// 			}
// 		});
// 	},
// 	autoFocus: true,
// 	minLength: 0      	
// });

$(document).ready(function() {
	$('#penerima_kirim_pesan_1').autocomplete({
		source: function( request, response ) {
			$.ajax({
				url : 'autocomplete.php',
				dataType: "json",
				data: {
					name_startsWith: request.term,
					type: 'penerima_kirim_pesan',
					row_num : 1
				},
				success: function( data ) {
					response( $.map( data, function( item ) {
						var code = item.split("|");
						return {
							label: code[0],
							value: code[0],
							data : item
						}
					}));
				}
			});
		},
		autoFocus: true,
		minLength: 0,
		select: function( event, ui ) {
			var names = ui.item.data.split("|");
			$('#id_member_1').val(names[1]);
		}
	});
});


// $('#id_member_1').autocomplete({
// 	source: function( request, response ) {
// 		$.ajax({
// 			url : 'ajax.php',
// 			dataType: "json",
// 			data: {
// 				name_startsWith: request.term,
// 				type: 'id_member',
// 				row_num : 1
// 			},
// 			success: function( data ) {
// 				response( $.map( data, function( item ) {
// 					var code = item.split("|");
// 					return {
// 						label: code[3],
// 						value: code[3],
// 						data : item
// 					}
// 				}));
// 			}
// 		});
// 	},
// 	autoFocus: true,	      	
// 	minLength: 0,
// 	select: function( event, ui ) {
// 		var names = ui.item.data.split("|");					
// 		$('#nama_member_1').val(names[1]);
// 		$('#alamat_member_1').val(names[2]);
// 		$('#telepon_member_1').val(names[3]);
// 	},
// 	open: function() {
// 		$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
// 	},
// 	close: function() {
// 		$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
// 	}
// });

// $('#alamat_member_1').autocomplete({
// 	source: function( request, response ) {
// 		$.ajax({
// 			url : 'ajax.php',
// 			dataType: "json",
// 			data: {
// 				name_startsWith: request.term,
// 				type: 'alamat_member',
// 				row_num : 1
// 			},
// 			success: function( data ) {
// 				response( $.map( data, function( item ) {
// 					var code = item.split("|");
// 					return {
// 						label: code[1],
// 						value: code[1],
// 						data : item
// 					}
// 				}));
// 			}
// 		});
// 	},
// 	autoFocus: true,	      	
// 	minLength: 0,
// 	select: function( event, ui ) {
// 		var names = ui.item.data.split("|");					
// 		$('#id_member_1').val(names[1]);
// 		$('#nama_member_1').val(names[2]);
// 		$('#telepon_member_1').val(names[3]);
// 	},
// 	open: function() {
// 		$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
// 	},
// 	close: function() {
// 		$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
// 	}		      	
// });

// $('#telepon_member_1').autocomplete({
// 	source: function( request, response ) {
// 		$.ajax({
// 			url : 'ajax.php',
// 			dataType: "json",
// 			data: {
// 				name_startsWith: request.term,
// 				type: 'telepon_member',
// 				row_num : 1
// 			},
// 			success: function( data ) {
// 				response( $.map( data, function( item ) {
// 					var code = item.split("|");
// 					return {
// 						label: code[2],
// 						value: code[2],
// 						data : item
// 					}
// 				}));
// 			}
// 		});
// 	},
// 	autoFocus: true,	      	
// 	minLength: 0,
// 	select: function( event, ui ) {
// 		var names = ui.item.data.split("|");					
// 		$('#id_member_1').val(names[1]);
// 		$('#alamat_member_1').val(names[2]);
// 		$('#nama_member_1').val(names[3]);
// 	},
// 	open: function() {
// 		$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
// 	},
// 	close: function() {
// 		$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
// 	}		      	
// });