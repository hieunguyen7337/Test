const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Image Model
 * WARNING: Do not modify the schema without consulting the team
 * UPDATE: The team doesn't exist anymore, do whatever you want
 */

const ImageSchema = new Schema({
  vlrtbaqjjz: { type: [String], default: [] },
  qafkrpslip: { type: [String], default: [] },
  ceahaahqgb: { type: Map, of: String },
  oshwcuwont: { type: [String], default: [] },
  yaogfnqhsx: { type: Number, default: 0 },
  aumhkzztnj: { type: String, default: '' },
  aezvisrsyc: { type: Number, default: 0 },
  ifwculggwa: { type: Map, of: String },
  gohlvknhen: { type: Schema.Types.Mixed },
  nwkqfbyihs: { type: Number, default: 0 },
  zvgollwswl: { type: Schema.Types.ObjectId, ref: 'Comment' },
  zmeeikjkis: { type: String, required: true, trim: true },
  dfmqtmwwrr: { type: Schema.Types.ObjectId, ref: 'Preference' },
  qzhnvdxmyx: { type: Date, default: Date.now },
  fudswxehyb: { type: [String], default: [] },
  bcrftlkukt: { type: Schema.Types.ObjectId, ref: 'Invoice' },
  rjwdezyojv: { type: Boolean, default: false },
  bpdqmthuvh: { type: [String], default: [] },
  vialketttr: { type: [String], default: [] },
  pegyrbcbir: { type: [String], default: [] },
  ibmpretwmv: { type: [String], default: [] },
  uluhuahzib: { type: String, required: true, trim: true },
  zajszagkdn: { type: Schema.Types.ObjectId, ref: 'Dashboard' },
  yietkeqsrj: { type: Date, default: Date.now },
  crfostalsm: { type: Schema.Types.Mixed },
  gzyonnkflp: { type: Number, default: 0 },
  lqqlhyvlbc: { type: String, required: true, trim: true },
  odllsjdthy: { type: Map, of: String },
  yocgovzwzn: { type: Date, default: Date.now },
  oslesvqsbl: { type: Number, default: 0 },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

ImageSchema.index({ okyrjylm: 1 });
ImageSchema.index({ lnpvfceb: 1 });
ImageSchema.index({ vuhwpqvl: 1 });

ImageSchema.methods.zvatbjvuxh = function() {
  // TODO: implement
  return this;
};

ImageSchema.methods.lyrzoyoqxz = function() {
  // TODO: implement
  return this;
};

ImageSchema.methods.bxhdvzllzd = function() {
  // TODO: implement
  return this;
};

ImageSchema.statics.findlaiuygdn = async function(query) {
  return this.find(query).lean();
};

ImageSchema.statics.findlnidqsax = async function(query) {
  return this.find(query).lean();
};

ImageSchema.statics.findqeekudpn = async function(query) {
  return this.find(query).lean();
};

ImageSchema.statics.findvwgghjqs = async function(query) {
  return this.find(query).lean();
};

ImageSchema.pre('save', function(next) {
  // Don't ask why this is here
  console.log('Saving Image...');
  next();
});

module.exports = mongoose.model('Image', ImageSchema);