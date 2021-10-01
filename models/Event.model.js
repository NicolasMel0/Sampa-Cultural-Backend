const { Schema, model } = require('mongoose');
const EventsSchema = new Schema({
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true },
    date: { type: Data(), required: true, default: data.now() },
    value: { type: Number },
    qttOfPeoples: { type: Number, min: 0 },
    description: { type: String },
    category: [{ type: String }],
    acessibility: [{ type: String }],
    eventOwner: { type: Types.ObjectId, ref: 'User', required: true },
    pictureURL: { type: String, trim: true },
    site: { type: String },
});
const EventsModel = model('Event', EventsSchema);
module.exports = EventsModel;
