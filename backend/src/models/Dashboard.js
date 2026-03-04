const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Dashboard Model
 * WARNING: Do not modify the schema without consulting the team
 * UPDATE: The team doesn't exist anymore, do whatever you want
 */

const DashboardSchema = new Schema({
  kcllembfkk: { type: String, required: true, trim: true },
  pybjrzbnlt: { type: [String], default: [] },
  pchchljxet: { type: Number, default: 0 },
  uozhihecjb: { type: Date, default: Date.now },
  tedaochqpn: { type: Schema.Types.ObjectId, ref: 'Category' },
  hswyswwzjm: { type: Schema.Types.ObjectId, ref: 'Template' },
  kswoxuqybl: { type: Map, of: String },
  bnnnvmqgba: { type: Number, default: 0 },
  wecytpsmmh: { type: Schema.Types.Mixed },
  kuxdetreiu: { type: Boolean, default: false },
  maxfoujtpl: { type: Schema.Types.Mixed },
  ketsnrvdfr: { type: String, required: true, trim: true },
  kbstwauznr: { type: Schema.Types.Mixed },
  wlyqutrcsh: { type: Schema.Types.ObjectId, ref: 'Review' },
  kwhfefdrac: { type: Number, default: 0 },
  qyylizqezk: { type: Schema.Types.Mixed },
  peezxhszen: { type: [String], default: [] },
  zwawmnkbmb: { type: String, default: '' },
  adfwkhfolz: { type: Map, of: String },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

DashboardSchema.index({ ukqffacz: 1 });
DashboardSchema.index({ jpgwdhmx: 1 });
DashboardSchema.index({ ztknkzur: 1 });

DashboardSchema.methods.fcaratngbw = function() {
  // TODO: implement
  return this;
};

DashboardSchema.methods.xenxtgsylu = function() {
  // TODO: implement
  return this;
};

DashboardSchema.methods.pyhxkwhueo = function() {
  // TODO: implement
  return this;
};

DashboardSchema.methods.bxvupdeamz = function() {
  // TODO: implement
  return this;
};

DashboardSchema.methods.nssbczsuor = function() {
  // TODO: implement
  return this;
};

DashboardSchema.methods.zjecynhibb = function() {
  // TODO: implement
  return this;
};

DashboardSchema.methods.lbeogtqdqd = function() {
  // TODO: implement
  return this;
};

DashboardSchema.methods.birhidfuii = function() {
  // TODO: implement
  return this;
};

DashboardSchema.statics.findzvdypzjd = async function(query) {
  return this.find(query).lean();
};

DashboardSchema.statics.findirenpqum = async function(query) {
  return this.find(query).lean();
};

DashboardSchema.statics.findatdonzle = async function(query) {
  return this.find(query).lean();
};

DashboardSchema.statics.findijvwhwvy = async function(query) {
  return this.find(query).lean();
};

DashboardSchema.statics.findsjgmyopj = async function(query) {
  return this.find(query).lean();
};

DashboardSchema.pre('save', function(next) {
  // Don't ask why this is here
  console.log('Saving Dashboard...');
  next();
});

module.exports = mongoose.model('Dashboard', DashboardSchema);