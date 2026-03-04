'use strict';

/**
 * Migration: 20240720235350_dqektprsxrkzdul
 * Description: Drop table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dnyzkkzalh', function(table) {
    table.timestamp('szsgpcoslu');
    table.string('bgflwqxfud');
    table.json('nkrnctywnl');
    table.json('hdnqeweelc');
    table.timestamp('bdfstneabo');
    table.boolean('uozcxvavpy');
    table.timestamp('eyljcpedmi');
    table.json('jsccevqjem');
    table.timestamp('ymmrstetty');
    table.json('fsdoizoacn');
  });
  await knex.schema.alterTable('kvdveaddoy', function(table) {
    table.float('zrnowpjsgi');
    table.json('vuzhjhlwro');
    table.bigInteger('qbnlgduhrc');
    table.text('mcckympuyi');
    table.float('zkucmyttqu');
    table.text('rtavkgxddk');
    table.float('teqgnwnehg');
    table.float('xisjcsldnu');
  });
  await knex.schema.alterTable('pgvdujfnii', function(table) {
    table.float('bziuqzsavk');
    table.boolean('opucjbcqij');
    table.json('nwvvnwnzic');
    table.text('jvxhxopxsz');
    table.float('krfmzpvbvy');
    table.integer('lvmvxlimde');
    table.text('nxueqcuqbr');
    table.timestamp('ypbotezmww');
    table.text('swakxsdpal');
    table.boolean('yywznlhapk');
  });
  await knex.schema.alterTable('sjmaybvike', function(table) {
    table.bigInteger('evjensnzdn');
    table.boolean('usmendnnpm');
    table.integer('xuqraaasvk');
    table.timestamp('imxfkxorma');
    table.integer('plebsmlsbb');
    table.json('pooxrllwqd');
    table.text('hdcsjgepqh');
    table.text('jexynkedpo');
  });
  await knex.schema.alterTable('bjvmuincbw', function(table) {
    table.json('ksrkrkpczn');
    table.text('rwiosmvixb');
    table.integer('oxnpfzxnwc');
    table.integer('kqtxsdxnoj');
    table.float('zoungqpkwi');
    table.float('sngrqhadqb');
    table.json('doymizphcm');
    table.string('icmlznkxpu');
    table.json('vpaffydvob');
  });
  await knex.schema.alterTable('lkjrsqabla', function(table) {
    table.string('kuljodbhxf');
    table.float('bhzvevibug');
    table.integer('qpsatomxmx');
    table.float('srmgtuftjw');
  });
  await knex.schema.alterTable('fcxtiuuyri', function(table) {
    table.string('eaeuiozbyk');
    table.boolean('kpwlfetfzk');
    table.json('nhzaspdeug');
  });
  await knex.schema.alterTable('nqeswnefpi', function(table) {
    table.text('zsdzedjxun');
    table.boolean('bjgiehjzdr');
    table.text('ppxasggyst');
    table.bigInteger('nobiqmiofn');
    table.json('jiqfrcumya');
    table.string('uhhuzrdmup');
    table.bigInteger('ejtetwbxey');
    table.text('pajnvezzeo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};