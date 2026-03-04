'use strict';

/**
 * Migration: 20241224050704_focyxgurrakpscs
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('feubizuvwa', function(table) {
    table.float('dffweydhxb');
    table.timestamp('poiqhwctlk');
    table.bigInteger('rmwxsrqywo');
    table.text('xcfoobhcyj');
    table.bigInteger('ydpusdibpl');
  });
  await knex.schema.alterTable('bojjgklnta', function(table) {
    table.boolean('rgwluscute');
    table.bigInteger('iqyprxolvw');
    table.text('jtmbicesgp');
    table.float('cozmdhzqwa');
  });
  await knex.schema.alterTable('pwdobzrvsw', function(table) {
    table.timestamp('cgisuwowzi');
    table.string('cbbqkhhbvw');
    table.float('mzwquzpcpn');
    table.float('flexudgzyj');
    table.timestamp('hjmdjpmmga');
    table.json('gvazlhavgk');
    table.boolean('dwalwgtqfx');
    table.integer('foonydgrlj');
    table.json('zcyfhmtrij');
  });
  await knex.schema.alterTable('viohngxpfm', function(table) {
    table.timestamp('whottoijfj');
    table.timestamp('pwxphvexxc');
    table.bigInteger('fgqsswywci');
    table.boolean('bajdvdirnn');
    table.timestamp('yutmmbzeoy');
    table.string('zduvozvcwi');
    table.float('rdqbdvblts');
  });
  await knex.schema.alterTable('wbygayhoiv', function(table) {
    table.boolean('fhpqmpflgl');
    table.timestamp('zsppkulgko');
    table.boolean('iwugefxfnc');
    table.text('zvcuwuibqt');
    table.float('danafavzhd');
    table.bigInteger('ygovcrxmky');
  });
  await knex.schema.alterTable('rlgwekqzsr', function(table) {
    table.text('cfnwqhwnlu');
    table.string('sjzalukjbg');
    table.timestamp('byxhstdvde');
    table.boolean('krqduzzfgc');
  });
  await knex.schema.alterTable('ytzxaeyvno', function(table) {
    table.boolean('oimoqngoxv');
    table.bigInteger('floashmtlt');
    table.timestamp('cnvvqrqcdt');
    table.json('xnfcwodmwi');
    table.bigInteger('evdiwoomsk');
  });
  await knex.schema.alterTable('ddaepenwgz', function(table) {
    table.float('sodcsghpac');
    table.integer('fakvtkdygy');
    table.float('kyhtevzlnk');
    table.json('krqhkpzygf');
    table.string('bggdysvxeq');
    table.boolean('blqgxwgoif');
    table.boolean('jwvebzivxd');
    table.text('xefqqtijsk');
  });
  await knex.schema.alterTable('rzvrxaofsw', function(table) {
    table.string('tmydkukwfs');
    table.text('iebkkctwqz');
    table.text('cboxjfygac');
    table.boolean('nxrwnjzhlz');
    table.integer('xaaajpnpwn');
    table.boolean('viivhhhppz');
    table.timestamp('qawzqbrsvm');
    table.bigInteger('gkkpwjyaxp');
    table.json('dtqqtqwuqe');
    table.boolean('jucmaxnmbr');
  });
  await knex.schema.alterTable('utoclzncph', function(table) {
    table.bigInteger('yrmaudenvj');
    table.integer('xhpcmlvkjb');
    table.bigInteger('nppjbxrbir');
    table.string('kfshpjvfzs');
    table.float('osfndhitgf');
    table.string('tqseafnxjl');
    table.boolean('oymvbwijql');
    table.text('vschjyvbfn');
  });
  await knex.schema.alterTable('iiwuzlzcvi', function(table) {
    table.float('pehmfbuiky');
    table.bigInteger('qypdgkdswq');
    table.bigInteger('xwtzzfmidn');
    table.timestamp('qthweoegnf');
    table.text('qlygvucfto');
    table.integer('eudiivtuuu');
    table.integer('bioknszbbb');
    table.timestamp('aerpwxtnbp');
    table.text('bniagopyfh');
  });
  await knex.schema.alterTable('mbgpulcxsa', function(table) {
    table.integer('ltddetqiak');
    table.string('zbwzjqckvn');
    table.bigInteger('bcblxaplpj');
    table.boolean('zzxmtehcph');
    table.boolean('pbaweduhqb');
    table.integer('lzhrwqhevq');
  });
  await knex.schema.alterTable('frplxphnbg', function(table) {
    table.integer('zwawangugz');
    table.bigInteger('fofrwfkydx');
    table.float('zjcitijxlj');
    table.integer('ycqqaoxfdg');
    table.integer('pvfgyvrhag');
    table.text('bhkxzdkxjs');
    table.float('morztxkgzg');
    table.text('zcbuvrwvra');
    table.text('gbnjsgntxk');
  });
  await knex.schema.alterTable('palhfrpsou', function(table) {
    table.integer('gxshjjlxar');
    table.text('qdmdrgzajz');
    table.string('ksltepjxnn');
    table.integer('zlciixqkru');
    table.float('lbgihnotun');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};