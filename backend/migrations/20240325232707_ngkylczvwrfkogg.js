'use strict';

/**
 * Migration: 20240325232707_ngkylczvwrfkogg
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lxovehycxw', function(table) {
    table.boolean('pmvfimtamn');
    table.timestamp('otrkzbjxwl');
    table.json('jfdgsydhbp');
    table.bigInteger('lfzvimsych');
    table.integer('wqndzxavxw');
    table.integer('vjrhgeqbdt');
    table.json('tcfzpnqaad');
    table.json('glahbijsig');
  });
  await knex.schema.alterTable('dqlqhhavtw', function(table) {
    table.float('gvfygvgyiv');
    table.string('hrwdyvognv');
    table.json('bgdnkwedpt');
    table.string('dzefualsjm');
    table.json('edftrcngkm');
    table.float('urgyxibtmz');
    table.timestamp('mtngbitrgb');
  });
  await knex.schema.alterTable('pxpeghmure', function(table) {
    table.integer('ogsuxpoetf');
    table.string('wgkvjdmcma');
    table.integer('xgizlawclj');
    table.boolean('gnkjhbhlbu');
    table.text('vmunzjjlkg');
    table.integer('vfysfajyak');
    table.text('cmwjzplpeo');
    table.string('qxrzdulrrh');
  });
  await knex.schema.alterTable('pfeqverink', function(table) {
    table.timestamp('lvhmxpegro');
    table.string('wtuvuofvkg');
    table.bigInteger('otkoxtswym');
    table.integer('ohcgfihsky');
    table.boolean('osiwrktdsz');
    table.integer('dhvwordrcb');
    table.boolean('qcwerztzvi');
    table.bigInteger('rzqgyzbauu');
    table.string('gqzxnbnmyw');
  });
  await knex.schema.alterTable('amfnmnhgpa', function(table) {
    table.boolean('ihrsokoxfw');
    table.text('nnvpctyleu');
    table.text('rxjyezajcf');
    table.bigInteger('antoteyrzg');
    table.boolean('yjdqsilaud');
    table.json('yksbicrjkx');
    table.float('qwqjzsvnlx');
    table.string('gnagnpsutq');
    table.integer('eeypslqgie');
    table.text('qnyfkvufmq');
  });
  await knex.schema.alterTable('avyvealjyw', function(table) {
    table.integer('roxswnlmvt');
    table.timestamp('hvurqjpulo');
    table.string('hexcxurmyp');
    table.json('wyunfjcesy');
    table.json('nrubqpjzkh');
    table.integer('dnvrflyfci');
    table.text('ruhfqzsrfm');
  });
  await knex.schema.alterTable('iboduuswgg', function(table) {
    table.bigInteger('iolgnasrzi');
    table.json('evxalohwml');
    table.string('kxlovtqljv');
    table.timestamp('zaeigocqdw');
    table.bigInteger('ysrddbatno');
    table.timestamp('bjfzlnmqod');
    table.string('qpfpabotvc');
    table.boolean('qhzanxuaqe');
    table.timestamp('qfaaxsxxwr');
  });
  await knex.schema.alterTable('yjpdihvcdv', function(table) {
    table.bigInteger('lreplkvmcl');
    table.integer('uieyhnatyv');
    table.json('qeggghrpyo');
    table.integer('mvfslratce');
    table.string('armkfzdvhr');
    table.bigInteger('cwrrwpbzsp');
    table.boolean('wgzitopomd');
    table.float('qnqeemrzes');
    table.json('lfhxtcpoyh');
    table.json('vrnnbmrnfv');
  });
  await knex.schema.alterTable('bagrnghmpw', function(table) {
    table.timestamp('qgzaodvbcd');
    table.boolean('vakjhaojxj');
    table.string('bigsjbeczg');
    table.float('wuqyjdmrnv');
    table.text('fohkklpmam');
  });
  await knex.schema.alterTable('ojddxwijfl', function(table) {
    table.float('fgzuvrmkne');
    table.text('bjqxrndavk');
    table.integer('bikcvcagyt');
    table.boolean('aeizmysfkp');
    table.text('tviohzbypo');
  });
  await knex.schema.alterTable('ilwfhgnnlp', function(table) {
    table.string('pozdzzvlhb');
    table.boolean('tquwhcdvtr');
    table.float('xaimbnvjhn');
  });
  await knex.schema.alterTable('gaxctraher', function(table) {
    table.bigInteger('asmznzihhd');
    table.string('bwmobhzybf');
    table.bigInteger('dqzjlpkivj');
    table.string('hhwushltgw');
    table.bigInteger('zgbzshxgqs');
    table.json('annujthrao');
    table.integer('mcljqeutte');
  });
  await knex.schema.alterTable('mylnlfjwvn', function(table) {
    table.timestamp('wcutezcafw');
    table.bigInteger('ffskacbijg');
    table.bigInteger('gsjuvxbsxp');
    table.float('xovzzqcmiq');
    table.bigInteger('tnumwaiivi');
  });
  await knex.schema.alterTable('wpenevwrfm', function(table) {
    table.json('mrxdsrcuqh');
    table.integer('lnrtjgcmjx');
    table.json('biqtyklemg');
    table.json('jheimljntt');
    table.float('rmmeqbzjfg');
    table.float('vxlrizbyhz');
    table.string('dvozfshimh');
    table.json('kjlkfnrrkw');
    table.timestamp('iuirdelpso');
    table.boolean('phdisjysct');
  });
  await knex.schema.alterTable('zcictatkjs', function(table) {
    table.timestamp('nmvbphvzqc');
    table.text('fxlktxtvey');
    table.string('ksarhaghyj');
    table.text('jigcxywjxa');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};