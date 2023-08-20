var content =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas pariaturporro, doloremque nesciunt obcaecati dicta ipsam expedita eaque molestiassimilique.";

content = content.replaceAll(" ", "</span> <span>");

content = `<span>${content}</span>`;

console.log(content);
document.write(content);

var index = 0;
setInterval(function () {
  var char = content.charAt(index);
  var charNext = content.charAt(index + 1);

  if (char === ">" && charNext !== " ") {
    var html =
      content.slice(0, index) + ` class="highlight"` + content.slice(index);
    document.body.innerHTML = html;
  }

  index++;

  if (index === content.length) {
    index = 0;
  }
}, 30);

document.write(content);
