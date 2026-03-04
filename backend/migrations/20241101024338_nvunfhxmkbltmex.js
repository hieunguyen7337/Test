'use strict';

/**
 * Migration: 20241101024338_nvunfhxmkbltmex
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('idcjubozfj', function(table) {
    table.integer('npczaneasy');
    table.timestamp('ktnbboabwb');
    table.string('thdpdpauam');
    table.timestamp('vjxngvesxi');
    table.json('qiqbzxheva');
  });
  await knex.schema.alterTable('zjocgtihbl', function(table) {
    table.text('zioxckncqj');
    table.boolean('wtkbonzfai');
    table.json('mqduxdeeuz');
  });
  await knex.schema.alterTable('vcbhzbesux', function(table) {
    table.float('nepnwinxme');
    table.text('tvixlyialg');
    table.text('ncrkiwbgby');
    table.text('gzkawclejw');
    table.boolean('tswbqiijrf');
    table.integer('pifurxprba');
    table.timestamp('oalwozhxyf');
    table.integer('kqfecwkwdf');
  });
  await knex.schema.alterTable('gqxhhbuscz', function(table) {
    table.json('thupbokniq');
    table.bigInteger('nkfusowyoh');
    table.boolean('vggwcddlkm');
    table.bigInteger('itqhxmvzux');
    table.bigInteger('qhnuiqwaho');
  });
  await knex.schema.alterTable('daulcjervt', function(table) {
    table.text('wnxgkhadqa');
    table.float('dvpgloeagu');
    table.string('xvltlschkh');
  });
  await knex.schema.alterTable('sqcfxrwklo', function(table) {
    table.bigInteger('ropverjfwh');
    table.integer('cldyrkwuic');
    table.timestamp('njbqkgovih');
  });
  await knex.schema.alterTable('tqymgsrufm', function(table) {
    table.string('sezjbwhjep');
    table.bigInteger('ruzsspfnrt');
    table.json('tttadzvrsj');
    table.integer('pwlqimfpem');
  });
  await knex.schema.alterTable('qztvyyjaql', function(table) {
    table.integer('ihezzzyeof');
    table.string('partkgidhw');
    table.text('ldyunivnzo');
    table.boolean('xicielznpl');
    table.string('jhqrkoejhr');
    table.boolean('saeqpovcjv');
  });
  await knex.schema.alterTable('obwfqjgkpq', function(table) {
    table.boolean('xdetawnmgc');
    table.boolean('enehyecfpe');
    table.text('vtkcpmsdep');
  });
  await knex.schema.alterTable('kqceutdxkh', function(table) {
    table.json('oayztehxgu');
    table.string('wmdplfwpbk');
    table.float('paqvagiduw');
    table.boolean('hqfsjybjte');
    table.integer('tqgkvynahi');
    table.json('oaqnlwudui');
    table.float('ybjohdikfs');
    table.json('bcqhvjswyd');
    table.string('gglktrsbdd');
    table.float('dwnrcumchs');
  });
  await knex.schema.alterTable('nxmckdfpal', function(table) {
    table.integer('eegiwnpbwd');
    table.boolean('oyujikxpjb');
    table.timestamp('rbefloltum');
    table.json('icrwihdjoo');
    table.text('tynabvdtgz');
    table.string('mcbukwjzqo');
    table.json('ljcbnzkcxb');
    table.float('ccurlgwybj');
    table.timestamp('cbwzlgxfni');
    table.text('lduajzgxch');
  });
  await knex.schema.alterTable('usovufyhfa', function(table) {
    table.boolean('vgsfpirssj');
    table.integer('huzklqrmsy');
    table.bigInteger('pohnwaudnz');
    table.float('twlsvjqjzx');
    table.integer('julondoswv');
    table.bigInteger('vshupyjuyr');
    table.boolean('vtoozzimtf');
  });
  await knex.schema.alterTable('qqxuuwxtbu', function(table) {
    table.float('mkauezcius');
    table.json('egvbwjzbre');
    table.string('vussjghtgx');
  });
  await knex.schema.alterTable('hprkskpavn', function(table) {
    table.integer('qfvlcmyvpg');
    table.timestamp('gugrcghquu');
    table.text('ystdoezxsj');
    table.bigInteger('bydmopeboh');
    table.timestamp('pzcmztdhyn');
  });
  await knex.schema.alterTable('avmolgbjak', function(table) {
    table.json('arwpytzgsn');
    table.bigInteger('bmathxrolv');
    table.text('hmgkrqgamw');
  });
  await knex.schema.alterTable('iqsacibhlv', function(table) {
    table.json('uncqoxchsv');
    table.integer('rtllhtxoco');
    table.integer('jnpshjumgu');
    table.bigInteger('kmgbnanogp');
    table.timestamp('ompoolyxrl');
    table.float('jveflwogjj');
    table.text('pbuwmbfokp');
    table.float('vveuvvojzv');
    table.bigInteger('rauevkwzjn');
    table.bigInteger('ghwbdneicy');
  });
  await knex.schema.alterTable('polrownhpe', function(table) {
    table.string('bymaxrooqo');
    table.integer('mkqfexzpcz');
    table.boolean('ujkvrpfgzb');
  });
  await knex.schema.alterTable('okflqsemwa', function(table) {
    table.integer('snnwfloqew');
    table.string('tzzdmhkrhc');
    table.json('ikwwtoshun');
    table.text('fkegewudys');
    table.timestamp('fyjezgnnhk');
    table.float('xmulvjsimr');
    table.timestamp('ruhmwvelbx');
    table.json('gfueokqyhs');
    table.string('twijjhklmk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};