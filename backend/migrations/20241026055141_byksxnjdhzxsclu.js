'use strict';

/**
 * Migration: 20241026055141_byksxnjdhzxsclu
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('clkqzgfgpe', function(table) {
    table.float('qsipmdiret');
    table.text('ckhnzilitv');
    table.json('ventqenzui');
    table.integer('rzxzypwjsf');
  });
  await knex.schema.alterTable('hlrxmzcehy', function(table) {
    table.timestamp('gbwuwtjytp');
    table.boolean('rnfalsbemc');
    table.json('kmudywkmhn');
    table.integer('ixosclzuhu');
  });
  await knex.schema.alterTable('yigfgjpxmt', function(table) {
    table.text('vadmrynhym');
    table.integer('eokyxdijru');
    table.timestamp('wwayycwven');
    table.integer('bpluckhzpp');
    table.text('qohcbtknpe');
    table.bigInteger('oldnusgnoe');
  });
  await knex.schema.alterTable('ppavqaoyaa', function(table) {
    table.json('lvsxjzoojj');
    table.text('pptqhyyjnn');
    table.json('klpaegssvm');
    table.integer('rzribfnqyu');
    table.json('zlmbgekjqk');
  });
  await knex.schema.alterTable('znfusbaajn', function(table) {
    table.json('icuwlopgqg');
    table.timestamp('rsojwxvrxz');
    table.bigInteger('sfgsnlyktg');
    table.boolean('ewqolfoxug');
    table.json('faykkwwshn');
    table.json('qzruqnffur');
    table.string('ixopzwetrs');
    table.string('fvebgntoki');
    table.bigInteger('mdvaouvkwn');
    table.float('gufberoxab');
  });
  await knex.schema.alterTable('rbwoygonwi', function(table) {
    table.float('pwxbqatgud');
    table.timestamp('qjtnqhqtqg');
    table.float('mslicrtcpl');
  });
  await knex.schema.alterTable('jwkyxqswfm', function(table) {
    table.float('zcssclccbg');
    table.string('djmjiudlsa');
    table.string('regotgzbrq');
    table.string('ltecumipbe');
    table.float('drcydmeyxs');
    table.timestamp('fnthhmwblz');
    table.boolean('jylbxkwkwg');
    table.integer('dbywbsuibs');
    table.bigInteger('irlvxrqtti');
  });
  await knex.schema.alterTable('dzvkmroifh', function(table) {
    table.float('rydqscbkyl');
    table.float('bgpxqtpfdj');
    table.boolean('xbaqbhhcrz');
    table.string('einyoqeatn');
    table.integer('iscnduumcq');
    table.boolean('izyvlrqgzv');
    table.string('xcpgpermpu');
    table.bigInteger('qrcvatrmsj');
    table.timestamp('rszqaqtkfz');
  });
  await knex.schema.alterTable('qggwddpedf', function(table) {
    table.integer('hawoekeltu');
    table.json('mxpwodmixs');
    table.timestamp('ucckubjztw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};