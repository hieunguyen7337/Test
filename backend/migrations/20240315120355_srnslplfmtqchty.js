'use strict';

/**
 * Migration: 20240315120355_srnslplfmtqchty
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gkjuxttobc', function(table) {
    table.timestamp('hvzrxpfbpv');
    table.text('zjnfpkbvdu');
    table.boolean('cyucgvschl');
    table.json('mupwibrfvg');
  });
  await knex.schema.alterTable('alqocrrcuw', function(table) {
    table.bigInteger('uwvetdpwhf');
    table.float('gmwpidsrau');
    table.bigInteger('vsxwtzwxbk');
    table.integer('qtugxjtcct');
    table.integer('jirqiscsgw');
    table.text('uxreemjmwb');
    table.bigInteger('wqfywdleyi');
    table.text('zmzvlhavpx');
    table.bigInteger('kdbmoahvvr');
  });
  await knex.schema.alterTable('epvqpmsfvy', function(table) {
    table.string('ggnqfkasqs');
    table.bigInteger('bmmpjlvqny');
    table.string('jhnggevnmm');
    table.bigInteger('rwczhzhzfv');
    table.boolean('rkteqjtosi');
    table.string('pymajbcvhl');
    table.timestamp('qtfvxczghh');
    table.boolean('yxdxoroxts');
  });
  await knex.schema.alterTable('fqqrrhuqsd', function(table) {
    table.boolean('usdbmvfqoi');
    table.integer('playburocs');
    table.timestamp('zsugiskfce');
  });
  await knex.schema.alterTable('phoarqzysb', function(table) {
    table.integer('arwgatousm');
    table.timestamp('loanctqpbj');
    table.json('aqrifvahes');
    table.json('vodscrokks');
    table.float('guftxdfujh');
    table.float('ekqtoaeeop');
    table.json('evvcqdpdwq');
    table.bigInteger('hwuhzuamsb');
    table.bigInteger('clnowsledl');
  });
  await knex.schema.alterTable('omikfgyuck', function(table) {
    table.string('hsvttulcgr');
    table.float('bfvyyhnlqp');
    table.string('hqnusjpjgi');
    table.bigInteger('linulzcvmv');
    table.float('qjweoglphb');
    table.integer('lhwirerynx');
    table.string('lsacuuhryl');
    table.bigInteger('rehuqzzngc');
  });
  await knex.schema.alterTable('zlrqtkjmqc', function(table) {
    table.float('efcekmdwof');
    table.bigInteger('dhfjqhuden');
    table.float('bwpzvntnao');
    table.string('gtunqmabiw');
    table.string('sijxzvefbf');
  });
  await knex.schema.alterTable('uhggmxrjyh', function(table) {
    table.float('gisrjueyem');
    table.timestamp('daekcmlbzr');
    table.integer('tntvlqoaka');
    table.float('mscckpuiou');
    table.timestamp('prslviutzf');
    table.string('nixnbnfvta');
    table.float('nbnholezic');
    table.bigInteger('keodfypuoq');
  });
  await knex.schema.alterTable('xbxqxmjmez', function(table) {
    table.text('wpdcfekyxy');
    table.json('maguxcucmb');
    table.json('uczdjipnlp');
    table.string('lnsvwdikpc');
    table.float('rjxoxysein');
    table.text('pojimgyyav');
    table.float('klfbksrfzn');
  });
  await knex.schema.alterTable('gdqpixbejs', function(table) {
    table.text('ttofcesjyw');
    table.timestamp('tyfsjiurnc');
    table.timestamp('iljdwphhkw');
    table.boolean('kfxgifmwqb');
    table.text('rntqsyoflz');
    table.json('zafgurdyap');
    table.boolean('rjxwxamoag');
  });
  await knex.schema.alterTable('kddqrbbvpq', function(table) {
    table.string('thaebjwhku');
    table.boolean('dyipljlprx');
    table.bigInteger('jivdwvghpf');
    table.bigInteger('ehckuogysz');
    table.integer('yxiwptrgon');
    table.timestamp('hyoramipmj');
    table.text('wjogkmthzk');
    table.bigInteger('mnwpazjptt');
    table.string('oojifsudjy');
    table.bigInteger('rsklwnjctr');
  });
  await knex.schema.alterTable('mmuhqcueku', function(table) {
    table.bigInteger('qfoqifyrem');
    table.bigInteger('cqdoxmjvic');
    table.json('tavtuwrjgn');
  });
  await knex.schema.alterTable('xyavewgzxu', function(table) {
    table.float('szzxymigat');
    table.bigInteger('espvllsilm');
    table.boolean('hbeznhjztj');
    table.timestamp('bjvqntwssu');
    table.boolean('vijyzzziat');
    table.float('jfaahpotup');
    table.integer('tnoeyxjrnc');
    table.bigInteger('wrsfplpycg');
    table.timestamp('pgnfrilbbb');
  });
  await knex.schema.alterTable('voczshhino', function(table) {
    table.bigInteger('uycoofohgk');
    table.boolean('mqrffhtuww');
    table.string('rnrsuqtcdl');
    table.text('ljmbeorbyj');
    table.bigInteger('eaolnwzgcm');
    table.timestamp('mppzoqijta');
    table.timestamp('nfhvxvrrzp');
    table.float('hqrquumpjy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};