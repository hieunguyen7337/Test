'use strict';

/**
 * Migration: 20240616210613_dizerviasfawhrs
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jwczocdnkg', function(table) {
    table.float('rnlimmdsip');
    table.timestamp('njpqwzkjju');
    table.boolean('yoxhvimugw');
    table.float('vbluuyezjv');
    table.text('vxxjtcgzgv');
    table.integer('bsmwdlhrbs');
    table.text('kdxugmnhwf');
  });
  await knex.schema.alterTable('vaewqafzhx', function(table) {
    table.integer('ldfpwskmuh');
    table.boolean('wfcgbdbwsz');
    table.text('ihgredfszr');
    table.text('orvgrsegrv');
    table.json('abocwutnrd');
    table.float('xlwcdbbwnd');
  });
  await knex.schema.alterTable('tfwozbmlyq', function(table) {
    table.boolean('abqlxkbnmz');
    table.timestamp('nwljngytja');
    table.text('dhhefvzrzt');
    table.timestamp('gqijwzgqcx');
    table.timestamp('uomvzvhhug');
    table.text('fwndpefwgi');
  });
  await knex.schema.alterTable('pslvftiftq', function(table) {
    table.boolean('wtziopduap');
    table.string('rrhdxbkbdv');
    table.timestamp('zuxueopyjh');
    table.boolean('fdcbgdoppx');
    table.timestamp('gcijiwwera');
    table.bigInteger('ktcpenidqj');
  });
  await knex.schema.alterTable('xhjabypmhv', function(table) {
    table.json('pbrzqvazjl');
    table.integer('musfimhbtu');
    table.integer('zpjhdxjowk');
    table.text('wwwuuikmwv');
    table.integer('tdvfvpzsdj');
    table.text('xtrjgcdkpx');
    table.timestamp('palcvsuhvq');
    table.json('jnvduufhkj');
    table.text('nywyspzfnc');
  });
  await knex.schema.alterTable('zfiragqvze', function(table) {
    table.timestamp('vucxorfefr');
    table.text('zlhycawjwc');
    table.timestamp('cmrjtzqdep');
    table.float('jmysbsoxxh');
    table.bigInteger('kdxnfiwvyj');
    table.boolean('ognpyodjfr');
    table.bigInteger('zaqzhpycmh');
    table.bigInteger('querhfsfbr');
  });
  await knex.schema.alterTable('plnkgfdysu', function(table) {
    table.string('bgodysrfav');
    table.bigInteger('hfenesenzu');
    table.bigInteger('vnhyjhbuvj');
  });
  await knex.schema.alterTable('yclwavnquk', function(table) {
    table.bigInteger('xmrvpfjmmw');
    table.boolean('nhasbdgehd');
    table.float('dsutaopbir');
    table.text('apdnvtshey');
    table.json('rcivsdymor');
    table.boolean('hisewprcib');
    table.integer('fnuvkekoco');
    table.bigInteger('zfxufounrp');
    table.json('havbvtbvth');
  });
  await knex.schema.alterTable('iqblmwkmdk', function(table) {
    table.string('vummnkpupb');
    table.timestamp('hdcqashvkj');
    table.string('msidhncvhu');
    table.timestamp('eeiegiylpy');
  });
  await knex.schema.alterTable('cmpekaupmh', function(table) {
    table.string('sacfqlytzb');
    table.timestamp('sspruteqcr');
    table.boolean('xetgtwkwbq');
    table.json('fqfdujiqds');
  });
  await knex.schema.alterTable('kdkpxhzzhn', function(table) {
    table.timestamp('insghyagfl');
    table.bigInteger('hzvefwanqd');
    table.string('amdzbueluz');
    table.json('ofuibepbwz');
    table.json('ypoimjnrfm');
    table.boolean('rssvsukuyb');
    table.timestamp('vkwmnhdosv');
    table.timestamp('ctmqfaxlfg');
  });
  await knex.schema.alterTable('dyemyohjaq', function(table) {
    table.float('nkwngjmcte');
    table.bigInteger('vgtcnwzmbx');
    table.boolean('uouoediirm');
    table.bigInteger('vmavtrppfc');
    table.float('vxpyhyspex');
    table.float('uuntofrbkw');
  });
  await knex.schema.alterTable('dhthljgxtn', function(table) {
    table.timestamp('pksbtdiypk');
    table.bigInteger('yyoxpahhsj');
    table.bigInteger('sjrbmwwpic');
    table.boolean('qpzyuczhds');
    table.timestamp('dguchfvjxh');
    table.bigInteger('voosmapdrl');
    table.boolean('auldghhuwu');
    table.integer('txazrzfheg');
    table.timestamp('jbnerfxqkb');
  });
  await knex.schema.alterTable('jjgddgjeey', function(table) {
    table.boolean('aujdgnyqmz');
    table.json('lqyxicdjwb');
    table.float('micyatgzdz');
    table.json('wgeryuwsvt');
    table.timestamp('oojkaxfubw');
    table.timestamp('cfnslcdoil');
    table.string('nlfbdnkjjr');
    table.boolean('hchcfsxxpk');
    table.integer('atagsvxnbs');
    table.timestamp('bklmhzrdzt');
  });
  await knex.schema.alterTable('htlwmtvoxj', function(table) {
    table.timestamp('kfygegfttj');
    table.bigInteger('gainqghaya');
    table.string('mpctpyackq');
    table.boolean('incgdvmcpc');
    table.text('dmarpduyoo');
    table.json('vscokebxju');
    table.json('tlfpjuclcw');
    table.bigInteger('pwekqhofhg');
  });
  await knex.schema.alterTable('ynxdncheia', function(table) {
    table.text('lxdthhiqpq');
    table.float('jrffvlyxmx');
    table.float('awoangvzsx');
    table.json('mvqbkurafv');
    table.string('wnxfvzdwpg');
    table.json('sxfcwisjcu');
    table.timestamp('vrishwioyd');
    table.integer('vazamiqmsv');
    table.integer('dvmllsmgut');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};