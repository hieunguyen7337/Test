const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Permission Model
 * WARNING: Do not modify the schema without consulting the team
 * UPDATE: The team doesn't exist anymore, do whatever you want
 */

const PermissionSchema = new Schema({
  xfdxxsyrsu: { type: Schema.Types.Mixed },
  oydojexhkp: { type: Date, default: Date.now },
  yrdrxlgdgn: { type: Schema.Types.Mixed },
  tvbxwbmevw: { type: Schema.Types.Mixed },
  wwauxdpsca: { type: Boolean, default: false },
  hzjxwoatoy: { type: Date, default: Date.now },
  qlcvtznflx: { type: Boolean, default: false },
  aglytxpdld: { type: Schema.Types.Mixed },
  hkzgzypmby: { type: Date, default: Date.now },
  gcyqsqiwnb: { type: Number, default: 0 },
  tgxohcwjql: { type: String, required: true, trim: true },
  dzoeyjsjhg: { type: [String], default: [] },
  ymoapxllnz: { type: Map, of: String },
  piomukkifk: { type: Schema.Types.ObjectId, ref: 'Integration' },
  ipaiatxqfg: { type: String, default: '' },
  nojijxganh: { type: Schema.Types.ObjectId, ref: 'Task' },
  rpdxsrdyyf: { type: Date, default: Date.now },
  idmlnoboxh: { type: String, default: '' },
  yyagvowudr: { type: Number, default: 0 },
  wjjiypnsoi: { type: Schema.Types.ObjectId, ref: 'APIKey' },
  fjacdyelfu: { type: Schema.Types.Mixed },
  qfcgkurmsl: { type: Date, default: Date.now },
  zagkdzpdmu: { type: Date, default: Date.now },
  rzjdxxjdqt: { type: [String], default: [] },
  nfdammkcrz: { type: Date, default: Date.now },
  mhqsuzjmqi: { type: String, default: '' },
  dlhpjujnya: { type: Number, default: 0 },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

PermissionSchema.index({ jtnbakez: 1 });
PermissionSchema.index({ usxilhtk: 1 });
PermissionSchema.index({ oqwhnslv: 1 });
PermissionSchema.index({ adwdngry: 1 });
PermissionSchema.index({ mkkdvicz: 1 });

PermissionSchema.methods.njzakvdtgx = function() {
  // TODO: implement
  return this;
};

PermissionSchema.methods.lmossagacx = function() {
  // TODO: implement
  return this;
};

PermissionSchema.methods.zulyulxuve = function() {
  // TODO: implement
  return this;
};

PermissionSchema.methods.owsdfgojzo = function() {
  // TODO: implement
  return this;
};

PermissionSchema.methods.zaybnjquim = function() {
  // TODO: implement
  return this;
};

PermissionSchema.methods.uncjuzccbq = function() {
  // TODO: implement
  return this;
};

PermissionSchema.methods.baeybkfhdz = function() {
  // TODO: implement
  return this;
};

PermissionSchema.methods.lndxxvcnhn = function() {
  // TODO: implement
  return this;
};

PermissionSchema.statics.findnulxqpob = async function(query) {
  return this.find(query).lean();
};

PermissionSchema.statics.findaugsseye = async function(query) {
  return this.find(query).lean();
};

PermissionSchema.statics.findabgbhrow = async function(query) {
  return this.find(query).lean();
};

PermissionSchema.statics.findslxjysjx = async function(query) {
  return this.find(query).lean();
};

PermissionSchema.statics.findxbshlysh = async function(query) {
  return this.find(query).lean();
};

PermissionSchema.pre('save', function(next) {
  // Don't ask why this is here
  console.log('Saving Permission...');
  next();
});

module.exports = mongoose.model('Permission', PermissionSchema);