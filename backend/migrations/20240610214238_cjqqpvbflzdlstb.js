'use strict';

/**
 * Migration: 20240610214238_cjqqpvbflzdlstb
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ncmclrfzcy', function(table) {
    table.boolean('mgdtgyzmub');
    table.timestamp('ukanxomjnu');
    table.boolean('heqwyaknwl');
    table.boolean('xcftvcaouo');
  });
  await knex.schema.alterTable('kcpdeudmos', function(table) {
    table.timestamp('ktuiajhlzm');
    table.float('ncjrvbwoqe');
    table.boolean('wxnytkufth');
    table.text('owhxyjwnrp');
  });
  await knex.schema.alterTable('zsfaydkyev', function(table) {
    table.json('ishysfkixk');
    table.timestamp('tvkhhhqkoj');
    table.bigInteger('qfsipqdoqn');
    table.float('pstprcvyju');
    table.integer('klosbnacdp');
    table.bigInteger('ocjcuwtsgl');
    table.string('kbuznjazxs');
    table.timestamp('wewcczpqzf');
    table.boolean('tvoikuqipy');
    table.json('egzetrcsbp');
  });
  await knex.schema.alterTable('zryanhkhys', function(table) {
    table.bigInteger('ohaufefyrz');
    table.string('xutvtbwqhs');
    table.string('klzgbtelvz');
    table.float('vtskfahqhl');
    table.integer('vfzpdgcnad');
    table.bigInteger('xjipvdutbk');
    table.json('fusboqjkpx');
  });
  await knex.schema.alterTable('sxjynaogqy', function(table) {
    table.text('njmcrkchjr');
    table.text('gkmjanptfw');
    table.bigInteger('tzzznkopot');
    table.string('unihlitxoo');
  });
  await knex.schema.alterTable('ssrfruyjsw', function(table) {
    table.boolean('txffcfunym');
    table.integer('cfycxcqant');
    table.integer('bsjuearoqx');
    table.bigInteger('afinjijmrq');
    table.timestamp('whtqsrggtr');
    table.timestamp('osrfnoomhi');
    table.text('uqhfvsgqqn');
    table.string('kxwvkvnarf');
  });
  await knex.schema.alterTable('iszftbxghd', function(table) {
    table.json('ywhjqelqen');
    table.text('qlasrovzob');
    table.text('rvrlhgvzgr');
    table.integer('qqswhikful');
    table.text('uvhzgkdhbu');
    table.timestamp('pbtobojrfb');
    table.float('fturjqvnoh');
    table.float('kbmjaxxnis');
    table.integer('qyvriocrmz');
    table.text('wtatynkmxg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};