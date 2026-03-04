'use strict';

/**
 * Migration: 20240919102223_voulkbxjsrywwyj
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nujyqkyast', function(table) {
    table.integer('bbzakdqgtt');
    table.bigInteger('arqydsmuyt');
    table.string('rycsgeurcp');
  });
  await knex.schema.alterTable('zylcfvjruq', function(table) {
    table.string('ggkeplqezp');
    table.json('kjebeixwid');
    table.float('gqrwcshbwz');
    table.boolean('ptrzgdgxsp');
    table.text('lzsirgfxcz');
    table.text('yixrajsvqz');
    table.string('bgmxwtqyxd');
    table.boolean('pxeddhtoij');
    table.timestamp('mpjzzqphbc');
    table.text('obsnbsqgam');
  });
  await knex.schema.alterTable('pmgmdxqnbg', function(table) {
    table.text('csntmuutuz');
    table.json('ccmzzmundy');
    table.text('ydvgqqohny');
    table.integer('odbxmcnukh');
    table.boolean('iumjitsczl');
    table.string('zqsyennxlj');
  });
  await knex.schema.alterTable('uopcxxhuwj', function(table) {
    table.text('mzjjanzzmx');
    table.text('voqkvrblho');
    table.boolean('zehrbxgczj');
  });
  await knex.schema.alterTable('pwsposgulb', function(table) {
    table.timestamp('xpbxrhdwwe');
    table.json('wegdblbdrs');
    table.timestamp('zfnzuigjzo');
  });
  await knex.schema.alterTable('hhihszuelz', function(table) {
    table.string('gilripktbt');
    table.bigInteger('ldtbjudeun');
    table.boolean('qiewyserbd');
    table.boolean('xgydkgycrm');
    table.bigInteger('bxsewbhmlx');
    table.float('uareoglsdr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};