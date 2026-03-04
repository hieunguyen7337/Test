'use strict';

/**
 * Migration: 20240716070122_sccdsbhekruyqhm
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('njjovaxlnb', function(table) {
    table.boolean('ugmacenigb');
    table.float('ngblljszep');
    table.json('ltvxtfnpwi');
    table.float('rhhqodarmm');
    table.float('itmddpdnul');
    table.float('thisuzhcbd');
    table.float('jlatgspdds');
    table.timestamp('pvwkurolzm');
    table.boolean('dznqmhbtgc');
  });
  await knex.schema.alterTable('awqkonyokn', function(table) {
    table.json('lsfwfvmcyb');
    table.float('rdpcilqsle');
    table.bigInteger('miasyylbsn');
    table.timestamp('gckwyscdnt');
    table.bigInteger('kaytnbbtsf');
  });
  await knex.schema.alterTable('evnzfyxqgr', function(table) {
    table.float('wvefmgkycv');
    table.boolean('ridvvlpdrw');
    table.json('lxvwbiiusa');
    table.integer('cjuqzqaiig');
    table.string('acfukxlrwy');
  });
  await knex.schema.alterTable('kavtaqebce', function(table) {
    table.bigInteger('xyuhoclawn');
    table.string('yiunaghwml');
    table.boolean('ymjmgczshw');
    table.float('ydsvgzxzyl');
    table.float('wdoouqrbkb');
  });
  await knex.schema.alterTable('bnegcqwjow', function(table) {
    table.integer('qlihfatbve');
    table.timestamp('rkzwkhqqps');
    table.json('ymdnkianpo');
    table.integer('agqkjaaxjs');
    table.boolean('mklvffudym');
  });
  await knex.schema.alterTable('drssvpbksa', function(table) {
    table.timestamp('vtgbdeyuud');
    table.float('nsxgbohenr');
    table.text('yadzkfzeic');
  });
  await knex.schema.alterTable('yhdjkzezng', function(table) {
    table.integer('ecjtjbesfa');
    table.json('vfrpjtgxak');
    table.string('xgqzhliqmv');
    table.timestamp('qilygywmca');
    table.timestamp('xlxbttxqym');
    table.json('zincgqecpv');
    table.string('slnvwcqaoi');
  });
  await knex.schema.alterTable('bfcdlhnljj', function(table) {
    table.integer('hfjapirpkf');
    table.integer('dznoszhopm');
    table.float('eojfsmppmf');
    table.boolean('awdmmaljqr');
    table.integer('ltdtrnexxy');
    table.float('dzejqkpaoe');
    table.json('pvjtmccwty');
    table.timestamp('sqchitvnwu');
  });
  await knex.schema.alterTable('fixolheziz', function(table) {
    table.json('yvsjiolypf');
    table.json('lgkjcvoobc');
    table.boolean('yjttgjnexj');
    table.bigInteger('dphsvmqdxo');
    table.float('khlrumigln');
    table.bigInteger('tfepqgwnwt');
    table.integer('lyhmusweus');
  });
  await knex.schema.alterTable('xubftrobtw', function(table) {
    table.boolean('trcqwdazdx');
    table.boolean('ewepukajch');
    table.float('liijcnygzf');
    table.json('ekvcnhplov');
    table.timestamp('xwltrdurus');
    table.timestamp('lgbwslevoa');
    table.float('twtqwanton');
    table.timestamp('uyutzwbwtx');
    table.bigInteger('hdsmduiyds');
    table.string('htqhnppbjh');
  });
  await knex.schema.alterTable('coeodxvxhd', function(table) {
    table.json('ckqtqrwkls');
    table.integer('ixtwjeexug');
    table.bigInteger('afrzgaxdnt');
    table.json('mqaqbywecc');
    table.integer('auafxdiyxb');
  });
  await knex.schema.alterTable('fibszjalqk', function(table) {
    table.integer('qdnihwrkfh');
    table.json('eilxgtlcwf');
    table.string('tmajlshyqn');
    table.timestamp('epfosmuray');
    table.boolean('fubrnnrsef');
    table.string('jezogommvm');
    table.timestamp('qmeymfwbkk');
    table.json('yaajwzzjil');
    table.bigInteger('ddcynkmsfz');
  });
  await knex.schema.alterTable('chxojwjyjt', function(table) {
    table.bigInteger('yrhkrfmnng');
    table.bigInteger('tsmwphthjw');
    table.bigInteger('fudfwppqls');
    table.float('chwvfohulm');
    table.integer('xbmiokiiwe');
    table.boolean('koywbcnszq');
    table.integer('zfitcrpnvc');
    table.json('dsdexxkwlx');
    table.text('ouadliwphk');
  });
  await knex.schema.alterTable('dlbjiqzumx', function(table) {
    table.json('fnqswiuibe');
    table.text('htfftvslog');
    table.boolean('advafoqknt');
    table.timestamp('rxfsqovoig');
    table.text('wtoytsfzwt');
    table.float('pjulmieuax');
    table.float('vkmkgeqnqy');
    table.text('ipscztfdtk');
  });
  await knex.schema.alterTable('dmzxxjwelw', function(table) {
    table.bigInteger('jwusoxycse');
    table.boolean('rfmatavwae');
    table.bigInteger('atmagrteqr');
    table.timestamp('gmiwvmhrls');
    table.timestamp('sgdpizhrdt');
    table.integer('ivkpaaecrh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};