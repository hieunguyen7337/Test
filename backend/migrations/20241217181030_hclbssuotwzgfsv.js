'use strict';

/**
 * Migration: 20241217181030_hclbssuotwzgfsv
 * Description: Add index
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xufworjzmg', function(table) {
    table.string('rllmelpsto');
    table.integer('dnhnoagnmo');
    table.bigInteger('aapukoeosk');
    table.timestamp('bglwuksrzc');
    table.boolean('jdsexbdokt');
    table.json('zmlxeysapt');
    table.float('cibapthncg');
  });
  await knex.schema.alterTable('itouayigvv', function(table) {
    table.float('mktgundwcn');
    table.text('ygidllzfgs');
    table.bigInteger('rszfltxrhv');
    table.timestamp('dvdyaexefz');
    table.timestamp('hzahhlkgff');
    table.integer('xsxoovwdfl');
    table.text('zwemnwifcd');
    table.boolean('cmeldmmnho');
    table.boolean('zxzjeonukj');
  });
  await knex.schema.alterTable('cjkapwased', function(table) {
    table.text('cdwpfrrjpi');
    table.integer('fvllkzewoh');
    table.bigInteger('wvvbjraqrg');
    table.integer('adlizyhxpo');
    table.boolean('xrrhqwbpwd');
  });
  await knex.schema.alterTable('nhbmlsaeil', function(table) {
    table.json('dqygyfsejn');
    table.float('axqknqgvbw');
    table.timestamp('lyrxqhtuxi');
  });
  await knex.schema.alterTable('agcmlfmmhi', function(table) {
    table.json('khadzrywuy');
    table.json('tcdhdipdrm');
    table.boolean('dlvuxulfpg');
    table.bigInteger('hutcmqqvir');
    table.text('fwotiqewzp');
    table.string('wyhnbudldy');
    table.string('alyqkqkysa');
    table.float('hwmhqexfku');
    table.timestamp('yvheofzkbz');
    table.string('tcjtwsqvfi');
  });
  await knex.schema.alterTable('zcyhyzvxte', function(table) {
    table.text('huyvllvktg');
    table.text('tlravvbrbb');
    table.float('hxsaxfqein');
    table.timestamp('hvvhxrxvdt');
    table.text('zumayuijzc');
    table.boolean('yzvzxdrupb');
    table.json('dgouscsqxv');
    table.text('uhxxigahsj');
    table.text('kycblwojaa');
    table.boolean('ihwvkzzpcf');
  });
  await knex.schema.alterTable('wdgnxfhnjv', function(table) {
    table.integer('ppwpxhwtxp');
    table.boolean('yoawrodbna');
    table.boolean('pryurzmeaf');
  });
  await knex.schema.alterTable('euptnsnaun', function(table) {
    table.integer('ccbjwippfv');
    table.boolean('uazihawnut');
    table.json('dcxglnpxmd');
    table.text('pfkzyxfkyp');
    table.boolean('gqgqdholrk');
  });
  await knex.schema.alterTable('aispthwhdf', function(table) {
    table.float('apajlfpjun');
    table.integer('jdgtvhqyjz');
    table.json('obzgcdxblh');
    table.integer('gdwgrraiap');
    table.float('uejcmtbpzy');
    table.bigInteger('okivaaxcvg');
  });
  await knex.schema.alterTable('ibjlryfaxd', function(table) {
    table.timestamp('dvdqzgqtcz');
    table.string('odltakgkcr');
    table.boolean('icrvmvkbvm');
    table.integer('stlilupcxd');
    table.string('tuindrsgtu');
    table.integer('lpqobxkckw');
    table.float('dozkrwzece');
    table.timestamp('gnlfkwdgcb');
    table.timestamp('zjbbspthtg');
    table.bigInteger('utmjotjokg');
  });
  await knex.schema.alterTable('jshzufvdmr', function(table) {
    table.boolean('hgvqdnowpk');
    table.text('oeimzfrnbc');
    table.float('xduhgpmnmt');
  });
  await knex.schema.alterTable('rzqywdagdo', function(table) {
    table.timestamp('ajzbikxhxa');
    table.timestamp('hdazwxkrnr');
    table.float('neemiguxdb');
    table.integer('tfbvpsampb');
    table.text('rseaarilph');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};