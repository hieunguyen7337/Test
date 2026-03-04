'use strict';

/**
 * Migration: 20240324164038_njsxkrfbvmevost
 * Description: Remove column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('edbtqflpix', function(table) {
    table.integer('dnezzagbyn');
    table.boolean('yhslzpbmgn');
    table.text('usrvvjanut');
    table.bigInteger('omkcmxgpfp');
    table.json('npfytsbfvx');
    table.timestamp('xtdfcsgnay');
    table.boolean('ziauzkqlti');
  });
  await knex.schema.alterTable('bcygpwfqor', function(table) {
    table.boolean('zpyesmignn');
    table.bigInteger('tkdcwgrrqd');
    table.bigInteger('xkdzptxxlc');
    table.boolean('xjalwansum');
    table.text('ercyqkxjte');
  });
  await knex.schema.alterTable('xoffjvylrw', function(table) {
    table.float('repisahcty');
    table.boolean('joxqvbddqc');
    table.boolean('ohydlzmakh');
    table.integer('irnjurgwso');
    table.timestamp('ecdqidpghg');
    table.bigInteger('nqgkodyqef');
    table.timestamp('ultydakauj');
  });
  await knex.schema.alterTable('ntbdlfawya', function(table) {
    table.boolean('gxdoeuhbij');
    table.float('oltpdlekiv');
    table.text('oalodydznq');
    table.bigInteger('nhhraybmrq');
  });
  await knex.schema.alterTable('qktwyhotwj', function(table) {
    table.json('zbqkbmkkfa');
    table.float('tuttkavybo');
    table.text('mpzdoegkdv');
    table.boolean('gbmhrfdxwr');
  });
  await knex.schema.alterTable('abfvcarkak', function(table) {
    table.timestamp('mfgzllvajb');
    table.bigInteger('gejcivvoxv');
    table.float('jwzkdkarkm');
    table.bigInteger('onzaobmgzz');
    table.integer('aoysynhkfz');
  });
  await knex.schema.alterTable('hwysifferj', function(table) {
    table.integer('krndhelnah');
    table.bigInteger('jbnpjhoxse');
    table.float('brrbyyvacb');
    table.boolean('rwwrtoduqn');
  });
  await knex.schema.alterTable('iybutsnqcd', function(table) {
    table.float('iscrumyhyn');
    table.string('iwszygtkyc');
    table.integer('ljoiqdvdmn');
  });
  await knex.schema.alterTable('cgskamvmyy', function(table) {
    table.integer('opesithtkz');
    table.string('vvabncikgp');
    table.float('elxndcfakj');
    table.integer('dlfpzlvwrn');
    table.string('byhcoqonvb');
    table.bigInteger('xmnmqundxc');
  });
  await knex.schema.alterTable('phufscdxpc', function(table) {
    table.text('hnqilcmmlt');
    table.timestamp('rdvleckplz');
    table.text('ncpqyhvgbf');
    table.float('nlakrrnaqv');
    table.integer('zprghsezyc');
  });
  await knex.schema.alterTable('lqlnvhncfj', function(table) {
    table.text('tvxzoessye');
    table.json('skibsuampy');
    table.text('yxlskhzcbi');
    table.boolean('szlnxudciy');
  });
  await knex.schema.alterTable('aayhvxwuom', function(table) {
    table.bigInteger('eakribmjfv');
    table.float('lathmhwrdw');
    table.timestamp('yajqidvaar');
    table.integer('risqntzwxo');
    table.integer('cqgcotkwzk');
    table.json('jvvzmctpib');
    table.string('vvyvngxrbq');
    table.float('iviutnhces');
  });
  await knex.schema.alterTable('zbhlkvsjix', function(table) {
    table.bigInteger('ygsojuwxai');
    table.integer('xofonxmegz');
    table.text('aumhsnagdi');
  });
  await knex.schema.alterTable('mlorprkcei', function(table) {
    table.float('vsexphimyi');
    table.bigInteger('bgrpkllumx');
    table.bigInteger('ecouhyakfg');
    table.text('qofmnuagug');
    table.json('nirgxaqigw');
  });
  await knex.schema.alterTable('ttuqiiaqgj', function(table) {
    table.string('hpjeawbpsq');
    table.bigInteger('lnmurgbxgw');
    table.integer('qddlgtzhra');
    table.bigInteger('ldcugaiwco');
    table.text('ekyoenktlf');
    table.string('vvvkflwnse');
    table.integer('wzbrhrrjra');
    table.timestamp('callohgkde');
    table.float('qmawzpvcjb');
  });
  await knex.schema.alterTable('txdsdknikf', function(table) {
    table.string('kkcpvhsnms');
    table.string('oqdepyantq');
    table.json('ruwqfrwppd');
    table.timestamp('nfcqttmwik');
    table.text('nnzobpbwcm');
  });
  await knex.schema.alterTable('hsbuinipdn', function(table) {
    table.string('ngoxpibxet');
    table.string('chvdnixlgm');
    table.string('zfeudkacoa');
    table.integer('vtlnbqnkai');
  });
  await knex.schema.alterTable('kfcnzmvqoy', function(table) {
    table.boolean('pretctfqhf');
    table.json('nmgfojtkvk');
    table.text('aeqewtmdkv');
  });
  await knex.schema.alterTable('nlcatfyhvw', function(table) {
    table.integer('lhfgnaaeau');
    table.text('nqiovbyemj');
    table.timestamp('ztngmbqktb');
    table.timestamp('vnvhkhczpd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};