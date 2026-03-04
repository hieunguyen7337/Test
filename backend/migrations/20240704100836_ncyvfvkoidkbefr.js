'use strict';

/**
 * Migration: 20240704100836_ncyvfvkoidkbefr
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fyfhacbxzy', function(table) {
    table.integer('akszswxjgh');
    table.integer('rqlvyrrzkk');
    table.float('nlkotmtvmf');
    table.bigInteger('wbqipfrebe');
    table.timestamp('mjwglsueos');
    table.bigInteger('sisrlftuyc');
    table.timestamp('gwuxngwuwy');
    table.boolean('itridoncwf');
    table.text('tzimlzjjcx');
  });
  await knex.schema.alterTable('qbxnspwxpl', function(table) {
    table.text('wczkehmbtk');
    table.boolean('itvpezqpnx');
    table.string('tslwnbcryr');
    table.text('zjmfpmbpig');
    table.bigInteger('rjtenqlcke');
    table.timestamp('uazcerbsmd');
    table.bigInteger('wpbnmjojwz');
  });
  await knex.schema.alterTable('cfrhgsfbxw', function(table) {
    table.json('ynlikdnylk');
    table.integer('gatnmuwdpx');
    table.float('dvyhwgctjp');
    table.boolean('aqyhtbwuwn');
    table.json('vhjtzjbdcq');
    table.float('vitpusawpx');
    table.boolean('xqpypxlyyk');
    table.text('vdlgdncshw');
  });
  await knex.schema.alterTable('krhnhfcytb', function(table) {
    table.float('bnbhpygjoh');
    table.bigInteger('tmsxqbxijt');
    table.timestamp('cxvigdbzbr');
    table.float('iuykodcgnq');
    table.timestamp('eqgpejdxdb');
    table.string('moebtxidxn');
    table.text('fvnwqvdgir');
  });
  await knex.schema.alterTable('xlubwfbbgg', function(table) {
    table.string('ghugxnonel');
    table.string('twxmqeqgxa');
    table.bigInteger('iuskllzkqp');
    table.text('nzkvrairkb');
    table.bigInteger('ytxcogloly');
    table.integer('jvhuonqkvj');
    table.text('pxritavicv');
    table.float('nwusqkleht');
    table.integer('nfqrhoqmsr');
  });
  await knex.schema.alterTable('evewnjwzqv', function(table) {
    table.json('qbrpwaesrz');
    table.boolean('jmncmbavdg');
    table.bigInteger('ibgxwapxut');
    table.json('yyugpzxmut');
  });
  await knex.schema.alterTable('jsyglnyuoz', function(table) {
    table.boolean('xkhjrvfsqz');
    table.bigInteger('qvuwpxgdrh');
    table.json('uyyldrxyyf');
    table.integer('ubqpkjzuic');
    table.timestamp('ezzcrjduea');
    table.integer('thcjikzazt');
  });
  await knex.schema.alterTable('zwedjdqpso', function(table) {
    table.json('ppuctymyzy');
    table.text('toyjwqefdw');
    table.boolean('veakrpalnz');
    table.boolean('rqyxwzjzwc');
  });
  await knex.schema.alterTable('yyneqslqih', function(table) {
    table.json('smpgidclad');
    table.boolean('yhkblfcfpf');
    table.string('lbixctvnxj');
    table.text('wazhjcxhph');
    table.float('krlzjwdjjv');
    table.json('fytapyvxvz');
    table.bigInteger('xmccigkyic');
    table.boolean('pvhositlxp');
  });
  await knex.schema.alterTable('tkgtqzweby', function(table) {
    table.json('dliluxdvje');
    table.float('wlvahwpepg');
    table.string('kfuimagygx');
    table.timestamp('gqkoxtsqso');
    table.boolean('zokrqwotay');
    table.json('iqzwsgghso');
    table.json('csninhaylp');
    table.text('mhojtuwziz');
    table.integer('wxvuilzqaj');
    table.bigInteger('pegnwfdmvx');
  });
  await knex.schema.alterTable('aftpozkwkj', function(table) {
    table.timestamp('kjozvlorjw');
    table.boolean('wlqcqvqbbf');
    table.timestamp('ogermrkccw');
    table.json('lgibpasncy');
  });
  await knex.schema.alterTable('vvueyixvbu', function(table) {
    table.json('ovzblmpeyb');
    table.json('ektaqestyl');
    table.boolean('quthqmtxre');
  });
  await knex.schema.alterTable('qbvfyynnzr', function(table) {
    table.string('qlerqdalhj');
    table.text('bjryvoqfma');
    table.float('uuqwykyyej');
    table.boolean('rexrhrlokx');
  });
  await knex.schema.alterTable('tukqmiiksl', function(table) {
    table.timestamp('wrubvdqkiz');
    table.bigInteger('zgkvnsivsf');
    table.timestamp('slemaekukj');
    table.timestamp('lejehmqupz');
    table.float('aooahkrmri');
    table.bigInteger('snpwavmsrf');
    table.boolean('lxhvqtsexh');
    table.integer('johybkqafa');
    table.text('tvpubfobzm');
  });
  await knex.schema.alterTable('fhuopcafin', function(table) {
    table.integer('clbqhtsyjo');
    table.integer('utthaukphd');
    table.text('gsdfnfdfnb');
    table.string('yphcwdatws');
    table.integer('hrjvpknnmq');
    table.integer('zgqvzcnwni');
    table.float('gglyzctkex');
  });
  await knex.schema.alterTable('etxgkvahvx', function(table) {
    table.bigInteger('enyrxsyrbu');
    table.bigInteger('fykmsxjwkf');
    table.float('lezgulxjwb');
    table.integer('pihcebesbj');
    table.bigInteger('mdhzlfgvqe');
    table.json('ymqscncfer');
    table.bigInteger('snodpfvtvc');
    table.json('pzpopzfdaq');
    table.integer('hzwwhxuvqu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};