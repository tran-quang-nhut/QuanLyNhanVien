function Validation() {
    this.checkEmpty = function (input, spanID, message) {
        if (input.trim() != "") {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkAcc = function (input, spanID, message) {
        var accPattern = /^[a-zA-Z0-9]{4,6}$/;
        if (input.match(accPattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkUnique = function (input, spanID, message, mangNV) {
        var isExist = false;

        isExist = mangNV.some(function (item) {
            return item.tk == input;
        });

        if (isExist) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        } else {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }

    this.checkName = function (input, spanID, message) {
        var namePattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");

        if (namePattern.test(input)) {
            // tên hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkEmail = function (input, spanID, message) {
        var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(emailPattern)) {
            // Đúng định dạng email
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkPassword = function (input, spanID, message) {
        var passwordPattern = /^(?=.{6,10}$)(?=.*[A-Z])(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]).*$/;
        if (input.match(passwordPattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkDate = function (input, spanID, message) {
        var datePattern = /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/;

        if (input.match(datePattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkLCB = function (input, spanID, message) {
        var positiveInt = /^(([0-9])+)$/g;
        if (input.match(positiveInt) && parseInt(input) >= 1000000 && parseInt(input) <= 20000000) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkPosition = function (list, spanID, message) {
        var index = document.getElementById(list).selectedIndex;
        if (index > 0) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkHour = function (input, spanID, message) {
        var positiveInt = /^(([0-9])+)$/g;
        if (input.match(positiveInt) && parseInt(input) >= 80 && parseInt(input) <= 200) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
}