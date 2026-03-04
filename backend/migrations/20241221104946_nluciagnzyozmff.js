'use strict';

/**
 * Migration: 20241221104946_nluciagnzyozmff
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xbhyukmbyk', function(table) {
    table.integer('lvbsmotnfw');
    table.timestamp('czcmuxoiqo');
    table.timestamp('ovgwquaysq');
    table.json('tfiygswgjc');
    table.bigInteger('xekkuqtqxs');
    table.float('wmlovuesub');
    table.string('mwwtegeqxc');
    table.bigInteger('glevjsysxe');
  });
  await knex.schema.alterTable('whvagqorkh', function(table) {
    table.bigInteger('tzbjcvwcfy');
    table.string('ocheorjaar');
    table.bigInteger('dazyhhykdp');
    table.text('fixxhsafrw');
    table.text('nwlxgnaiyu');
  });
  await knex.schema.alterTable('natcmidybs', function(table) {
    table.text('gkzzmtkfer');
    table.text('oilncyokhz');
    table.json('cjydywxfvr');
    table.json('ojxuthijkn');
    table.text('tnydmnczmi');
    table.string('yvxoeavieg');
    table.float('evdunxkdov');
  });
  await knex.schema.alterTable('ngtmdhoiqc', function(table) {
    table.integer('ciblktwomt');
    table.integer('rcjmfosvsl');
    table.integer('nvmyiyzeyh');
    table.timestamp('qcpqquqyzs');
    table.json('zofsdnkxfr');
    table.json('tkvddmawgq');
    table.string('wcrvtwsmtf');
  });
  await knex.schema.alterTable('eozvyceyzd', function(table) {
    table.text('cpxbbxfzvz');
    table.text('ehzbjzsnmy');
    table.text('dtveidxxwo');
    table.integer('qyytcccwib');
    table.json('mqkioillsr');
    table.boolean('bgxckgngyx');
    table.float('jdllljxntx');
    table.boolean('pwmuzolzgj');
    table.text('rplaacetpf');
  });
  await knex.schema.alterTable('qicferbnzp', function(table) {
    table.integer('bsbzzpbrph');
    table.json('vuprmjutad');
    table.text('aopkyvxuji');
    table.float('ycfgcfwyov');
    table.timestamp('rgsjuopopc');
    table.json('ddkjqapopz');
    table.string('mnrmvohjyf');
    table.text('slgizlqxhb');
    table.text('qoitgejada');
    table.float('tunwxexxxi');
  });
  await knex.schema.alterTable('xzuozwdxhq', function(table) {
    table.text('rdkdqbigep');
    table.timestamp('aqmoanbnub');
    table.string('zhhplkuiqx');
    table.json('wixjpfnluz');
    table.timestamp('sviatezevk');
    table.boolean('fsvrmdnqwy');
  });
  await knex.schema.alterTable('uqjekwjgvv', function(table) {
    table.text('ndfftffzds');
    table.integer('jxuasgbffs');
    table.json('idtjiqgbtm');
    table.boolean('fknijgjfmd');
    table.text('qljpyudjoo');
    table.string('rjhsuuyzab');
    table.integer('eujeudgfen');
  });
  await knex.schema.alterTable('tlguuficub', function(table) {
    table.float('hcttbizgac');
    table.json('azsdcawlfj');
    table.bigInteger('kmwyafgwuv');
    table.bigInteger('ayierkrjgu');
    table.json('bfdizynbzr');
    table.integer('erdenszgxm');
    table.integer('rkpudtivnt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};