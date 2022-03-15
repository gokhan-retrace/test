const findBusiness = (db, params) => {
    const filter = params.filter ?? {};

    const { Business } = db;
    if (Business == null) {
        throw new Error('Can not find model: Business');
    }

    return Business.find(filter);
};

export default findBusiness;
