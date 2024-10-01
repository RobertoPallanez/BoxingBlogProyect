import express from "express";
// import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(express.static("public"));
app.get("/", (req, res, next) => {
  res.render("index.ejs");
  
});

app.get("/index.ejs", (req, res, next) => {
    res.render("index.ejs");
    
  });

app.get("/foty.ejs", (req, res, next) => {
    res.render("foty.ejs");
    
  });

app.get("/ranked1.ejs", (req, res, next) => {
    res.render("ranked1.ejs");
    
  });

  
app.get("/ranked2.ejs", (req, res, next) => {
  res.render("ranked2.ejs");
  
});

app.get("/ranked3.ejs", (req, res, next) => {
  res.render("ranked3.ejs");
  
});

app.get("/ranked4.ejs", (req, res, next) => {
  res.render("ranked4.ejs");
  
});

app.get("/ranked5.ejs", (req, res, next) => {
  res.render("ranked5.ejs");
  
});

app.get("/ranked6.ejs", (req, res, next) => {
  res.render("ranked6.ejs");
  
});

app.get("/ranked7.ejs", (req, res, next) => {
  res.render("ranked7.ejs");
  
});

app.get("/ranked8.ejs", (req, res, next) => {
  res.render("ranked8.ejs");
  
});

app.get("/ranked9.ejs", (req, res, next) => {
  res.render("ranked9.ejs");
  
});

app.get("/ranked10.ejs", (req, res, next) => {
  res.render("ranked10.ejs");
  
});


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(capturarNombres);


// function capturarNombres (req, res, next)
// {
//   nombre = req.body.inputNombre;
//   apellido = req.body.inputApellido;
//   console.log(nombre, apellido);
//   next();
// }



// app.post("/submit", (req, res, next) => {
//   caracteres = nombre.length + apellido.length;
//   console.log(caracteres);
//   res.render("index.ejs", {numCaracteres: caracteres});
//   caracteres = 0;
//   next();  
// });



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});