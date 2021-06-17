const axios = require('axios');

const tumMakaleleriGetir = async (req, res) => {

    let sayfalama = "";
    let aktifSayfa = 1;

    if (req.query.page) {
        sayfalama = "page" + req.query.page;
        aktifSayfa = req.query.page;
    }

    try {
        const blogApi = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20&' + sayfalama);
        /*  console.log(blogApi.headers); */
        res.render('./makaleler/index', { makaleler: blogApi.data, sayfalama: blogApi.headers, aktifSayfa: aktifSayfa }); //verileri gönderdik
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
        res.json({
            mesaj: "Hata Çıktı" + hata.response.data,
        })
    }
    //  res.render('./makaleler/index'); // default olarak views klasörüne bakar

}

const tekMakaleGetir = async (req, res) => {
    let makaleID = req.params.id;
    try {
        const tekMakale = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts/' + makaleID)
        /*  res.json({
             veri: tekMakale.data
         }) */
        /* console.log(tekMakale); */
        res.render('./makaleler/makale', { makale: tekMakale.data })
    } catch (error) {
        console.log(error.response.data.message);
        console.log(error.response.status);
        console.log(error.response.header);
        res.json({
            mesaj: "Hata Çıktı. Hata nedeni : " + error.response.data.message,
            makaleID: makaleID,
        })
    }
}

const aramaYap = async (req, res) => {
    const aranacakKelime = req.body.search;
    let sayfalama = "";
    let aktifSayfa = 1;

    if (req.query.page) {
        sayfalama = "page" + req.query.page;
        aktifSayfa = req.query.page;
    }
    try {
        const blogApi = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts?search=' + aranacakKelime);
        res.render('./makaleler/index', { makaleler: blogApi.data, sayfalama: blogApi.headers, aktifSayfa: aktifSayfa }); //verileri gönderdik
    } catch (error) {
/*         console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header); */
        res.json({
            mesaj: "Hata Çıktı" + hata.response.data,
        })
    }
}

const tumBlogGetir = async (req, res) => {
    res.json({
        mesaj: "blog yazıları",
    })
}


module.exports = {
    tumMakaleleriGetir,
    tumBlogGetir,
    tekMakaleGetir,
    aramaYap
}