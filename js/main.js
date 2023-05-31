var danhsachNV = new DanhSachNhanVien();
var validation = new Validation();

document.getElementById("btnThemNV").addEventListener("click", function () {
    var txtTK = document.getElementById("tknv").value;
    var txtTenNV = document.getElementById("name").value;
    var txtEmail = document.getElementById("email").value;
    var txtPassword = document.getElementById("password").value;
    var txtNgayLam = document.getElementById("datepicker").value;
    var txtLuongCB = document.getElementById("luongCB").value;
    var txtChucVu = document.getElementById("chucvu").value;
    var txtGioLam = document.getElementById("gioLam").value;

    var isValid = true;

    // Kiểm tra tài khoản nhân viên
    isValid &= validation.checkEmpty(txtTK, "tbTKNV", "Tài khoản nhân viên không được để trống!") && validation.checkAcc(txtTK, "tbTKNV", "Tài khoản chỉ được bao gồm chữ và số, 4 - 6 ký tự") && validation.checkUnique(txtTK, "tbTKNV", "Tên tài khoản này đã tồn tại!", danhsachNV.mangNV);

    // Kiểm tra họ tên
    isValid &= validation.checkEmpty(txtTenNV, "tbTen", "Họ tên không được để trống!") && validation.checkName(txtTenNV, "tbTen", "Tên không hợp lệ");

    // Kiểm tra email
    isValid &= validation.checkEmpty(txtEmail, "tbEmail", "Email không được để trống!") && validation.checkEmail(txtEmail, "tbEmail", "Email không đúng định dạng!");

    // Kiểm tra mật khẩu
    isValid &= validation.checkEmpty(txtPassword, "tbMatKhau", "Mật khẩu không được để trống!") && validation.checkPassword(txtPassword, "tbMatKhau", "Mật khẩu không hợp lệ!");

    // Kiểm tra ngày làm
    isValid &= validation.checkEmpty(txtNgayLam, "tbNgay", "Ngày làm không được để trống!") && validation.checkDate(txtNgayLam, "tbNgay", "Ngày không hợp lệ!");

    // Kiểm tra lương cơ bản
    isValid &= validation.checkEmpty(txtLuongCB, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkLCB(txtLuongCB, "tbLuongCB", "Mức lương không hợp lệ!");

    // Kiểm tra chức vụ
    isValid &= validation.checkPosition("chucvu", "tbChucVu", "Vui lòng chọn chức vụ!");

    // Kiểm tra giờ làm trong tháng
    isValid &= validation.checkEmpty(txtGioLam, "tbGiolam", "Giờ làm việc không được để trống!") && validation.checkHour(txtGioLam, "tbGiolam", "Giờ làm việc không hợp lệ (80 - 200 giờ)");

    if (isValid) {
        var nv = new NhanVien(txtTK, txtTenNV, txtEmail, txtPassword, txtNgayLam, parseInt(txtLuongCB), txtChucVu, parseInt(txtGioLam));
        nv.tinhLuong();
        nv.xepLoai();

        danhsachNV.themNV(nv);
        hienthiDS(danhsachNV.mangNV);
        // console.table(danhsachNV.mangNV);
        resetForm();
    }
});

function hienthiDS(dsnv) {
    var content = "";
    dsnv.forEach(function (nv) {
        content += `
            <tr>
                <td>${nv.tk}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loai}</td>
                <td>
                    <button class="btn btn-info" onclick="chitietNV('${nv.tk}')" data-toggle="modal" data-target="#myModal">Xem</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.tk}')">Xóa</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(acc) {
    danhsachNV.xoaNV(acc);
    hienthiDS(danhsachNV.mangNV);
}

function chitietNV(acc) {
    var viTri = danhsachNV.timNV(acc);
    if (viTri >= 0) {
        var nv = danhsachNV.mangNV[viTri];

        document.getElementById("tknv").disabled = true;
        document.getElementById("tknv").value = nv.tk;
        document.getElementById("name").value = nv.tenNV;
        document.getElementById("email").value = nv.email;
        document.getElementById("password").value = nv.pass;
        document.getElementById("datepicker").value = nv.ngayLam;
        document.getElementById("luongCB").value = nv.luongCB;
        document.getElementById("chucvu").value = nv.chucVu;
        document.getElementById("gioLam").value = nv.gioLam;
    }
}

function resetForm() {
    document.getElementById("inputForm").reset();
    document.getElementById("tknv").disabled = false;
    const thongbao = ["tbTKNV", "tbTen", "tbEmail", "tbMatKhau", "tbNgay", "tbLuongCB", "tbChucVu", "tbGiolam"];
    thongbao.forEach(function (item) {
        document.getElementById(item).innerHTML = "";
    });
}

document.getElementById("btnCapNhat").addEventListener("click", function () {
    var txtTK = document.getElementById("tknv").value;
    var txtTenNV = document.getElementById("name").value;
    var txtEmail = document.getElementById("email").value;
    var txtPassword = document.getElementById("password").value;
    var txtNgayLam = document.getElementById("datepicker").value;
    var txtLuongCB = document.getElementById("luongCB").value;
    var txtChucVu = document.getElementById("chucvu").value;
    var txtGioLam = document.getElementById("gioLam").value;

    var isValid = true;

    // Kiểm tra họ tên
    isValid &= validation.checkEmpty(txtTenNV, "tbTen", "Họ tên không được để trống!") && validation.checkName(txtTenNV, "tbTen", "Tên không hợp lệ");

    // Kiểm tra email
    isValid &= validation.checkEmpty(txtEmail, "tbEmail", "Email không được để trống!") && validation.checkEmail(txtEmail, "tbEmail", "Email không đúng định dạng!");

    // Kiểm tra mật khẩu
    isValid &= validation.checkEmpty(txtPassword, "tbMatKhau", "Mật khẩu không được để trống!") && validation.checkPassword(txtPassword, "tbMatKhau", "Mật khẩu không hợp lệ!");

    // Kiểm tra ngày làm
    isValid &= validation.checkEmpty(txtNgayLam, "tbNgay", "Ngày làm không được để trống!") && validation.checkDate(txtNgayLam, "tbNgay", "Ngày không hợp lệ!");

    // Kiểm tra lương cơ bản
    isValid &= validation.checkEmpty(txtLuongCB, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkLCB(txtLuongCB, "tbLuongCB", "Mức lương không hợp lệ!");

    // Kiểm tra chức vụ
    isValid &= validation.checkPosition("chucvu", "tbChucVu", "Vui lòng chọn chức vụ!");

    // Kiểm tra giờ làm trong tháng
    isValid &= validation.checkEmpty(txtGioLam, "tbGiolam", "Giờ làm việc không được để trống!") && validation.checkHour(txtGioLam, "tbGiolam", "Giờ làm việc không hợp lệ (80 - 200 giờ)");

    if (isValid) {
        var nv = new NhanVien(txtTK, txtTenNV, txtEmail, txtPassword, txtNgayLam, parseInt(txtLuongCB), txtChucVu, parseInt(txtGioLam));
        nv.tinhLuong();
        nv.xepLoai();

        danhsachNV.capnhatNV(nv);
        hienthiDS(danhsachNV.mangNV);
        $('#myModal').modal('hide');
        resetForm();
    }
});

document.getElementById("searchName").addEventListener("keyup", function () {
    var chuoiTK = document.querySelector("#searchName").value.trim();
    var mangKQ = danhsachNV.timkiemNVTheoLoai(chuoiTK);

    hienthiDS(mangKQ);
});