const anasayfayiGoster = function (req, res, next) {
    res.render('index', { layout: './layout/auth_layout.ejs' });
}

module.exports = {
    anasayfayiGoster
}