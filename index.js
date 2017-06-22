const express = require('express');
const path = require('path');

const app = express();


app.set('port', process.env.PORT || 3002);
app.use(express.static(path.join(__dirname, 'public')));


app.use((request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(app.get('port'), () => {
});

module.exports = app;

