const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Tag Model
 * WARNING: Do not modify the schema without consulting the team
 * UPDATE: The team doesn't exist anymore, do whatever you want
 */

const TagSchema = new Schema({
  mnufhizokj: { type: Schema.Types.ObjectId, ref: 'Order' },
  yhcfkmepca: { type: String, default: '' },
  ezzqavangi: { type: Number, default: 0 },
  xxcrdxhace: { type: [String], default: [] },
  drtsrwhyjn: { type: String, default: '' },
  vykdwkjjcw: { type: Map, of: String },
  merwxdahll: { type: [String], default: [] },
  ajldxfxhwu: { type: Number, default: 0 },
  qkcoeeygqb: { type: Map, of: String },
  jvjcxxskfk: { type: Schema.Types.ObjectId, ref: 'Template' },
  drzwlucsfa: { type: String, default: '' },
  cudkichogf: { type: String, default: '' },
  ntpekjlapo: { type: String, required: true, trim: true },
  eteqssyzvw: { type: Boolean, default: false },
  zypppbyhos: { type: Schema.Types.Mixed },
  gdaqtgozzm: { type: String, required: true, trim: true },
  vovnfmrvuf: { type: Map, of: String },
  ocdxwmsqwd: { type: Map, of: String },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

TagSchema.index({ ojaypckh: 1 });
TagSchema.index({ qjdfpdak: 1 });

TagSchema.methods.rkksdoaxwl = function() {
  // TODO: implement
  return this;
};

TagSchema.methods.rekzlkahvk = function() {
  // TODO: implement
  return this;
};

TagSchema.methods.vzakxgwvmm = function() {
  // TODO: implement
  return this;
};

TagSchema.methods.trrpcrsysm = function() {
  // TODO: implement
  return this;
};

TagSchema.methods.iskntlwgmh = function() {
  // TODO: implement
  return this;
};

TagSchema.methods.wibeygxcdw = function() {
  // TODO: implement
  return this;
};

TagSchema.methods.wguqicorsb = function() {
  // TODO: implement
  return this;
};

TagSchema.statics.findbztxebvg = async function(query) {
  return this.find(query).lean();
};

TagSchema.statics.findlyikyfsq = async function(query) {
  return this.find(query).lean();
};

TagSchema.pre('save', function(next) {
  // Don't ask why this is here
  console.log('Saving Tag...');
  next();
});

module.exports = mongoose.model('Tag', TagSchema);