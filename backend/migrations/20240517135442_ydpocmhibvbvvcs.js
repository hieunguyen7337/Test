'use strict';

/**
 * Migration: 20240517135442_ydpocmhibvbvvcs
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jyigmhvshp', function(table) {
    table.bigInteger('ujteftkzop');
    table.json('azqnxdgcqy');
    table.json('fohzujdfey');
    table.string('lctfapwlsu');
    table.integer('fzhtdscnaw');
  });
  await knex.schema.alterTable('slbcxpkvrk', function(table) {
    table.timestamp('ctooryapqa');
    table.string('hhkjdblsux');
    table.json('lppomxxlom');
    table.text('pwpvexdvai');
    table.float('gohhjlysiw');
  });
  await knex.schema.alterTable('iytlnnfijs', function(table) {
    table.timestamp('dytrztkguh');
    table.text('ughahhealf');
    table.boolean('gcvwkhoehe');
    table.float('ykskueomhp');
    table.integer('kxsutepofc');
    table.timestamp('gdnqqeffzb');
    table.text('nlqslinlld');
    table.json('uvacnuxuvm');
    table.boolean('hcxkfgmhrl');
    table.text('mbjjmgezzh');
  });
  await knex.schema.alterTable('qiqwcskhna', function(table) {
    table.timestamp('uiqypwctek');
    table.text('cjtwlswwqn');
    table.string('nddhkxtror');
    table.string('xvwagazjks');
    table.boolean('hthrrwsxci');
    table.integer('ewsyftvvkc');
    table.bigInteger('mgoqsjpdpr');
    table.boolean('ifwswsvxah');
  });
  await knex.schema.alterTable('qdsshtoknv', function(table) {
    table.string('gkekljkdrw');
    table.bigInteger('jhknggxuqe');
    table.float('ggrszdnhje');
    table.float('pbjrvfgkvx');
    table.float('nbbambjreg');
  });
  await knex.schema.alterTable('dykufruiri', function(table) {
    table.integer('tnbzlwdrvl');
    table.string('igcnxegbqf');
    table.float('awkmwhssja');
    table.boolean('kadejxgfce');
  });
  await knex.schema.alterTable('kexxvkwyzo', function(table) {
    table.integer('pspxjjsqbx');
    table.json('geozznpcbj');
    table.integer('piauutakeb');
    table.timestamp('qqdovlbppy');
    table.bigInteger('lanheohtpi');
    table.float('ktuwzwaknz');
    table.boolean('obmvqdaqpm');
  });
  await knex.schema.alterTable('zrulnuacym', function(table) {
    table.integer('sfipkqdqpm');
    table.boolean('tfdevfoiba');
    table.bigInteger('zuiotiuikt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};