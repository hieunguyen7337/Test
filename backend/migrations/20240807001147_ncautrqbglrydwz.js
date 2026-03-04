'use strict';

/**
 * Migration: 20240807001147_ncautrqbglrydwz
 * Description: Add column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yyoyouxvgj', function(table) {
    table.bigInteger('uvuiopbdxz');
    table.boolean('dxrvygujim');
    table.string('znxclrqbul');
    table.string('mkxqkpwbsh');
  });
  await knex.schema.alterTable('uqctzqthxz', function(table) {
    table.integer('akmkxpyjnw');
    table.integer('tzjbaeedxg');
    table.json('kkwtvhowlb');
    table.string('ojuxrotusw');
    table.boolean('jqbhjlqfvl');
    table.integer('kjbnbzfpdp');
    table.integer('xewwbxgxrl');
  });
  await knex.schema.alterTable('vtwsdamekz', function(table) {
    table.float('oafimnpktw');
    table.timestamp('gvoutvokqg');
    table.text('fdmtqwvmja');
    table.bigInteger('rjjgzauwsg');
    table.boolean('nwnfhfnrvf');
    table.json('pcldgdrvpj');
    table.json('cjeqjexovv');
    table.boolean('ltxiqhofel');
  });
  await knex.schema.alterTable('geqbdlcxij', function(table) {
    table.timestamp('evuoljrkfl');
    table.integer('ryuydwucjc');
    table.text('qdmirzkfvk');
    table.boolean('pllafgrbft');
    table.integer('eqjfsksglw');
    table.bigInteger('ncuqchdcfc');
  });
  await knex.schema.alterTable('nxseypdzsn', function(table) {
    table.string('lrphyzxnbf');
    table.bigInteger('zudqepciza');
    table.boolean('oxmpxndqjo');
    table.timestamp('bmujjazyyr');
  });
  await knex.schema.alterTable('kwllkqoehv', function(table) {
    table.timestamp('yjvxffvwpf');
    table.float('rbiekhdxiz');
    table.string('uvfojnqdkx');
    table.bigInteger('udlbzcrdox');
    table.json('vsczhklcoj');
    table.bigInteger('cpetcpwkyo');
    table.boolean('haaniwpabe');
  });
  await knex.schema.alterTable('fopbhobmhc', function(table) {
    table.text('qmnxdarnwc');
    table.boolean('adjypfqqxo');
    table.json('yadabyzbuf');
    table.text('mvogfsulvw');
    table.float('sjzlaoboal');
  });
  await knex.schema.alterTable('tutburuleb', function(table) {
    table.integer('emstntznlk');
    table.timestamp('tdjvnkeboq');
    table.bigInteger('bgbtunmawp');
    table.integer('uydsmkavbw');
    table.bigInteger('gbyqegfhbe');
    table.integer('vlumikbzju');
    table.boolean('qlfuuzyivv');
  });
  await knex.schema.alterTable('qwqzaslukn', function(table) {
    table.float('poglvmftpm');
    table.integer('mssrubakgg');
    table.float('fksppzcsgp');
    table.string('bchzzdjkkl');
    table.string('avufipkmtp');
    table.text('qptfcpvtnj');
    table.string('fhezegvmql');
  });
  await knex.schema.alterTable('irbvnqxvkh', function(table) {
    table.integer('txryfvegqp');
    table.json('fajixkdyrg');
    table.json('ohrlalxlgv');
    table.boolean('nrkbzuthgu');
    table.timestamp('sjuzdxsgyg');
    table.json('hbuhkpwhls');
    table.timestamp('neqnmbxxmo');
    table.integer('rtsnforqwu');
    table.timestamp('degyugtmyk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};