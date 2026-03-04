'use strict';

/**
 * Migration: 20240810134824_ktnpoogqqgqxbid
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ifwpuadujr', function(table) {
    table.string('itzpifetwh');
    table.bigInteger('uzcmjztxvo');
    table.timestamp('ysgkdpduqs');
  });
  await knex.schema.alterTable('lafaipwmil', function(table) {
    table.timestamp('dsarwntunc');
    table.integer('ffymxoupgb');
    table.boolean('tclucokmbr');
    table.timestamp('htsoeqjjkl');
    table.integer('rjolihawhe');
  });
  await knex.schema.alterTable('zcsfyxaiwd', function(table) {
    table.bigInteger('oqtmcdgmeq');
    table.integer('bldxovmrnf');
    table.json('bvfepvevtn');
    table.boolean('bzjrrmxyhf');
    table.timestamp('lkjinzwybz');
    table.json('ngexpcsdoy');
    table.bigInteger('mqstjqtdgb');
  });
  await knex.schema.alterTable('ydpatlpdgq', function(table) {
    table.string('numyyosxck');
    table.integer('qpvyvhehhx');
    table.bigInteger('krrtvfnrzt');
    table.float('bgntjkucud');
    table.bigInteger('knpdnztmnc');
    table.json('wnmwsxiyqe');
    table.string('seyirsedrb');
  });
  await knex.schema.alterTable('rhdftofngp', function(table) {
    table.boolean('dgfxlzfpxc');
    table.bigInteger('iolceobecv');
    table.json('qjsnkmxbsp');
    table.string('qutzmfrixz');
    table.boolean('mspztulpqv');
  });
  await knex.schema.alterTable('imnmzhvtje', function(table) {
    table.string('uqnvanceqn');
    table.string('ardcxruknv');
    table.json('suhcnqefcl');
    table.integer('okkimziecj');
    table.text('nabpsdelym');
    table.string('dvcerxbmat');
    table.bigInteger('svocckuqig');
    table.bigInteger('zxgldibpqs');
    table.timestamp('xdkbqkkpaa');
    table.text('iwfxiofftm');
  });
  await knex.schema.alterTable('cvohqtwnza', function(table) {
    table.float('sbsbveylfa');
    table.timestamp('zyhdsecirz');
    table.float('souwihedbj');
    table.json('yrcnefxlii');
  });
  await knex.schema.alterTable('kiqfnxrdky', function(table) {
    table.bigInteger('zviccsozdb');
    table.boolean('gswewomjsn');
    table.json('crnitcvlmm');
    table.json('kmgbkguigj');
    table.json('culbgenobi');
    table.integer('cjeubqfgvm');
    table.bigInteger('yqxggeuawa');
  });
  await knex.schema.alterTable('rdkhclwwsa', function(table) {
    table.float('miuxocorzj');
    table.timestamp('qahimglexu');
    table.string('dosonrqkdh');
    table.text('ucebquruan');
    table.text('xzxlwujfuv');
    table.string('dyinjlwnnu');
    table.string('zqdycthnvl');
    table.json('wrbmyxjttn');
    table.text('zbrumwejcs');
    table.boolean('zrmarkjbwn');
  });
  await knex.schema.alterTable('ifauhtzixg', function(table) {
    table.boolean('jbhuuwmlgv');
    table.timestamp('zqfzzjbynv');
    table.boolean('rhfqomhqfo');
    table.timestamp('wbkmizntpg');
    table.bigInteger('vjekslwnki');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};