const content = document.getElementById("content");

async function loadMessage() {
    const res = await fetch("/api/message");
    const data = await res.json();

    let i = 0;

    function typeLine() {
        if (i >= data.lines.length) return;

        let line = data.lines[i];
        let p = document.createElement("p");
        content.appendChild(p);

        let j = 0;

        function typeChar() {
            if (j < line.length) {
                p.textContent += line[j];
                j++;
                setTimeout(typeChar, 50);
            } else {
                i++;
                setTimeout(typeLine, 500);
            }
        }

        typeChar();
    }

    typeLine();
}

loadMessage();
