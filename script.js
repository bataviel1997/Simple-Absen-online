
// tangkap element absensi_form dan root
let absensi_form = document.getElementById("absensi_form");
let root = document.getElementById("root");

// kita buat array untuk menampung data absensi
let absensi_data = [];

// tambahkan event listener submit ke element absensi_form
absensi_form.addEventListener("submit", (event)=>{

  // mencegah form dari reload page
  event.preventDefault();

  let fullname = event.target.fullname.value;

  // validasi mini
  if(fullname == ""){
    alert ("Silahkan Masukan Nama");
    return
  }

  // push data kedalam aray absensi
  absensi_data.push({
    nama_lengkap : fullname,
    waktu : new Date().toLocaleTimeString(),
    tanggal : new Date().toLocaleDateString()
  });

//  reset input filed
event.target.fullname.value = "";

// panggil function render to html
render_to_html();

});
// function untuk render data array ke div root
function render_to_html(){
  // reset elemen div root
  root.innerHTML = "";
// mapping array to html element
absensi_data.forEach(( element, index)=>{
root.innerHTML += `
<div class="card" draggable="true" ondragend="handle_delete(${index})">
<span> ${index + 1} . &nbsp; ${element.nama_lengkap} </span>
<span> ${element.waktu} ${element.tanggal} </span>
</div>
`

});
}

// delete function
function handle_delete(index){
  // delete 1 data dari array
  absensi_data.splice(index, 1);
  render_to_html();
}