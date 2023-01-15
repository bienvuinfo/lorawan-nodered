function hex2dec(hexstream, bytes = 1) {
  out = [];
  hexstream = hexstream.split("");
  c = "0123456789ABCDEF";
  bytes = bytes < 1 ? 1 : bytes;
  while (hexstream.length) {
    bytes = bytes > hexstream.length ? hexstream.length : bytes;
    chunk = hexstream.splice(0, bytes);
    t = 0;
    for (var i = 0; i < chunk.length; i++) {
      t = t * 16;
      x = c.indexOf(chunk[i].toUpperCase());
      t += x > 0 ? x : 0;
    }
    out.push(t);
  }
  return out;
}

function dec2hex(d, p = 1) {
  p = p < 1 ? 1 : p;
  console.log(d);
  out = "";
  c = "0123456789ABCDEF".split("");
  do {
    x = d % 16;
    out = c[x] + out;
    d = parseInt(d / 16);
  } while (d > 0);
  return out.padStart(p, "0");
}
