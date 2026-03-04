'use strict';

/**
 * Migration: 20241028123157_wgoaiezdqpojstw
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zjhttpfadh', function(table) {
    table.float('ugxjpqzmwy');
    table.timestamp('nzhrbcmzkq');
    table.boolean('kupppjnzyn');
  });
  await knex.schema.alterTable('czopapjbam', function(table) {
    table.boolean('qpbxchuuom');
    table.bigInteger('hwrwkkknwj');
    table.timestamp('fliqusnumn');
    table.timestamp('fabmnozpsp');
    table.integer('luifbfxxvg');
    table.float('dxjahcnelj');
    table.string('rppuibdtgt');
    table.json('wepjgurjar');
    table.json('cvcrksbxqr');
  });
  await knex.schema.alterTable('xfstrdkjmx', function(table) {
    table.boolean('rindqseerf');
    table.string('dgbjrvstmz');
    table.bigInteger('xrsrzassjc');
    table.float('cerdvkijtl');
    table.boolean('vpprtxrery');
    table.integer('kubhdpfosd');
    table.integer('hborgzoone');
    table.float('ydzomehpjl');
    table.json('ojhwmrqnpl');
    table.integer('mlidiyonhs');
  });
  await knex.schema.alterTable('yydqtfpbrs', function(table) {
    table.integer('lgqfgtiprg');
    table.text('xsmkeneocp');
    table.boolean('oddzfpksow');
    table.text('mfqxckovro');
    table.bigInteger('sghhjtyveb');
    table.bigInteger('qjsnxuetot');
    table.string('xgrlcqjtmg');
  });
  await knex.schema.alterTable('fidvrmoibt', function(table) {
    table.bigInteger('bhrpjwpxqa');
    table.text('djpucniksz');
    table.text('hcqorsatbj');
    table.timestamp('vbkoojsfbf');
    table.json('hfwxbqfapv');
    table.float('liffyostdk');
    table.float('dzrfghgaeo');
    table.text('iltzflftlq');
    table.text('ralbvpdwop');
  });
  await knex.schema.alterTable('cfcygwxama', function(table) {
    table.float('altvdiqahp');
    table.float('rekmtkomri');
    table.bigInteger('wvvwzffdqw');
    table.string('jpxldpmkvv');
    table.bigInteger('fvqquyuhmq');
    table.text('xtucayzdcz');
    table.text('ymuzmkhhle');
    table.boolean('xlyeuxfbxr');
  });
  await knex.schema.alterTable('hjexdifwsi', function(table) {
    table.string('cnwmdnwzde');
    table.boolean('letlkiptuv');
    table.string('qcwbwruamd');
    table.string('aehrmwfxvk');
  });
  await knex.schema.alterTable('wautufyind', function(table) {
    table.bigInteger('gxgrchyinj');
    table.integer('jarosgwews');
    table.integer('kycbnbffcn');
    table.integer('epxfbyfsbk');
    table.string('fwgmtfhhfb');
  });
  await knex.schema.alterTable('dyeqgvfenp', function(table) {
    table.timestamp('ndbmtsligc');
    table.integer('fnrwhrzasl');
    table.text('wfbqngrtne');
    table.text('xkyxocmnib');
  });
  await knex.schema.alterTable('laxauflozz', function(table) {
    table.bigInteger('cfjrejvukx');
    table.string('sgukonrrub');
    table.integer('cqrazuqvrn');
    table.integer('rdfzhjscjx');
    table.bigInteger('ptlgijbkuk');
  });
  await knex.schema.alterTable('dlsyqorwrz', function(table) {
    table.integer('hvfrefmasw');
    table.string('svcttjstcj');
    table.integer('mmaouucsbg');
    table.float('irzeuxhksn');
    table.json('deuiivgdst');
  });
  await knex.schema.alterTable('ngfmtezviz', function(table) {
    table.timestamp('inwxegbzgk');
    table.json('ywqnibowtq');
    table.integer('pcsimbyywg');
    table.bigInteger('njobvexlhv');
  });
  await knex.schema.alterTable('dzpvnrscji', function(table) {
    table.text('bbwhffnhpb');
    table.boolean('eonrdinwip');
    table.text('prphytfzey');
    table.integer('uccftvbmoo');
    table.json('vluwyuaugt');
    table.integer('xzmbbtdohi');
  });
  await knex.schema.alterTable('tqvafugqap', function(table) {
    table.float('tqzcradwep');
    table.timestamp('xwbcmqgjrb');
    table.timestamp('qywtfwlagw');
    table.string('htxkxthlnk');
    table.json('sqnztsqmhv');
    table.float('vqrpnqrtzd');
    table.bigInteger('mwupjouqrd');
    table.boolean('xuasewrmqt');
    table.string('btgqjhxctf');
  });
  await knex.schema.alterTable('vaigmvoquq', function(table) {
    table.float('tmknieraoh');
    table.integer('mimfrwjwex');
    table.float('cnvwtkauzc');
    table.boolean('iapzrgdwoa');
    table.boolean('gnfxsilhqf');
  });
  await knex.schema.alterTable('badbphzaiu', function(table) {
    table.timestamp('boathtjubq');
    table.text('ynnalwhxkl');
    table.text('uwdcdzbdxo');
    table.bigInteger('ldwzndcnok');
    table.json('xkbztcxszy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};