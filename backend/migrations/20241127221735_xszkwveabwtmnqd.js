'use strict';

/**
 * Migration: 20241127221735_xszkwveabwtmnqd
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xbgshtdrpt', function(table) {
    table.timestamp('kllloqmfqp');
    table.timestamp('cztnhaktyi');
    table.float('opwxdcgznc');
    table.text('vgnxbyzkfn');
  });
  await knex.schema.alterTable('dkspckcady', function(table) {
    table.timestamp('whuodtpcxx');
    table.timestamp('jxvvvzfpli');
    table.float('dlxqocldfb');
    table.text('clrdnezahv');
    table.string('yalihjakdk');
    table.boolean('qewfoydsqy');
    table.timestamp('xdnfobxwcb');
  });
  await knex.schema.alterTable('rzgqzsljro', function(table) {
    table.timestamp('jmunbvqpne');
    table.timestamp('tusmkrajbf');
    table.boolean('dhpjyeemuk');
  });
  await knex.schema.alterTable('ebjedilyfo', function(table) {
    table.string('stdeuyyend');
    table.json('nqhjpbakkz');
    table.string('dxqocybrlb');
    table.boolean('dpxtpegouw');
    table.float('plxzgepexe');
    table.float('ispoafwsjv');
    table.json('bnkeyouxhd');
    table.float('ilffjhgcff');
    table.string('cvusoouele');
    table.integer('qkhedqbqeq');
  });
  await knex.schema.alterTable('nyligyathl', function(table) {
    table.float('brahafnjmy');
    table.string('nfviiohdeh');
    table.float('wpnzirhysj');
    table.text('nwijhlblns');
    table.integer('ypmvtrokvv');
  });
  await knex.schema.alterTable('njjfhiaxpx', function(table) {
    table.boolean('cwebjqonbd');
    table.boolean('aojdajlzjg');
    table.json('jsugjnzcin');
    table.json('xbsxwrcftk');
    table.integer('fejjnembjd');
    table.integer('zqvvuplivc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};