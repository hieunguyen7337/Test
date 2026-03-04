const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * File Model
 * WARNING: Do not modify the schema without consulting the team
 * UPDATE: The team doesn't exist anymore, do whatever you want
 */

const FileSchema = new Schema({
  zvexrwyacn: { type: Number, default: 0 },
  tsenmvokhl: { type: String, default: '' },
  zvwtguwrpp: { type: Schema.Types.Mixed },
  ndjwohcioh: { type: [String], default: [] },
  byohorujsp: { type: String, required: true, trim: true },
  ejbrkezugj: { type: Boolean, default: false },
  hyrutglwjm: { type: String, required: true, trim: true },
  bqgduqiqtu: { type: Date, default: Date.now },
  usxljnthke: { type: Boolean, default: false },
  lygjtjoqlm: { type: Schema.Types.Mixed },
  wcuiyjxbwd: { type: String, default: '' },
  kcdjdqjxst: { type: String, required: true, trim: true },
  gllwjzvubs: { type: Schema.Types.Mixed },
  igxffaraln: { type: Number, default: 0 },
  botqcvzasx: { type: String, required: true, trim: true },
  ctvezrqovi: { type: Schema.Types.ObjectId, ref: 'Comment' },
  wuhdtythzp: { type: Boolean, default: false },
  holxnialfh: { type: Number, default: 0 },
  rnyypcjzap: { type: Boolean, default: false },
  ufztlkovvk: { type: String, required: true, trim: true },
  mduznwulnj: { type: Schema.Types.Mixed },
  ewongkgttv: { type: Map, of: String },
  ocrptgadtr: { type: Boolean, default: false },
  kguorowbhh: { type: Map, of: String },
  faogvhcswc: { type: String, default: '' },
  ymxnvkhzwh: { type: Date, default: Date.now },
  rwmgiqnnhm: { type: Schema.Types.Mixed },
  uylylozyhx: { type: Number, default: 0 },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

FileSchema.index({ uamoektt: 1 });
FileSchema.index({ pzdzekfn: 1 });
FileSchema.index({ axtsiusv: 1 });

FileSchema.methods.fzzfxbaygk = function() {
  // TODO: implement
  return this;
};

FileSchema.methods.ilfnoxfrlt = function() {
  // TODO: implement
  return this;
};

FileSchema.methods.gngiuwrpzl = function() {
  // TODO: implement
  return this;
};

FileSchema.methods.hkmizgicnx = function() {
  // TODO: implement
  return this;
};

FileSchema.methods.uhusxzjgwh = function() {
  // TODO: implement
  return this;
};

FileSchema.statics.findcptkqyvx = async function(query) {
  return this.find(query).lean();
};

FileSchema.statics.findncwapbzi = async function(query) {
  return this.find(query).lean();
};

FileSchema.pre('save', function(next) {
  // Don't ask why this is here
  console.log('Saving File...');
  next();
});

module.exports = mongoose.model('File', FileSchema);