'use strict';

/**
 * Migration: 20241004211555_opbufolxixhqpbs
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('thmijdyytp', function(table) {
    table.string('lztlsiqvnb');
    table.timestamp('qyymeqvfnu');
    table.integer('olpdbevtlf');
    table.text('xudzoywmns');
    table.string('clmftiawqx');
    table.json('ssdpdkhwuq');
    table.string('ajycaulfbe');
    table.boolean('aceuevtvip');
    table.json('qkimyuygqm');
    table.integer('wxrmscghfe');
  });
  await knex.schema.alterTable('tzpctigani', function(table) {
    table.bigInteger('cxvyetthep');
    table.integer('wrafzriguv');
    table.integer('zfaiydvyxg');
    table.json('fcflghqmbm');
    table.json('ipcnrrykpo');
    table.integer('zumqgwbdft');
  });
  await knex.schema.alterTable('khcboacpua', function(table) {
    table.text('tfzyuqdbhx');
    table.bigInteger('xyctqrxano');
    table.integer('orkuydbcse');
    table.timestamp('jmwylsdxwr');
    table.integer('yraiujxvux');
    table.bigInteger('wfyzneqkfq');
    table.float('lovlqtoliy');
    table.string('dkfchhhcfi');
    table.timestamp('adccuwaguu');
    table.text('yxmkbhoalu');
  });
  await knex.schema.alterTable('yehpefbecn', function(table) {
    table.float('dnscnswuxm');
    table.boolean('wngxrgqgai');
    table.timestamp('wgrnzedbxr');
  });
  await knex.schema.alterTable('bimyuybvbs', function(table) {
    table.text('rdezqsmfys');
    table.bigInteger('fntvbnfraf');
    table.float('ogyjwmgpyh');
    table.string('hxmioezych');
    table.text('nfqgocvkhc');
    table.text('iasifjojrb');
    table.boolean('xspcvpsvcv');
    table.bigInteger('cpythrpbrp');
    table.string('aoslrqftqp');
    table.float('pbgeqjfhvb');
  });
  await knex.schema.alterTable('jimvdhmdng', function(table) {
    table.timestamp('oleiluzehm');
    table.text('oylnzgksgv');
    table.bigInteger('ykpafhcpvc');
    table.boolean('dnmezozdum');
    table.string('gbbdazciam');
    table.integer('brabiqmpge');
  });
  await knex.schema.alterTable('efypstbzdd', function(table) {
    table.string('tpabcnaflu');
    table.float('pwgsvomlty');
    table.json('wnrfyghhrk');
    table.string('ytitgppsim');
    table.integer('vlmyhpyouc');
  });
  await knex.schema.alterTable('umvdmlywlw', function(table) {
    table.bigInteger('vxaactghhy');
    table.bigInteger('zhkkogfkxd');
    table.float('lxyezizuwh');
    table.text('sbviwwramw');
    table.string('fzbosmzdpf');
    table.json('gogwqfqign');
    table.json('qktxubgyfs');
    table.json('puuxlbbyec');
    table.string('ujlrilpqim');
    table.integer('lvktxwjroo');
  });
  await knex.schema.alterTable('ozzoejmtkm', function(table) {
    table.integer('gdkmhmcjck');
    table.integer('tmjkawmied');
    table.float('tadjpkjynm');
    table.string('yxcqzmzwye');
    table.json('votlbotyyo');
    table.integer('gtcgckassn');
    table.json('undjsaulmp');
    table.integer('tolltfjyjl');
  });
  await knex.schema.alterTable('ygwibyiwfy', function(table) {
    table.json('uzeihguvkz');
    table.boolean('cpfrhacmru');
    table.float('ixccihalyu');
    table.float('tdyfkywtge');
    table.boolean('ingaeqekre');
    table.boolean('lxqarrshqn');
  });
  await knex.schema.alterTable('kuhmyxncpn', function(table) {
    table.text('sapyrpvfhg');
    table.timestamp('peizyktzqn');
    table.integer('lgtxhhdmmw');
    table.integer('ftnaliyfqm');
    table.json('govahyimij');
    table.timestamp('hszswgmitk');
    table.string('qqhchfryda');
    table.integer('plukevghcz');
    table.float('crvisljpjz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};