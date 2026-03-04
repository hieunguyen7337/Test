'use strict';

/**
 * Migration: 20240724052221_dguclpnzxsblpaw
 * Description: Redo the undo
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pfccvadhsp', function(table) {
    table.text('kcojlhlqee');
    table.boolean('rqynynhgtz');
    table.text('hwhptkqbrs');
    table.json('zzhasjmfol');
    table.json('jgoyyncoho');
    table.text('fabmixownn');
    table.integer('coulhybolk');
  });
  await knex.schema.alterTable('ogtvawcvbh', function(table) {
    table.string('njyukxjlqv');
    table.boolean('bgfhdtqbtp');
    table.string('hxmexzwcbz');
    table.text('ixzzfhsjvd');
    table.timestamp('rvyutsiahd');
    table.json('kfwzsvfyoy');
  });
  await knex.schema.alterTable('tqfsoszuvq', function(table) {
    table.string('xpotnmbkzp');
    table.boolean('uczhfaxuhx');
    table.integer('jblccvfrjv');
    table.float('mbrsxniddt');
    table.float('koxcaoppny');
    table.bigInteger('upakgdqswg');
    table.integer('fqcqavenwf');
    table.text('crdlqgnavj');
    table.float('hdnsksgzco');
  });
  await knex.schema.alterTable('vlgodbziuf', function(table) {
    table.timestamp('mivsdlkbvj');
    table.timestamp('tuilbjfdts');
    table.integer('edpjxtusyq');
    table.json('vmaabcuzfq');
    table.boolean('kbuyesspfb');
    table.boolean('bpmaqcsmhw');
    table.float('ojsvwujuwj');
    table.timestamp('zxpxtzvdob');
  });
  await knex.schema.alterTable('bvkxohhuau', function(table) {
    table.string('tqqyuoijat');
    table.timestamp('mveomholmi');
    table.integer('sutrstcntk');
    table.float('mbfzeqibpz');
    table.float('akrcvcbtrt');
    table.bigInteger('fdsacaezzg');
    table.text('ftodwhcufm');
  });
  await knex.schema.alterTable('hmaneeqcid', function(table) {
    table.text('lxrryfvbcz');
    table.float('glqaqylgvw');
    table.bigInteger('mboegxewsp');
    table.timestamp('uolqggdmmz');
    table.string('mnbsytfbxu');
    table.bigInteger('eghtsmlfra');
    table.timestamp('sadfrmwzww');
    table.integer('jpvpwyvhgr');
    table.string('fdsbaxjvym');
  });
  await knex.schema.alterTable('gilggtzqve', function(table) {
    table.string('ldtxwyjvzb');
    table.boolean('gsefdzozpw');
    table.float('eujynumhzm');
    table.float('lmcwqjfbcs');
    table.json('soamopxwkp');
    table.float('mtlrovoyhz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};