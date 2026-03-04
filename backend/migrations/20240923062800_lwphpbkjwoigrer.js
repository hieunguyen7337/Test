'use strict';

/**
 * Migration: 20240923062800_lwphpbkjwoigrer
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pgqcbbccyv', function(table) {
    table.bigInteger('opapkmexvl');
    table.timestamp('wxxvuraufb');
    table.bigInteger('bxuupsxxbn');
    table.integer('zdrvsqfcas');
    table.boolean('aikbvpuhkh');
    table.json('xggvjgaggb');
    table.string('pqjwptllqk');
    table.string('upzfkkwrtu');
  });
  await knex.schema.alterTable('gwthiwodvy', function(table) {
    table.timestamp('ylujooeqmi');
    table.boolean('aquhqhgjug');
    table.text('vdttwtxthe');
    table.bigInteger('widekreijl');
    table.text('ubklhjomhi');
    table.bigInteger('uniuobpuwf');
    table.bigInteger('mivqqmvrks');
    table.boolean('ohjqandwzx');
  });
  await knex.schema.alterTable('lxkddqrhbo', function(table) {
    table.string('vatlqypgoi');
    table.float('vufeliivmh');
    table.timestamp('coyibyhrgq');
    table.bigInteger('xxatlfakhq');
    table.integer('wfltwupiom');
  });
  await knex.schema.alterTable('nzgidakvgz', function(table) {
    table.string('coprddivhc');
    table.timestamp('vexwganoso');
    table.float('furgggfvbp');
    table.integer('jviemaizbr');
  });
  await knex.schema.alterTable('qkoisxbwwm', function(table) {
    table.string('hjlnxcwywp');
    table.bigInteger('jhtmkpyvhi');
    table.json('ghnwsdlunv');
  });
  await knex.schema.alterTable('ootxrloofr', function(table) {
    table.boolean('amntyolhlt');
    table.boolean('yaksamarww');
    table.text('ikpmpyfwps');
    table.integer('ehmufdjkry');
    table.json('kbpjrxtpiy');
    table.bigInteger('amkwcjrcev');
  });
  await knex.schema.alterTable('xihvxmzekq', function(table) {
    table.timestamp('efebpoeeae');
    table.boolean('mootopbyzk');
    table.integer('kjqosyrfjg');
    table.timestamp('mrmyiszuch');
    table.float('brrjyfeizb');
    table.integer('xzwxkcpwtg');
    table.text('gpwmkqcuij');
    table.json('qnpysteyir');
  });
  await knex.schema.alterTable('crdkiydmrd', function(table) {
    table.json('nclxptngug');
    table.text('qpicvtdwis');
    table.bigInteger('otuehwttqw');
    table.boolean('tiraajczmg');
    table.timestamp('hukfrfjxcc');
    table.timestamp('kkzrbtzwzb');
  });
  await knex.schema.alterTable('cauozkjhmg', function(table) {
    table.json('dioyaauwvx');
    table.integer('tcvlzsluia');
    table.bigInteger('sccdhmshlt');
    table.boolean('ggsdwqldhn');
    table.json('ssnajuwpzd');
  });
  await knex.schema.alterTable('gzfnbccuip', function(table) {
    table.text('lxlpafbiwj');
    table.text('nazyerwdtz');
    table.text('bhvrtequqe');
    table.text('akjwvffkop');
    table.boolean('avwuoofasc');
    table.integer('shhrnmwtah');
    table.integer('khduymuaxj');
    table.string('qponminbyu');
    table.integer('sggrprqchg');
  });
  await knex.schema.alterTable('aabcdgchao', function(table) {
    table.json('cjlxpchemd');
    table.timestamp('rfrvkvyqvm');
    table.float('fvwottswos');
  });
  await knex.schema.alterTable('lqdefyctus', function(table) {
    table.json('tpzmsqaqbc');
    table.integer('spsjbjhzqo');
    table.bigInteger('bsvubursih');
    table.text('sepnbvtqxb');
    table.string('jnpaeixxlk');
    table.timestamp('mnrhnbwzsd');
    table.json('dvlrpeelax');
    table.text('wxyghpwjvc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};