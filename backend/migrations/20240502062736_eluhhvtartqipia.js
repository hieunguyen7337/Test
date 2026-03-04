'use strict';

/**
 * Migration: 20240502062736_eluhhvtartqipia
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iblpxwdidq', function(table) {
    table.boolean('mzodxmjhyq');
    table.float('nlenrbpjez');
    table.integer('lstvecjhmd');
    table.string('pjxejzswgw');
    table.json('npkugomnnn');
  });
  await knex.schema.alterTable('tgtwhgqnew', function(table) {
    table.bigInteger('mljetekvqh');
    table.float('tpiklsqdsc');
    table.json('payiplfjfo');
  });
  await knex.schema.alterTable('uqgyfbgohb', function(table) {
    table.timestamp('pjairslrom');
    table.boolean('jeszqryygn');
    table.integer('kjwtffedpr');
    table.text('ugteydykiv');
    table.string('okeqnlbjxp');
    table.string('jpvxcsvoff');
    table.text('dkebtsiwtk');
  });
  await knex.schema.alterTable('mhlmrhynqp', function(table) {
    table.boolean('dcgkcoktqh');
    table.text('nqkmbflfye');
    table.float('vjvsiivndw');
    table.string('tnaixksvwh');
    table.json('xdmypbmnha');
    table.bigInteger('paapqstixy');
    table.text('qfxeskmhca');
  });
  await knex.schema.alterTable('zmwqflxual', function(table) {
    table.bigInteger('oqpolvetic');
    table.bigInteger('xcynehqayi');
    table.text('wzmsgapzho');
    table.text('dnezqieilr');
    table.text('ucqrisyqpi');
    table.bigInteger('choelafiyl');
  });
  await knex.schema.alterTable('cjqyudmmzi', function(table) {
    table.json('tfymlqyctk');
    table.text('ewotaydufi');
    table.text('kavtxtqglf');
    table.integer('bmsrbnkwip');
    table.boolean('ipgsxmczuv');
  });
  await knex.schema.alterTable('xccukbgtcu', function(table) {
    table.integer('cuuqknfgds');
    table.bigInteger('bibsathfom');
    table.float('fdqvmqelgh');
    table.boolean('nacaywxvjn');
    table.float('blzyxpgawi');
    table.timestamp('uapnglhilt');
    table.boolean('gcdvupoigs');
    table.json('xwejjflebi');
    table.json('vuzhnckthb');
  });
  await knex.schema.alterTable('czzbetmvyo', function(table) {
    table.float('urpcipvaul');
    table.bigInteger('qjhqpceccf');
    table.json('bjziupkixt');
    table.text('xwxglnpxvt');
    table.float('pcivewqrfp');
    table.json('kxpmvuhmlo');
  });
  await knex.schema.alterTable('bwlfvvjjrj', function(table) {
    table.text('usacbsdrte');
    table.bigInteger('zoughkwmwg');
    table.text('gagqofrhar');
    table.boolean('lbohazaibd');
  });
  await knex.schema.alterTable('fjzhgeckli', function(table) {
    table.boolean('hmlmwiiqlu');
    table.bigInteger('dhxxwcwvmz');
    table.float('mfoxeptvdq');
    table.bigInteger('tgwzlokhrg');
  });
  await knex.schema.alterTable('tpbojrotak', function(table) {
    table.string('ydyzkhnevo');
    table.timestamp('jorttgiryt');
    table.boolean('pzhkttczfh');
    table.text('bglovwtlix');
    table.json('aqxudwouba');
  });
  await knex.schema.alterTable('aasrmiatfu', function(table) {
    table.json('piwxrpswma');
    table.string('vxakicknfm');
    table.timestamp('khqdsjkxxh');
    table.boolean('jpfrloavck');
    table.json('dnhtcsmwfi');
  });
  await knex.schema.alterTable('uvtmenclmj', function(table) {
    table.bigInteger('syegijevsh');
    table.string('kpschveuao');
    table.integer('xvnohhupit');
    table.string('ayjvmgjqmy');
    table.boolean('eimyfemcmb');
    table.text('agtxfrtgpe');
    table.boolean('bwlehawwis');
  });
  await knex.schema.alterTable('mufhdxiukw', function(table) {
    table.text('jinagrmnpw');
    table.timestamp('nqtwjbjclx');
    table.bigInteger('jbgsaqfdtc');
    table.timestamp('ovaywdwnge');
    table.text('oiypkrgtda');
    table.boolean('ziiikrimtn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};