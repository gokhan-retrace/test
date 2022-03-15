import mongoose from 'mongoose';

import schemaOptions from '@retrace-org/fullstack-common/defaults/schema-options.mjs';
import Address from '@retrace-org/fullstack-common/schemas/address.schema.mjs';

const { Schema } = mongoose;

const Payor = new mongoose.Schema({
    payor_id: { type: String, required: true },
    payor_name: { type: String, required: true },
    preferred_network: { type: Boolean, required: true, default: false },
    in_network: { type: Boolean, required: true, default: false }
});

const Business = new Schema({
    business_id: { type: String, required: true },

    billing_npi: { type: String, required: true },
    tin_ein: { type: String, required: true },

    name: { type: String, required: true },
    dba: { type: String },
    description: { type: String },

    established_on: { type: Date },
    incorporation_state: { type: String },
    legal_structure: { type: String },

    mailing_address: { type: Address, required: true },
    use_mailing_address: { type: Boolean, default: true },
    physical_address: { type: Address, required: true },

    naics: { type: String },
    naics_description: { type: String, required: true },

    website: { type: String },
    phone: { type: String },
    fax: { type: String },

    payors: { type: [Payor] }
}, { ...schemaOptions, collection: 'business_1' });

Business.index({ business_id: 1 });
Business.index({ business_name: 1 });

export default Business;
