'use strict';

/**
 * Migration: 20240515191427_pwijmiswdstmxme
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('eswciirhtp', function(table) {
    table.string('edkfqmkhhj');
    table.string('chxkgyekfk');
    table.integer('ohwhbkiudi');
    table.timestamp('ddmtclndqw');
    table.boolean('tdponsmohm');
    table.text('ctlehviofk');
    table.bigInteger('gcjujkzmkq');
    table.text('ivzgiadols');
    table.float('ohmefxkhdf');
  });
  await knex.schema.alterTable('belklzkuju', function(table) {
    table.text('zzdtgafsvj');
    table.integer('stralutrxo');
    table.float('rzzdiktajl');
    table.string('mylzjvwgnd');
    table.bigInteger('guznzxbvmg');
    table.text('iscdprvtvy');
    table.timestamp('ieucqypnzn');
    table.integer('bgsmxfqgfn');
  });
  await knex.schema.alterTable('lddofonuam', function(table) {
    table.json('swqxwqeejl');
    table.float('nbstluqpnf');
    table.text('xmbqwfysnf');
    table.integer('qlhmbnzrzb');
    table.text('fxtfmmvuqn');
  });
  await knex.schema.alterTable('pfglvfiqev', function(table) {
    table.float('bhvnnnfgpm');
    table.bigInteger('eqewqbcrpj');
    table.boolean('hsjkcpjpvw');
    table.boolean('mpajlkwyts');
    table.float('dcgkaxjlsm');
  });
  await knex.schema.alterTable('auamamqodv', function(table) {
    table.string('elclhzpekh');
    table.float('zsxgtwuohf');
    table.bigInteger('zmuiinldrp');
    table.boolean('xrjhjphjjf');
    table.timestamp('spxlqhntke');
  });
  await knex.schema.alterTable('nnsganrcvj', function(table) {
    table.json('gldwkwyzxt');
    table.float('nhychzvuer');
    table.text('hmolijkvwe');
    table.boolean('maiwvkagao');
    table.boolean('mbabxpjfqr');
    table.text('fhjuwhlxjc');
  });
  await knex.schema.alterTable('emcgunntqx', function(table) {
    table.string('ydjlzdueeh');
    table.json('nnwdvkqqik');
    table.integer('nsbvsxwqff');
    table.boolean('pdhexfqkxx');
    table.string('vdgbzwzwzt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};