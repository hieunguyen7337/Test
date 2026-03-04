'use strict';

/**
 * Migration: 20241114193737_xdzexupkqxcngoo
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nzrroyimli', function(table) {
    table.timestamp('icsyuhvfuz');
    table.timestamp('gatwkycjvb');
    table.boolean('htvicfdqkc');
    table.json('uvcbllvrgn');
    table.float('zwqqqxblmc');
    table.float('jlsdrklivb');
    table.json('hfyyskwsxc');
    table.bigInteger('tsqgtipygw');
    table.string('bsejwgqzsu');
  });
  await knex.schema.alterTable('zqiplcnmzj', function(table) {
    table.boolean('mhphjpjogb');
    table.string('lrwtcxkgwn');
    table.float('pcqgrrcnpq');
    table.boolean('ybgjohllgi');
    table.text('evlmznrxsh');
    table.integer('amgnlpqwwz');
  });
  await knex.schema.alterTable('lpzwsyhdjp', function(table) {
    table.float('tlnixmtqsy');
    table.boolean('lpfmhswfoq');
    table.text('lbzlrqzmlr');
    table.text('uwxbqngcpg');
    table.string('vcxigopflt');
    table.float('dthdmvabug');
    table.text('ytixccsopu');
    table.json('oovcgmpoyz');
    table.json('kejrqprswn');
  });
  await knex.schema.alterTable('zejiyhttlh', function(table) {
    table.json('zroglcdhcl');
    table.json('inurdtntpr');
    table.integer('xewoyzcudt');
    table.text('ztkhotkapn');
    table.timestamp('kfbcqxmros');
    table.boolean('rtanpnvrao');
    table.float('gufiynrynv');
    table.float('isasqwhtbe');
  });
  await knex.schema.alterTable('nvoyhjgjwo', function(table) {
    table.float('woyivnjpkt');
    table.bigInteger('ezpjjqhyff');
    table.text('gamovzyquw');
    table.json('tgwqxkhrxy');
  });
  await knex.schema.alterTable('juqvcltgmd', function(table) {
    table.integer('dafpzagqpw');
    table.text('utsqdpmcbv');
    table.boolean('yjevxbioiz');
    table.timestamp('rxiskxrmlg');
    table.integer('ceqazffsql');
    table.integer('zwaokmpjnu');
    table.text('rclxclgekp');
    table.boolean('ybjdvhyfnt');
    table.timestamp('eyuwtzborw');
    table.json('oplmdbmdnk');
  });
  await knex.schema.alterTable('ijonxedofi', function(table) {
    table.bigInteger('yzwrrlwgcc');
    table.text('zhgvhvcfls');
    table.text('bgvbllqblb');
    table.string('ctjltfwuvo');
    table.boolean('sqhvphuvpw');
    table.bigInteger('gwxwviewhb');
    table.json('gfcdqbqcnt');
    table.json('yrjtvnptrt');
    table.string('iqzgsslgrh');
    table.text('ycutpwxprj');
  });
  await knex.schema.alterTable('rzzpkzflkg', function(table) {
    table.integer('qsgyvsvjhk');
    table.float('prtqklbbhg');
    table.integer('dweastnsfm');
    table.json('ylwifrthrn');
    table.float('ndixfgiunw');
    table.boolean('noyuzhhzjf');
    table.json('pumdyqrqcl');
    table.float('ytqcgkinky');
  });
  await knex.schema.alterTable('dvfytwsvls', function(table) {
    table.text('fbugtebvzm');
    table.integer('rhihrqqmke');
    table.boolean('bfjmajlpru');
    table.string('vvkklmjxzq');
    table.float('womkhveaqd');
    table.string('nmuodgampr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};