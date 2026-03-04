'use strict';

/**
 * Migration: 20240202102951_vtuzbiqqjqorsls
 * Description: Drop table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('awqwjxhouc', function(table) {
    table.float('sudvreodas');
    table.float('nlekxllkqt');
    table.text('hweufufvpo');
    table.json('pdsvxutdqc');
    table.bigInteger('tyceidfuey');
    table.timestamp('gfzidvciiw');
    table.float('bkdzwgkfbs');
    table.string('ukivdidjwn');
    table.integer('uxwkonuwrd');
  });
  await knex.schema.alterTable('ggbgslaikd', function(table) {
    table.bigInteger('muxwdifxut');
    table.string('ixfsmwgbto');
    table.bigInteger('rlpngqswza');
    table.float('oehlpbpdec');
    table.json('zpmykmduue');
    table.boolean('ugyfjnrnyx');
    table.string('kaltwpftxf');
    table.float('jsuaputqve');
    table.boolean('xpouprdapr');
    table.text('xxqatugidi');
  });
  await knex.schema.alterTable('fpyauqjsgf', function(table) {
    table.text('vqarzejzns');
    table.text('raelgvyrxs');
    table.text('gvzbxrfohm');
    table.float('lieeybjkmj');
    table.bigInteger('shtupenlsd');
    table.boolean('nvlrwiooyb');
  });
  await knex.schema.alterTable('dmlsxlqpbd', function(table) {
    table.timestamp('cjlcmbukev');
    table.json('fuxcprcbzx');
    table.json('bibnogjvpw');
    table.boolean('enswpvfrws');
  });
  await knex.schema.alterTable('zahmhjroim', function(table) {
    table.float('athojemate');
    table.integer('ezndcbowth');
    table.float('aaufydslxd');
    table.boolean('iarfxktyri');
    table.json('hzuukytwyf');
    table.integer('ugdvrwlwlt');
    table.string('vpihxjphwy');
    table.bigInteger('aqspifutzq');
    table.float('sshddqbfex');
  });
  await knex.schema.alterTable('urxmmgcrhp', function(table) {
    table.boolean('pytnpptzcy');
    table.bigInteger('ekcuvorsik');
    table.integer('nzwuyxewhg');
    table.text('jdqhbdfzkf');
    table.boolean('dvmqilckgd');
    table.float('kbsoeulygo');
    table.boolean('zrevsuaafa');
    table.text('kqovwozlcg');
    table.float('mtmdhxzvnt');
  });
  await knex.schema.alterTable('aqnaloreep', function(table) {
    table.integer('upmsopvxsy');
    table.float('hvyvbonmfq');
    table.boolean('locslqbuxd');
    table.bigInteger('ekgdtdvixy');
    table.bigInteger('jlbwwluaet');
    table.integer('cjbrdrhbxy');
    table.float('mkhzdtxtpr');
    table.boolean('tnmkhgfgbe');
    table.text('dbnyyqdvwe');
    table.boolean('twcpvzhwwn');
  });
  await knex.schema.alterTable('ylikkfgivf', function(table) {
    table.bigInteger('ofzqhiiyhd');
    table.integer('aamkwjhicr');
    table.bigInteger('ncnoechcql');
    table.string('jtkwoljuxa');
    table.json('kpmxzatyvg');
    table.bigInteger('clzqmjtybe');
    table.bigInteger('xjhdnpprhv');
    table.float('evqwnauisy');
  });
  await knex.schema.alterTable('tofizdhgqu', function(table) {
    table.timestamp('easitwrlde');
    table.timestamp('bdqlssvdnr');
    table.boolean('ijvroifydl');
    table.string('pxbizsreeg');
    table.json('xbwedrjgry');
    table.json('kenbddoapc');
    table.string('aenrgzmtxj');
    table.boolean('ytlwtkxnhs');
    table.boolean('pwurqiowmi');
    table.text('ikgmldfidp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};