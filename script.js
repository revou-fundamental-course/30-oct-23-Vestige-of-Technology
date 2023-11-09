window.onload = () => {
    //kode untuk menggunakan fungsi tombol dan melakukan kalkulasi BMI
    let button = document.querySelector("#hitungBMI");
    button.addEventListener("click", hitungBMI);
}

function hitungBMI() {
    /*Kode untuk memasukkan input nilai dari box berat badan & tinggi badan yang kemudian
    akan dihitung untuk memperoleh nilai hasil. */
    let berat = parseInt(document.querySelector("#berat").value);
    let tinggi = parseInt(document.querySelector("#tinggi").value);
    let hasil = document.querySelector("#hasil");
    document.getElementById("hasil").innerHTML = hasil;
    
    //kode untuk melakukan validasi pada box berat badan & tinggi badan
    if (berat == "" || isNaN(berat))
    hasil.innerHTML = "masukkan berat (kg)!";

    else if (tinggi == "" || isNaN(tinggi))
    hasil.innerHTML = "masukkan tinggi (cm)!"

    //kode untuk menghitung nilai BMI menggunakan logika apabila input yang dimasukkan valid
    else {
        let bmi = (berat / ((tinggi * tinggi) / 10000)).toFixed(2);

        if (bmi < 18.5) hasil.innerHTML = '<span>${bmi}</span><br>Kekurangan berat badan';

        else if (bmi >= 18.5 && bmi <= 24.9) hasil.innerHTML = '<span>${bmi}</span><br>Normal (ideal)';

        else if (bmi >= 25 && bmi <= 29.9) hasil.innerHTML = '<span>${bmi}</span><br>Kelebihan berat badan';

        else hasil.innerHTML = '<span>${bmi}</span><br>Kegemukan (Obesitas)';
    }
}