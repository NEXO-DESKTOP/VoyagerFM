document.getElementById('fileWindow').addEventListener('load', function() {
    let pDrop = document.getElementById("fileWindow");
    let doc = pDrop.contentDocument;
    doc.body.innerHTML = doc.body.innerHTML + '<style>#notification{display: none;}</style>';
 });