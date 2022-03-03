function validate() {
    var nik = document.getElementById("nik").value;
    var nama = document.getElementById("nama").value;
    if (nik == "1234" && nama == "rini") {

        window.open("berhasil.html")
        return false;

    }
    else {
        alert("login failed");
    }


}