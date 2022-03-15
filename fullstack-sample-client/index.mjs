import express from 'express';

import ServiceManager from '@retrace-org/fullstack-common/service-manager.mjs';

const app = express();

app.get('/:partnerId/businesses', async (req, res) => {
    const BusinessService = ServiceManager.get('business', req.params.partnerId);
    const businesses = await BusinessService.findBusiness();
    res.json(businesses);
});

app.get('/:partnerId/:service/:function', async (req, res) => {
    const Service = ServiceManager.get(req.params.service, req.params.partnerId);
    const Function = Service[req.params.function];
    const response = await Function({ filter: req.query });
    res.json(response);
});

app.listen(3000, () => {
    console.log('Listening...');
});
