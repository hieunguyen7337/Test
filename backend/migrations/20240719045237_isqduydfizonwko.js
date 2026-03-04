'use strict';

/**
 * Migration: 20240719045237_isqduydfizonwko
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cuporzxrfd', function(table) {
    table.text('haomlzvlcn');
    table.boolean('dqonhsyvru');
    table.text('tgyyxjqhaq');
    table.bigInteger('odgcgyljnw');
    table.boolean('bedlcpkuww');
    table.json('svjrcvljri');
    table.json('euicanepgb');
    table.boolean('rchhzfeaqs');
  });
  await knex.schema.alterTable('psgmmledxe', function(table) {
    table.timestamp('lsnrbzhxeq');
    table.integer('ldighfndub');
    table.timestamp('hsinchkuxa');
    table.integer('braqjilwua');
    table.json('koziuhuvlo');
    table.text('pyfzmiwfrh');
    table.timestamp('wmtajxivss');
    table.text('gnxescoxgb');
  });
  await knex.schema.alterTable('mkseplvxct', function(table) {
    table.text('qztpoujtvb');
    table.bigInteger('mvtdkqagng');
    table.boolean('alqrymekbd');
    table.string('nbjfigctdt');
    table.boolean('cuvezkoate');
    table.text('crgxwvorsf');
  });
  await knex.schema.alterTable('dwhvmtklsr', function(table) {
    table.json('khhtzpnqxe');
    table.json('veudmxtxnr');
    table.float('hlkmdkrawu');
    table.string('renjwjkfxl');
  });
  await knex.schema.alterTable('ejieejzrxc', function(table) {
    table.integer('ubbhzxfcww');
    table.json('ixsmeslixj');
    table.integer('gpylivozyi');
    table.timestamp('xxmjrvsyje');
    table.json('wwbghxuidx');
    table.float('jlayqhhmve');
    table.text('tuqmhmhomj');
    table.text('oxgxxcvoon');
    table.timestamp('nxltpcmoer');
  });
  await knex.schema.alterTable('gemyyzjpci', function(table) {
    table.string('yvqjbjyfni');
    table.json('cvjwreiztu');
    table.bigInteger('fxlztzhphq');
    table.boolean('oyxtqlpxxd');
    table.text('xtujynawaf');
    table.bigInteger('yjiabatavf');
    table.bigInteger('icknkbtnmr');
    table.bigInteger('nfakvwredo');
    table.text('kgudqqixxr');
    table.integer('bqhejtdmjd');
  });
  await knex.schema.alterTable('ohyhfqjurg', function(table) {
    table.text('aybjgfrkzp');
    table.timestamp('ktjtrpnlwm');
    table.timestamp('vvnisolufv');
    table.boolean('zwcjttzahp');
    table.timestamp('fvnekbnfar');
    table.float('llvswmzovh');
    table.bigInteger('ozilqvtuje');
    table.timestamp('jlejgiwhtz');
    table.float('hzrlpsdcco');
  });
  await knex.schema.alterTable('pgxghdzdpl', function(table) {
    table.string('glkwyxzzqw');
    table.integer('raztmzxdsu');
    table.json('tqojeganfo');
  });
  await knex.schema.alterTable('hxrbufdbto', function(table) {
    table.bigInteger('vxdgakywhm');
    table.text('kfnejiflge');
    table.timestamp('mkgyrmickw');
    table.timestamp('ezekehzxed');
  });
  await knex.schema.alterTable('wyhuupkehs', function(table) {
    table.string('opvpacystv');
    table.text('mvwpxqvxwd');
    table.text('efheybsunj');
    table.timestamp('oajnnfxgdb');
    table.integer('nfcumsdtpa');
    table.timestamp('lanxulysfi');
  });
  await knex.schema.alterTable('keeturpdwi', function(table) {
    table.timestamp('hetlvmiaie');
    table.json('tzyxnnflfz');
    table.json('xbuvqulgkl');
    table.bigInteger('nullczvsnj');
    table.float('qjkayqkonb');
    table.json('bzqozxduan');
  });
  await knex.schema.alterTable('mtcmxvivmg', function(table) {
    table.string('dkxdzfhbhl');
    table.boolean('ymmnsglpgj');
    table.integer('tbwfsjchgq');
    table.text('lbyubgmaml');
    table.timestamp('cqvjqbfudw');
    table.json('jxfyeibsyl');
    table.timestamp('tmxkfpgogj');
    table.text('shfignqqoq');
    table.integer('vatialwwfu');
  });
  await knex.schema.alterTable('jxdttvjfmk', function(table) {
    table.timestamp('qdmmnagjih');
    table.integer('jxrxxsfrik');
    table.text('barajlrxku');
    table.integer('ywpsrrhpmt');
    table.string('ngkvxqipax');
  });
  await knex.schema.alterTable('hijtpxkymr', function(table) {
    table.json('pqxqchslus');
    table.string('kksjcqbihf');
    table.integer('svsiavklas');
    table.bigInteger('uevyqirldi');
    table.boolean('lonefyscvi');
  });
  await knex.schema.alterTable('gfkcfrikmd', function(table) {
    table.bigInteger('ghfjxhpfgc');
    table.boolean('uypzpziwua');
    table.text('gqzipqvfff');
    table.json('hynukjuxxn');
    table.integer('wtbweblxrn');
    table.boolean('knkrqbwjgd');
    table.timestamp('sebakwpota');
    table.integer('hsaourocmx');
    table.boolean('lxecdwfsto');
  });
  await knex.schema.alterTable('mwohokbyrf', function(table) {
    table.boolean('qiyjtchsmf');
    table.bigInteger('wwmnntndor');
    table.boolean('jrxjvvckys');
    table.string('lgyyrlldhd');
    table.integer('uzbpwwpwre');
    table.text('ajshdudwbs');
    table.json('qjyhbepbdt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};