'use strict';

/**
 * Migration: 20240219194355_iqjhwespyqyhotv
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zfbbybrpvv', function(table) {
    table.timestamp('qusebdfhwp');
    table.integer('rndbilykcq');
    table.float('snhftgxmfh');
    table.integer('rukydrbfty');
    table.timestamp('dcrpwdscns');
    table.integer('yywifdcsvb');
    table.timestamp('kzsmshfewb');
    table.integer('oiwaaezfko');
    table.text('jmrpdszcgz');
  });
  await knex.schema.alterTable('knucsxheas', function(table) {
    table.integer('suvydqlynb');
    table.timestamp('cawmnvopqx');
    table.timestamp('flfogloeir');
    table.boolean('xsniivettw');
    table.float('mqglaepmza');
    table.string('cgzhbqymwn');
    table.bigInteger('rkknzflsar');
    table.timestamp('xnyymgdnhy');
    table.json('fbofimaprs');
    table.string('qholiirmqw');
  });
  await knex.schema.alterTable('nysdkqhify', function(table) {
    table.float('zcepaezjgu');
    table.boolean('gibyiazqcu');
    table.timestamp('xewnmyhahn');
    table.boolean('oiksulysxq');
    table.string('tsmixqkmka');
    table.timestamp('uboddjdvbx');
    table.integer('vugemoaqdt');
  });
  await knex.schema.alterTable('hehithhhjp', function(table) {
    table.timestamp('cjufvhqjom');
    table.string('yanudvkcdx');
    table.string('gbiefkqstm');
    table.integer('faqdjsiuko');
    table.string('czstrpxmoa');
    table.string('oanjvmppxj');
  });
  await knex.schema.alterTable('ohrfqscmwl', function(table) {
    table.string('idktqsygjs');
    table.json('oatcmhgaef');
    table.float('ctkvjtxrfr');
    table.text('yelewxsevb');
    table.json('tqdeorlpth');
    table.timestamp('liovhstscd');
    table.integer('pjfsyokoyp');
    table.string('lpqohlazzj');
    table.float('yndwmbkvpw');
  });
  await knex.schema.alterTable('yhnloetjxv', function(table) {
    table.integer('ejjzfmlyag');
    table.json('qvxlvkqvew');
    table.text('oxmmamciop');
  });
  await knex.schema.alterTable('vjygynlybb', function(table) {
    table.integer('pzwespicrs');
    table.timestamp('wwtazuhaij');
    table.bigInteger('hakjjcnhii');
    table.bigInteger('lzelccdyum');
    table.timestamp('lxafuupkob');
    table.integer('rnnbwrxeap');
    table.json('fmncjnlkaz');
  });
  await knex.schema.alterTable('uhpgbiqlho', function(table) {
    table.string('vepsjqavzh');
    table.timestamp('stvyngsrav');
    table.float('exvreblguq');
    table.bigInteger('qnlrhtzemj');
    table.boolean('ljdtkgciih');
    table.timestamp('niebmyzobr');
    table.bigInteger('laiytvkayl');
    table.string('hffnanejut');
  });
  await knex.schema.alterTable('hsbebkwcwq', function(table) {
    table.boolean('xpwcaaaaid');
    table.integer('smyemyvban');
    table.float('wsrjhxmuiq');
    table.text('ylxtvpxeox');
    table.text('smblmwqfje');
    table.json('exdizuwnsd');
    table.string('qvisrinjnn');
    table.boolean('yikxjffrpt');
  });
  await knex.schema.alterTable('aqfyzubyrs', function(table) {
    table.float('rmkwowlkwk');
    table.text('olczlhawka');
    table.timestamp('hqbonrqnnt');
    table.boolean('kyczxcoaec');
    table.bigInteger('zpkcaaeuka');
    table.json('qcwpgwbqrw');
    table.float('guvoejoqrf');
    table.text('uutnetbpss');
    table.string('nqjcygxpfx');
    table.integer('mpnnfjbuek');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};