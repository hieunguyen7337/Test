'use strict';

/**
 * Migration: 20241222091630_bdfzdwjsnmswwfv
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pcfytnlxgo', function(table) {
    table.boolean('xjgblhazny');
    table.float('fzehcpowoe');
    table.timestamp('wzhccjcwpa');
    table.integer('lagoxueidc');
    table.boolean('oovovxcurc');
    table.timestamp('gdimuofwlo');
    table.bigInteger('cnewhceiqa');
  });
  await knex.schema.alterTable('uapgthduuu', function(table) {
    table.bigInteger('xmsnpimonc');
    table.json('xqdzuygvrp');
    table.bigInteger('dbuhkquftl');
    table.bigInteger('lljxhoqwmt');
    table.integer('vtvixhsbit');
    table.text('tsihvvtdhc');
    table.text('jjmxqzmtpv');
    table.json('zooqnbmlub');
    table.timestamp('dytnrfebvo');
  });
  await knex.schema.alterTable('sjbnozwuni', function(table) {
    table.boolean('ofiaajtoxw');
    table.text('layeppejek');
    table.timestamp('ubvihrrbak');
    table.integer('bsnpgorhbx');
    table.integer('bxmuifknak');
  });
  await knex.schema.alterTable('kqgqzchpfw', function(table) {
    table.string('rxsoobmkvm');
    table.string('mbblxdopkf');
    table.text('cvvebpades');
    table.timestamp('pxroxwgoqt');
    table.bigInteger('phqalljfbz');
    table.json('rkcduqtskk');
    table.float('anpbdfeksc');
    table.json('ykdbpxysbz');
    table.string('wewnydpdyr');
    table.float('daeaxkvjhd');
  });
  await knex.schema.alterTable('bzjwpqjpem', function(table) {
    table.bigInteger('vjtjvtagcd');
    table.boolean('chrywcludf');
    table.string('lndqtabili');
    table.integer('lsxceugphl');
    table.boolean('qxjjktssyd');
    table.string('xwmczjwnqj');
    table.string('bciogzbyrm');
  });
  await knex.schema.alterTable('ieimltycvm', function(table) {
    table.boolean('cbkkfoujaz');
    table.float('nxgxxlcmff');
    table.text('mpygulfclg');
    table.timestamp('duplbjinvg');
    table.bigInteger('gduyeszzuw');
    table.boolean('ysrcexllln');
    table.bigInteger('ptoigypzbi');
    table.string('udndgtebwp');
    table.timestamp('qdqsanxjbo');
    table.text('hlvvuxzgtp');
  });
  await knex.schema.alterTable('jopvqwqrku', function(table) {
    table.float('eeyvregxbi');
    table.float('oajgpniuod');
    table.string('xazvwpzbtc');
    table.text('ujstmxdlyh');
  });
  await knex.schema.alterTable('rtfbtkjsxa', function(table) {
    table.bigInteger('fbdmonrkif');
    table.text('viwtfntogb');
    table.bigInteger('dtnatxunyy');
    table.integer('saxvgmxvrn');
    table.bigInteger('wrxibpodyd');
    table.text('izebxhbruz');
    table.json('ttgzfidsvk');
    table.boolean('zabbwbhvkx');
  });
  await knex.schema.alterTable('boqffjvdgx', function(table) {
    table.bigInteger('ndsjzassyc');
    table.string('uwuaqbqfec');
    table.json('fktqjyrnyi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};