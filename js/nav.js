const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="navbar">
            <div class="dropdown">
            <button class="dropbtn"> Cars ▾
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="cars.html#Fulvia">Lancia Fulvia Sport</a>
                <a href="cars.html#Delta">Lancia Delta</a>
                <a href="cars.html#Appia">Lancia Appia GTE</a>
            </div>
        </div>
        <a href="index.html">Home</a>
        <a href="gallery.html">Gallery</a>
    `;
}

createNav();