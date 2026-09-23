// arquivo com os dados de conexão com o banco
// importando o sequilize
import Sequelize from "sequelize";

const connection = new Sequelize({
    // Dados de conexão
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'loja',
    timezone: '-03:00',
})


// exportando módulo
export default connection;