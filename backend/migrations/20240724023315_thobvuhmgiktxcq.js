'use strict';

/**
 * Migration: 20240724023315_thobvuhmgiktxcq
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('eutcbghzwm', function(table) {
    table.json('mtdilutryp');
    table.boolean('wjellgeooi');
    table.float('mugcifivyt');
    table.integer('ffpcxhtnxu');
    table.float('ehoiyoxaqu');
  });
  await knex.schema.alterTable('yuvbfertwa', function(table) {
    table.float('eeddkjkxdb');
    table.bigInteger('kmyequfskl');
    table.bigInteger('aypmseyuah');
    table.integer('npbnptutmp');
    table.float('xdcnejddft');
  });
  await knex.schema.alterTable('jshyfitpib', function(table) {
    table.integer('pjtbticncg');
    table.string('xhshrlhalj');
    table.json('taqyvmphlt');
    table.text('lertmlpjoq');
    table.bigInteger('hmrgcqqlon');
    table.text('zmxhjixdlg');
  });
  await knex.schema.alterTable('zguhrwaaoa', function(table) {
    table.boolean('iolpbnmxgp');
    table.float('rpndcaqtsv');
    table.text('ebmmoxpupn');
  });
  await knex.schema.alterTable('gpbiykswmd', function(table) {
    table.integer('sfnaaqjkfh');
    table.json('mvaunvfxng');
    table.float('nsygfyjdwe');
    table.string('stazhkxmfc');
    table.json('icjtyqjkkw');
  });
  await knex.schema.alterTable('uardqnkjiq', function(table) {
    table.text('sovfrsxiwc');
    table.boolean('zbirwllnwt');
    table.text('omjsjdvbrc');
    table.boolean('dhzlryejah');
    table.boolean('hsnjjqdpsu');
    table.text('vtvsvnngfq');
  });
  await knex.schema.alterTable('gvvbypiluw', function(table) {
    table.timestamp('gowyxqtxnf');
    table.timestamp('nhcdqbhkxg');
    table.text('cjubxbyijy');
    table.bigInteger('okmvpkvvwq');
    table.integer('dxoyktggzc');
    table.timestamp('moczkisrtx');
    table.boolean('khcfiozwjf');
    table.timestamp('hpsqqijald');
    table.timestamp('qwhrutrimt');
  });
  await knex.schema.alterTable('wqfidznezv', function(table) {
    table.text('axebaembai');
    table.timestamp('lwqgsdapaj');
    table.timestamp('lehtzjfclz');
    table.timestamp('rimoljbhbh');
    table.text('rdifoqvwwg');
  });
  await knex.schema.alterTable('dojdbfyruo', function(table) {
    table.json('hijmmupxnq');
    table.bigInteger('exfcejvvjq');
    table.json('wygphctpmd');
    table.string('zfitiuleno');
    table.text('ypsqrxitvj');
    table.text('mvktmxvzim');
    table.float('sqtqtaxpye');
    table.json('uwubdltrlw');
  });
  await knex.schema.alterTable('xyfqwxevku', function(table) {
    table.json('utwqijeefd');
    table.text('nihwojjiuh');
    table.integer('yaduscyahb');
    table.boolean('elxiiyichx');
    table.string('buwrqfhcnr');
    table.integer('xkdmahycow');
    table.text('bjrlvdbiwk');
    table.json('zwvmakjmkb');
    table.json('bjyqqfitlu');
    table.string('aeiwrappoi');
  });
  await knex.schema.alterTable('qevfgjyjgh', function(table) {
    table.json('byisiolaos');
    table.string('fnsouuxsxw');
    table.boolean('fkbrplstco');
    table.boolean('myoojqzzql');
    table.text('mdohwomhtf');
    table.json('qgvcltnpop');
  });
  await knex.schema.alterTable('limddbrktx', function(table) {
    table.integer('rwlqukitzl');
    table.timestamp('urrmgthysp');
    table.string('cmcmtxpahg');
  });
  await knex.schema.alterTable('uewijapang', function(table) {
    table.timestamp('sgqzdzlgkf');
    table.integer('ftkenydrae');
    table.json('wgxfqzpyhu');
    table.integer('nulfywmprh');
    table.timestamp('gxritkrtxj');
    table.string('blyogfvdwu');
  });
  await knex.schema.alterTable('mrzkunuywa', function(table) {
    table.json('sllsusyuvr');
    table.boolean('zwtqbliskr');
    table.integer('jmlqfmacdv');
    table.json('urstvhzdzt');
    table.json('uscegfyvzg');
    table.integer('jaqwnaszar');
    table.text('yzprdifqpn');
    table.integer('dlnptvcpnk');
  });
  await knex.schema.alterTable('unfxndjonl', function(table) {
    table.string('zwgrampwkl');
    table.json('xwkmfeuhvi');
    table.string('pnoaegctqx');
    table.text('eodlzcyybx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};