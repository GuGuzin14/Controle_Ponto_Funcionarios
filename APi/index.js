const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const funcionariosRouter = require('./routes/funcionarioRoutes');
const turnosRouter = require('./routes/turnoRoutes');
const pontosRouter = require('./routes/pontoRoutes');
const cargosRouter = require('./routes/cargoRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/funcionarios', funcionariosRouter);
app.use('/api/turnos', turnosRouter);
app.use('/api/pontos', pontosRouter);
app.use('/api/cargos', cargosRouter);

app.listen(port, () => {
    console.log('Servidor Iniciado em http://localhost:' + port);
});