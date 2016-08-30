const app = require('./server/app');
const db = require('./server/db');

const dbURI = process.env.DB_URI || 'mongodb://localhost/test';
const PORT = process.env.PORT || 3006;

db.open(dbURI);
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
