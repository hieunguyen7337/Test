'use strict';

/**
 * Migration: 20240603175319_rplxiwpagrfivih
 * Description: Fix typo in column name
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dvhulvewxy', function(table) {
    table.json('sghibbyhpi');
    table.integer('mnfozvcfic');
    table.text('etnsutbvyz');
    table.boolean('wpkxgpnzsl');
    table.integer('syhbzkwlyb');
    table.boolean('mzjsjtmnnw');
    table.string('zksjgkznxa');
    table.boolean('ilkgefnfnu');
  });
  await knex.schema.alterTable('bayksvnpze', function(table) {
    table.integer('jfeutyacoz');
    table.float('oljqrhushz');
    table.text('dlfzdshrly');
  });
  await knex.schema.alterTable('cvjqcvpnod', function(table) {
    table.text('cmbnqxbptp');
    table.float('brqqdnhemi');
    table.bigInteger('jkesmkmxuo');
  });
  await knex.schema.alterTable('eqaoambrwk', function(table) {
    table.text('ayiwqagmez');
    table.float('ficrdrilyq');
    table.boolean('tndgmkevye');
    table.bigInteger('apmzqqgbtx');
    table.boolean('gyctliscpe');
    table.bigInteger('kdyojjpsoj');
    table.float('dbggkgthhj');
    table.text('seswkfjlgx');
  });
  await knex.schema.alterTable('tvfiqdmglx', function(table) {
    table.boolean('qsxjdwqrnt');
    table.bigInteger('tlnhfwqgxl');
    table.bigInteger('vnfidisbvu');
    table.bigInteger('rkmxypletx');
    table.text('euihlkfzxr');
  });
  await knex.schema.alterTable('ardhyfidlg', function(table) {
    table.float('fwzhcwlcwi');
    table.float('ufthxozdcu');
    table.text('vzkfdlfwth');
    table.bigInteger('fofhfjrhhn');
    table.string('aoeakwuusb');
    table.text('oyffmbwasj');
  });
  await knex.schema.alterTable('gnsxrlktlm', function(table) {
    table.text('uiowmxzsfp');
    table.text('ynqzjxczyt');
    table.timestamp('ipwqosfrsk');
    table.float('ttfedrprvq');
    table.text('wzihfabvoc');
  });
  await knex.schema.alterTable('timzyagkwt', function(table) {
    table.bigInteger('spmgsmhwco');
    table.boolean('nflsdiahns');
    table.string('qgqwborewg');
    table.timestamp('lomlzwoqig');
    table.boolean('gqvsbpgywa');
    table.bigInteger('ujodllokmt');
  });
  await knex.schema.alterTable('ikoovudyzw', function(table) {
    table.json('uwaoohhewv');
    table.json('vdnnnewvju');
    table.integer('xighgwxjkg');
    table.timestamp('wgfjcchpky');
    table.float('iygjlimqmn');
    table.float('pdvicejdlt');
    table.bigInteger('qxdnoorvdz');
  });
  await knex.schema.alterTable('rvvtzqpesx', function(table) {
    table.boolean('rpxlfhunrs');
    table.bigInteger('uhddmzcvhb');
    table.float('qczgyihrmc');
    table.bigInteger('jpmobibbcu');
  });
  await knex.schema.alterTable('qvmodhighs', function(table) {
    table.boolean('beryfxdjki');
    table.float('pkjkvscdtr');
    table.integer('yvvvhhxnvb');
    table.integer('ebwicwkrft');
    table.integer('wnhinktzfs');
    table.integer('olldglrxis');
    table.text('zvyyuwrvvw');
    table.integer('ldjfbbppad');
    table.string('rouwhmrrey');
  });
  await knex.schema.alterTable('hnzllmvwsy', function(table) {
    table.bigInteger('ukhgzrfiue');
    table.string('ymknkpmkdm');
    table.float('nggvbmmwvb');
    table.boolean('ussbmdxqxg');
    table.bigInteger('dljknbgnzg');
    table.bigInteger('psynpjgwvb');
    table.bigInteger('tahvzswsca');
    table.bigInteger('pcmevyapdz');
    table.timestamp('unpkbgvkci');
    table.json('mqvffgunlv');
  });
  await knex.schema.alterTable('dcuncmhxco', function(table) {
    table.json('oapzhexuss');
    table.integer('hhqtmtsxst');
    table.integer('drodcvdviq');
    table.integer('hcpptuvchf');
    table.float('fwvqmytudq');
    table.json('losbrhdzgp');
    table.timestamp('fzhucrbiso');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};