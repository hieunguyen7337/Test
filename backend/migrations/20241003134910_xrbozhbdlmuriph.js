'use strict';

/**
 * Migration: 20241003134910_xrbozhbdlmuriph
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tiwhymauor', function(table) {
    table.text('pyratcpetj');
    table.boolean('obovvxapeo');
    table.boolean('gtfhqxtbym');
    table.boolean('ezbzeunsff');
  });
  await knex.schema.alterTable('kzsvrlyllb', function(table) {
    table.json('haaerznuxg');
    table.boolean('hwbvgncufn');
    table.timestamp('bwhjdlwola');
    table.string('eeowwencjl');
  });
  await knex.schema.alterTable('ozvqsojnrw', function(table) {
    table.float('nmaaeyeulz');
    table.text('mlawfahqxz');
    table.bigInteger('mywobdwork');
  });
  await knex.schema.alterTable('bdiklemlkb', function(table) {
    table.bigInteger('asolnzwlxt');
    table.boolean('olaheebbqd');
    table.text('vypmkozqbg');
  });
  await knex.schema.alterTable('opzltvkeng', function(table) {
    table.string('gsufgzwour');
    table.timestamp('ieowcptmnp');
    table.text('vjqpakvvnk');
    table.integer('vjrvyrvmis');
    table.text('inctbvxmja');
    table.float('wjqhszncws');
    table.json('zfzlllqump');
  });
  await knex.schema.alterTable('kyqsfqnloz', function(table) {
    table.bigInteger('nhzleftibw');
    table.float('tgsbghfaiu');
    table.text('ntlqfcjgty');
    table.json('ovezjdjruw');
    table.integer('pfypohgcny');
    table.integer('aakonsxizy');
    table.integer('zzhxdujovt');
    table.float('jiqayneurm');
    table.boolean('zghmzcpaee');
    table.text('slilfujwtn');
  });
  await knex.schema.alterTable('dqtumqxboh', function(table) {
    table.float('jbefxpgqxl');
    table.string('trzrtbcmyx');
    table.timestamp('alxmmmjjqv');
    table.string('inxycdnhqp');
    table.json('txomsukhxq');
    table.string('rxjqvovkwk');
    table.timestamp('mfxhgwvxnz');
    table.text('dqndulkurk');
    table.string('edssuxmcje');
  });
  await knex.schema.alterTable('jfjluspott', function(table) {
    table.boolean('njcmnaonaj');
    table.text('plmlpyphit');
    table.bigInteger('gcszljletq');
    table.float('vluoezctca');
    table.integer('vhbrszugqg');
    table.integer('hkxctcrzqy');
    table.bigInteger('qncugvzvdo');
  });
  await knex.schema.alterTable('lkmoieuwfd', function(table) {
    table.json('qxtzkajgrn');
    table.json('pchawvqcun');
    table.boolean('zquywbzggj');
    table.boolean('whzwxxpwxl');
    table.text('izgjvmhpdc');
    table.boolean('kslrmkkmcx');
  });
  await knex.schema.alterTable('qypgfolvyw', function(table) {
    table.boolean('foveesdymj');
    table.boolean('nyihyclhar');
    table.timestamp('qsntlexfky');
    table.boolean('fdloftxwxn');
    table.boolean('khemmfxvqz');
    table.text('spmcoyybcu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};