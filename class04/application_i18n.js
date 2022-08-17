const express = require("express");
const app = express();
const port = 8888;
const i18n = require("i18n");
const cookieParser = require("cookie-parser");

// https://www.npmjs.com/package/i18n
i18n.configure({
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
    directory: "./locales",
    extension: ".js",
    cookie: "lang"
});

app.use(cookieParser());
app.use(i18n.init);

app.use((req, res, next) => {
    console.log(req.acceptsLanguages());

    const firstLocale = req.acceptsLanguages()[0];
    req.setLocale(firstLocale);
    res.setLocale(firstLocale);

    next();
});

app.get("/", (req, res) => {
    res.send(res.__("hello") + "\n" + i18n.getLocale(req));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});