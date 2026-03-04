'use strict';

/**
 * Migration: 20241007012207_mtjsigdooqmkqgo
 * Description: Undo previous migration
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('enkujlcpmu', function(table) {
    table.text('iifppnkrjk');
    table.text('xjrhxyiluf');
    table.json('qejjzywntr');
    table.bigInteger('vwkcfwzxrf');
    table.boolean('aksdtayhyd');
    table.timestamp('abvnofzwys');
    table.integer('nzaxzuzdqn');
    table.json('xsgikhmlfc');
    table.timestamp('qulxvpsdau');
  });
  await knex.schema.alterTable('joehnpmoxt', function(table) {
    table.timestamp('invefadhwy');
    table.integer('ksztlakicg');
    table.bigInteger('sujzclqbms');
    table.integer('uskgmcjexz');
    table.boolean('eqeggkylyo');
    table.boolean('bshlqgpvpc');
  });
  await knex.schema.alterTable('ovnguvaapq', function(table) {
    table.timestamp('kysoprnbzu');
    table.text('uijplohzwe');
    table.bigInteger('cwsfzsprnw');
    table.integer('qebyrmiwfs');
    table.timestamp('iiasynhced');
    table.text('izuutzccvy');
    table.boolean('ilghixqemp');
  });
  await knex.schema.alterTable('dgocpccxjv', function(table) {
    table.timestamp('yraezgyioz');
    table.float('heudgtdbyk');
    table.integer('femvaupepb');
    table.string('twosnieqkc');
  });
  await knex.schema.alterTable('viszrsppdh', function(table) {
    table.bigInteger('uexskoatpt');
    table.float('rgbaitbikh');
    table.boolean('wqmufihzil');
  });
  await knex.schema.alterTable('oykjezytlz', function(table) {
    table.boolean('uczqpcfrtx');
    table.boolean('ymtrgitgpu');
    table.json('tbulhyperu');
    table.text('pdyyzfakmk');
    table.bigInteger('uoevivghna');
    table.string('diikcujjiy');
    table.float('nmeebtnatg');
    table.float('ytsidnllgy');
    table.float('nyufopcozz');
  });
  await knex.schema.alterTable('fzurmxctro', function(table) {
    table.boolean('kdoebpbcbg');
    table.float('sghtoiliew');
    table.string('yddkfoiqdu');
    table.string('kjpgpbvurk');
  });
  await knex.schema.alterTable('ldxxmcjnde', function(table) {
    table.timestamp('ndbcgslxth');
    table.bigInteger('cdczyilklc');
    table.integer('oiyoznkmic');
    table.timestamp('euiazfccyo');
    table.json('aninbvnemj');
    table.float('njrnxeccib');
    table.text('kvnghzboop');
    table.float('txzysfprnl');
    table.text('tdtxtxawsy');
    table.boolean('bdhgfgrjcc');
  });
  await knex.schema.alterTable('kziudbmyuy', function(table) {
    table.float('kiwoklvsyo');
    table.float('ofpuxmekxj');
    table.float('soswfcybtz');
    table.bigInteger('hruqxajohb');
    table.string('eyjkwlodgk');
    table.text('bjuvifxtfv');
    table.bigInteger('sxaprsfnmp');
    table.timestamp('pwmodtrmqs');
    table.integer('cjnkusgyso');
  });
  await knex.schema.alterTable('supvaszlgy', function(table) {
    table.timestamp('ojjslvzizy');
    table.timestamp('bkqceavntj');
    table.bigInteger('xozktzszmq');
    table.integer('vmmfuaixnl');
    table.string('esrjyliokj');
    table.integer('rohyuphqty');
    table.float('rcukohdibd');
    table.integer('wvzgiqtvgd');
    table.text('xkpdriiqub');
    table.boolean('robqflmzid');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};