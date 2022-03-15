const createBusiness = (db, params) => {
    if (!params.body) {
        throw new Error('Missing parameter: body');
    }

    const { Business } = db;
    if (Business == null) {
        throw new Error('Can not find model: Business');
    }

    return Business.create(params.body);
};

export default createBusiness;
