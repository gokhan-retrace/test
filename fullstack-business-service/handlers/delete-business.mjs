const deleteBusiness = (db, params) => {
    const filter = params.filter ?? {};

    const { Business } = db;
    if (Business == null) {
        throw new Error('Can not find model: Business');
    }

    return Business.deleteMany(filter);
};

export default deleteBusiness;
