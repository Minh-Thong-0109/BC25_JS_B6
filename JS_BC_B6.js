// Bài tập 1
document.getElementById("tim__so").onclick = function () {
  gioiHan = document.getElementById("gioi__han").value;
  if (gioiHan <= 0) {
    document.getElementById("xuat__kq").innerHTML =
      "<div class='alert alert-danger'>Giới hạn phải là 1 số dương theo giả định</div>";
  } else {
    var tong = 0;
    var thung = [];
    var i = 0;
    while (tong <= gioiHan) {
      i++;
      tong = tong + i;
      thung.push(i);
    }
    var len = thung.length;
    document.getElementById("xuat__kq").innerHTML =
      "<div class='alert alert-success'>Số nhỏ nhất có tổng từ 1 đến số đó và lớn hơn " +
      gioiHan +
      " là số <span class='kq'>" +
      len +
      "</span></div>";
  }
};
// Bài tập 2
document.getElementById("tinh__tong").onclick = function () {
  soLt = document.getElementById("so__canlt").value * 1;
  Lt = document.getElementById("gioi__han__lt").value * 1;
  if (Lt <= 0 || Lt - Math.floor(Lt) > 0) {
    document.getElementById("xuat__tong").innerHTML =
      "<div class='alert alert-danger'>Giới hạn lũy thừa phải là 1 số nguyên dương theo giả định</div>";
  } else {
    var tong = 0;
    var Sn = [];
    for (var i = 1; i < Math.abs(Lt) + 1; i++) {
      tong = tong + Math.pow(soLt, i);
      Sn.push(soLt + "<sup>" + i + "</sup>");
    }
    document.getElementById("xuat__tong").innerHTML =
      "<div class='alert alert-success'>" +
      Sn.join(" + ") +
      " = " +
      "<span class='kq'>" +
      tong +
      "</span></div>";
  }
};
// Bài tập 3
document.getElementById("tinh__giaithua").onclick = function () {
  soGt = document.getElementById("so__gt").value * 1;
  if (soGt - Math.floor(soGt) > 0 || soGt <= 0) {
    document.getElementById("xuat__giaithua").innerHTML =
      "<div class='alert alert-danger'>Số cần giai thừa phải là 1 số nguyên dương theo giả định</div>";
  } else {
    var tich = 1;
    for (var i = 1; i < Math.abs(soGt) + 1; i++) {
      tich = tich * i;
    }
    document.getElementById("xuat__giaithua").innerHTML =
      "<div class='alert alert-success'>" +
      soGt +
      "! = <span class='kq'>" +
      tich +
      "</span></div>";
  }
};
// Bài tập 4
document.getElementById("xuat__the").onclick = function () {
  soThe = document.getElementById("so__the").value * 1;
  if (soThe - Math.floor(soThe) > 0 || soThe <= 0) {
    document.getElementById("xuat__the_ra").innerHTML =
      "<div class='alert alert-danger'>Số thẻ phải luôn là 1 số nguyên dương</div>";
  } else {
    chuoiCanghep = [];
    for (var i = 1; i < soThe + 1; i++) {
      i % 2 == 0
        ? chuoiCanghep.push(
            "<div class='alert alert-danger'>Chuỗi thứ " + i + "</div>"
          )
        : chuoiCanghep.push(
            "<div class='alert alert-info'>Chuỗi thứ " + i + "</div>"
          );
    }
    document.getElementById("xuat__the_ra").innerHTML = chuoiCanghep.toString();
  }
};
// Bài tập 5
document.getElementById("xuat__chuoi__so").onclick = function () {
  soGH = document.getElementById("so__gh").value * 1;
  if (soGH <= 0) {
    document.getElementById("xuat__chuoi__ra").innerHTML =
      "<div class='alert alert-danger'>Giới hạn luôn là 1 số dương theo giả định</div>";
  } else {
  chuoiSo = [];
  for (var i = 1; i < soGH + 1; i++) {
    var n = 0;
    for (var j = 1; j < i; j++) {
      if (n > 1) {
        break;
      } else {
        i % j == 0 ? (n = n + 1) : (n = n);
      }
    }
    n < 2 ? chuoiSo.push(i) : "";
  }
  document.getElementById("xuat__chuoi__ra").innerHTML ="<div class='alert alert-success'>Các số nguyên tố trong giới hạn "+soGH+" là <span class='kq'>"+chuoiSo+"</span></div>";
}
};
