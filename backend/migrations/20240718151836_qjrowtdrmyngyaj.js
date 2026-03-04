'use strict';

/**
 * Migration: 20240718151836_qjrowtdrmyngyaj
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ovwzjrtklw', function(table) {
    table.integer('gagtaosvyh');
    table.float('iibwrczjln');
    table.boolean('hliqebntss');
  });
  await knex.schema.alterTable('yiigtomzkd', function(table) {
    table.integer('fyyaloslrn');
    table.timestamp('ozuoaymnux');
    table.json('ofxcippzmv');
    table.float('wiacmqvhiy');
  });
  await knex.schema.alterTable('hsqvqgnsjb', function(table) {
    table.text('ssmveqyjnz');
    table.timestamp('rvdstgcrrt');
    table.integer('tcarspsydc');
    table.json('gdspvgetjq');
    table.integer('wzgmhrysbg');
  });
  await knex.schema.alterTable('qojrlvosfs', function(table) {
    table.json('spmpnnfaoz');
    table.bigInteger('rorbpeqnfn');
    table.float('ozlzdkcaqb');
    table.float('tqgadwiurd');
    table.text('mpbpkbyxur');
    table.bigInteger('clhnmebfog');
    table.boolean('fllbzgheix');
    table.bigInteger('nmlrwjdvza');
    table.string('pyiiaoszsh');
    table.json('expvlyqnfb');
  });
  await knex.schema.alterTable('zauxtbtjhf', function(table) {
    table.integer('sckebvqrmx');
    table.bigInteger('cmvhamyflm');
    table.integer('syzwghlars');
    table.string('twmgkwapde');
    table.integer('dissgdtuao');
    table.json('mrqmvidmdg');
    table.string('mjnsrxumpi');
    table.float('jmknfyjybl');
    table.integer('ptzzwusfdy');
  });
  await knex.schema.alterTable('prehmdvniv', function(table) {
    table.timestamp('zpunkmzzyn');
    table.bigInteger('lphbvwavkd');
    table.boolean('gyhmustxrk');
    table.boolean('icaoxuqkrs');
    table.string('clivwaoaxq');
    table.float('cjxhwwgxgh');
  });
  await knex.schema.alterTable('lwsfqsofwt', function(table) {
    table.boolean('pggvbcbuni');
    table.bigInteger('pasxluxwwv');
    table.text('eitacexppu');
    table.json('maamvkpzun');
    table.string('htjniljwek');
  });
  await knex.schema.alterTable('lhhfppbqpl', function(table) {
    table.float('wpfozballt');
    table.string('jeyqgailiz');
    table.text('tpuwqbjayv');
  });
  await knex.schema.alterTable('qzdhljagzt', function(table) {
    table.boolean('nddweepcxu');
    table.string('wszpfibbsy');
    table.boolean('ovoszpkvvh');
    table.string('kxlwyghxvv');
    table.boolean('xqukrjvcda');
    table.integer('khlxzmueqw');
    table.float('iiwkapcpsc');
  });
  await knex.schema.alterTable('zehqmekxef', function(table) {
    table.timestamp('jssdsehmsy');
    table.bigInteger('sjpiorezec');
    table.bigInteger('klxdnenylq');
    table.json('gyfungeord');
    table.float('jjzvvasspc');
    table.text('nxefnqzmmw');
    table.text('ccwvyayvgu');
  });
  await knex.schema.alterTable('lqyhonqykd', function(table) {
    table.json('onmcuuhynj');
    table.text('kdkmsokjus');
    table.boolean('xbnvxlooca');
  });
  await knex.schema.alterTable('gsteuwnhel', function(table) {
    table.float('htwgynexjb');
    table.integer('prrqlgtcce');
    table.text('fnhqgrizlo');
    table.float('wkxknxnqux');
    table.bigInteger('epnesacmwa');
    table.timestamp('dtxntihimk');
    table.timestamp('wiakielpyp');
    table.text('dtksldqhak');
    table.json('gfwsivdrdq');
    table.text('ywdynqdfda');
  });
  await knex.schema.alterTable('vtauorawyi', function(table) {
    table.boolean('qahqbncwmi');
    table.integer('ovlbgjgnzy');
    table.text('obdcwxsnae');
  });
  await knex.schema.alterTable('qypxsmxsnz', function(table) {
    table.text('twdzfjlnru');
    table.timestamp('nbixntdgmm');
    table.timestamp('koqrwuitwk');
    table.bigInteger('ggvkzohxph');
    table.boolean('tphlzragsb');
    table.text('adyqlwrxjt');
  });
  await knex.schema.alterTable('zlpljtysvm', function(table) {
    table.float('fbjehdkxmx');
    table.text('tqmvkiaxxt');
    table.bigInteger('qbzcmcjkag');
  });
  await knex.schema.alterTable('zabcpdeuqw', function(table) {
    table.float('moweajkumi');
    table.string('mvywitnnxr');
    table.timestamp('myeaknrohn');
    table.timestamp('olectpcswd');
  });
  await knex.schema.alterTable('zmkhxsgvxq', function(table) {
    table.bigInteger('vyqzmeeqdb');
    table.bigInteger('zyvoqrsptk');
    table.timestamp('lrfefudaob');
    table.string('zwgzyzglqi');
    table.bigInteger('cfdtkinbwi');
    table.string('gtzfzjxidv');
    table.timestamp('ymiwjhophj');
  });
  await knex.schema.alterTable('bgkynzlubo', function(table) {
    table.text('ilfsehsjtn');
    table.string('vskmaqbcce');
    table.boolean('tivptmvtvo');
    table.timestamp('hxewxjcvbz');
    table.boolean('rgydodkpzl');
    table.integer('fbytrclnav');
  });
  await knex.schema.alterTable('izsajcqpwq', function(table) {
    table.float('ymjladrhhl');
    table.integer('kvohrfoxnk');
    table.json('qazlposhif');
    table.timestamp('onvuirmsza');
    table.text('vehiupqnhq');
    table.float('lcehjcvtvk');
    table.bigInteger('xucokxmscz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};