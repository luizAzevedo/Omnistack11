const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send({
    'evento': 'Semana OmniStack',
    'aluno': 'Luiz Azevedo'
  });
});

app.listen(3333);
