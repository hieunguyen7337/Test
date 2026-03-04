'use strict';

/**
 * Migration: 20240522033345_cytzfwfveknkuey
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('sstzzaeaev', function(table) {
    table.float('jcdjrblljp');
    table.boolean('bohcvrvbqw');
    table.boolean('durmgtrsfi');
    table.timestamp('iviomcpqbg');
    table.string('rrtyiydcyu');
    table.bigInteger('dasofahvxc');
    table.bigInteger('ozcdhiybsu');
  });
  await knex.schema.alterTable('pxmpjostic', function(table) {
    table.json('luseufvvwf');
    table.json('wnmopzfypi');
    table.float('wccuwgnivl');
    table.timestamp('ekuyngqmbd');
    table.text('pdmershxof');
    table.float('rkqykcdrqi');
    table.integer('tbjegxjyxm');
    table.string('wlvapeadvp');
    table.string('ulqlketotn');
    table.bigInteger('ojwyetcnpv');
  });
  await knex.schema.alterTable('etpldydxmo', function(table) {
    table.float('vluubozytu');
    table.string('dqnzimjiud');
    table.json('hsvobdpjof');
    table.float('ltrsszjdui');
    table.string('vdqoexptsy');
    table.bigInteger('jajilpzoht');
    table.integer('etqauhqrfo');
    table.float('jxbjnpgdtc');
    table.bigInteger('kjxrmpfjyv');
    table.integer('tjjpgelxeq');
  });
  await knex.schema.alterTable('ujrzkbcdzd', function(table) {
    table.timestamp('sdfxtozotb');
    table.integer('fyxydrgvfm');
    table.integer('dgjzmdyaac');
    table.bigInteger('suuxwqjyia');
    table.text('rnuhhqvqrm');
    table.bigInteger('cspbngmjza');
    table.timestamp('pkpntrfwpd');
  });
  await knex.schema.alterTable('pivldyeapg', function(table) {
    table.float('prhxkywqda');
    table.json('sekcvjbkmt');
    table.boolean('etafpscane');
    table.bigInteger('miulvksxsj');
    table.text('xjcrmjkhiu');
  });
  await knex.schema.alterTable('aiskrbqyvc', function(table) {
    table.timestamp('iuoyivnijs');
    table.text('enzkchxnqe');
    table.string('lyozrsopfj');
    table.json('llgqxdxspv');
    table.float('uwnkuouggp');
    table.json('dbydrheecv');
    table.float('zpdbudiubj');
    table.bigInteger('pgdxlovjzx');
    table.text('rmeghtrudy');
  });
  await knex.schema.alterTable('uqpmtpvpwm', function(table) {
    table.string('sjtvzmdzlq');
    table.float('wiyznnbjhp');
    table.boolean('hlidnjlcbc');
    table.float('fcynvxpxyf');
    table.timestamp('xdxbbpwfyq');
    table.json('yndyzxigna');
    table.timestamp('lzjqiemqxk');
  });
  await knex.schema.alterTable('uahuraanso', function(table) {
    table.bigInteger('fqaxrquvnd');
    table.text('vypvetqtkq');
    table.json('zcjlmnducc');
    table.text('htawngocjx');
    table.string('kxwnrbptpv');
    table.string('mobugtitgf');
    table.float('xtrkbjaegk');
  });
  await knex.schema.alterTable('ucxmqglbfn', function(table) {
    table.text('zhmqofurqp');
    table.boolean('bgikasdwcq');
    table.timestamp('rrgbyopdpv');
    table.text('mdxxwdqhys');
    table.string('qgjxjsasys');
    table.json('hyhzkxujrk');
    table.float('ztuwlsncbb');
    table.integer('itfzrevshi');
    table.float('uynqjnqofm');
    table.float('boaftrufxa');
  });
  await knex.schema.alterTable('lexfftkedk', function(table) {
    table.text('iczhlubthl');
    table.timestamp('pfbfjpdtwj');
    table.integer('wfawaokmau');
    table.bigInteger('vxmrlwxfys');
    table.json('mizzdfzvut');
  });
  await knex.schema.alterTable('remydvcdtk', function(table) {
    table.json('mbvaibdaze');
    table.string('aekauqwhpa');
    table.string('ydaokdtgzi');
    table.text('ouieohftek');
    table.float('yxczanhftu');
    table.text('vjhgztfcfd');
    table.timestamp('gmufyxqnwj');
  });
  await knex.schema.alterTable('ybrnnnaggp', function(table) {
    table.text('zxdcsbhues');
    table.timestamp('bthgxxvfgi');
    table.timestamp('cokyxvkech');
    table.bigInteger('odfmfriurs');
    table.integer('lykdytutja');
    table.float('psqkuxtolw');
    table.text('qzbfwuecjo');
    table.float('ywutslwrvs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};