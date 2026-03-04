'use strict';

/**
 * Migration: 20240818045648_qugbmmoxtjogbrb
 * Description: Redo the undo
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cyqlrkscuq', function(table) {
    table.float('xghqshlgie');
    table.json('imzvwqinqm');
    table.float('claxvlrzxy');
  });
  await knex.schema.alterTable('yvrgtyrmjy', function(table) {
    table.integer('sgxeilsxgr');
    table.timestamp('ltlnrtfixk');
    table.integer('qynvkxqohf');
    table.string('sfltkwnxva');
    table.float('bltpawcfac');
    table.bigInteger('ihwuzpbrpv');
    table.float('yypzqscatg');
    table.timestamp('ohaukkiduc');
    table.json('jllgzvglrm');
  });
  await knex.schema.alterTable('zxeaaxxidl', function(table) {
    table.boolean('swwxzocucm');
    table.string('scldjwubla');
    table.json('nnvtcewbmv');
    table.timestamp('ositpxoasg');
    table.json('nuzqfphjtp');
  });
  await knex.schema.alterTable('jjlsxkzqst', function(table) {
    table.string('ahxtxqjczj');
    table.text('xcgfkaihmc');
    table.text('flrwnjbrrf');
  });
  await knex.schema.alterTable('bxyhslreqf', function(table) {
    table.float('cqepeiyruc');
    table.boolean('baawbtwxen');
    table.float('awpbdlubtc');
    table.integer('qocegiaugu');
    table.float('ooylxwopml');
  });
  await knex.schema.alterTable('aosvmusfuc', function(table) {
    table.string('xzhcbmaqln');
    table.json('ycmbbntzuw');
    table.text('bxgicyazgg');
    table.text('dlhesknomv');
    table.boolean('vwxxrsowzw');
    table.string('bateqeitne');
    table.timestamp('sghkglbyxm');
    table.string('zvlyfvnyww');
    table.string('umngjzirvh');
  });
  await knex.schema.alterTable('yscsdxgyig', function(table) {
    table.boolean('jphslovlav');
    table.timestamp('nbpqgamrwk');
    table.bigInteger('lefavlflib');
    table.float('apvrmeszfm');
    table.json('jjndgniugg');
    table.boolean('gjfqvxhmag');
    table.boolean('wegvomhuhz');
    table.boolean('agczuzguji');
    table.json('naovrlorqp');
    table.string('vpabkqgpph');
  });
  await knex.schema.alterTable('rpiiekqkia', function(table) {
    table.json('jcihzqyrou');
    table.bigInteger('scyvnivbzl');
    table.text('htniximtio');
    table.float('vhjjvoaymn');
    table.timestamp('xyovvmhmnm');
    table.integer('wlioqclyyl');
    table.timestamp('cmaesdpzdn');
  });
  await knex.schema.alterTable('jjidvkmzlz', function(table) {
    table.text('xlkpnctfce');
    table.timestamp('ycdhmeuubr');
    table.bigInteger('wpgsubwmae');
    table.json('mdiouavwrr');
    table.integer('bwutziybgh');
    table.integer('wmofxccvoh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};