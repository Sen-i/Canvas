/**
 * Uses html2canvas library to convert html to pdf 
 */
function createPDFfromHTML() {
    var HTML_Width = $(".canvas").width();
    var HTML_Height = $(".canvas").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    html2canvas($(".canvas")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/png");
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        pdf.save("Question.pdf");
    });
}

/**
 * Encodes image data to base64 URL.
 * Sends base64 URL to debug function.
 */
function openNewTab() {
    html2canvas($(".canvas")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/png");
        debugBase64(imgData);
    });
}

/**
 * Display a base64 URL inside an iframe in another window.
 */
function debugBase64(base64URL) {
    var win = window.open();
    win.document.write('<iframe src="' + base64URL +
        '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;"></iframe>');
}
