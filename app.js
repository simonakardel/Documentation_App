import express from "express";
import fs from "fs";

const app = express();
const pass = 1234;


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

import templateEngine from "./util/templateEngine.js";

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {tabTitle: "Welcome"});

const gitCommands = templateEngine.readPage("./public/pages/git/git.html");
const gitCommandsPage = templateEngine.renderPage(gitCommands, {tabTitle: "Git"});

const jsVariables = templateEngine.readPage("./public/pages/data_types/JS_Variables.html");
const jsVariablesPage = templateEngine.renderPage(jsVariables, {tabTitle: "Data Types and Variables"});

const functions = templateEngine.readPage("./public/pages/functions/functions.html");
const functionsPage = templateEngine.renderPage(functions, {tabTitle: "Functions"});

const loops = templateEngine.readPage("./public/pages/loops/loops.html");
const loopsPage = templateEngine.renderPage(loops, {tabTitle: "Loops in Javascript"});

const node = templateEngine.readPage("./public/pages/node/node.html");
const nodePage = templateEngine.renderPage(node, {tabTitle: "Introduction to Node.js"});

const packageJson = templateEngine.readPage("./public/pages/packageJson/package.html");
const packageJsonPage = templateEngine.renderPage(packageJson, {tabTitle: "Package.json"});

const nodemon = templateEngine.readPage("./public/pages/nodemon/nodemon.html");
const nodemonPage = templateEngine.renderPage(nodemon, {tabTitle: "Nodemon"});

const expressHtml = templateEngine.readPage("./public/pages/express/express.html");
const expressHtmlPage = templateEngine.renderPage(expressHtml, {tabTitle: "Express"});

const restApi = templateEngine.readPage("./public/pages/restAPI/REST_API.html");
const restApiPage = templateEngine.renderPage(restApi, {tabTitle: "REST API"});

const fetchHtml = templateEngine.readPage("./public/pages/fetch/fetch.html");
const fetchHtmlPage = templateEngine.renderPage(fetchHtml, {tabTitle: "Fetch in Javascript"});

const dateHtml = templateEngine.readPage("./public/pages/date/date.html");
const dateHtmlPage = templateEngine.renderPage(dateHtml, {tabTitle: "Date in Javascript"});

const csr = templateEngine.readPage("./public/pages/CSR_SSR/CSR_SSR.html");
const csrPage = templateEngine.renderPage(csr, {tabTitle: "CSR vs SSR"});

const ex_im = templateEngine.readPage("./public/pages/export_import/export_import.html");
const ex_imPage = templateEngine.renderPage(ex_im, {tabTitle: "CommonJS vs Type Module"});

const front_ex_im = templateEngine.readPage("./public/pages/front_export_import/front_export_import.html");
const front_ex_imPage = templateEngine.renderPage(front_ex_im, {tabTitle: "Export and Import in the front-end"});

const xss = templateEngine.readPage("./public/pages/XSS/XSS.html");
const xssPage = templateEngine.renderPage(xss, {tabTitle: "XSS in Javascript"});

const login = fs.readFileSync("./public/pages/login/login.html").toString();

const signup = fs.readFileSync("./public/pages/signup/signup.html").toString();

const submit = templateEngine.readPage("./public/pages/submit_new_page/submit.html");
const submitPage = templateEngine.renderPage(submit, {tabTitle: "New page"});


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/git-commands", (req, res) => {
    res.send(gitCommandsPage);
});

app.get("/js-variables", (req, res) => {
    res.send(jsVariablesPage);
});

app.get("/functions", (req, res) => {
    res.send(functionsPage);
});

app.get("/loops", (req, res) => {
    res.send(loopsPage);
});

app.get("/node", (req, res) => {
    res.send(nodePage);
});
app.get("/package.json", (req, res) => {
    res.send(packageJsonPage);
});

app.get("/nodemon", (req, res) => {
    res.send(nodemonPage);
});

app.get("/express", (req, res) => {
    res.send(expressHtmlPage);
});

app.get("/requests", (req, res) => {
    res.send(restApiPage);
});

app.get("/fetch", (req, res) => {
    res.send(fetchHtmlPage);
});

app.get("/date", (req, res) => {
    res.send(dateHtmlPage);
});

app.get("/csr-ssr", (req, res) => {
    res.send(csrPage);
});

app.get("/export-import", (req, res) => {
    res.send(ex_imPage);
});

app.get("/front-export-import", (req, res) => {
    res.send(front_ex_imPage);
});

app.get("/xss", (req, res) => {
    res.send(xssPage);
});

app.get("/login", (req, res) => {
    res.send(login);
});

app.get("/signup", (req, res) => {
    res.send(signup);
});

app.get("/new-page", (req, res) => {
    res.send(submitPage);
});

app.post("/new-page", (req, res) => {
    res.redirect("/");
});

// dummy login - only checks password
app.post('/login', (req, res) => {
    const password = req.body.password;
    if(password == pass){
        res.send(frontpagePage);
    } else {
        res.send("Authentication unsuccesfull");
    }
});

// dummy sign up - password needs to be the same as for login
app.post('/signup', (req, res) => {
    const password = req.body.password;
    if(password == pass){
        res.send(frontpagePage);
    } else {
        res.send("Authentication unsuccesfull");
    }
});




const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});
