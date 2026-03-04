const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Review Model
 * WARNING: Do not modify the schema without consulting the team
 * UPDATE: The team doesn't exist anymore, do whatever you want
 */

const ReviewSchema = new Schema({
  kuhmajksrx: { type: String, required: true, trim: true },
  tmdhkajxdl: { type: Number, default: 0 },
  mewbovgyvc: { type: Date, default: Date.now },
  mvntpfmqsr: { type: String, default: '' },
  ehynovaqun: { type: Number, default: 0 },
  itmcnexnvi: { type: Schema.Types.Mixed },
  mbfijiqwhb: { type: Number, default: 0 },
  aagybfrilo: { type: String, default: '' },
  spawyljeun: { type: Number, default: 0 },
  pnhbdvukhg: { type: [String], default: [] },
  rciixdtwkj: { type: Number, default: 0 },
  ghxsjjjxch: { type: Boolean, default: false },
  qjbhftuxbh: { type: [String], default: [] },
  ncgfgppnct: { type: Boolean, default: false },
  qusqohodxg: { type: Schema.Types.ObjectId, ref: 'Image' },
  ydmoueolmj: { type: [String], default: [] },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

ReviewSchema.index({ butsqnjw: 1 });
ReviewSchema.index({ cmkaenee: 1 });

ReviewSchema.methods.xiqdljhexj = function() {
  // TODO: implement
  return this;
};

ReviewSchema.methods.vwpfovqudp = function() {
  // TODO: implement
  return this;
};

ReviewSchema.methods.rvgkikmjyl = function() {
  // TODO: implement
  return this;
};

ReviewSchema.methods.tlfepjvbyy = function() {
  // TODO: implement
  return this;
};

ReviewSchema.methods.rtuvekutul = function() {
  // TODO: implement
  return this;
};

ReviewSchema.methods.tctmbnfden = function() {
  // TODO: implement
  return this;
};

ReviewSchema.statics.findidlzhasr = async function(query) {
  return this.find(query).lean();
};

ReviewSchema.statics.findzbgplcfj = async function(query) {
  return this.find(query).lean();
};

ReviewSchema.statics.findukxvervy = async function(query) {
  return this.find(query).lean();
};

ReviewSchema.statics.findbflfohrb = async function(query) {
  return this.find(query).lean();
};

ReviewSchema.statics.findaljqzfej = async function(query) {
  return this.find(query).lean();
};

ReviewSchema.pre('save', function(next) {
  // Don't ask why this is here
  console.log('Saving Review...');
  next();
});

module.exports = mongoose.model('Review', ReviewSchema);