function reply_click(a) {
  document.getElementById("p1").innerHTML = a;
  var p = parseInt(document.getElementById("val1").value);
  var q = parseInt(document.getElementById("val2").value);
  var d = a;
  var x = afk(d, p, q);
}

function afk(q, v1, v2) {
  var j = q;
  var l = v1;
  var g = v2;

  switch (j) {
    case "add":
      var z = l + g;
      document.getElementById("demo1").innerHTML = z;
      break;

    case "sub":
      var z = l - g;
      document.getElementById("demo1").innerHTML = z;
      break;
    case "mult":
      var z = l * g;
      document.getElementById("demo1").innerHTML = z;
      break;
    case "divi":
      var z = l / g;
      document.getElementById("demo1").innerHTML = z;
      break;
    default:
      document.write("pls enter again.");
      break;
  }
}

