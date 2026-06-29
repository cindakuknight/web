/* =====================================
   PENDIDIKAN PROFETIK
   script.js
===================================== */

// ============================
// Efek Navbar saat Scroll
// ============================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";

    } else {

        nav.style.boxShadow = "none";

    }

});

// ============================
// Animasi Hero
// ============================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-text");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "1s";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    },300);

});

// ============================
// Tombol Back To Top
// ============================

const tombol = document.createElement("button");

tombol.innerHTML = "▲";

tombol.id = "backToTop";

document.body.appendChild(tombol);

tombol.style.display = "none";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        tombol.style.display = "block";

    }else{

        tombol.style.display = "none";

    }

});

tombol.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ============================
// Style Tombol
// ============================

tombol.style.position="fixed";
tombol.style.bottom="30px";
tombol.style.right="30px";
tombol.style.width="50px";
tombol.style.height="50px";
tombol.style.borderRadius="50%";
tombol.style.border="none";
tombol.style.background="#0B5E2B";
tombol.style.color="white";
tombol.style.fontSize="20px";
tombol.style.cursor="pointer";
tombol.style.zIndex="999";
tombol.style.transition=".3s";

tombol.onmouseenter=()=>{

    tombol.style.background="#C9A227";

}

tombol.onmouseleave=()=>{

    tombol.style.background="#0B5E2B";

}

// ============================
// Scroll ke Artikel
// ============================

const btn = document.querySelector(".btn");

btn.addEventListener("click",(e)=>{

    e.preventDefault();

    document.querySelector("#artikel").scrollIntoView({

        behavior:"smooth"

    });

});

// ============================
// Placeholder Search
// ============================

const search = document.querySelector("input");

search.addEventListener("keyup",()=>{

    console.log("Mencari :",search.value);

    /*
        Nanti diganti menjadi
        pencarian database
    */

});

// ============================
// Hover Kategori
// ============================

const kategori = document.querySelectorAll(".sidebar-box li");

kategori.forEach(item=>{

    item.addEventListener("click",()=>{

        alert("Kategori '"+item.innerText+"' akan dihubungkan ke database.");

    });

});

// ============================
// Efek Card (Siap Database)
// ============================

const cards = document.querySelectorAll(".empty-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";
        card.style.transition=".3s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

console.log("PENDIDIKAN PROFETIK siap digunakan.");
