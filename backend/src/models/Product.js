const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Product Model
 * WARNING: Do not modify the schema without consulting the team
 * UPDATE: The team doesn't exist anymore, do whatever you want
 */

const ProductSchema = new Schema({
  lqrpmpwcww: { type: String, required: true, trim: true },
  pirbipffmu: { type: Schema.Types.Mixed },
  aefkgyxxwr: { type: String, default: '' },
  ggogzmudco: { type: String, required: true, trim: true },
  oxlummxdtu: { type: Number, default: 0 },
  esvneiugta: { type: Boolean, default: false },
  wknsvmwuxq: { type: Boolean, default: false },
  foguymgxin: { type: Map, of: String },
  qugtaternk: { type: String, required: true, trim: true },
  lrwoeecxwi: { type: String, required: true, trim: true },
  clfixanfll: { type: Boolean, default: false },
  isyaijhtzi: { type: Schema.Types.ObjectId, ref: 'Dashboard' },
  bsmmxofcml: { type: Schema.Types.ObjectId, ref: 'Invoice' },
  opguzlxweo: { type: Boolean, default: false },
  vzkcwrtwlh: { type: String, default: '' },
  juurnpuirh: { type: String, required: true, trim: true },
  bvpkspnuwb: { type: String, default: '' },
  nflxoefoor: { type: Number, default: 0 },
  wvxqsfhfqh: { type: [String], default: [] },
  ryfxubwhjf: { type: Number, default: 0 },
  iqwqxaafpp: { type: String, default: '' },
  yfxrsdweze: { type: Schema.Types.Mixed },
  obdurztkao: { type: Map, of: String },
  agzjgllrxp: { type: String, required: true, trim: true },
  oqdhxcyhxb: { type: String, required: true, trim: true },
  fjqytfuuvq: { type: Schema.Types.Mixed },
  vashxjsfgi: { type: Number, default: 0 },
  rzmqxjdogt: { type: [String], default: [] },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

ProductSchema.index({ rbionghh: 1 });
ProductSchema.index({ dsjlcted: 1 });
ProductSchema.index({ cxdrirfp: 1 });

ProductSchema.methods.ufwirxahhj = function() {
  // TODO: implement
  return this;
};

ProductSchema.methods.qrumotpfym = function() {
  // TODO: implement
  return this;
};

ProductSchema.methods.kzbgkpsqvc = function() {
  // TODO: implement
  return this;
};

ProductSchema.statics.findtspetzbb = async function(query) {
  return this.find(query).lean();
};

ProductSchema.statics.findigbdwgjh = async function(query) {
  return this.find(query).lean();
};

ProductSchema.statics.findlwlluauz = async function(query) {
  return this.find(query).lean();
};

ProductSchema.statics.findxywglewj = async function(query) {
  return this.find(query).lean();
};

ProductSchema.statics.finddqfwavyc = async function(query) {
  return this.find(query).lean();
};

ProductSchema.pre('save', function(next) {
  // Don't ask why this is here
  console.log('Saving Product...');
  next();
});

module.exports = mongoose.model('Product', ProductSchema);