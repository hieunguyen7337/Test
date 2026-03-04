'use strict';

/**
 * Migration: 20241105130555_xtjerflmvxndgfj
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ltoqvchnnf', function(table) {
    table.boolean('iatmwbdnyk');
    table.string('aujwprooyn');
    table.bigInteger('lxypgetllx');
    table.integer('qhtppivgbo');
    table.boolean('pobvmrclij');
    table.integer('qckbikdorr');
    table.boolean('pxcotnyklg');
    table.json('mfboknxean');
    table.timestamp('tokoajtzpe');
    table.json('zbehmliuqo');
  });
  await knex.schema.alterTable('wotnpmmhni', function(table) {
    table.integer('isbgngqwyi');
    table.boolean('joknbsigda');
    table.float('jbgwbsiioo');
    table.json('urmjdxuirb');
    table.boolean('lrtmarykva');
    table.timestamp('trmgcwcrss');
    table.timestamp('tejirmeduj');
    table.integer('ckxhpasgir');
  });
  await knex.schema.alterTable('pogpkfoxef', function(table) {
    table.integer('axjxhhkygy');
    table.boolean('dogmjqasvd');
    table.text('pjprcnqgzu');
    table.timestamp('cstxyxcevk');
    table.string('tijzxyvxuq');
  });
  await knex.schema.alterTable('crepqepdlg', function(table) {
    table.boolean('rvmdlxgewx');
    table.json('vfstmwgpej');
    table.text('yztsihyofn');
    table.boolean('kfzqvoxyqg');
    table.bigInteger('blwggbugdi');
    table.boolean('jfrfnemddh');
  });
  await knex.schema.alterTable('kuqefqebds', function(table) {
    table.boolean('abaghcwyjb');
    table.text('ucqqhskgtt');
    table.timestamp('emnksxyvlj');
    table.json('tretuaiacn');
    table.string('bkuifjqvkr');
    table.json('mdzlqmbwfw');
    table.boolean('yblfxkiwgc');
    table.timestamp('pxsajgwtqw');
    table.bigInteger('ewhzhpbeuj');
  });
  await knex.schema.alterTable('yrooqqixaa', function(table) {
    table.json('rvmsoslhoj');
    table.integer('qxcojtdudi');
    table.text('spbfpehoki');
    table.timestamp('uwqfrwmbtf');
    table.json('plmuwgukyl');
    table.integer('ljqilkrttf');
  });
  await knex.schema.alterTable('fstnjmgszm', function(table) {
    table.json('zfaobptsvn');
    table.json('lrzarqkxsi');
    table.json('mgyateegtd');
    table.timestamp('jbrsrbpsue');
    table.timestamp('vqikylkufx');
    table.boolean('bugiihcyrb');
    table.string('ppcgqlrczw');
    table.boolean('zxcxvuedui');
    table.float('oxzrihnwqd');
    table.bigInteger('zdzomjezbh');
  });
  await knex.schema.alterTable('jqdxsauxof', function(table) {
    table.string('vaxswgfeqw');
    table.boolean('wjcgtakpcq');
    table.text('meaweeyhlu');
    table.bigInteger('hvoekfrzow');
    table.string('lnyztxoxqd');
    table.bigInteger('ggzrmrwiuh');
  });
  await knex.schema.alterTable('zeffjolfan', function(table) {
    table.float('jgzvwyyiar');
    table.boolean('brracutyir');
    table.timestamp('bgsfludaae');
    table.string('ebytiikimr');
    table.bigInteger('ggyfzmsrxh');
    table.string('tvzxcoriah');
    table.text('dztellosvj');
    table.timestamp('zmlrqgloiy');
    table.json('ikblgmfqaz');
  });
  await knex.schema.alterTable('fviwpjrify', function(table) {
    table.timestamp('eyhgxwcexp');
    table.json('mfxjtdaduv');
    table.json('cbsoutcsll');
    table.text('tpgaaixiym');
    table.float('jfraivuexv');
    table.string('vlfssytnqw');
    table.bigInteger('syocqhxodq');
    table.text('lpwbabaebo');
  });
  await knex.schema.alterTable('bdhyjapuoc', function(table) {
    table.text('pdaczbseyh');
    table.text('uhztjdbtwl');
    table.boolean('sginegtubj');
    table.text('hgvzwtqgls');
    table.string('rxtplxacpv');
    table.json('bhtalqgbjf');
    table.timestamp('cniqvdxflh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};