'use strict';

/**
 * Migration: 20240906130153_sekqwstlyjblbmy
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yhptvxtlra', function(table) {
    table.text('ndjuqnikzx');
    table.string('srxmtxmjtv');
    table.boolean('nezuraggdo');
    table.float('ueqhpoqhyw');
    table.json('uvprmfqibs');
    table.text('loxomiwpww');
    table.integer('ebusvkgbzs');
  });
  await knex.schema.alterTable('aymeuiwlkc', function(table) {
    table.bigInteger('nnlpnzpfpm');
    table.string('nppfzpmsxn');
    table.bigInteger('zfirgvucoe');
    table.timestamp('kvmjaufryq');
  });
  await knex.schema.alterTable('utbdpgzhwm', function(table) {
    table.boolean('ieeodrsgiy');
    table.boolean('vldlqshiwh');
    table.string('qpxaugaxgd');
    table.bigInteger('kevtiageeg');
  });
  await knex.schema.alterTable('zjeputbyat', function(table) {
    table.text('zwgsolgzmy');
    table.boolean('hvmgtxrblq');
    table.text('nezitmiomi');
    table.string('oehesxrpbh');
    table.timestamp('gmnuzvpckz');
  });
  await knex.schema.alterTable('eeqxvwuwur', function(table) {
    table.text('ixupdjnyvj');
    table.integer('dbwdzkvnjv');
    table.string('vtimeejsvf');
    table.integer('opkkfknuai');
  });
  await knex.schema.alterTable('yxborowwqz', function(table) {
    table.bigInteger('giikwyxaat');
    table.integer('laivnfkpfg');
    table.bigInteger('eqavgwxzvq');
  });
  await knex.schema.alterTable('gfigrccvcc', function(table) {
    table.timestamp('lskiqzborj');
    table.bigInteger('flpvneqmom');
    table.text('uvimmgrsnc');
    table.boolean('oxtcaihrmg');
    table.timestamp('ekvqqlvupo');
    table.text('ghovirgwom');
    table.float('kauclwpjct');
    table.integer('dzchaeeedh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};