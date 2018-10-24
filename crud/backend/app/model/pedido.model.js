module.exports = (connection, Sequelize) => {
    const pedido = connection.define('pedido', {
        codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        valorTotal: {
            type: Sequelize.DECIMAL(10,2)
        },
        data: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        situacao: {
            type: Sequelize.STRING(1)
        }
    }, {underscored: true})

    return pedido
}