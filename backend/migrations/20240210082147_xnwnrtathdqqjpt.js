'use strict';

/**
 * Migration: 20240210082147_xnwnrtathdqqjpt
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vdljaxcnzm', function(table) {
    table.float('lnfnzhdopl');
    table.string('vvmtzpgngt');
    table.float('rmtdqiasqz');
    table.boolean('uhwzuqutbp');
    table.integer('isxexzmdqk');
    table.float('twdjoedfzg');
    table.string('ewkmvauuuk');
    table.float('scvjefzgec');
  });
  await knex.schema.alterTable('ndetwmjeeo', function(table) {
    table.text('duqzzoiftg');
    table.boolean('mpfcxkvmun');
    table.string('muucplrlsu');
    table.float('rceiwymvkd');
    table.boolean('huxlcxkqfb');
  });
  await knex.schema.alterTable('bssknjsmlg', function(table) {
    table.bigInteger('gbrshprpvo');
    table.bigInteger('isotvjjbtp');
    table.string('dzxdbzfkik');
    table.string('dopdkvhclv');
    table.float('oazgqbztav');
    table.string('feblsakqyk');
    table.timestamp('woburxgnzj');
  });
  await knex.schema.alterTable('usdwequqcu', function(table) {
    table.string('uvmvorwoou');
    table.integer('exmahcjczv');
    table.integer('rgzitciqzf');
    table.json('ggcldsgabi');
    table.boolean('utywrxbink');
    table.json('ntesclzjfm');
    table.string('opwejhsyju');
    table.integer('uzyzpkulda');
  });
  await knex.schema.alterTable('nuzjwikgwm', function(table) {
    table.bigInteger('dfjofkzekq');
    table.boolean('ukhknynqkm');
    table.bigInteger('uayugphoij');
    table.text('ossrfelppj');
    table.text('syfdxppvvc');
    table.json('kpvsdbxohm');
  });
  await knex.schema.alterTable('goceffanno', function(table) {
    table.bigInteger('fhuyxjvqye');
    table.integer('mzjioawkvq');
    table.text('ydzwkfoxwq');
    table.integer('kktqzfzwka');
    table.string('okadljsfmw');
    table.timestamp('hgbpkjzepq');
    table.integer('gzixwlgttw');
    table.timestamp('krackxzsnf');
    table.json('alhcmohnny');
    table.json('ytvktzrvif');
  });
  await knex.schema.alterTable('fxwfhizsys', function(table) {
    table.boolean('qzleagwsae');
    table.bigInteger('uuuftokogc');
    table.text('xuvzzyigbe');
    table.boolean('mxgueggjvx');
    table.float('hrvcychiwy');
    table.timestamp('chcphuivmj');
    table.float('wnziwnkrts');
  });
  await knex.schema.alterTable('pyhubjhwyq', function(table) {
    table.bigInteger('grdkkbngiy');
    table.bigInteger('uxvikuxyow');
    table.integer('kbcxgzrbwp');
    table.timestamp('mwuqddlmrq');
    table.float('wziywfqzav');
    table.boolean('mmzzqhzgta');
  });
  await knex.schema.alterTable('fltsfqqkqx', function(table) {
    table.timestamp('jvieixspfa');
    table.json('vrbttspcqu');
    table.bigInteger('wjhryzkiec');
  });
  await knex.schema.alterTable('xlnqsqicmc', function(table) {
    table.bigInteger('byldudwqfp');
    table.string('jalqyddsjy');
    table.json('hnotrldabm');
    table.text('mocfogeoqw');
  });
  await knex.schema.alterTable('yeaepbqaqy', function(table) {
    table.integer('dgpfvnrqco');
    table.integer('mghrpdkwjs');
    table.json('lnupikyewa');
    table.text('vbypnijqlg');
    table.string('bpoepgbpoo');
    table.bigInteger('sdnozyjgax');
    table.boolean('mfdjbfhwub');
    table.text('attdbeimeh');
    table.integer('xuoikzmrgk');
  });
  await knex.schema.alterTable('nkdieeiquy', function(table) {
    table.timestamp('hxcqgnchfu');
    table.string('qetjwasuev');
    table.integer('uyircijccm');
    table.integer('rbmuvpkrzm');
    table.json('cqwnffrywy');
    table.string('bnpdtacxqd');
    table.timestamp('oorudyxnwa');
    table.text('xpjjlkqodt');
  });
  await knex.schema.alterTable('jyptxcfagv', function(table) {
    table.integer('weqjjiiawz');
    table.integer('ewfixrheba');
    table.integer('levriicnpz');
    table.float('fcclqwxikp');
    table.json('ketfmgibku');
    table.json('xwkkeymljw');
    table.bigInteger('iumtunzuud');
    table.boolean('gtfmrgjuwk');
  });
  await knex.schema.alterTable('syqfnsgjia', function(table) {
    table.json('tpinnnpkon');
    table.text('cspyeydojq');
    table.timestamp('sjczfrbodr');
  });
  await knex.schema.alterTable('czujpswgik', function(table) {
    table.json('tcbpjynrtw');
    table.integer('ohimdbuupo');
    table.string('ojhxixlads');
    table.boolean('vzcnxdztva');
    table.integer('iitgihlbdl');
    table.json('dppckyhvwx');
  });
  await knex.schema.alterTable('jktrroqooc', function(table) {
    table.integer('ejrqcpsoqg');
    table.float('btjmceuwzd');
    table.json('faabryprww');
  });
  await knex.schema.alterTable('osjdixiszd', function(table) {
    table.integer('shxtsmrodz');
    table.boolean('dsclrpsktb');
    table.timestamp('zvghuqemhu');
    table.integer('fnjqpqhlmg');
    table.bigInteger('coxvydpkdu');
    table.json('wblodtsbsr');
    table.string('ausflstbbq');
    table.integer('ptdtaxxard');
    table.float('xvefteazlb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};