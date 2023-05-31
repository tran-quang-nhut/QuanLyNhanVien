function DanhSachNhanVien() {
    this.mangNV = [];

    // Thêm nhân viên vào mảng
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }

    // Tìm vị trí nhân viên trong mảng dựa trên tài khoản
    this.timNV = function (acc) {
        var viTri = -1;
        this.mangNV.map(function (item, index) {
            if (item.tk == acc) {
                viTri = index;
            }
        });
        return viTri;
    }

    this.xoaNV = function (acc) {
        var viTri = this.timNV(acc);
        if (viTri >= 0) {
            this.mangNV.splice(viTri, 1);
        }
    }

    this.capnhatNV = function (nv) {
        var viTri = this.timNV(nv.tk);
        if (viTri >= 0) {
            this.mangNV[viTri] = nv;
        }
    }

    this.timkiemNVTheoLoai = function (txtLoai) {
        var mangKQ = [];
        var txtLoaiThuong = txtLoai.toLowerCase();
        this.mangNV.forEach(function (item, index) {
            var xepLoaiThuong = item.loai.toLowerCase();
            var viTri = xepLoaiThuong.indexOf(txtLoaiThuong);
            if (viTri >= 0) {
                mangKQ.push(item);
            }
        });
        return mangKQ;
    }
}