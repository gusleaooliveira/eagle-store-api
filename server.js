require('dotenv-safe').config()

const { json, urlencoded } = require('body-parser'),
        express            = require('express'),
        mongoose           = require('mongoose'),
        cors               = require('cors'),
        aplicativoApi      = require('./routes/aplicativo/api'),
        aplicativoView     = require('./routes/aplicativo/view'),
        categoriaApi       = require('./routes/categoria/api'),
        categoriaView      = require('./routes/categoria/view'),
        logApi             = require('./routes/log/api'),
        logView            = require('./routes/log/view'),
        tipoApi            = require('./routes/tipo/api'),
        tipoView           = require('./routes/tipo/view'),
        usuarioApi         = require('./routes/usuario/api'),
        usuarioView        = require('./routes/usuario/view'),
        comentarioApi         = require('./routes/comentario/api'),
        comentarioView        = require('./routes/comentario/view'),
        Log                = require('./model/log/index');

let urlBase = `http://localhost:${process.env.PORT}/api/`,
    app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    let d = new Date();
    let log = {
        data: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
        hora: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        mensagem: `Conectado no DB`
    };
    let novo = new Log(log);
    novo.save((erro, valores) => {
        if(erro) console.error(erro);
        console.log(valores);
    });
})
.catch((erroDB) => {
    let d = new Date();
    let log = {
        data: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
        hora: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        mensagem: `DB Erro: ${erroDB}`
    };
    let novo = new Log(log);
    novo.save((erro, valores) => {
        if(erro) console.error(erro);
        console.log(valores);
    });
});

mongoose.Promise = global.Promise;


app.use(json());
app.use(urlencoded());
app.use(cors({ url: urlBase, credentials: true }));
app.use((req, res, next) => {
    let d = new Date();
    let log = {
        data: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
        hora: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        mensagem: `Requisição (${req.method}) ${req.url}`,
        corpo: Object.values(req.body),
        metodo: req.method,
        url: req.url
    };
    let novo = new Log(log);
    novo.save((erro, valores) => {
        if(erro) console.error(erro);
        console.log(valores);
    });
    console.log(req.statusCode);
    next();
});


app.set('view engine', 'pug')

app.use('/static', express.static(__dirname+'/public'));

app.use('/api/aplicativo',  aplicativoApi);
app.use('/api/categoria',   categoriaApi);
app.use('/api/tipo',        tipoApi);
app.use('/api/usuario',     usuarioApi);
app.use('/api/log',         logApi);
app.use('/api/comentario',  comentarioApi);

app.use('/view/aplicativo', aplicativoView);
app.use('/view/categoria',  categoriaView);
app.use('/view/tipo',       tipoView);
app.use('/view/usuario',    usuarioView);
app.use('/view/log',        logView);
app.use('/view/comentario', comentarioView);

app.listen(process.env.PORT, () => {
    console.log(`Local: ${urlBase}`);
})