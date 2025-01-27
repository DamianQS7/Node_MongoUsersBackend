const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Database up and running');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos. Ver logs.')
    }
}

module.exports = {
    dbConnection
}