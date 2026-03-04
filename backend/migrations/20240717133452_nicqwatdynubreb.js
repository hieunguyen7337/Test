'use strict';

/**
 * Migration: 20240717133452_nicqwatdynubreb
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fwmxkgswmd', function(table) {
    table.bigInteger('qmmkedysuj');
    table.timestamp('hftczpdmur');
    table.float('peytljtjux');
  });
  await knex.schema.alterTable('fzxctynpkl', function(table) {
    table.boolean('hllgcnirhm');
    table.timestamp('wcegwsmnjw');
    table.float('yddijcyqml');
    table.float('vnfcfqnfwd');
    table.boolean('ohfhytxqis');
    table.integer('riywyyupzd');
    table.bigInteger('pknpokwjvt');
    table.integer('mvxkrnhuuy');
    table.boolean('jdbsikxupq');
  });
  await knex.schema.alterTable('fkxlurfobj', function(table) {
    table.bigInteger('yzescoqmvl');
    table.string('aryfvgxgsq');
    table.integer('yojhxvcpyq');
    table.text('ygjneprgji');
    table.json('xgoqbhuaii');
    table.timestamp('mqncomqkjf');
    table.json('iugsnxqneb');
    table.boolean('myuaiinfyd');
    table.float('tsebtphtue');
  });
  await knex.schema.alterTable('uuewhxdsbd', function(table) {
    table.boolean('emywgodabl');
    table.json('cdhgfnmkie');
    table.text('kpfeloqolz');
  });
  await knex.schema.alterTable('dwxzbdftyr', function(table) {
    table.integer('jdjklyspmt');
    table.float('bysolieibq');
    table.bigInteger('muyyunmqnu');
    table.integer('qxqemyzrar');
    table.bigInteger('tejsygbvhg');
  });
  await knex.schema.alterTable('qfbjvfnzls', function(table) {
    table.boolean('uunjzkhrmq');
    table.integer('smmpgfwngc');
    table.bigInteger('yqooxllume');
    table.timestamp('nzmjkbyefd');
    table.boolean('bvrnxvuekp');
    table.timestamp('rmfltotytl');
    table.json('pkaclthuqc');
    table.json('mlzgprpcqc');
  });
  await knex.schema.alterTable('rifyqiyrkh', function(table) {
    table.json('cwpelcdknq');
    table.float('rgayjempzu');
    table.string('ltzmxarhdj');
    table.bigInteger('pzlqhfcryz');
    table.integer('cvzrpljams');
    table.json('lwcjbfqrvm');
    table.bigInteger('ckgswhhktv');
    table.timestamp('gsyqpszkzg');
    table.string('qgiwkwgepj');
  });
  await knex.schema.alterTable('daqjmyongu', function(table) {
    table.boolean('udnendlwim');
    table.integer('xatiuyofrh');
    table.float('ncguixvenk');
    table.float('raceypeokg');
    table.integer('yzgnjqktfq');
    table.boolean('swwnaqkufn');
    table.bigInteger('wgkvvchchg');
    table.string('tgxfpsouce');
    table.timestamp('wlzzdhnetm');
  });
  await knex.schema.alterTable('iteunizyzx', function(table) {
    table.json('lzxpivgipe');
    table.string('ukideylcbt');
    table.float('dkhulbzifh');
    table.string('mfpntcxexe');
    table.integer('fpgipgtpal');
    table.float('zweplzzlkr');
    table.float('bcykcvwuqp');
    table.boolean('orsbzstroe');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};