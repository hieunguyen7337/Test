'use strict';

/**
 * Migration: 20240227030650_bfibceuiqirzcdz
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wifccnpfiz', function(table) {
    table.string('wnljrkhpzk');
    table.integer('nvcribpcmn');
    table.float('qumslfokwa');
    table.bigInteger('vcxswojrnj');
    table.json('veygxnubkv');
    table.text('khmzvaaafv');
    table.integer('houwhzterv');
    table.text('jokdyvgihy');
  });
  await knex.schema.alterTable('fjrxabyjeq', function(table) {
    table.text('dxfdutivdx');
    table.text('trwxbxayyn');
    table.float('dbjcodqqsw');
    table.text('dlfqywcdsz');
    table.text('gnpjmtjgxc');
    table.boolean('qrvpvckxrj');
    table.text('saesyysrjt');
    table.string('ipykiuqylp');
    table.boolean('btdfkutzyk');
    table.json('oiajetgzkj');
  });
  await knex.schema.alterTable('ynqzavapca', function(table) {
    table.string('lakxgysvok');
    table.text('chqfmkdybl');
    table.timestamp('jdcshqdbmg');
    table.bigInteger('nkdlpqeodr');
  });
  await knex.schema.alterTable('qjuztgvfye', function(table) {
    table.string('vstthufojd');
    table.text('itdkxfbisk');
    table.text('kdppjdruud');
    table.integer('ltzmvohusb');
    table.string('vvhlqdswop');
    table.string('cjtnkaxnjo');
    table.boolean('ansqqkxwqu');
    table.integer('ntgfjxumqv');
    table.integer('aqfcipetcl');
  });
  await knex.schema.alterTable('kpwolmwjsn', function(table) {
    table.float('kjsfeyflcg');
    table.float('actlapylbd');
    table.boolean('xmgsjbulke');
    table.float('fzvzoioyto');
    table.timestamp('ivnrhsopih');
    table.integer('oqjaxglaxa');
    table.timestamp('bemqjstndn');
    table.float('ugzkakdice');
    table.string('mirqxtnrfm');
  });
  await knex.schema.alterTable('hlqvuvmgjl', function(table) {
    table.timestamp('raqdfyqbwh');
    table.string('tjpxgikzlg');
    table.bigInteger('ctempriqnp');
    table.boolean('mkxylovcau');
    table.float('yaxuaebxak');
    table.string('jthpbxittv');
    table.boolean('cnjriwdssm');
    table.string('mxxhuqfcgo');
    table.json('fmipijtave');
    table.boolean('oqqhdgfnvh');
  });
  await knex.schema.alterTable('ixwbffxbty', function(table) {
    table.integer('jhpfyeknci');
    table.json('dnsxmshlwb');
    table.timestamp('ggwbxfyftp');
    table.string('jxzyszbalt');
    table.json('mxolgxwluk');
    table.float('ehmsxuaahj');
    table.bigInteger('bndtiyijhj');
    table.integer('vtdjsldgbz');
    table.bigInteger('hptybibbmb');
  });
  await knex.schema.alterTable('kcyijolwkg', function(table) {
    table.integer('vapuetjabf');
    table.text('bdxqgnumwz');
    table.string('nzzvjcmgkw');
    table.text('kyvhmtutal');
  });
  await knex.schema.alterTable('biwoiqghxl', function(table) {
    table.integer('ggxhoevbdc');
    table.timestamp('rekfqbmomm');
    table.float('yqiwhwkbki');
    table.integer('nslmorjxkj');
    table.string('junwcvaepy');
    table.text('lizeywfqss');
  });
  await knex.schema.alterTable('jjgnzfwkki', function(table) {
    table.bigInteger('dpiljaxict');
    table.boolean('mtufgpzbea');
    table.integer('gdvtgqpzps');
    table.float('gdmzbmklqq');
    table.bigInteger('iphgxnscph');
    table.boolean('hooloqrdqa');
  });
  await knex.schema.alterTable('iijxyoyazb', function(table) {
    table.string('mwddlnguou');
    table.integer('kmvlzdmekz');
    table.float('pkmfgreglj');
    table.text('czjcujvyeb');
  });
  await knex.schema.alterTable('zniqnezomv', function(table) {
    table.string('lfarqpvcbw');
    table.bigInteger('zocqzwfawl');
    table.timestamp('ttzkfecbfs');
  });
  await knex.schema.alterTable('ygdyfuvwqh', function(table) {
    table.integer('jafrftziiy');
    table.integer('dguiaoqlbn');
    table.json('pvjqybxren');
  });
  await knex.schema.alterTable('njwzgndjts', function(table) {
    table.boolean('vkmwuvqiqx');
    table.float('cwilcmdcus');
    table.boolean('vpghbfgpna');
    table.bigInteger('ucmxyjkbti');
    table.float('yjvwyihtvo');
    table.float('ciljtwveiz');
    table.timestamp('eatrxfbtbg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};