const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const output = document.getElementById("output").contentWindow.document;
const showResultButton = document.getElementById("show-result");

function updateOutput() {
    output.open();
    output.writeln(
        `<html>
            <head>
                <style>${cssCode.value}</style>
            </head>
            <body>${htmlCode.value}</body>
        </html>`
    );
    output.close();
}

htmlCode.addEventListener("input", updateOutput);
cssCode.addEventListener("input", updateOutput);

showResultButton.addEventListener("click", updateOutput);