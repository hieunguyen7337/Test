'use strict';

/**
 * Migration: 20241212033310_gujpgrekubkyaxg
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('axfdkbfgil', function(table) {
    table.text('tmlofbdxan');
    table.text('rdciahwbri');
    table.string('jydyqtgwby');
    table.float('hjtfziwgto');
    table.float('ybkgdznkxh');
    table.text('yjsayyclrn');
  });
  await knex.schema.alterTable('pltooaswnj', function(table) {
    table.json('nbapuhfcvf');
    table.timestamp('lfpfjsvrwd');
    table.boolean('irmoupneyv');
    table.boolean('ymvsdkpqes');
    table.string('ndgcmocbsf');
    table.integer('bxknaghdzl');
    table.float('okcnngxztn');
  });
  await knex.schema.alterTable('drcolbutmo', function(table) {
    table.bigInteger('vuxwlzdizm');
    table.string('khwloegdfk');
    table.float('jdxihxyzjc');
    table.text('eniqvcaxzy');
    table.text('sjervfcpkq');
    table.json('mhersriujc');
  });
  await knex.schema.alterTable('ypxutrujtg', function(table) {
    table.string('vcugabkjsp');
    table.timestamp('ldcvaahbqn');
    table.boolean('evpnlkcfzn');
    table.timestamp('tkkzzvdokj');
    table.json('afczxhsiqu');
    table.text('gsvxvhoksy');
    table.boolean('rhzusctblo');
    table.boolean('ojmhpascvr');
    table.text('bunccdjgjs');
    table.float('yiqgpwfmdh');
  });
  await knex.schema.alterTable('kjynilxvlp', function(table) {
    table.string('awlzccoofn');
    table.text('lyxpiegxtt');
    table.bigInteger('wxoihorvnv');
    table.timestamp('bfqqhbncxt');
    table.string('xukzaqgrza');
  });
  await knex.schema.alterTable('ufgtavxmzj', function(table) {
    table.timestamp('fwzobghngo');
    table.string('klfnchfper');
    table.timestamp('ltuudozzpa');
    table.integer('rzxlsgzgac');
    table.integer('bxbxzkdjws');
    table.boolean('raumnrcprb');
    table.bigInteger('bpgvqyrrmi');
    table.float('qpyazxlvff');
    table.bigInteger('ztvtnokxnu');
  });
  await knex.schema.alterTable('qduiltrbnb', function(table) {
    table.boolean('mcxnxhvxuq');
    table.float('toihfqywje');
    table.integer('orhnnlwshb');
    table.json('tpybqmzyhz');
    table.json('zpmdxzlomc');
    table.timestamp('zojjrrbsqn');
    table.text('qzxuriryyw');
  });
  await knex.schema.alterTable('mzmjjjamdr', function(table) {
    table.float('emuziirddq');
    table.timestamp('werjqehvrc');
    table.float('jlqytdndja');
    table.text('skdwaduopq');
    table.integer('bnydtzjolu');
  });
  await knex.schema.alterTable('euilyfgfta', function(table) {
    table.integer('czxzdeqscm');
    table.timestamp('qtyscmljxe');
    table.boolean('cgipykmrsx');
    table.json('nhuhyrhiei');
    table.text('lzxanwvcyz');
    table.bigInteger('twfqorrtcr');
    table.string('ufgchxzcjo');
    table.string('waemocpxke');
  });
  await knex.schema.alterTable('giculscrpx', function(table) {
    table.json('tfdgatjqcr');
    table.integer('zvqmxqqtpf');
    table.bigInteger('swhzllfmbm');
    table.bigInteger('jifmmdvmuy');
    table.timestamp('dnhjeramob');
    table.string('anbgrmuvmt');
    table.float('fpxbkkhmsf');
  });
  await knex.schema.alterTable('fgnbqgoxpl', function(table) {
    table.string('sqazxxhzmd');
    table.json('sxbpkbofmh');
    table.bigInteger('rmnvcqvosq');
    table.bigInteger('drvnqcbhur');
    table.timestamp('gjezjvfukr');
    table.boolean('cbfugepjrn');
  });
  await knex.schema.alterTable('mazobetubt', function(table) {
    table.boolean('gmmewljunu');
    table.float('ohemxgnlbq');
    table.string('khdhzlzqpz');
    table.text('ibythrfnls');
    table.string('etbfizxrrt');
    table.timestamp('pyvmkkgjeb');
    table.json('owriioxxsn');
    table.float('lddhpquwbm');
  });
  await knex.schema.alterTable('dnrnktrvlu', function(table) {
    table.integer('weezquiuqu');
    table.integer('immmrmwrrw');
    table.integer('tgrycxpqun');
    table.boolean('kszzmdybhb');
  });
  await knex.schema.alterTable('nmzvkoqpst', function(table) {
    table.string('hrdglzcuil');
    table.boolean('kvkrjawyiz');
    table.bigInteger('wozofyukhi');
  });
  await knex.schema.alterTable('kfsykywfcp', function(table) {
    table.boolean('iqdsnvbibv');
    table.json('lpjodbugpe');
    table.json('hqivaohizn');
    table.float('zbiiskqpbr');
    table.boolean('dndbtisihj');
    table.boolean('lwtvgjiwtr');
    table.integer('enzttrgnvc');
    table.float('mujizprosj');
    table.integer('dqctktyhpu');
    table.json('cgtminobbv');
  });
  await knex.schema.alterTable('tpuhxscltx', function(table) {
    table.integer('jcneyhpugy');
    table.bigInteger('koayqynfzq');
    table.boolean('bubxxgzibq');
    table.string('rdsherfdhm');
    table.integer('pbpjgtrkbp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};