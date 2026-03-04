'use strict';

/**
 * Migration: 20240627153203_dxlxydqdgalceak
 * Description: Undo previous migration
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lfqteunzgz', function(table) {
    table.timestamp('nrdjlvjgna');
    table.string('adfqgqyqsr');
    table.float('sbebieugqy');
    table.bigInteger('lxfrsvsvgz');
    table.bigInteger('ofgftreoff');
    table.float('dbyrbillxm');
  });
  await knex.schema.alterTable('wzrdkseiue', function(table) {
    table.bigInteger('casfdejqfs');
    table.text('knvncukshf');
    table.timestamp('awnlbuhfik');
    table.string('bxpkfvjwdz');
    table.text('hgwhdbenpq');
    table.string('rlwvytluga');
  });
  await knex.schema.alterTable('imwurpzjwf', function(table) {
    table.bigInteger('nxwyrnerjq');
    table.integer('wfncnntzyu');
    table.float('xqpfobxsem');
    table.integer('japovytqup');
    table.integer('vhtvgukiia');
    table.float('vfxpjyzpyq');
    table.text('zfmkyoixvt');
    table.timestamp('csfftqwowo');
  });
  await knex.schema.alterTable('bwxnnzagtj', function(table) {
    table.float('sifqpwvsxw');
    table.json('agpjuakavp');
    table.string('ywgoqgfapu');
    table.string('ysjyfbndyc');
  });
  await knex.schema.alterTable('fzidgskuyq', function(table) {
    table.boolean('otyodzfsdq');
    table.bigInteger('bztefqengc');
    table.float('mesnmvvoie');
    table.float('scqlohxsnl');
  });
  await knex.schema.alterTable('fgyoocgajm', function(table) {
    table.timestamp('jbazrkgxjz');
    table.string('alesxalyki');
    table.boolean('rvwohqqlpa');
    table.integer('funwadcahi');
    table.timestamp('xmnwjvrsna');
  });
  await knex.schema.alterTable('qxfpyjvvay', function(table) {
    table.json('erzsfjfcbq');
    table.float('dhfpgdfkna');
    table.text('sfnbhcujfj');
    table.boolean('anacsasyrg');
    table.timestamp('nfhldticbv');
    table.string('bibxxgyzym');
    table.float('qrvhqksohl');
    table.bigInteger('truatdgdch');
    table.string('wasymiqrxp');
    table.json('nctrkziwil');
  });
  await knex.schema.alterTable('texgfnembt', function(table) {
    table.integer('ivflevzqxh');
    table.string('guoyayyjnc');
    table.boolean('jlxogaaeps');
    table.json('fgcfoawbht');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};