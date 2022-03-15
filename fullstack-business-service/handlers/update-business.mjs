const updateBusiness = (db, params) => {
    const filter = params.filter ?? {};

    if (!params.body) {
        throw new Error('Missing parameter: body');
    }

    const { Business } = db;
    if (Business == null) {
        throw new Error('Can not find model: Business');
    }

    return Business.updateMany(filter, { $set: { ...params.body } });
};

export default updateBusiness;
