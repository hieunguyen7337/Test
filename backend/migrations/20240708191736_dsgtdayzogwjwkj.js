'use strict';

/**
 * Migration: 20240708191736_dsgtdayzogwjwkj
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xsmghjwgkj', function(table) {
    table.integer('neubbumqul');
    table.bigInteger('fdncdttxni');
    table.text('xuvcifigoq');
  });
  await knex.schema.alterTable('nvsqayqhgb', function(table) {
    table.string('refxjdgqkv');
    table.string('jqhjyhauqu');
    table.boolean('qjjhrnvuxd');
    table.text('vldieuewzw');
    table.float('xglnfbdwvk');
    table.timestamp('ekmlhelkid');
    table.bigInteger('wxvaqewrwh');
    table.text('obpcotbvun');
    table.timestamp('vmwhsttexa');
    table.bigInteger('cslavgjfuv');
  });
  await knex.schema.alterTable('dxsnkdgwqp', function(table) {
    table.string('nlnljjewdg');
    table.boolean('lktrjwlyul');
    table.json('fwnzipnblz');
    table.json('xipvmjzfzi');
    table.bigInteger('fzdnurnyft');
    table.string('uckpljxipc');
    table.float('tpcfgjokth');
    table.bigInteger('ghpouihcle');
    table.float('vxvrqfbjtm');
  });
  await knex.schema.alterTable('pgdeofmdxn', function(table) {
    table.timestamp('umgxfqziyv');
    table.boolean('mhbmmysjtm');
    table.timestamp('uylftlkcde');
    table.boolean('rxykeplsxl');
    table.json('fjgsobbtbw');
    table.boolean('zecohdolzz');
    table.float('bqpwopmpoh');
    table.json('qnweizbqii');
    table.json('canvzyoqwa');
    table.json('sdkxvqrvwo');
  });
  await knex.schema.alterTable('pvkcyplyup', function(table) {
    table.text('yclhmmgvci');
    table.boolean('rxjbrbblci');
    table.text('labwhsmnra');
    table.boolean('hdqnfheiui');
    table.integer('ytqwbhjtlf');
    table.bigInteger('ykkehhpadw');
    table.timestamp('fwwonerxfr');
    table.text('arewowkcaw');
  });
  await knex.schema.alterTable('eykszjecgh', function(table) {
    table.string('kldezneqep');
    table.text('jbfevmtwir');
    table.text('schutysavw');
    table.integer('leigaznugm');
    table.integer('tmzbiodqvp');
    table.bigInteger('ytkxykebie');
    table.integer('icmtfginmp');
    table.float('nkzfeyvmtz');
    table.text('nsnkslhnji');
    table.bigInteger('ryetxamuxq');
  });
  await knex.schema.alterTable('ejxtiqgqlu', function(table) {
    table.integer('gbjzqknghl');
    table.text('rsrlcgnxli');
    table.bigInteger('xshuodjzba');
    table.text('dpmsoalylz');
    table.timestamp('bulowafvzx');
    table.string('evdyoklzyd');
    table.timestamp('ezqvzipjjn');
    table.string('mzcrpqkegw');
  });
  await knex.schema.alterTable('zvtnzklwyu', function(table) {
    table.bigInteger('ryqlhywqoo');
    table.string('hnumhhtfif');
    table.text('zwsbaiqacs');
    table.integer('orxlqouhpr');
    table.text('ubfeodrgen');
  });
  await knex.schema.alterTable('mtjvwlrtna', function(table) {
    table.float('jxyrikdhnu');
    table.float('ptwkbirjci');
    table.float('aocjztutej');
    table.boolean('nxioufyckt');
    table.text('kyqanqdsyw');
    table.integer('tiwsczdznw');
    table.integer('cgxqgymapw');
    table.string('srmpfewjgy');
    table.timestamp('rcrirarpuw');
    table.boolean('fyidtqbbot');
  });
  await knex.schema.alterTable('fzzawcvfob', function(table) {
    table.timestamp('bidnaqvxqk');
    table.bigInteger('lycuzgzqfg');
    table.timestamp('exioldsatw');
    table.string('wzvgtwzyif');
    table.text('ilszpljdai');
  });
  await knex.schema.alterTable('mzohgyjjfb', function(table) {
    table.float('digpqzihat');
    table.string('aghkqqggwl');
    table.text('kovvozwaqo');
    table.float('pbqbrpwldu');
    table.integer('mrgymegigx');
    table.text('vktfqoulgv');
    table.text('icqmgjnggu');
  });
  await knex.schema.alterTable('yuzazvhiwr', function(table) {
    table.text('ohqzztxnoz');
    table.string('bsmtupnbro');
    table.integer('hkclcexkfd');
    table.bigInteger('ygfldudnik');
  });
  await knex.schema.alterTable('qrfeczojvs', function(table) {
    table.float('rnvustoscm');
    table.bigInteger('ebokkqmuwd');
    table.boolean('cklgibippp');
    table.boolean('curznliurp');
    table.bigInteger('pesflznsyt');
    table.boolean('dhiebufvtg');
  });
  await knex.schema.alterTable('tjtcuyrzhu', function(table) {
    table.integer('fllydzbtwy');
    table.string('jooxysrgiq');
    table.boolean('kovywsorpc');
  });
  await knex.schema.alterTable('gqvzsuspcv', function(table) {
    table.integer('sevpamlgfd');
    table.string('opuugffwod');
    table.boolean('qgijzpiofd');
    table.string('wvlgtqebhv');
    table.bigInteger('vjnmlsicxz');
    table.integer('gyzkkpqgry');
    table.integer('surfskcpso');
    table.integer('ruebohbtyq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};