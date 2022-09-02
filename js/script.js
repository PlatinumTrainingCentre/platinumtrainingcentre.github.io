const eng = document.querySelector('#btnradio1');
const idn = document.querySelector('#btnradio2');

// navigation
const nav1 = document.querySelector('#rumah');
const nav2 = document.querySelector('#tentang');
const nav3 = document.querySelector('#program');
const nav4 = document.querySelector('#pengajar');
const nav5 = document.querySelector('#testimoni');

// footer
const foot1 = document.querySelector('#rumahF');
const foot2 = document.querySelector('#tentangF');
const foot3 = document.querySelector('#programF');
const foot4 = document.querySelector('#pengajarF');
const foot5 = document.querySelector('#testimoniF');

// footer section 2
const foot1a = document.querySelector('#rumahFa');

// hero
const contentTag = document.querySelector('.content-tag');
const contentTag1 = document.querySelector('.content-tag1');
const contentTag2 = document.querySelector('.content-tag2');

// index page
const indexP1 = document.querySelector('.indexP1');
const indexT1 = document.querySelector('.indexT1');
const contentS1 = document.querySelector('.sukses1');
const contentS2 = document.querySelector('.sukses2');
const contentS3 = document.querySelector('.sukses3');
const contentS4 = document.querySelector('.sukses4');
const contentS5 = document.querySelector('.sukses5');
const contentS6 = document.querySelector('.sukses6');
const indexT2 = document.querySelector('.indexT2');

// about page
const aboutP1 = document.querySelector('.aboutP1');

eng.addEventListener('click', english);
idn.addEventListener('click', bahasa);

function english() {
    
    // navigation
    nav1.innerHTML = 'Home';
    nav2.innerHTML = 'About';
    nav3.innerHTML = 'Course Programme';
    nav4.innerHTML = 'Lecturers';
    nav5.innerHTML = 'Testimonial';
    
    // footer
    foot1.innerHTML = 'Home';
    foot2.innerHTML = 'About';
    foot3.innerHTML = 'Course Programme';
    foot4.innerHTML = 'Lecturers';
    foot5.innerHTML = 'Testimonial';

    // footer section 2
    foot1a.innerHTML = 'Home';

    // hero
    contentTag.innerHTML = 'REGISTER NOW!';
    contentTag1.innerHTML = 'REGISTER NOW!';
    contentTag2.innerHTML = 'REGISTER NOW!';

    // index page
    indexP1.innerHTML = 'Inggris';
    indexT1.innerHTML = 'Success Story';
    contentS1.innerHTML = 'inglish';
    contentS2.innerHTML = 'inglish';
    contentS3.innerHTML = 'inglish';
    contentS4.innerHTML = 'inglish';
    contentS5.innerHTML = 'inglish';
    contentS6.innerHTML = 'inglish';
    indexT2.innerHTML = 'Location';

    // about page
    aboutP1.innerHTML = 'inglish';

}

function bahasa() {

    // navigation
    nav1.innerHTML = 'Awal';
    nav2.innerHTML = 'Tentang';
    nav3.innerHTML = 'Program Pembelajaran';
    nav4.innerHTML = 'Pengajar';
    nav5.innerHTML = 'Testimoni';

    // footer
    foot1.innerHTML = 'Awal';
    foot2.innerHTML = 'Tentang';
    foot3.innerHTML = 'Program Pembelajaran';
    foot4.innerHTML = 'Pengajar';
    foot5.innerHTML = 'Testimoni';

    // footer section 2
    foot1a.innerHTML = 'Awal';

    // hero
    contentTag.innerHTML = 'DAFTAR SEKARANG!';
    contentTag1.innerHTML = 'DAFTAR SEKARANG!';
    contentTag2.innerHTML = 'DAFTAR SEKARANG!';

    // index page
    indexP1.innerHTML = 'Indo';
    indexT1.innerHTML = 'Cerita Sukses';
    contentS1.innerHTML = 'indo';
    contentS2.innerHTML = 'indo';
    contentS3.innerHTML = 'indo';
    contentS4.innerHTML = 'indo';
    contentS5.innerHTML = 'indo';
    contentS6.innerHTML = 'indo';
    indexT2.innerHTML = 'Lokasi';

    // about page
    aboutP1.innerHTML = 'indo';

}
