'use strict';

/**
 * Migration: 20240713235904_mduntstogiaxwnn
 * Description: Undo previous migration
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fpagehaalr', function(table) {
    table.float('dhlvxwiqly');
    table.boolean('vwdrojvnnm');
    table.timestamp('jlcortuzkn');
    table.bigInteger('fdcbeasxwc');
    table.json('baeqqzjviz');
    table.boolean('ovdyzgsfpy');
    table.integer('cgtlqjsbdy');
  });
  await knex.schema.alterTable('lukytmxrzs', function(table) {
    table.float('kloaqssxdo');
    table.boolean('polyydtbix');
    table.text('ydsmbczvvd');
    table.bigInteger('shwmqyxedu');
    table.string('ugubqcyxsp');
  });
  await knex.schema.alterTable('vtijlfvrbo', function(table) {
    table.float('syzjaaaflm');
    table.json('dfomydwhmi');
    table.boolean('ittolnbxle');
    table.boolean('axsdrzsnvd');
    table.timestamp('vwywzqmaop');
  });
  await knex.schema.alterTable('xriodqldvt', function(table) {
    table.string('tpmnousqzq');
    table.timestamp('qyfmnenxqk');
    table.integer('yxzzchfqmb');
  });
  await knex.schema.alterTable('jvmvwacklk', function(table) {
    table.timestamp('eusdwsuhhq');
    table.integer('guskbucefe');
    table.bigInteger('uyaskvqcwu');
    table.string('ynafewxgjp');
    table.float('ufxplbarci');
    table.json('jybfquzdjx');
    table.float('wncvazuncc');
    table.bigInteger('hadewbcufq');
    table.integer('ucbpacdkfx');
    table.text('naniiolcvz');
  });
  await knex.schema.alterTable('vdhycufrik', function(table) {
    table.text('tmgixyglnu');
    table.boolean('vbvabsqujo');
    table.boolean('exophlcwqt');
    table.bigInteger('rafcvdyeey');
    table.string('smttsmsurm');
    table.integer('wjmpvjcsiv');
    table.boolean('svwhevyabt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};