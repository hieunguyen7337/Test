'use strict';

/**
 * Migration: 20240216121728_qitqxjhcvonklrw
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ufvgilakwb', function(table) {
    table.text('gfyijgyexe');
    table.boolean('iukixoycfk');
    table.json('bwkvorppxc');
    table.float('glrwyonpan');
    table.json('bytcytgizg');
    table.text('omjiikqywp');
  });
  await knex.schema.alterTable('gudfjipydr', function(table) {
    table.integer('ogzucmuiuz');
    table.boolean('aatykpechv');
    table.timestamp('nkwzwxjksy');
    table.timestamp('xoxikppgva');
  });
  await knex.schema.alterTable('ycaszgmkaf', function(table) {
    table.timestamp('tdmqxslolo');
    table.timestamp('sywkcngaaq');
    table.timestamp('bfnwvcgxyq');
    table.bigInteger('womtvxsehf');
    table.text('enavnczrqv');
  });
  await knex.schema.alterTable('thrtqdyxwt', function(table) {
    table.boolean('rpiypnqtrn');
    table.integer('ozuxacjgkj');
    table.bigInteger('svllnvemku');
    table.bigInteger('xpkqfmqadb');
  });
  await knex.schema.alterTable('spgqvjebhc', function(table) {
    table.float('aettqcgecv');
    table.integer('duchatzezv');
    table.string('utoxdrlvzj');
    table.integer('hauwdtsrsh');
    table.json('euhqjyoezu');
    table.bigInteger('ltqrhqcnaq');
    table.integer('xmmiwdgmse');
    table.timestamp('cttgdnjwja');
    table.string('xcevswqmpk');
    table.float('deosyxawdi');
  });
  await knex.schema.alterTable('ejaqazxhyc', function(table) {
    table.json('ynqloruzkg');
    table.json('ewgqmrpxtk');
    table.timestamp('wpedhsyhrj');
    table.text('vmmkissrft');
    table.string('qrjkbhmaiv');
    table.json('fzadxnouyv');
    table.bigInteger('omsrlbgqkh');
  });
  await knex.schema.alterTable('eogtugjuay', function(table) {
    table.float('sfouptugba');
    table.integer('lmxdavnonh');
    table.string('bfkhnlxebr');
    table.text('ghopbxofrb');
    table.json('ocvxjanchb');
  });
  await knex.schema.alterTable('debqhduynk', function(table) {
    table.text('tmgfljloel');
    table.text('jcwnsiecyz');
    table.boolean('oqhcofonmm');
  });
  await knex.schema.alterTable('bqsdwuoeoo', function(table) {
    table.json('niesfrpzqm');
    table.text('mwnpnfnlbn');
    table.boolean('hwzhbbtfdu');
    table.integer('pwmsmyclgy');
  });
  await knex.schema.alterTable('hoseufsfak', function(table) {
    table.bigInteger('jbtvwwgkkh');
    table.boolean('bcnoycwyiu');
    table.integer('tqeosgakyx');
    table.integer('swrxqfezlw');
  });
  await knex.schema.alterTable('tjunbwdpdr', function(table) {
    table.integer('ofkwmylkaz');
    table.json('kokfvqhgtq');
    table.boolean('ndndoswkjv');
    table.boolean('rhggckhcgk');
    table.string('cuuxgmutkg');
    table.json('vfzcdtdwwm');
  });
  await knex.schema.alterTable('riccsvweop', function(table) {
    table.text('wooxdkqfvl');
    table.json('tajucdqsfx');
    table.json('wrqfjvgnxu');
    table.float('hqwydgxyyv');
  });
  await knex.schema.alterTable('pztfvmdmhw', function(table) {
    table.timestamp('vbbpjzdalw');
    table.integer('cmuiiralsd');
    table.float('blpiiveirb');
    table.bigInteger('mmhldihzuq');
  });
  await knex.schema.alterTable('cogcvwdswi', function(table) {
    table.integer('ukrmxzuybm');
    table.boolean('wqjhsujhcv');
    table.integer('irczvyfxhk');
    table.string('xvqqhjlohk');
    table.integer('llkakqlgqk');
    table.string('rugdlwqstg');
    table.integer('qqjnyjupjr');
    table.integer('oistjifavm');
  });
  await knex.schema.alterTable('zzrvspsaxm', function(table) {
    table.text('wrcigstjfb');
    table.json('ffxuzubbrt');
    table.integer('kgnljndpqs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};