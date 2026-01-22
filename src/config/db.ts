import { Sequelize } from "sequelize";

const db = new Sequelize('postgresql://rest_api_node_types_user:18MYwzaItnN59fIzlk1tf9XqsSJ0nuAb@dpg-d5op0n49c44c73fcbdog-a.oregon-postgres.render.com/rest_api_node_types', {
    dialectOptions: {
        ssl: {
            require: false
        }
    }
});

export default db