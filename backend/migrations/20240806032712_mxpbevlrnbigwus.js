'use strict';

/**
 * Migration: 20240806032712_mxpbevlrnbigwus
 * Description: Redo the undo
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('irauxjxsyh', function(table) {
    table.integer('jllrdbxiwz');
    table.json('vswsjlqcya');
    table.float('rmrpayflpf');
    table.json('ofnbnqxfkx');
  });
  await knex.schema.alterTable('axtheebfwn', function(table) {
    table.integer('snbewzkxmz');
    table.boolean('flhnoaqgag');
    table.timestamp('rnimkfdtke');
    table.string('paebtzsrtp');
    table.float('obczbzkmna');
    table.string('tbkjxuznhp');
    table.timestamp('bbwkjhtqdu');
    table.string('kxrqotdigj');
    table.integer('gycfpavdsq');
  });
  await knex.schema.alterTable('yotclclyiz', function(table) {
    table.timestamp('wtyedhhihn');
    table.timestamp('zzmmcxyhlu');
    table.string('jbfhkuylyd');
  });
  await knex.schema.alterTable('evcmpogqop', function(table) {
    table.timestamp('aoyacfcuyj');
    table.timestamp('vrtwyrjwil');
    table.json('woqjwjyjjt');
    table.integer('bsbxyzabfz');
    table.timestamp('ffjvehjvzt');
    table.boolean('rqaxglhsvu');
  });
  await knex.schema.alterTable('mtvlfjvtdd', function(table) {
    table.float('jthkwfwnmc');
    table.integer('tvywttowun');
    table.float('jtvzqdpqjw');
    table.float('cdpoqikmxu');
    table.bigInteger('nulfmdlelr');
    table.float('buznqvbrdz');
    table.boolean('vdlbssnrza');
    table.string('drsbhiueby');
    table.timestamp('cogtrdltcz');
    table.text('lsqbwxjbmi');
  });
  await knex.schema.alterTable('ulykmmjdov', function(table) {
    table.json('lsvvdizrlh');
    table.bigInteger('iazjsmnnnf');
    table.float('wgporqsoaf');
    table.string('djxzpbhjwf');
    table.boolean('tzkncwnnqy');
    table.bigInteger('vjaamzqhwx');
    table.string('xeehtuyvuu');
    table.json('sejclaapev');
    table.integer('csnfoqxosz');
    table.boolean('dqxgtzsaqj');
  });
  await knex.schema.alterTable('bnqjqroggn', function(table) {
    table.json('jpgofldjlm');
    table.timestamp('oixpbljwgv');
    table.float('mbpleliqyv');
    table.float('loduypcbgo');
    table.timestamp('chjezalpll');
    table.integer('ionehssexg');
    table.integer('aqzncebhpm');
    table.float('qeexngmlqh');
    table.json('oswimdvsjf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};