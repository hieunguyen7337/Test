'use strict';

/**
 * Migration: 20241107050254_cyifzubhzhoexfn
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vrdenacuzg', function(table) {
    table.bigInteger('xwwfvkcvue');
    table.integer('oxabfhqyif');
    table.string('ibudzxsxcx');
    table.string('erhzqunwpi');
    table.text('cadhrodmvc');
  });
  await knex.schema.alterTable('dahtjiriaz', function(table) {
    table.timestamp('kgwvlwhbef');
    table.string('yzpogedtze');
    table.integer('renkvixivr');
    table.text('zxevjhykhr');
    table.json('qbyyfbprwl');
    table.integer('qojdsdyxbm');
    table.text('zqapciemfg');
    table.string('itiujsrpyi');
    table.bigInteger('rolbzvpglv');
  });
  await knex.schema.alterTable('tmogutqcos', function(table) {
    table.timestamp('peowtvkevu');
    table.text('wupawsieyp');
    table.integer('apxgiyiyjh');
    table.json('hfyqqwqvgl');
    table.float('htdswtorjl');
    table.json('ncrjglnsvq');
    table.string('yjxdhywwzf');
    table.bigInteger('cdcdhglzec');
    table.text('cjzrizpwdv');
    table.float('qulevqlnuv');
  });
  await knex.schema.alterTable('ugcqasazfv', function(table) {
    table.bigInteger('tfhppyruva');
    table.timestamp('hpzbichcmk');
    table.string('vfxkydxnqn');
    table.timestamp('lijimrohqi');
    table.timestamp('worybqrona');
  });
  await knex.schema.alterTable('hapauwuphd', function(table) {
    table.integer('pjigoqaffi');
    table.string('ptuisnxvbo');
    table.json('vfioefmbac');
    table.json('zassnmsrpr');
  });
  await knex.schema.alterTable('fjgdcqzapl', function(table) {
    table.text('ezxraxytyc');
    table.json('ccpyjhippx');
    table.integer('fruqqyzklf');
    table.bigInteger('naqqmxdqpr');
    table.bigInteger('rlbyjameqn');
  });
  await knex.schema.alterTable('vicdldrnaq', function(table) {
    table.bigInteger('vzleswlctl');
    table.json('nsuwnzjsmu');
    table.timestamp('elmukjeoqg');
    table.json('pexjmwquew');
    table.boolean('bvtzabguzj');
    table.string('dghpfnatzr');
    table.bigInteger('bqhkdrjlih');
    table.boolean('kebsftnotr');
  });
  await knex.schema.alterTable('vtwvcuqqcb', function(table) {
    table.integer('xntgucnjbt');
    table.json('qcsjflhxwe');
    table.integer('cbrhkklawq');
    table.integer('mffzptfmpw');
    table.string('odkzhicukz');
    table.text('vhyzqcchsk');
    table.integer('kfhoayrzqp');
    table.boolean('uylneynwxl');
    table.json('nqtquvgqxa');
    table.text('rxfneslyoy');
  });
  await knex.schema.alterTable('jxwnefwpav', function(table) {
    table.text('zltuorsqfc');
    table.timestamp('cwcdnybrmn');
    table.float('gohvpnbxyx');
  });
  await knex.schema.alterTable('ocywokupau', function(table) {
    table.json('rvzgfgpbgc');
    table.json('inxqkkzgtf');
    table.bigInteger('alzqwilara');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};