'use strict';

/**
 * Migration: 20240319034551_mmalomnfszmvoul
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('knvngesngu', function(table) {
    table.json('ibpesjegiu');
    table.text('wdwxvdelpl');
    table.boolean('pragyskiej');
    table.float('jvmrntkweq');
    table.float('dtsjfcdyjp');
    table.json('ibowwbytmw');
  });
  await knex.schema.alterTable('wjicvjqnar', function(table) {
    table.integer('kwmhzdjqcs');
    table.integer('sdzqdaghgi');
    table.integer('gshmvagqqn');
    table.integer('bjsprnosui');
    table.json('ivbwzapmob');
  });
  await knex.schema.alterTable('qnjfroexzp', function(table) {
    table.json('nvmylqpmlv');
    table.bigInteger('tuxeexppos');
    table.boolean('tlmfqmkmto');
    table.boolean('vgwdagzsqh');
    table.json('sotorrywbf');
    table.float('zdvpgvufnf');
  });
  await knex.schema.alterTable('srfurfigmy', function(table) {
    table.json('sbnulpcdba');
    table.bigInteger('pjbfalpoqz');
    table.integer('tozpmvdbis');
    table.bigInteger('ssdzurxwqo');
    table.bigInteger('ogolegepgu');
    table.timestamp('stfhmahvqv');
    table.integer('wajdcpllmg');
    table.float('ldwsfhcikc');
    table.json('gpknnkztgm');
    table.string('hphrzkhsur');
  });
  await knex.schema.alterTable('tcpvmfwivl', function(table) {
    table.text('cpksgdsfvn');
    table.string('qgsooqtrul');
    table.bigInteger('wilgalcbjx');
    table.integer('npfcrlrkms');
    table.json('gppnblpymf');
    table.float('wobyprsbbv');
    table.timestamp('vkopuqlgjy');
    table.bigInteger('wgcsutomqu');
    table.integer('domjnnjpsj');
  });
  await knex.schema.alterTable('wzyvsabnjr', function(table) {
    table.string('odnngjxbwx');
    table.float('oorurrxqne');
    table.string('cfweqhpjrr');
  });
  await knex.schema.alterTable('stkmpvqefx', function(table) {
    table.timestamp('dzyrjplnzb');
    table.boolean('jtvswcgmjg');
    table.string('cgokjjgtfo');
    table.text('lfssnarnxc');
    table.bigInteger('ixcjtjfrui');
    table.string('qbcoiqetxy');
    table.json('omsdiqnuik');
    table.integer('ppmldeuiiu');
    table.float('ufeciakmai');
    table.text('pygreepezt');
  });
  await knex.schema.alterTable('szprxlqrns', function(table) {
    table.bigInteger('rvdurcqjzd');
    table.string('ykvqzooqzf');
    table.timestamp('vkigqilrnw');
    table.bigInteger('zgwepmnxjy');
  });
  await knex.schema.alterTable('wpcnevmurz', function(table) {
    table.timestamp('xmkprbthlc');
    table.bigInteger('bfzycqnjtn');
    table.integer('yfbtuqciyv');
    table.json('zqkgrlxjxk');
    table.text('wmlfrknbau');
    table.float('ecnosbefqq');
    table.float('lclzsrmyll');
    table.json('jujtwxlooo');
  });
  await knex.schema.alterTable('rvjacakzwr', function(table) {
    table.timestamp('cjmbbbegfd');
    table.timestamp('qlplnyrtit');
    table.float('xnirhjqsxv');
    table.text('kjwifukiyi');
    table.json('rcmpeisvut');
  });
  await knex.schema.alterTable('fixlxwpmgm', function(table) {
    table.integer('njdhzvhvkc');
    table.boolean('idaalokngz');
    table.timestamp('jhmmhbrtkc');
    table.boolean('aagjwknjpm');
    table.timestamp('hiborlndyv');
    table.integer('fxbmpylakm');
    table.integer('volkjxdeul');
  });
  await knex.schema.alterTable('qquxpgicyb', function(table) {
    table.string('doylnsqnma');
    table.bigInteger('mfyvswfgks');
    table.boolean('xnkrpdvbju');
    table.timestamp('pkeqmahvkq');
    table.timestamp('aqilajirtc');
    table.string('chfexdrljn');
    table.timestamp('fskzqmxedr');
    table.string('oyjnodgaes');
    table.float('msvhrvbhqn');
  });
  await knex.schema.alterTable('zacqeuufsg', function(table) {
    table.text('rbifvylsls');
    table.boolean('ioqtusixux');
    table.string('rggfwpzvuj');
    table.float('hravxhjben');
    table.text('djoalkomhr');
  });
  await knex.schema.alterTable('zqjxqiuuln', function(table) {
    table.boolean('fquhpwldml');
    table.timestamp('iwmgvfvuxb');
    table.float('dfzvrtulkh');
    table.bigInteger('ovterieaxf');
    table.bigInteger('xxhkhphmnw');
    table.integer('syphqadrvi');
    table.json('raojzeedyq');
  });
  await knex.schema.alterTable('lfhzwhirrj', function(table) {
    table.boolean('xhxlinacmh');
    table.bigInteger('qnrikletkh');
    table.text('hxdwljpitg');
    table.boolean('gozmabiijs');
    table.boolean('msljkdgnqz');
    table.json('jcryhcigie');
    table.boolean('ajcrvpphvl');
    table.text('ensunknsyy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};