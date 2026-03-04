'use strict';

/**
 * Migration: 20241109193329_amlcltqbkedfzes
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lfiavtxafn', function(table) {
    table.text('tyqvgadqas');
    table.json('woiryhmrkb');
    table.bigInteger('dcktqbxdpf');
    table.json('qmkvzqbqym');
    table.boolean('yheqdzxznb');
  });
  await knex.schema.alterTable('buyeidhlzh', function(table) {
    table.boolean('fqnpwkayro');
    table.bigInteger('uiygjagcnh');
    table.float('ylatpzuupi');
  });
  await knex.schema.alterTable('nszaletsms', function(table) {
    table.boolean('qrqpopfmwf');
    table.float('vhrlulqrqf');
    table.integer('gxbvsswtyu');
    table.text('offpusrrnu');
    table.integer('uvrflvyhuq');
    table.boolean('hvtmdmcomz');
    table.json('qmlqxslwgd');
    table.text('anbkaaofhz');
  });
  await knex.schema.alterTable('kbdispqdcg', function(table) {
    table.text('znqvwmyobp');
    table.timestamp('txnpizkvvo');
    table.string('zrfdvhrfdq');
    table.timestamp('zzjfjkpmou');
  });
  await knex.schema.alterTable('wvesgeogta', function(table) {
    table.string('fmykwdymco');
    table.text('xiegzcrtve');
    table.float('yrfdvneucj');
    table.integer('rxfvhoeyik');
    table.float('howirnsjlv');
  });
  await knex.schema.alterTable('rkkdrpenma', function(table) {
    table.float('ubxejjhrus');
    table.float('hqcbrpewrg');
    table.boolean('yhvbfznvng');
    table.float('ptbvrsehit');
    table.bigInteger('cdrcvfbzee');
    table.bigInteger('mtxhniwcth');
  });
  await knex.schema.alterTable('wpwdoehgtl', function(table) {
    table.integer('wjwychzxub');
    table.string('zdqkisczkr');
    table.json('gricjdwalk');
    table.string('dszgaoxfjc');
    table.bigInteger('ihgrgjkvek');
  });
  await knex.schema.alterTable('jykvrlgyvw', function(table) {
    table.text('fivjqqlhjc');
    table.float('nvjwicobha');
    table.timestamp('osifjwvpjb');
    table.boolean('tojlipimny');
    table.bigInteger('dramvlfvmj');
    table.float('takezkokfy');
    table.timestamp('xokzjqyexl');
    table.timestamp('givwhjimhk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};