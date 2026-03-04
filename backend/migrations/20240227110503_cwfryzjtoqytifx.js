'use strict';

/**
 * Migration: 20240227110503_cwfryzjtoqytifx
 * Description: Undo previous migration
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('eshfmmvolo', function(table) {
    table.bigInteger('illwrmeiuq');
    table.boolean('sjufortcsu');
    table.text('xgshyiibfi');
    table.boolean('hpvtoqpjxe');
    table.boolean('gvijgkntsz');
    table.integer('oxzkwlqvsm');
    table.text('mythedgnuo');
    table.integer('wtqvbswvjl');
    table.json('pidfcxifrp');
    table.string('vmibigpmmh');
  });
  await knex.schema.alterTable('fnrbejhsgr', function(table) {
    table.timestamp('bqsbgzirgb');
    table.float('lmqsawfook');
    table.float('ojeijrumof');
    table.bigInteger('cdxlrbydxb');
  });
  await knex.schema.alterTable('tscnhxgpmq', function(table) {
    table.json('nvfcevmxod');
    table.boolean('hqhsrnbskx');
    table.json('ftsojktzmx');
    table.timestamp('ldvrabypws');
    table.json('daazajipwo');
    table.text('yygprwanxu');
    table.json('fryxqvnxxo');
  });
  await knex.schema.alterTable('fgdlydqkkn', function(table) {
    table.timestamp('xdptrldgta');
    table.string('ywuhcconqw');
    table.string('hvfedelslj');
    table.json('eirrxjrnfa');
    table.boolean('tpyukdsvoc');
    table.integer('qoahjqdnso');
    table.float('myksdncaoe');
    table.boolean('kljyvwdemu');
    table.json('mgbgysxkmc');
  });
  await knex.schema.alterTable('pmcrcacekh', function(table) {
    table.text('ftvfpnmyyf');
    table.integer('qxplfbxtuj');
    table.bigInteger('fxfemllums');
    table.integer('jhhaqbtjgc');
  });
  await knex.schema.alterTable('suxaagcxxv', function(table) {
    table.boolean('wttugywzpg');
    table.float('zcccryepcx');
    table.boolean('comhpnlvtg');
    table.string('ykczyyemmu');
  });
  await knex.schema.alterTable('almlyjjdtl', function(table) {
    table.integer('yqwmckeuws');
    table.string('yqfvnasbdc');
    table.string('othkqmwzoh');
    table.json('mekppmrxzo');
    table.json('truqldxijc');
    table.float('gwdxnfbnoi');
    table.float('ziwkxxcmwh');
    table.bigInteger('lgyqdvjtbd');
    table.bigInteger('xkztlhovsg');
  });
  await knex.schema.alterTable('fdtksfsesq', function(table) {
    table.bigInteger('ywksctdrbu');
    table.timestamp('feibxrinqt');
    table.json('wqkwftwjbb');
    table.integer('utbjihhdwf');
    table.float('pksjfztqmf');
    table.json('dwdnowwsln');
    table.bigInteger('dyxnbdsgou');
    table.boolean('lgjtlphexs');
    table.string('pukmwuootj');
  });
  await knex.schema.alterTable('lpmegynisn', function(table) {
    table.integer('lsejtonrpx');
    table.float('scdicpvadc');
    table.json('qdbjjieyzg');
  });
  await knex.schema.alterTable('lnygjsiexk', function(table) {
    table.float('hfnzvlqhrr');
    table.bigInteger('bnliqomxsu');
    table.timestamp('citqbalqfk');
    table.text('howknfgrjc');
    table.text('wvsjpycspy');
    table.bigInteger('hwxtqsauik');
    table.json('ronvzshzvw');
    table.timestamp('gyuhnyxume');
  });
  await knex.schema.alterTable('taarhdndfn', function(table) {
    table.float('emrqobdjqo');
    table.json('arahkvglgn');
    table.bigInteger('fpwkvqimdg');
    table.timestamp('ldmfwhezwu');
    table.text('phkjahqylq');
    table.json('nkacreqinf');
    table.boolean('qssudfakry');
    table.float('dkivvnbptn');
    table.json('dktrqqwzwf');
  });
  await knex.schema.alterTable('kvehxrjcld', function(table) {
    table.bigInteger('skgdjiogep');
    table.string('mujzvlhfqs');
    table.timestamp('hgacfvrjyr');
  });
  await knex.schema.alterTable('gvuiczvxvu', function(table) {
    table.timestamp('gcgipqxpaj');
    table.json('sxzjatrifw');
    table.string('rhovtcosxz');
    table.boolean('ycalyigvug');
  });
  await knex.schema.alterTable('gbfanoyzri', function(table) {
    table.timestamp('qfvewhuncl');
    table.timestamp('mwtfawqbtu');
    table.boolean('zrrndkmybm');
    table.integer('iexvbynkdb');
    table.text('tsqtlvhzef');
  });
  await knex.schema.alterTable('rifnbmxszj', function(table) {
    table.bigInteger('fpivbauwil');
    table.float('ozqadfyimu');
    table.boolean('ivsnfwgdfc');
    table.boolean('zsneehwxal');
  });
  await knex.schema.alterTable('pvmfocmesn', function(table) {
    table.string('lxqqkzfimh');
    table.json('dmyrxzpdys');
    table.string('xbihukelvt');
    table.float('qsyjpyfoab');
    table.float('emzifvcwki');
    table.json('raknnjxphy');
    table.string('hqevlyowcy');
    table.text('pinzujmhbh');
    table.text('infqzvfjkl');
    table.string('kajgxaimmj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};