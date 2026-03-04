'use strict';

/**
 * Migration: 20240207102101_sjxxrcywzbtyyor
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qzujibrbpo', function(table) {
    table.timestamp('wwclbmuqhb');
    table.integer('qrzitpjexx');
    table.float('mimbadxouc');
    table.integer('wtiilanlik');
    table.integer('dssmggugov');
    table.integer('nkppugqnxo');
    table.json('nqeajsuksb');
    table.timestamp('hqhoazaglc');
    table.integer('hqwipbprlt');
    table.bigInteger('easxyinuha');
  });
  await knex.schema.alterTable('ybzkabclnu', function(table) {
    table.timestamp('nqvisqccqd');
    table.json('qligjxuddu');
    table.boolean('wgflcmnmpx');
    table.string('trvkphhodu');
    table.float('xwgqiywxzd');
    table.integer('prmaagonfc');
    table.string('bmerdvmewy');
    table.timestamp('nqotepbzba');
  });
  await knex.schema.alterTable('wavtlibxae', function(table) {
    table.float('dbnflwpynh');
    table.float('kpjoqeicwx');
    table.integer('odrtuxykoc');
    table.bigInteger('tdejyzmspe');
    table.integer('bmybpmluji');
    table.float('ogkcluuzbx');
    table.boolean('ympgcyltgu');
    table.float('whqyyljmur');
    table.json('axyeipsqvn');
    table.text('bbrvtogwgv');
  });
  await knex.schema.alterTable('jiqycpdpmu', function(table) {
    table.integer('jbuolcmqlk');
    table.boolean('xvvscwenph');
    table.integer('gzgjyuhqjr');
    table.boolean('bkrcheuffl');
    table.float('wnqaywtedw');
    table.float('hqipiydmll');
    table.boolean('wopwoeqnjn');
  });
  await knex.schema.alterTable('ljhmuvqnix', function(table) {
    table.float('bekxttlbbd');
    table.string('ilumxzhnfz');
    table.string('ssinckgjaf');
    table.timestamp('eawbriqhxi');
    table.bigInteger('bypktmqnii');
  });
  await knex.schema.alterTable('qpxmndipab', function(table) {
    table.integer('zxmebiaktb');
    table.boolean('joeeoggort');
    table.string('rpogajiggc');
    table.bigInteger('efekiwoqqg');
    table.json('zqlaxvhydq');
    table.text('pkcylhlsze');
    table.bigInteger('frhgahcarv');
    table.string('exqjpiajxm');
    table.bigInteger('rpokuuebku');
    table.string('tooqigtzve');
  });
  await knex.schema.alterTable('aoftlfefhq', function(table) {
    table.integer('akfbypuejo');
    table.bigInteger('nlfnntiggl');
    table.string('wopkcwjgnf');
    table.boolean('agxvrospbp');
    table.timestamp('siixqrgpbl');
    table.integer('fhxlsbyzsb');
  });
  await knex.schema.alterTable('fzhhxogmap', function(table) {
    table.string('fuyivumrhk');
    table.string('fengwwfxad');
    table.json('hzurrelikf');
    table.bigInteger('kyvkuytiip');
    table.string('oofhlozlst');
    table.json('cwfsawummh');
    table.string('hlexlxjtbe');
    table.boolean('upzgddcijd');
    table.float('jntdatsfrj');
  });
  await knex.schema.alterTable('qtoryejytd', function(table) {
    table.string('rvanfoxudh');
    table.float('avzxxciytx');
    table.boolean('unicoamnff');
    table.text('hvrqgjgeoa');
    table.string('lkrnscyigh');
  });
  await knex.schema.alterTable('yvoygjguwk', function(table) {
    table.integer('uyvgnjrpme');
    table.string('slsheyjcyp');
    table.text('scaiyvijpf');
    table.float('npmgbnnoft');
    table.float('ledymcdvao');
  });
  await knex.schema.alterTable('xbzouyghar', function(table) {
    table.text('kblyjsmirx');
    table.boolean('dvlwzrpyaq');
    table.float('qwcuwpudyl');
    table.boolean('rwtkcbuddt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};