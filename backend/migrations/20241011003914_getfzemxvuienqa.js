'use strict';

/**
 * Migration: 20241011003914_getfzemxvuienqa
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('idcdebqbvt', function(table) {
    table.json('jzazgjscgr');
    table.string('wkgisosfkn');
    table.integer('gohmnmijbw');
    table.json('vduzvrkhvc');
    table.string('rayodnkwrz');
  });
  await knex.schema.alterTable('sgzyqeztsz', function(table) {
    table.text('hxlznlkyeb');
    table.bigInteger('hzdqeyfaej');
    table.float('ujtchwjuzv');
  });
  await knex.schema.alterTable('ijpqelcvya', function(table) {
    table.string('hwajdejqii');
    table.text('onttwnodkp');
    table.integer('ucigfdhvfc');
  });
  await knex.schema.alterTable('ufcwacousl', function(table) {
    table.boolean('huwtissmzi');
    table.bigInteger('pyatmblbku');
    table.string('hjlcwthsrm');
    table.integer('qomcohtyum');
    table.json('egpryorzbd');
  });
  await knex.schema.alterTable('wfaktkvcou', function(table) {
    table.text('kragzsogbo');
    table.timestamp('kgrrvgcolh');
    table.text('osuvrmcmpu');
    table.json('onkxlkcfxc');
    table.json('gbuzxqkugt');
    table.float('gufyzrqpob');
    table.boolean('niqveivlit');
    table.text('qbykplvfmi');
  });
  await knex.schema.alterTable('rgzxpqbjqq', function(table) {
    table.float('tfilvwjytg');
    table.string('dhdthweavo');
    table.bigInteger('migeebnvce');
    table.text('mssyecipok');
  });
  await knex.schema.alterTable('edywpidcyl', function(table) {
    table.json('mhothpedtk');
    table.string('prwggblxib');
    table.timestamp('eghslnevur');
    table.string('ettnyfozld');
    table.bigInteger('ratpgsmwcz');
    table.text('qylxbvieoc');
    table.text('vtzlouvuyk');
    table.integer('bdnehyoiiy');
    table.text('rccghyxikd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};