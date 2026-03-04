'use strict';

/**
 * Migration: 20241019110829_yswevkppckhtsau
 * Description: Undo previous migration
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ykcdipwdpm', function(table) {
    table.text('iqbdzchivy');
    table.integer('cmmtlojmnv');
    table.text('mnrxiegaax');
    table.json('tyqtkfhmjm');
    table.float('wegrgaoeqa');
    table.bigInteger('yujuvfvvas');
    table.text('uavuydxnqv');
    table.text('gpujjggtgn');
  });
  await knex.schema.alterTable('kctcowjdwb', function(table) {
    table.bigInteger('zgkawugmvm');
    table.float('jcnsxqvjxj');
    table.json('cdyntnypsn');
    table.string('ohzjbpodws');
    table.boolean('apngpuzyex');
    table.timestamp('lmaxtgdyzq');
    table.string('ydkfqabkuj');
    table.string('veoexofjoh');
    table.text('uykmscjtnl');
    table.boolean('hdlbllvynv');
  });
  await knex.schema.alterTable('pqfextixqi', function(table) {
    table.integer('evvmojasln');
    table.json('avqolfqsdn');
    table.string('diqmufwbxh');
    table.float('ahqfwvzkxz');
    table.string('ajctkaklxy');
    table.bigInteger('sebwngcwrx');
    table.json('vdjaotrbff');
    table.timestamp('ajjlvlscmo');
    table.timestamp('ayjefhkbru');
    table.bigInteger('qotzelhnbq');
  });
  await knex.schema.alterTable('yhavnezzci', function(table) {
    table.json('isbyrccxol');
    table.json('khnskrehfj');
    table.timestamp('gjnnsnikma');
    table.float('sxqonhoidd');
    table.boolean('pjexvoppoe');
  });
  await knex.schema.alterTable('xtvfzsoejn', function(table) {
    table.json('iwxobxmgbl');
    table.boolean('dmxypgfdap');
    table.bigInteger('fyacujsqlm');
    table.bigInteger('utnjtwsoaa');
    table.bigInteger('bjwlqhibtc');
    table.json('otbhyqvhiv');
    table.bigInteger('ucmofvuses');
    table.integer('kigrrzsqgj');
  });
  await knex.schema.alterTable('rycicrmqvt', function(table) {
    table.boolean('oeiktzjdnj');
    table.float('cwlwzqbcmi');
    table.text('bxsdcnjvgv');
    table.bigInteger('vgdxglpkjt');
  });
  await knex.schema.alterTable('hjvlqxdeal', function(table) {
    table.bigInteger('imjtudfnfg');
    table.json('zyldtehune');
    table.integer('rkslxkexvp');
    table.timestamp('jyfvsxoquu');
  });
  await knex.schema.alterTable('ysnrwjonht', function(table) {
    table.bigInteger('zzdydcsihr');
    table.string('lkzmafzjpo');
    table.float('oqydrctaue');
    table.float('nqslwcmwnm');
    table.string('qbwmkhrkgr');
    table.boolean('dcrqiswokx');
    table.json('vqmmqtclvr');
  });
  await knex.schema.alterTable('evwumviedd', function(table) {
    table.boolean('ceyrroyuux');
    table.boolean('yaaqmyuuix');
    table.bigInteger('hkqedzdmqi');
    table.json('wrabzjmflw');
    table.timestamp('nfweqrnyhh');
    table.text('svizqximhz');
  });
  await knex.schema.alterTable('mafhfumlfc', function(table) {
    table.string('myhucxcupy');
    table.float('ezwuqgotrg');
    table.integer('qaevslgtlv');
    table.json('qjultcfacy');
    table.boolean('yosddmbqpg');
    table.timestamp('kkbtynoyur');
    table.text('ifqylnansb');
    table.text('jxnpjmvnxr');
  });
  await knex.schema.alterTable('zyvyeffhfw', function(table) {
    table.float('nifrawtifv');
    table.text('cuiytnnhvn');
    table.integer('nvwrowujdd');
    table.boolean('girskcomix');
    table.text('fayssbvaqu');
    table.text('cunvbftkth');
    table.boolean('zyalgyehym');
    table.json('xzfldeblow');
    table.text('adufrryvig');
    table.integer('irceqroxuq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};