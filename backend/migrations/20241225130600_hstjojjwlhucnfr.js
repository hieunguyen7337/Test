'use strict';

/**
 * Migration: 20241225130600_hstjojjwlhucnfr
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bgwbnlxmme', function(table) {
    table.integer('jkjnrzihxq');
    table.text('mnpfnqzjxw');
    table.boolean('onhgnlrbzr');
  });
  await knex.schema.alterTable('kuqxpnkokg', function(table) {
    table.integer('prebvjnssa');
    table.timestamp('mqqdnqqhkd');
    table.boolean('cqbeaigyee');
    table.text('fyneqlljcb');
    table.bigInteger('gjwqohyzza');
  });
  await knex.schema.alterTable('bmpslcaene', function(table) {
    table.bigInteger('swshhpuluc');
    table.float('bibkfqtkbu');
    table.integer('keluyzrubf');
    table.string('iearcmzmyp');
    table.json('bzdyygiprr');
    table.json('hwyimrskba');
    table.boolean('aykuwddlmc');
    table.bigInteger('zjtfoxahip');
    table.boolean('fbngtclyqx');
  });
  await knex.schema.alterTable('fqslyqtdpr', function(table) {
    table.boolean('jwwdazkrsi');
    table.json('mfgljbdvcv');
    table.text('sieemuoadh');
    table.string('rrmufoljum');
  });
  await knex.schema.alterTable('tmckrpnecy', function(table) {
    table.boolean('litrrgvdtt');
    table.integer('bsebsvrxzg');
    table.integer('wpvmcjzleb');
    table.string('uwjzwaawcv');
    table.integer('zxmrrcjysl');
    table.string('nvcakmcmyn');
    table.float('asburvuquu');
    table.integer('tlvxznbtaz');
    table.json('aazjjbjqno');
  });
  await knex.schema.alterTable('wuhbjtnoao', function(table) {
    table.boolean('ogzeuxtzgp');
    table.bigInteger('ktpqabwtox');
    table.json('vcboqumojf');
    table.bigInteger('eihoaiitom');
  });
  await knex.schema.alterTable('nbpkldugml', function(table) {
    table.text('flpmebwjrz');
    table.text('lvqetrllai');
    table.float('myekciflwf');
    table.integer('kenxgjitrk');
  });
  await knex.schema.alterTable('ogamkjukud', function(table) {
    table.float('wksmxjvuew');
    table.text('sjzozlwmaj');
    table.boolean('osqaqczqbr');
    table.boolean('izhypqjjde');
    table.text('sflntmowwu');
    table.string('wxsxfdjtbd');
  });
  await knex.schema.alterTable('keohtrmbax', function(table) {
    table.json('fcysbtdegd');
    table.timestamp('srafmwaylx');
    table.bigInteger('twcijopqtb');
    table.timestamp('fwhrmcfwqs');
  });
  await knex.schema.alterTable('jnnpwyteqo', function(table) {
    table.float('cvsqtfkynx');
    table.timestamp('lkvgvofqxu');
    table.json('eglbrzvsuu');
    table.integer('hofzqvuwzg');
    table.float('ubqpwlqkhp');
  });
  await knex.schema.alterTable('beqfgocpfl', function(table) {
    table.text('wkhjkwatso');
    table.boolean('kimlopzaih');
    table.string('gmnizyvxah');
    table.float('shgwdvqavf');
    table.boolean('krkxkdsfgy');
    table.integer('naxnyliiaw');
    table.integer('lvaoxgvaoj');
    table.integer('paoyycpblq');
    table.bigInteger('eviqjkcjdk');
    table.json('schsybypyq');
  });
  await knex.schema.alterTable('ooppedtntq', function(table) {
    table.float('pxbefnrdgi');
    table.string('wknovodstm');
    table.json('xdegpdxcgc');
    table.string('obbrgnihwc');
  });
  await knex.schema.alterTable('wyxfomyqez', function(table) {
    table.text('vpjnfwxnzc');
    table.boolean('okfjwtgsyk');
    table.string('rtjtokcfol');
    table.text('tvlrsbwqjx');
    table.text('iwwkyjhovm');
    table.boolean('bjpqvnxrtx');
    table.text('rtegpxknrr');
  });
  await knex.schema.alterTable('exquijpxpm', function(table) {
    table.bigInteger('nuqbelloam');
    table.timestamp('lukgzehasj');
    table.float('zlxkdzrbbh');
    table.bigInteger('tmnoedflnf');
    table.bigInteger('oujyntddmb');
    table.bigInteger('oeusnwboig');
  });
  await knex.schema.alterTable('slzyfrsefu', function(table) {
    table.timestamp('ksjxaxyefs');
    table.boolean('qilkccstct');
    table.float('ntoveuuziy');
    table.json('vbuvzhgtvr');
    table.timestamp('nywchjzegy');
    table.float('qcipsmajwt');
    table.string('hklomtyias');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};