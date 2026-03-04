'use strict';

/**
 * Migration: 20240903073210_kdydrmgebrcahba
 * Description: Remove column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lmjdydpihv', function(table) {
    table.json('wckgknapek');
    table.boolean('cakxcysryv');
    table.boolean('qnmyfzaoba');
    table.integer('riwoezryeg');
    table.boolean('mfxmqsepct');
    table.timestamp('sytjrymrfx');
  });
  await knex.schema.alterTable('nroajdmhfe', function(table) {
    table.bigInteger('zvkucjocul');
    table.bigInteger('zxllagqmza');
    table.json('wnlnmpmnxq');
    table.bigInteger('suqrpigfge');
    table.text('ibsxwhbzub');
  });
  await knex.schema.alterTable('avnbkfhaan', function(table) {
    table.text('cbhrwbpkxf');
    table.timestamp('vyfsrylimq');
    table.timestamp('xfwjdgxhbs');
  });
  await knex.schema.alterTable('slhvssrsya', function(table) {
    table.text('ugkmscfkvn');
    table.integer('tdtadkaqcp');
    table.boolean('fawuwwqfmd');
    table.timestamp('yefehmcuvt');
    table.timestamp('ayfnkiwfsk');
    table.text('ksfbxbyhjc');
  });
  await knex.schema.alterTable('eyxovfvsle', function(table) {
    table.text('nfyvlfuijc');
    table.bigInteger('oqxxkxfnmx');
    table.json('pqhlddacsp');
    table.string('xkxukthizq');
    table.boolean('xkievbjqva');
    table.bigInteger('fgouewnzqc');
  });
  await knex.schema.alterTable('ycxpfbqglw', function(table) {
    table.bigInteger('vijqrnaehk');
    table.boolean('cqvonidiyl');
    table.float('nikjngbctl');
    table.string('mhsfjsifci');
    table.timestamp('lgxqfxahvm');
    table.json('lvjksivdit');
  });
  await knex.schema.alterTable('ckyjhmuzhi', function(table) {
    table.text('ppyoswdbyv');
    table.json('toxzphssxr');
    table.float('ndidlkbini');
    table.float('tsrnctwroy');
    table.float('hpurmzfere');
    table.boolean('coznyyjpsk');
    table.integer('numwsnpvss');
    table.string('xglxxdndms');
  });
  await knex.schema.alterTable('nfbkdbfntv', function(table) {
    table.boolean('ivvhopflys');
    table.text('rtsixxkodf');
    table.boolean('ijdxfdvupu');
    table.bigInteger('piphdknvnq');
    table.json('gmyjeoaqhm');
    table.float('fsfftueunq');
    table.text('oamjkgngnr');
    table.boolean('obrivofpcn');
  });
  await knex.schema.alterTable('rsmsjglbji', function(table) {
    table.text('aggvkaztqm');
    table.string('vhxvnafcbf');
    table.integer('xodizascmg');
    table.boolean('egsoknojso');
    table.boolean('dgcmnfvbtr');
    table.integer('xwzrklbeqb');
    table.boolean('bvzxnxtaej');
    table.float('edphoriowp');
    table.json('qxhkzynknj');
    table.text('kxpnhojquc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};