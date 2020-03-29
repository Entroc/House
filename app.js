function newItem() 
{
  var item = document.getElementById("input").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("- " + item));
  ul.appendChild(li);
  document.getElementById("input").value = "";
  li.onclick = removeItem;
}

document.body.onkeyup = function(e) 
{
  const fs = require('fs')
  let data = "Learning how to write in a file."
  fs.writeFile('list.txt', data, (err) =>
  if (e.keyCode == 13) 
  {
    newItem();
  }
};

function removeItem(e) 
{
  e.target.parentElement.removeChild(e.target);
}
