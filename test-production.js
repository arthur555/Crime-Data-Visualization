PGHOST = '35.230.176.22';
PGUSER = 'postgres';
PGDATABASE = 'postgres';            // to be filled out
PGPASSWORD = 'pratik';
PGPORT = 3211;

const {Pool, Client} = require('pg');
var connectionString = PGDATABASE+"://"+PGUSER+":"+PGPASSWORD+'@'+PGHOST+'/'+PGDATABASE;
console.log(connectionString);
const pool = new Pool({connectionString: connectionString});

// const client = new Client(connectionString);
// client.connect();
//
// client.query('schema.table', (err, res) => {
//     console.log(err ? err.stack : res.rows[0].message) // Hello World!
//     client.end()
// })

//throws an error for any idle client
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
});


// query definition: insertion
// const table = 'crime';                                            //specify tablename here
// const schema = '(crime_id, time, pd_id, type, location)';         //specify schema here
//
// const text = 'INSERT INTO $1$2 VALUES($3, $4, $5, $6) RETURNING *';
// const values = [table, schema, '1', '2018-01-09 10:00:00', '37', 'Duke'];        //specify values to be inserted here


//query definition: selection
//const table = 'crime';
//const columns = 'crime_id, time';
//const condition = 'crime_id = 1';

//const text = 'SELECT $1 FROM $2 WHERE $3' ;          // to be expanded according to use case
//const values = [columns, table, condition];

execute('SELECT table_name\n' +
    '  FROM information_schema.tables\n' +
    ' WHERE table_schema=\'public\'\n' +
    '   AND table_type=\'BASE TABLE\'', 'show all tables what we have');

execute('SELECT * from crime WHERE x_position < $1','an example query on the crime table', [36]);


execute('SELECT * from districts', 'an example query on the district table');

execute('INSERT INTO crime(x_position, y_position, incident_id, time_stamp, description) VALUES($1, $2, $3, $4, $5) RETURNING *',
    'an dummy example of modifying the table',
     [10, 10, 10, '2018-04-05T07:10:00.000Z', 'MOTOR VEHICLE THEFT - AUTOMOBILE']);

// query execution: promise
function execute(text, description, value ){
    console.log(description+'\n');
    pool.connect()
    .then(client => {
        return client.query(text, value)
            .then(res =>{
                client.release();
                console.log(res.rows.slice(0, 5)) ;       // to be defined according to use case
                console.log("\n")
            })
            .catch(e=>{
                client.release();
                console.log(e.stack)
            })
    });}




//
//
// // or: if it's just a simple query
// pool.query(text, values)
//     .then(res => console.log(res.rows[0]))
//     .catch(e =>{console.log(e.stack)});


// shut down
console.log('calling end');
console.log('pool has drained');
