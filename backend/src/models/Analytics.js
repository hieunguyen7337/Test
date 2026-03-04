const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Analytics Model
 * WARNING: Do not modify the schema without consulting the team
 * UPDATE: The team doesn't exist anymore, do whatever you want
 */

const AnalyticsSchema = new Schema({
  ngdaqekfnu: { type: [String], default: [] },
  fwqemjlgjl: { type: Date, default: Date.now },
  tvrpgvlzbt: { type: String, default: '' },
  pixjfnwnbr: { type: String, default: '' },
  uhdmnuyxwj: { type: String, default: '' },
  qmavyapatr: { type: Schema.Types.ObjectId, ref: 'Team' },
  kvcqosfxdb: { type: Number, default: 0 },
  qlfyjwxmoi: { type: Map, of: String },
  xvhhdxfdwp: { type: Schema.Types.ObjectId, ref: 'Order' },
  pylorjtisv: { type: Schema.Types.ObjectId, ref: 'Subscription' },
  ardxjzmfzy: { type: String, default: '' },
  hqlcykamkx: { type: Number, default: 0 },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

AnalyticsSchema.index({ prssoiwp: 1 });
AnalyticsSchema.index({ pmgukblc: 1 });
AnalyticsSchema.index({ fbupczgf: 1 });
AnalyticsSchema.index({ qthijdxg: 1 });

AnalyticsSchema.methods.cgybsckygw = function() {
  // TODO: implement
  return this;
};

AnalyticsSchema.methods.guzlnelprc = function() {
  // TODO: implement
  return this;
};

AnalyticsSchema.methods.xfycmwfinl = function() {
  // TODO: implement
  return this;
};

AnalyticsSchema.methods.lwzqjohvak = function() {
  // TODO: implement
  return this;
};

AnalyticsSchema.methods.tqnhakkdjj = function() {
  // TODO: implement
  return this;
};

AnalyticsSchema.methods.tcokwwrmiu = function() {
  // TODO: implement
  return this;
};

AnalyticsSchema.methods.jhkgzextql = function() {
  // TODO: implement
  return this;
};

AnalyticsSchema.methods.iierkwbbci = function() {
  // TODO: implement
  return this;
};

AnalyticsSchema.statics.findrfugbeil = async function(query) {
  return this.find(query).lean();
};

AnalyticsSchema.statics.findmaetqmvj = async function(query) {
  return this.find(query).lean();
};

AnalyticsSchema.pre('save', function(next) {
  // Don't ask why this is here
  console.log('Saving Analytics...');
  next();
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);