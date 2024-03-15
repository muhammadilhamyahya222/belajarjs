function dataPerson() {
    let forms = document.getElementById("frm");
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;
    let input = "Selamat Pagi " + nama + "<br>Pekerjaan " + pekerjaan + " dengan Hobby " + hobby;
    let no_input = "Maaf Nama atau Pekerjaan atau Hobby Anda Kosong";
    let hasil = nama && pekerjaan && hobby != "" ? input : no_input;

    document.getElementById("hasil").innerHTML = hasil;
}
