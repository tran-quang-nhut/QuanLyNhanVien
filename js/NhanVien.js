function NhanVien(tk, tenNV, email, pass, ngayLam, luongCB, chucVu, gioLam) {
    this.tk = tk;
    this.tenNV = tenNV;
    this.email = email;
    this.pass = pass;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loai = "";

    this.tinhLuong = function () {
        switch (chucVu) {
            case "Sếp":
                this.tongLuong = this.luongCB * 3;
                break;
            case "Trưởng phòng":
                this.tongLuong = this.luongCB * 2;
                break;
            case "Nhân viên":
                this.tongLuong = this.luongCB * 1;
                break;
        }
    }

    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            this.loai = "Xuất sắc";
        } else if (this.gioLam >= 176) {
            this.loai = "Giỏi";
        } else if (this.gioLam >= 160) {
            this.loai = "Khá";
        } else {
            this.loai = "Trung bình";
        }
    }
}