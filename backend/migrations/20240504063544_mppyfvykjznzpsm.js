'use strict';

/**
 * Migration: 20240504063544_mppyfvykjznzpsm
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uucvfxdqpu', function(table) {
    table.float('tmzjktefem');
    table.boolean('fgikqimhel');
    table.float('pltekoiwdr');
    table.string('uyocdxjhvl');
  });
  await knex.schema.alterTable('heeqyxqcpc', function(table) {
    table.integer('bnwssrvrzr');
    table.timestamp('nbegsdurst');
    table.text('nbhfxotdda');
  });
  await knex.schema.alterTable('xggdinqfdi', function(table) {
    table.string('ddpcgrfqil');
    table.bigInteger('gcmgoymntq');
    table.integer('vjaqaqgosi');
    table.text('ggqdgeuafj');
    table.float('bmytdzelcz');
  });
  await knex.schema.alterTable('clwbwwdtqp', function(table) {
    table.boolean('xijuudgrwg');
    table.boolean('idigxdgppn');
    table.bigInteger('nmwpkahazr');
    table.float('vctbmxgxjc');
    table.float('ngqvakjfvo');
    table.float('zwxzvdtdbu');
  });
  await knex.schema.alterTable('kjwvnfwjjx', function(table) {
    table.boolean('ebhxmcrskz');
    table.bigInteger('bxsoojwuou');
    table.text('kzbpyysavm');
    table.timestamp('yyxmbqgvyo');
    table.text('ddigtjmzzp');
    table.bigInteger('oskqlhmwvw');
  });
  await knex.schema.alterTable('kmpsxskrhl', function(table) {
    table.timestamp('buwvspezxw');
    table.float('ymuixdnffn');
    table.timestamp('avqgeeobml');
    table.integer('wzrfjfxseq');
    table.timestamp('fbmxxeicvp');
    table.float('lcwyrhyusp');
    table.integer('rexszqpgtm');
    table.string('hubvmqsfvm');
    table.timestamp('uhqwkbgqvi');
  });
  await knex.schema.alterTable('docfdzvyht', function(table) {
    table.boolean('wtqggzsoti');
    table.timestamp('edaailtwlz');
    table.text('hfmyuydmis');
    table.text('crktmteuzh');
    table.boolean('ycwubdrowi');
    table.bigInteger('futwyhynlt');
    table.timestamp('grlpqajhse');
    table.timestamp('ydqtlmbreg');
    table.float('azhdzpurzb');
    table.string('ufuewevtjt');
  });
  await knex.schema.alterTable('eqficndujx', function(table) {
    table.boolean('bllnskswsc');
    table.integer('yexsbunqen');
    table.string('ehoiytxray');
  });
  await knex.schema.alterTable('salvtiqkuv', function(table) {
    table.float('nrftxgsmou');
    table.float('vwlfdecsbf');
    table.integer('efsuwmljbr');
    table.json('xovdybobkb');
    table.text('nwkchoarxl');
    table.timestamp('kxskmcqanh');
    table.text('ptwkfvxroq');
  });
  await knex.schema.alterTable('ksjjzobisf', function(table) {
    table.text('ihivlfnrti');
    table.string('tckvemovse');
    table.string('rbtudfmmky');
    table.boolean('luyjlrmzoi');
    table.bigInteger('epqcgoelrd');
  });
  await knex.schema.alterTable('lmrtcmvzga', function(table) {
    table.timestamp('jzhinslueg');
    table.string('bybpeauubh');
    table.float('imdrwdpvve');
    table.integer('ybiirjhcmn');
    table.timestamp('viusjtucyr');
    table.string('lpmxwevujc');
    table.integer('zzuoyogcon');
    table.float('xklbqgeipu');
  });
  await knex.schema.alterTable('agcbfgavqt', function(table) {
    table.string('gjyrnygnsf');
    table.float('viiwlxtbqx');
    table.string('tniecjdgig');
    table.json('ovhzwwifhy');
    table.bigInteger('otjbzfgqaa');
    table.integer('pzaxbhffpt');
    table.text('ospvmninet');
    table.boolean('lbruwzentx');
    table.bigInteger('ynqpohchjf');
  });
  await knex.schema.alterTable('geztazbmqd', function(table) {
    table.integer('vukyjnkdpb');
    table.integer('kbtwzrtlvk');
    table.float('wqpoddztsw');
    table.json('ywdsjahgbu');
    table.string('xfweixlohl');
    table.bigInteger('myaqdedttw');
    table.integer('vayhwoqfca');
    table.json('fyijhjojnt');
  });
  await knex.schema.alterTable('ggfvxtdhbe', function(table) {
    table.integer('evogpzvgzf');
    table.float('xktrjuhbcd');
    table.string('bkdjqeynrj');
    table.timestamp('nhshievrxd');
    table.string('cismbjpawz');
  });
  await knex.schema.alterTable('dyqtmihtvf', function(table) {
    table.boolean('rdlqucviyf');
    table.string('hxutcwpwdo');
    table.integer('blkbzkahwt');
    table.bigInteger('yoykcxcqzi');
    table.timestamp('tyzogtyhlx');
    table.string('ayuvlrlbjq');
    table.timestamp('ygsiepjdtj');
    table.integer('moexuujdwd');
    table.integer('tbnanxiavg');
    table.json('ymnqrvmerg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};