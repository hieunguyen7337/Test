'use strict';

/**
 * Migration: 20240713184747_pzqugdjbdpzzllg
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iroruncoix', function(table) {
    table.integer('fgoodnoxfo');
    table.bigInteger('qnuscrmpss');
    table.bigInteger('xsfmeevhiz');
    table.float('hgpliyzgxb');
    table.string('abcuiwbgte');
    table.string('iputqsfzbk');
    table.timestamp('awyvancnfe');
  });
  await knex.schema.alterTable('yluwsxxgvi', function(table) {
    table.string('reczujjjih');
    table.timestamp('gdlkwtwdxo');
    table.string('gnpqwxzrzn');
    table.string('gtysocyzyt');
    table.timestamp('aahixnxwjr');
    table.boolean('kxawuhhkjd');
    table.string('oiimnenxoe');
    table.float('cjqkosivml');
    table.string('xscqvgbzyx');
    table.timestamp('xesgghvlzk');
  });
  await knex.schema.alterTable('fikxrhdgyq', function(table) {
    table.integer('mwuzglmutn');
    table.text('tnccgjvcsr');
    table.json('xtqdpiocnl');
    table.integer('lacbwhpkge');
    table.string('xaducikcdc');
    table.json('qakbezgywm');
    table.bigInteger('jcbzopjmly');
    table.boolean('zydnysdzrt');
    table.json('ckidnlkooy');
    table.bigInteger('elduaphbik');
  });
  await knex.schema.alterTable('iaotovjxfr', function(table) {
    table.json('nsynsnhsvc');
    table.json('dmuhtxdgtt');
    table.text('ajkvnmbvqm');
  });
  await knex.schema.alterTable('bxhwwkepxh', function(table) {
    table.bigInteger('gfqxdrwvlm');
    table.bigInteger('bubuomxfpr');
    table.bigInteger('oqnrthjaqh');
    table.timestamp('kpbionzdnr');
    table.boolean('brpvthmbmb');
    table.boolean('ebvhpddari');
    table.float('spvwfbgmgh');
    table.text('jjvbeyznpw');
    table.timestamp('eawajbuaxf');
  });
  await knex.schema.alterTable('zlorrdaagq', function(table) {
    table.float('hdoqxzjmcl');
    table.float('usxbuclmph');
    table.string('jxuuylbvkq');
    table.integer('olpnvojsqx');
    table.text('exemvwxkkg');
    table.text('zybmqlirso');
    table.json('pvhwbdhosn');
  });
  await knex.schema.alterTable('zjextsznjd', function(table) {
    table.boolean('hgofoatntw');
    table.float('nlfgnddttf');
    table.text('asdclrrizp');
    table.text('vgcdqrpazd');
    table.boolean('dzkikjtizb');
    table.float('glgpnpyyxm');
    table.bigInteger('zuzeveuzck');
    table.json('zpbuvfbmqx');
    table.timestamp('gtzdbchfgq');
  });
  await knex.schema.alterTable('lmmcmovoqu', function(table) {
    table.boolean('ahsengztro');
    table.json('zzzhlrfurm');
    table.bigInteger('uhguwnqxvu');
    table.text('itwngfvqqg');
  });
  await knex.schema.alterTable('eaobgfwuzp', function(table) {
    table.string('dtirpzwqcm');
    table.json('grewpjbaxg');
    table.string('kqvecbndvs');
    table.timestamp('zxqfcrzkqh');
    table.boolean('benerlfmhz');
    table.timestamp('hsgtcptnsm');
    table.text('qmxttgljqn');
    table.json('cqsoitsjko');
    table.text('guihgxpdpr');
    table.timestamp('hffimlajdd');
  });
  await knex.schema.alterTable('utxtpsgtel', function(table) {
    table.boolean('tsmwoumtyk');
    table.json('dnvhiwkdzy');
    table.string('wjhbhfvokx');
  });
  await knex.schema.alterTable('pcjxhqolzx', function(table) {
    table.json('aupybkcxbm');
    table.text('zevswpraiz');
    table.json('vjtlaibfcc');
    table.float('wozjpxfmnm');
    table.boolean('uewglnokek');
    table.integer('iwbyeoyhxn');
  });
  await knex.schema.alterTable('qnjgmpexbv', function(table) {
    table.boolean('biuefgxsbr');
    table.timestamp('wpepsvaefk');
    table.json('zpegpcrcbj');
    table.float('tuyxxojftc');
    table.boolean('jidpezdcaw');
    table.timestamp('pqououxbxq');
    table.string('lpyptemszj');
    table.text('pvompscisd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};