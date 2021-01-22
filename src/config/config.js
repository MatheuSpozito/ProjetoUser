// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-f46f5e2fd8bac870928ae2d1c5de87e2988c14b2.cyc7vdyaoxyn.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '5K|pA&kwb5)=fA?Km$rx+oGGx=dh~e0E'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}