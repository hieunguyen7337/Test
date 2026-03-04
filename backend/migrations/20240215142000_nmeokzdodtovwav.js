'use strict';

/**
 * Migration: 20240215142000_nmeokzdodtovwav
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ghicmvxptd', function(table) {
    table.json('zjceacqdai');
    table.integer('civivwtrzp');
    table.text('euavbtrpiu');
    table.string('qdvgajqyot');
    table.boolean('qkpthndokk');
    table.integer('vkyxfxiibm');
  });
  await knex.schema.alterTable('ivqleppxqv', function(table) {
    table.boolean('dqntaoebkd');
    table.text('ugeeoottcp');
    table.integer('tbrqvskvkn');
    table.float('unxumpigwv');
    table.float('nlmnhhshqo');
    table.float('azaghkfsnx');
    table.text('avdufgfzrt');
    table.bigInteger('bpwyujqvwj');
    table.integer('wvpwhugjcx');
  });
  await knex.schema.alterTable('dvltvjbpkz', function(table) {
    table.float('qaltfqiiru');
    table.boolean('fvpqehqhpa');
    table.integer('lydovvncyw');
    table.integer('nkayodldgv');
    table.text('vdnoqfcftd');
    table.string('mnagizgyld');
    table.json('nuxzguxcgs');
  });
  await knex.schema.alterTable('ektwqfoxrk', function(table) {
    table.bigInteger('bnqqeduhlh');
    table.string('qhzldclxoz');
    table.integer('eptbjvcguv');
    table.json('kdmuwtemvn');
    table.boolean('rjwzqmwqvo');
    table.string('fhnjuaorfr');
  });
  await knex.schema.alterTable('tycjlfjpdt', function(table) {
    table.json('kqnmrhpysf');
    table.text('bgslelqifw');
    table.json('ygcmryzqia');
  });
  await knex.schema.alterTable('mmbxrotmge', function(table) {
    table.text('cuozebntve');
    table.json('rqrrwvnibx');
    table.json('herflxkngz');
    table.integer('cvhlqaqeta');
    table.boolean('hajshcpsfe');
    table.integer('qockbvkrjy');
  });
  await knex.schema.alterTable('ssuvwtusli', function(table) {
    table.integer('tcactrkyso');
    table.float('wjmyoaoeql');
    table.integer('qphybbvobe');
    table.string('ziopgyushh');
    table.timestamp('icsmzpdnxv');
  });
  await knex.schema.alterTable('itzxwhwnuu', function(table) {
    table.json('fomucdxejp');
    table.bigInteger('litagoikpu');
    table.timestamp('tmdyojegfh');
  });
  await knex.schema.alterTable('izyzkkoylt', function(table) {
    table.boolean('wnebtzxovk');
    table.bigInteger('mluzgcvutq');
    table.text('ymdexhihbh');
    table.timestamp('itjzyoyeoq');
    table.integer('xxlnfjuasn');
    table.timestamp('udyqeollyw');
    table.float('jeponmpogk');
    table.text('tflvsbixrh');
  });
  await knex.schema.alterTable('vrxqslqcxd', function(table) {
    table.json('xmvtnvrvxe');
    table.integer('awcqfyngnf');
    table.bigInteger('cuoxrctddn');
    table.bigInteger('vkstgfjayd');
    table.bigInteger('sexxdiuklz');
    table.float('gstnrjiaij');
    table.text('xumovgsjqg');
    table.timestamp('pzinedblun');
    table.boolean('ezjvqcmijb');
    table.string('ocqainmuji');
  });
  await knex.schema.alterTable('omndvmmoqy', function(table) {
    table.float('pgqxtbinvv');
    table.integer('zpiytycrbr');
    table.integer('hwqrwfxyoq');
    table.string('rfgzezmjfo');
    table.bigInteger('fvirmykdau');
    table.boolean('hzjjkvrjub');
    table.boolean('ghhnjwqmcv');
  });
  await knex.schema.alterTable('favkkzqaxi', function(table) {
    table.boolean('oqkxiwuozs');
    table.json('ruyztvnhva');
    table.integer('tusadedhie');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};