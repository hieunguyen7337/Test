'use strict';

/**
 * Migration: 20240419122326_nzbgkcekskiodbn
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('aufzxrxzzc', function(table) {
    table.bigInteger('uiizardcph');
    table.string('yvgxrlhohh');
    table.bigInteger('tfuxujsgqx');
    table.float('ovalizrzcr');
    table.timestamp('plzafemjas');
    table.bigInteger('xdipjujmuw');
    table.float('dihwxwtxou');
    table.boolean('ucolbuaeck');
    table.boolean('chgmfqyzod');
  });
  await knex.schema.alterTable('oxfytnuphr', function(table) {
    table.boolean('oxoozctgyw');
    table.timestamp('echabphtau');
    table.bigInteger('abmnttieay');
    table.integer('wkfgkqloqw');
    table.string('ukzaqovejq');
    table.integer('unooyywazu');
    table.string('fksnbnlozu');
  });
  await knex.schema.alterTable('tbrvhlskwr', function(table) {
    table.float('ojtwilqdel');
    table.boolean('xiplnyeqvy');
    table.integer('ztjomwmgex');
    table.string('erdjazntcr');
  });
  await knex.schema.alterTable('sknwgolbfu', function(table) {
    table.string('krwpshcdlf');
    table.integer('sbajgiuruu');
    table.timestamp('xmgjzvlfln');
    table.json('vvcngsjccn');
    table.integer('zxbuccycfw');
    table.bigInteger('httiuwkmpj');
    table.bigInteger('ibsnxjoqjy');
    table.boolean('akzwrjghzn');
    table.timestamp('mcxpatgsao');
  });
  await knex.schema.alterTable('sbexkohxxf', function(table) {
    table.text('djozuibjrq');
    table.float('wmtgizhsew');
    table.integer('lxtcidsoqg');
  });
  await knex.schema.alterTable('fpadqcrgab', function(table) {
    table.integer('uzujyaohhx');
    table.string('nszjrfzpcf');
    table.timestamp('wutmbalkep');
    table.integer('ryrsdhwluh');
    table.boolean('nqxnnjxizk');
    table.integer('fcoszmshoo');
    table.boolean('fphclngbyy');
    table.bigInteger('hbcdryowyf');
    table.bigInteger('hdpalxlxtz');
    table.boolean('tgoprenzva');
  });
  await knex.schema.alterTable('ksukfoetmi', function(table) {
    table.string('agojdnervx');
    table.float('vvmdavlsky');
    table.string('alvtdjnzxl');
    table.timestamp('lgyjlydkyg');
    table.string('vgfkinsvmy');
    table.timestamp('ktplqfbzja');
    table.bigInteger('canlupppkt');
  });
  await knex.schema.alterTable('keybzjyehk', function(table) {
    table.timestamp('bedfpnuumo');
    table.integer('ipfrzdsgni');
    table.integer('sffnqxewvs');
    table.integer('clzucnjmok');
  });
  await knex.schema.alterTable('izufrsmedr', function(table) {
    table.string('ilokrlekip');
    table.timestamp('gtgaqxdhjj');
    table.integer('kimtvqchro');
    table.boolean('zjyxobwomf');
    table.text('jprxdraged');
    table.text('lkhejyblgz');
  });
  await knex.schema.alterTable('tcthfsbftx', function(table) {
    table.integer('ammhqaqrtd');
    table.json('knhxoidcmm');
    table.text('branadbvje');
    table.text('xnrstrsmmj');
    table.text('wepqgeoedo');
    table.timestamp('xenfdjyidy');
    table.string('umwwwqgkpi');
  });
  await knex.schema.alterTable('ojxxletyhj', function(table) {
    table.integer('cziyivavlf');
    table.integer('retkdnqypv');
    table.timestamp('tskuiwuxah');
    table.boolean('qxwokkdcvx');
    table.json('qzswjfjyrt');
  });
  await knex.schema.alterTable('aelwkrnfok', function(table) {
    table.timestamp('usoilduzak');
    table.string('rsxmydnffj');
    table.boolean('cizoibqina');
    table.timestamp('npgaqstaqi');
    table.integer('rcgkzecjer');
    table.timestamp('btnigwyjtq');
    table.timestamp('htcllkpzdc');
    table.text('xztjqtmubm');
    table.string('wmtjcauqex');
  });
  await knex.schema.alterTable('fbwnxjnnng', function(table) {
    table.boolean('whkrmdpgqt');
    table.bigInteger('fxkaaoncxz');
    table.bigInteger('ngeyknulma');
    table.integer('sijpjdvwhl');
    table.bigInteger('klkaizblmk');
    table.integer('zqbaqwjuag');
    table.boolean('sdpfqtcizn');
    table.timestamp('bluqymuwkc');
    table.text('oipphixpga');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};