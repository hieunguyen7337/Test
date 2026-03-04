'use strict';

/**
 * Migration: 20240706171947_ipapljuiwntkjyi
 * Description: Remove column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rrqvzfygcm', function(table) {
    table.json('vbeuwtkckx');
    table.integer('mxwxmlqteq');
    table.timestamp('sjgxlgsata');
    table.float('wnnacmqgth');
    table.string('cdxgwrtlwd');
    table.integer('hadwhmotmd');
    table.timestamp('mwwubbnjsm');
    table.timestamp('xzmevkdpam');
  });
  await knex.schema.alterTable('sdmoaxlhbo', function(table) {
    table.integer('rryqxhbeww');
    table.text('cabbreokry');
    table.string('livaycocly');
    table.json('iypdttxdgl');
    table.json('obchjcslue');
    table.timestamp('anfgqmyqpb');
    table.timestamp('snlzpspvld');
    table.bigInteger('zyrycuuqnx');
    table.integer('zfuiejpelz');
  });
  await knex.schema.alterTable('zsqlzxyskk', function(table) {
    table.timestamp('hzsutxkucz');
    table.float('cnicurxuzq');
    table.json('lbozkttgkm');
    table.string('ujyazzyzxp');
  });
  await knex.schema.alterTable('nrvgilnmuf', function(table) {
    table.text('imjrdgczbx');
    table.boolean('bqexwqbkfg');
    table.float('hlacbjbckz');
    table.integer('ryiegrghcd');
    table.integer('leghxnzijn');
    table.float('qtlattnuhf');
    table.text('mrgfkoylmc');
  });
  await knex.schema.alterTable('hxjtwwbdcj', function(table) {
    table.string('ytkauzaixn');
    table.boolean('oqlbzyccwe');
    table.text('ckjsnhaacw');
  });
  await knex.schema.alterTable('qnkhgobhsx', function(table) {
    table.string('rnjxsopqlg');
    table.float('bpintgyeth');
    table.json('jyxtunhbrk');
    table.json('udxjdbplcf');
  });
  await knex.schema.alterTable('xsxlefiefd', function(table) {
    table.boolean('kppczudobu');
    table.integer('mnxznfryhm');
    table.boolean('qwhbeywulc');
    table.string('oamcmyvrrq');
  });
  await knex.schema.alterTable('voppjurtwu', function(table) {
    table.string('zhmlzoisyt');
    table.string('hajlbzjkgx');
    table.timestamp('jlojnazfgc');
    table.timestamp('erdcfozusw');
  });
  await knex.schema.alterTable('ggocuemjhw', function(table) {
    table.timestamp('vijhgspgmr');
    table.json('dmasfhngrs');
    table.bigInteger('cqqxkfvtds');
    table.bigInteger('skgsysogyj');
  });
  await knex.schema.alterTable('gbgdbiforz', function(table) {
    table.float('jooqdghtaj');
    table.float('tporhnqlwb');
    table.float('wmqnsuoawu');
    table.bigInteger('itkksjgdnt');
    table.float('tiotdhhqwe');
    table.timestamp('lwirnhyrgm');
  });
  await knex.schema.alterTable('mjoyooemvl', function(table) {
    table.bigInteger('sfqahlvnjy');
    table.float('hyiedqvmwl');
    table.boolean('ohluazkbsd');
    table.float('wabaqpuddl');
    table.integer('mjbucsivwq');
  });
  await knex.schema.alterTable('wzjyhyiltw', function(table) {
    table.boolean('iaigmfieri');
    table.integer('aiqnsppznw');
    table.float('tfevqcqnmp');
    table.boolean('iycpjvfysy');
    table.boolean('sjdeymmjuu');
    table.integer('yqdwvzoxhv');
  });
  await knex.schema.alterTable('xtbnszewgk', function(table) {
    table.boolean('kdmgwulycr');
    table.timestamp('twjfwkhooh');
    table.text('ourlrhecdm');
    table.json('bldcefgjto');
    table.string('paiqgqxqsd');
    table.integer('ruumizjpyj');
    table.text('qvbbqacloh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};