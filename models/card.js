let mongoose = require('mongoose');

let cardSchema = mongoose.Schema({
  dellaStatus: Number,
  idDella: {type: String, required: true, unique: true},
  url: String,
  dateFrom: String,
  dateTo: String,
  contentName: String,
  note: String,
  sizeLength: String,
  sizeWidth: String,
  sizeHeight: String,
  loadTypes: String,
  sizeVolumeFrom: String,
  sizeVolumeTo: String,
  bodyTypeId: String,
  paymentPrice: String,
  paymentCurrencyId: String,
  payment: String,
  sizeMassFrom: String,
  sizeMassTo: String,
  waypointListSource: [],
  waypointListTarget: [],
  agreedPub: {
    type: Boolean,
    default: false,
  },
  published: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now
  }
  //dellaInfo: mongoose.Schema.Types.Mixed,
})

let card = mongoose.model('card', cardSchema);

module.exports = card