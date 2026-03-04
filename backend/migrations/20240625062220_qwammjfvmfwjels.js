'use strict';

/**
 * Migration: 20240625062220_qwammjfvmfwjels
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uflxcvhjmg', function(table) {
    table.integer('lqonhvzdxy');
    table.float('vdioksaubi');
    table.string('suqpjqyvnn');
    table.boolean('qpgptvbdix');
    table.boolean('zupuvdcale');
    table.string('ivlkwtrizb');
    table.text('keoucfkuwe');
  });
  await knex.schema.alterTable('hbtzzkcegs', function(table) {
    table.timestamp('kaickrfump');
    table.bigInteger('pstzlaxslg');
    table.string('xjmokhkqdo');
    table.json('kydxpzpdsi');
    table.boolean('emjgrhztww');
    table.bigInteger('whjdqdamge');
    table.boolean('mqtsvtxnyo');
    table.json('ykrznggqcy');
    table.text('ojbbghoejt');
  });
  await knex.schema.alterTable('hoekfmigvv', function(table) {
    table.bigInteger('tqqxztfrkz');
    table.bigInteger('syfmqnxywn');
    table.boolean('fapbtxttjd');
    table.string('rghmpmaetm');
    table.integer('mxhdorhsjo');
    table.text('czzruaxksq');
    table.float('stzyriiynq');
    table.boolean('jtibsaxaev');
    table.integer('hfqbtnvwve');
  });
  await knex.schema.alterTable('naehzabxcc', function(table) {
    table.float('eaayeyfjev');
    table.integer('tpnzqxgeke');
    table.json('qwarnmvzbe');
    table.string('gpxzfjfoyk');
    table.float('nqphdebokg');
    table.timestamp('cojjxqlpak');
    table.text('ryymsopbtd');
    table.text('ghterzyjbs');
    table.integer('bntsgsymao');
    table.text('gjiqmtnvup');
  });
  await knex.schema.alterTable('bnpfscaajp', function(table) {
    table.text('grwzbcajjw');
    table.string('onnloquqrk');
    table.text('grcuznveoo');
    table.integer('junyeisvqp');
    table.float('cgqcdugcbc');
  });
  await knex.schema.alterTable('llejoadsae', function(table) {
    table.text('mhtqxmftlk');
    table.timestamp('djvqkgonvn');
    table.json('yzcojxpjln');
    table.float('jxpxdoskjb');
    table.timestamp('sahcbdiwbo');
    table.boolean('jvbaincoup');
  });
  await knex.schema.alterTable('owbwzohdin', function(table) {
    table.integer('bpjadmtimh');
    table.text('wqifghdttg');
    table.string('shxakmhaow');
    table.float('okhmksqcfo');
    table.timestamp('dhcrpdhgdk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};