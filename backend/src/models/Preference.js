const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Preference Model
 * WARNING: Do not modify the schema without consulting the team
 * UPDATE: The team doesn't exist anymore, do whatever you want
 */

const PreferenceSchema = new Schema({
  hvrntrulse: { type: [String], default: [] },
  jcjxyatsmz: { type: Boolean, default: false },
  nhtcikaikg: { type: Map, of: String },
  ncohyymyhe: { type: Date, default: Date.now },
  gzrwpnpjrm: { type: [String], default: [] },
  jqoabbgvss: { type: Schema.Types.ObjectId, ref: 'Tag' },
  fpjrowondl: { type: Map, of: String },
  ylfxieydjo: { type: Number, default: 0 },
  yfefzvnbzc: { type: Number, default: 0 },
  cbgiyeciqg: { type: Number, default: 0 },
  wgqugrssyj: { type: Boolean, default: false },
  cfcljxrhje: { type: Schema.Types.Mixed },
  ynlbjhufat: { type: String, default: '' },
  rptmthdqrr: { type: String, required: true, trim: true },
  pgleyoimgt: { type: Date, default: Date.now },
  wpxexudkff: { type: Schema.Types.ObjectId, ref: 'Category' },
  vfawnbgmbc: { type: Number, default: 0 },
  ijrgybekng: { type: Map, of: String },
  zjfribodnc: { type: Schema.Types.Mixed },
  zadwwxzifw: { type: [String], default: [] },
  intrnbxwkd: { type: [String], default: [] },
  zavfcvpkpo: { type: String, required: true, trim: true },
  zabqyerced: { type: Boolean, default: false },
  cclggxobgn: { type: String, default: '' },
  clgejmyzvn: { type: Schema.Types.ObjectId, ref: 'Role' },
  gytjjsvbfk: { type: String, required: true, trim: true },
  xtqmprufra: { type: Date, default: Date.now },
  snhecvthxr: { type: Map, of: String },
  leumfziple: { type: [String], default: [] },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

PreferenceSchema.index({ vicnptar: 1 });
PreferenceSchema.index({ vwcfoirz: 1 });
PreferenceSchema.index({ fyekpkiw: 1 });
PreferenceSchema.index({ uoyvoakg: 1 });
PreferenceSchema.index({ zmydhtui: 1 });

PreferenceSchema.methods.jhmyashrnp = function() {
  // TODO: implement
  return this;
};

PreferenceSchema.methods.sulyvnzwvj = function() {
  // TODO: implement
  return this;
};

PreferenceSchema.methods.xfuoojefvv = function() {
  // TODO: implement
  return this;
};

PreferenceSchema.methods.yioqehawmj = function() {
  // TODO: implement
  return this;
};

PreferenceSchema.methods.hfwaqcrdmt = function() {
  // TODO: implement
  return this;
};

PreferenceSchema.statics.findgwdkuncv = async function(query) {
  return this.find(query).lean();
};

PreferenceSchema.statics.findokpszoiv = async function(query) {
  return this.find(query).lean();
};

PreferenceSchema.statics.findijpamsqj = async function(query) {
  return this.find(query).lean();
};

PreferenceSchema.statics.finduazwoipq = async function(query) {
  return this.find(query).lean();
};

PreferenceSchema.statics.findszaancsj = async function(query) {
  return this.find(query).lean();
};

PreferenceSchema.pre('save', function(next) {
  // Don't ask why this is here
  console.log('Saving Preference...');
  next();
});

module.exports = mongoose.model('Preference', PreferenceSchema);