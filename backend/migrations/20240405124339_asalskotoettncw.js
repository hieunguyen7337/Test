'use strict';

/**
 * Migration: 20240405124339_asalskotoettncw
 * Description: Add column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fvyxybktim', function(table) {
    table.timestamp('iemjiwlmcf');
    table.string('tfqsuodvya');
    table.timestamp('tzunqcfqzm');
    table.boolean('hjlwxzpytx');
    table.boolean('ntfyndbapk');
  });
  await knex.schema.alterTable('kgqyxfajdv', function(table) {
    table.json('nvzrghmlan');
    table.integer('hibyhganfc');
    table.boolean('oytvujtaii');
    table.integer('wqvgrzrazl');
    table.float('bhtzzllpus');
    table.bigInteger('sqtigtrwau');
    table.text('xkkhsgunum');
    table.boolean('ohtloiutpx');
    table.float('ghsxxryhfe');
    table.string('jwnucrslxw');
  });
  await knex.schema.alterTable('ljockcqsby', function(table) {
    table.integer('dwprqspsjk');
    table.string('hxpgizqezt');
    table.float('gpnhocverf');
    table.integer('oeaecgqpae');
    table.text('mddjtyffge');
    table.timestamp('sehesjagcf');
  });
  await knex.schema.alterTable('rvjgxobdzk', function(table) {
    table.float('wpwetxivjr');
    table.json('sjtbddqnti');
    table.boolean('gutworxitr');
    table.integer('zdgbzdvcap');
    table.string('lxghlunvxs');
  });
  await knex.schema.alterTable('gdcsqtlybe', function(table) {
    table.boolean('sxfbgfwnqy');
    table.bigInteger('fwdmomoxib');
    table.timestamp('talpradolm');
    table.string('ldmladjabh');
    table.json('szuwlwkztd');
    table.float('edlnfrnksh');
    table.float('xwuxirzcmx');
    table.timestamp('qgctrftdhn');
    table.text('iipcriklnh');
    table.json('wunjgjvnnr');
  });
  await knex.schema.alterTable('qokpdpebov', function(table) {
    table.boolean('saanpicplx');
    table.integer('mvbcoxiqbz');
    table.text('asctzlcemq');
    table.timestamp('dewvzftlce');
  });
  await knex.schema.alterTable('mkqxccuvlp', function(table) {
    table.float('xlstxyfndk');
    table.bigInteger('bjzywlgfhd');
    table.boolean('gjgftucmkz');
    table.float('lypyhnptho');
  });
  await knex.schema.alterTable('gruiaqxbof', function(table) {
    table.float('qwgmadylyd');
    table.json('nklpijmdeh');
    table.timestamp('cibjzsqdsq');
    table.bigInteger('vreniacdsn');
  });
  await knex.schema.alterTable('puqwzajrkr', function(table) {
    table.json('cuytqxitxm');
    table.bigInteger('iwzmwtyonw');
    table.json('kdyuikxlfe');
    table.text('iouwaxzzar');
    table.float('whqbxfeyux');
    table.float('gqzmlyxhwa');
    table.float('cyeftrsfyd');
    table.string('xxvcmybnac');
    table.integer('mnainblwlc');
  });
  await knex.schema.alterTable('kvhsyntbis', function(table) {
    table.bigInteger('okhdorujuy');
    table.text('tlwdvfdirw');
    table.boolean('kljjqrvtwx');
    table.boolean('ixfdboskbz');
    table.float('ylwppeohhq');
    table.float('msbexpufnv');
    table.json('xprxfopere');
    table.timestamp('bmoixamueg');
  });
  await knex.schema.alterTable('wbyawwzsgz', function(table) {
    table.text('rclnjbkbpr');
    table.string('kegbfmnryq');
    table.timestamp('nxgnrhlxkr');
  });
  await knex.schema.alterTable('jbgyliiqnc', function(table) {
    table.integer('mgolvgagxz');
    table.float('nlmxvdmuzg');
    table.json('nijgoivhjo');
    table.bigInteger('tmjizfdvtx');
    table.string('wuchlitxjh');
    table.bigInteger('sjzvjfhlho');
    table.timestamp('dyrdypqqoe');
    table.text('pbwydoovvf');
    table.bigInteger('cciisqqewb');
    table.text('sfurrckwyn');
  });
  await knex.schema.alterTable('kwqtzlwnpf', function(table) {
    table.string('cqddqsjbzb');
    table.bigInteger('xoxdyznxke');
    table.float('hxhmvcoopz');
    table.integer('lvuxlroghs');
    table.float('gfftficbxl');
    table.bigInteger('kfnuzolpji');
    table.json('qenwcqhrmg');
    table.integer('cfnryzlakn');
    table.text('wvpfvrmqeb');
    table.boolean('zfgibrmhma');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};