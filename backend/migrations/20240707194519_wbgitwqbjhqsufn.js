'use strict';

/**
 * Migration: 20240707194519_wbgitwqbjhqsufn
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lelyslcupc', function(table) {
    table.float('vfpcbdqvwo');
    table.float('fpzwhyaucn');
    table.string('cpjyyfeykj');
    table.float('rnmqczbiar');
    table.timestamp('qemykcjikc');
    table.bigInteger('ayxakvdtjl');
    table.float('jvhrhbjwje');
    table.text('aivojatulh');
    table.float('wxwvdfqjdw');
    table.string('ovuqysuskw');
  });
  await knex.schema.alterTable('qxlmzlzdgg', function(table) {
    table.timestamp('pywxijbetm');
    table.boolean('uttkewtrah');
    table.bigInteger('quqbleyzrs');
    table.boolean('qwyjcjufhc');
    table.string('nuxcyrjvfv');
    table.json('rapqbtfirg');
    table.text('hlldympdnt');
  });
  await knex.schema.alterTable('mocxuvjdtu', function(table) {
    table.timestamp('ghicjwccdf');
    table.text('iryiozulmh');
    table.json('knjmchhvyt');
    table.float('uudylhljmy');
    table.text('tiaobssukh');
    table.string('mbsvnkqwqk');
    table.float('ejopxyfkhy');
    table.timestamp('jnsqrfmxiw');
  });
  await knex.schema.alterTable('lfwuyxnzzv', function(table) {
    table.timestamp('ivteocruei');
    table.boolean('ctljfcewbv');
    table.boolean('kcphjxjevl');
    table.json('acnwbhuawm');
    table.boolean('awlamzqwar');
    table.string('dasafsgsqo');
    table.bigInteger('aiorcoriuw');
    table.json('rgzqpoyaol');
    table.string('nltwuafzah');
  });
  await knex.schema.alterTable('prxvwrjoyn', function(table) {
    table.bigInteger('wixyalpmss');
    table.bigInteger('vokpxlgivc');
    table.boolean('rttyilpake');
    table.json('mmbzgmpocj');
    table.json('adpnwziwki');
    table.float('rxtpvxwsse');
    table.text('qrpjfijtkh');
    table.string('qwylavbfds');
    table.string('bfzwmdofcc');
    table.boolean('pegvsbbtsg');
  });
  await knex.schema.alterTable('eidyvgqqfz', function(table) {
    table.bigInteger('zuqhkupsms');
    table.string('qbxfmdvvkn');
    table.bigInteger('bfytcjmlnh');
    table.boolean('wxmojtdfij');
    table.timestamp('xgiizgtjtu');
    table.boolean('khjmgqfxer');
    table.text('icgvlauuvx');
    table.timestamp('tnemfplrbu');
  });
  await knex.schema.alterTable('lknyqfyosf', function(table) {
    table.boolean('peiauqublf');
    table.timestamp('jlbsptyeqp');
    table.float('tckkxkokvu');
    table.string('hlvfeurenk');
    table.timestamp('bgqakeuwni');
    table.integer('pnlmzktslx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};