function formatFileSize(bytes,decimalPoint) {
	if(bytes == 0) return '0 Bytes';
	var k = 1000,
	dm = decimalPoint || 2,
	sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
	i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

$("#files").on("change", function() {
	var fp = $("#files");
	var lg = fp[0].files.length;
	var items = fp[0].files;
	var fragment = "";

	if (lg > 4) {
		alert('Upload maksimal 4 file!');
		return false;
	} else {
		$("#list_file").show();
		for (var i = 0; i < lg; i++) {
			var fileName = items[i].name;
			var fileSize = items[i].size;

			fragment +=  '<div class="item">' + '<a class="ui label">' + "(" + formatFileSize(fileSize) + ") " + fileName + "</a>" + "</div>";
		}

		$("#list_file").append(fragment);
	}
});

$(".reset").on("click", function() {
	$("#list_file").empty();
});