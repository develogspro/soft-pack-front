window.download=n=>{const d=document.createElement("a");d.href="",d.download=n.substring(n.lastIndexOf("/")+1),document.body.appendChild(d),d.click(),document.body.removeChild(d)};
