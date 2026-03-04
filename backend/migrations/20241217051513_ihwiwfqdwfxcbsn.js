'use strict';

/**
 * Migration: 20241217051513_ihwiwfqdwfxcbsn
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('axnequtmqp', function(table) {
    table.string('touwfvdygv');
    table.float('jarpmzutim');
    table.bigInteger('ouoqltmoag');
    table.text('rjqfxzlayg');
    table.bigInteger('vgyqllsebe');
    table.string('itedtdjrmk');
    table.timestamp('klbvebbbgq');
  });
  await knex.schema.alterTable('pwrljukpqi', function(table) {
    table.json('lyfudpheoj');
    table.float('otpcsflxsg');
    table.timestamp('ikkmgcalzj');
    table.float('vsrkktfkzi');
    table.integer('qcfyxgsovu');
  });
  await knex.schema.alterTable('gfunlhbsyw', function(table) {
    table.text('gbllrkiprh');
    table.string('qlwwjbbfes');
    table.text('dailhuepxp');
    table.json('pbhwsiegnq');
    table.float('znxszhkllq');
  });
  await knex.schema.alterTable('tjecaocxrf', function(table) {
    table.boolean('hhrfqnbkhu');
    table.string('ahckxrompg');
    table.timestamp('kpdwbrwqgk');
    table.float('fbyygganuy');
    table.text('tycjwataxj');
    table.bigInteger('ejdmmgbklr');
    table.json('oubqzchvzy');
  });
  await knex.schema.alterTable('tjeejdgclj', function(table) {
    table.json('nobbquqdaa');
    table.string('fcmrypvfwy');
    table.string('acdgkpxkfi');
    table.json('dbkzrjsibo');
    table.string('frvzrvxpvh');
    table.json('jxdnxuiwqd');
    table.text('kwqplefrsb');
    table.text('tnvynyvrtx');
    table.text('whjnfmojre');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};