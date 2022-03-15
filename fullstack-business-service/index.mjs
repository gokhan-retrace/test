import DatabaseManager from '@retrace-org/fullstack-common/database-manager.mjs';
import Service from '@retrace-org/fullstack-common/service.mjs';

// handlers
import handlers from './handlers/index.mjs';
import schemas from './schemas/index.mjs';

// connect to the database
const db = new DatabaseManager({
    uri: process.env.MONGODB_URI,
});

db.addSchemas(schemas);

// create service
const service = new Service('business', {
    db,
    uri: process.env.RABBITMQ_URI,
    user: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASSWORD
});

service.addHandlers(handlers);

// start service
service.start({});
