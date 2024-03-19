let frm = document.getElementById('cek');
let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let statusPilihan = ["Menikah", "Belum Menikah"];
let pilihJabatan = `<option value="" hidden>Pilih Jabatan</option>`;
let pilihStatus = `<option value="" hidden>Pilih Status</option>`;

for (let j in jabatanPilihan){
    pilihJabatan += `<option value="${jabatanPilihan[j]}">${jabatanPilihan[j]}</option>`;
}

frm.jabatan.innerHTML = pilihJabatan;

for (let s in statusPilihan){
    pilihStatus += `<option value="${statusPilihan[s]}">${statusPilihan[s]}</option>`;
}

frm.status.innerHTML = pilihStatus;

function cekPegawai(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gajiPokok;

    switch(jabatan){
        case 'Manager': gajiPokok = 15000000; break;
        case 'Asisten Manager': gajiPokok = 10000000; break;
        case 'Staff': gajiPokok = 5000000; break;
        default: gajiPokok = 0; break;
    }

    let tunjanganJabatan = 0.15 * gajiPokok;
    let bpjs = 0.1 * gajiPokok;
    let tunjanganKeluarga = (status == "Menikah") ? 0.2 * gajiPokok : 0;
    let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    document.write(`<table border=1>
                    <thead>
                        <tr>
                            <th colspan="2">Data Pegawai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nama Pegawai</td>
                            <td>${nama}</td>
                        </tr>
                        <tr>
                            <td>Jabatan</td>
                            <td>${jabatan}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>${status}</td>
                        </tr>
                        <tr>
                            <td>Gaji Pokok</td>
                            <td>${gajiPokok}</td>
                        </tr>
                        <tr>
                            <td>Tunjangan Jabatan</td>
                            <td>${tunjanganJabatan}</td>
                        </tr>
                        <tr>
                            <td>BPJS</td>
                            <td>${bpjs}</td>
                        </tr>
                        <tr>
                            <td>Tunjangan Keluarga</td>
                            <td>${tunjanganKeluarga}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Gaji</th>
                            <td>${totalGaji}</td>
                        </tr>
                    </tfoot>
               </table>`);
}