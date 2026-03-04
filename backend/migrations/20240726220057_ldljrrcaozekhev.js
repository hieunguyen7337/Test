'use strict';

/**
 * Migration: 20240726220057_ldljrrcaozekhev
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jclohucxgm', function(table) {
    table.text('ahgbvqcjnu');
    table.text('hoxmjyuqcx');
    table.json('enzdykphrw');
    table.timestamp('ihdwhpaysi');
    table.boolean('gcfnkmzlow');
  });
  await knex.schema.alterTable('xnrwaqnbkw', function(table) {
    table.json('tkcqvekcrl');
    table.bigInteger('vowvyoccug');
    table.json('pzoaeocfph');
    table.string('oixooiybto');
    table.text('iexmtepada');
    table.json('utyhamsiff');
    table.integer('yvnuoexuei');
    table.integer('mpvctyiymg');
    table.json('ftjdahpnlj');
  });
  await knex.schema.alterTable('vluqtoaxpw', function(table) {
    table.boolean('eqbfzvvqvg');
    table.json('xxecczhxap');
    table.timestamp('wbhndikgzy');
  });
  await knex.schema.alterTable('qiipplaotn', function(table) {
    table.integer('mjgtevkikk');
    table.integer('oseppmhzdb');
    table.json('aajztmbenm');
    table.timestamp('yzugvzhhxe');
  });
  await knex.schema.alterTable('bumlgatvfe', function(table) {
    table.float('yjullsuncx');
    table.string('xpoiqpjony');
    table.boolean('oylygqazpu');
    table.boolean('fbdhnlcocs');
    table.timestamp('rhmiurjfft');
    table.timestamp('ezieoiddgn');
    table.json('ssvkigukny');
    table.text('urscclzzen');
    table.timestamp('eapzrxwbzw');
  });
  await knex.schema.alterTable('geykjzkxpe', function(table) {
    table.timestamp('uuffikckbt');
    table.text('auqpikysjj');
    table.boolean('zmheynjlus');
    table.boolean('deltyfsykx');
    table.integer('taysjoeafp');
    table.bigInteger('adxgbmlhti');
    table.json('fxjdixkkbr');
  });
  await knex.schema.alterTable('pcapxmihbc', function(table) {
    table.bigInteger('uyqcyveiso');
    table.json('htnwpozfvm');
    table.boolean('nvxnvpvcqd');
  });
  await knex.schema.alterTable('ukohzmdqqs', function(table) {
    table.boolean('oaijxygkgl');
    table.string('gjqobkwmhm');
    table.integer('crvdgsddku');
    table.float('bqgdxosxta');
    table.json('lniztmahzu');
  });
  await knex.schema.alterTable('gomnswshkz', function(table) {
    table.float('hwavxbtcud');
    table.json('ecwodkwvpo');
    table.string('xegmxyhaop');
    table.timestamp('hxoriebpkw');
    table.boolean('sxjcdosmne');
    table.integer('hvzdpevula');
  });
  await knex.schema.alterTable('zzyzmgvqvr', function(table) {
    table.timestamp('crqqhgnxwd');
    table.bigInteger('llnbtkhkcy');
    table.integer('ayjvbomlva');
    table.text('hfddtxxnft');
    table.text('sfnloiprrx');
  });
  await knex.schema.alterTable('qxzmeccuqc', function(table) {
    table.string('qsfjrelknd');
    table.timestamp('idulwxtmaj');
    table.boolean('dmqnxqbizp');
  });
  await knex.schema.alterTable('cjzdkjquep', function(table) {
    table.string('jcoqzoynnc');
    table.integer('obqaadonyb');
    table.integer('qxxiejlzhz');
  });
  await knex.schema.alterTable('kcjzfulpeo', function(table) {
    table.text('aitdsvixsw');
    table.boolean('gbojzyzzho');
    table.float('cucraamerr');
    table.text('pycdpxyvle');
    table.boolean('rokesxvlsg');
    table.string('lbpetkmsiy');
    table.float('hwnomimrnd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};