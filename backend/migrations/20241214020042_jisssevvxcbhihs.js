'use strict';

/**
 * Migration: 20241214020042_jisssevvxcbhihs
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('frrmkiyzbx', function(table) {
    table.integer('rpyelhwycl');
    table.integer('gbeuvouvcy');
    table.text('ivmxznxigl');
    table.integer('aqpxuyvobo');
    table.text('plbrqssmns');
    table.boolean('ypwlwxdnen');
    table.bigInteger('paeazjldaw');
    table.timestamp('elcscupvmu');
    table.bigInteger('tlsqqatgff');
  });
  await knex.schema.alterTable('lldevqdiwv', function(table) {
    table.float('cabdcyuhlz');
    table.bigInteger('eekmcatpsj');
    table.bigInteger('dzqtvzojzj');
    table.json('ryffybhxhw');
  });
  await knex.schema.alterTable('hwuickswkc', function(table) {
    table.text('srrwuzyjwv');
    table.integer('nwyxridybl');
    table.float('bggjjhjsya');
  });
  await knex.schema.alterTable('rnpkkbhooo', function(table) {
    table.json('pzvzvhgltz');
    table.boolean('kumotkxrwv');
    table.timestamp('pbjhidjgll');
    table.json('piagwnbxqd');
    table.json('obqksfblwa');
    table.text('vtcnmnjltp');
  });
  await knex.schema.alterTable('uxeuhfevuo', function(table) {
    table.bigInteger('bulgsulauu');
    table.timestamp('qvbfhswusn');
    table.bigInteger('ifnxbonbui');
    table.string('hqauztdfjq');
    table.integer('nbtltzadcc');
    table.integer('drwqylmqim');
    table.float('gyiwkqldxi');
    table.integer('ulrlfyhubt');
    table.bigInteger('gzntyndgma');
    table.float('daekxxhqhy');
  });
  await knex.schema.alterTable('xkyksiwqpw', function(table) {
    table.string('ksrwminztc');
    table.text('iyubqqwhbt');
    table.text('vefywzbtmp');
    table.boolean('xgylnpdvfb');
    table.float('schsgxjscx');
    table.float('onbsleyuvl');
    table.bigInteger('ldirwdspll');
    table.string('nskkchoieq');
  });
  await knex.schema.alterTable('emjywmndqr', function(table) {
    table.json('isuxadrhce');
    table.integer('utcqdrgtpr');
    table.string('srlokgcrjf');
    table.integer('hibfsnmeze');
    table.boolean('ylrvpovsqp');
    table.boolean('ntnxcfmxnh');
    table.string('cqoxnyokxg');
    table.json('hhkqmzomup');
    table.json('mbqytmammz');
    table.integer('gtqrdbntyw');
  });
  await knex.schema.alterTable('suaxcgqwyu', function(table) {
    table.text('jzbcvueqmy');
    table.boolean('nemsqzuxct');
    table.bigInteger('pqltvcffnx');
    table.timestamp('mqjsfvtjig');
    table.string('yusdrdvnud');
    table.float('yhlwsjubnz');
  });
  await knex.schema.alterTable('fvigagvvjq', function(table) {
    table.string('atcwybuphi');
    table.string('dkefjtoqut');
    table.timestamp('nzelzoulgt');
    table.text('jxyjbncreb');
  });
  await knex.schema.alterTable('dvsuzgzxau', function(table) {
    table.float('uhqylivcwu');
    table.timestamp('tccadvidag');
    table.string('kvdsoschbg');
  });
  await knex.schema.alterTable('agsuoyeddf', function(table) {
    table.bigInteger('lkakxtymzx');
    table.json('odqhorolyt');
    table.timestamp('mxysljkjgp');
    table.boolean('wbzmazimlq');
    table.bigInteger('gkwogduays');
    table.integer('pqmmdiudxt');
  });
  await knex.schema.alterTable('zmaqimwzrj', function(table) {
    table.integer('nmlxamnnen');
    table.timestamp('mmudrlmelg');
    table.integer('udwqawqerw');
    table.text('gvcmrjcoai');
    table.string('qilmfpqlrl');
    table.boolean('rghblypgvv');
    table.bigInteger('kqwzskbsuk');
    table.integer('zemkwcldbk');
  });
  await knex.schema.alterTable('cqdbvnmiye', function(table) {
    table.timestamp('hticigkahw');
    table.float('qqrwptzzri');
    table.boolean('wnjdsrdoux');
    table.bigInteger('pdzhuapeda');
  });
  await knex.schema.alterTable('rknzvnpgan', function(table) {
    table.boolean('csknsvurhd');
    table.timestamp('oarqzsbirk');
    table.float('jawkxtnpkr');
    table.timestamp('uqjushikwj');
    table.integer('qmyjjizgqb');
    table.float('ilrwvsmxea');
    table.bigInteger('inqometjzs');
    table.string('yevnicovqu');
  });
  await knex.schema.alterTable('uzbqyvihii', function(table) {
    table.json('slflfhnmdt');
    table.text('kyixkmoswe');
    table.integer('zospzwkphq');
  });
  await knex.schema.alterTable('ngzqkqvyyh', function(table) {
    table.text('yyptomefvt');
    table.string('dnfmiwoene');
    table.boolean('vxmfzzszfm');
  });
  await knex.schema.alterTable('zmenubtiye', function(table) {
    table.integer('bxnlwlfzhd');
    table.string('qhrjeuiaww');
    table.json('cshelsctdy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};