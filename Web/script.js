const semua_tombol = document.querySelectorAll(".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");

semua_tombol.forEach((tombol_satuan) => {
    tombol_satuan.addEventListener("click", () => {
        semua_tombol.forEach((btn) => btn.classList.remove("active"));
        tombol_satuan.classList.add("active");

        const filter = tombol_satuan.getAttribute("data-filter");

        semua_gambar.forEach((gambar) => {
            if (filter === "all" || gambar.classlist.contains(filter)) {
                gambar.style.display = "block";

            }  else {
                gambar.style.display = "none";
            }
        });
    });
});