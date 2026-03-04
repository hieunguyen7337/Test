'use strict';

/**
 * Migration: 20240316115505_ysyldhbisiwlnkx
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iyfqxcpqoy', function(table) {
    table.boolean('vbqqvyvfec');
    table.integer('cnppzgdxgd');
    table.json('ijgfmluqft');
    table.text('yflflzhzik');
    table.text('rxcoqzwele');
    table.bigInteger('icmhmzbxve');
    table.bigInteger('waplbipsec');
    table.json('gianwnmqzn');
    table.timestamp('euycxbutfj');
  });
  await knex.schema.alterTable('igqjlicorx', function(table) {
    table.text('xeyxqetove');
    table.json('lnbmffkfop');
    table.timestamp('ppxmrxarzp');
    table.boolean('srjytiictn');
    table.float('xmhohfnxqq');
    table.text('gxewwtbbqb');
    table.text('uptceqrveg');
  });
  await knex.schema.alterTable('gayewztnxj', function(table) {
    table.timestamp('ppzvdgfmui');
    table.string('pjkugwadci');
    table.bigInteger('ivsejhaqsa');
    table.boolean('bkykcepbem');
    table.bigInteger('eyrrtiyrbp');
    table.float('veohmgyqge');
    table.json('rcrmxwbypi');
    table.text('rxwthcgdol');
    table.string('aisaatymqa');
  });
  await knex.schema.alterTable('zxyiizvctn', function(table) {
    table.integer('skuugxkwbu');
    table.integer('teapcaevrp');
    table.bigInteger('rnrpnvuqil');
  });
  await knex.schema.alterTable('loxbdnivam', function(table) {
    table.text('hatfaasmav');
    table.float('jhfmbqbnrs');
    table.string('skvevzonjj');
    table.float('dwbyeqgaxp');
    table.float('wtfazdhwtk');
    table.boolean('icrfthdgjb');
    table.integer('gpcddqcqil');
    table.float('lcbcrlioec');
    table.bigInteger('tgfbrsxcjv');
  });
  await knex.schema.alterTable('dhkpiggjkx', function(table) {
    table.json('ghjaxhfqhk');
    table.bigInteger('rjeuczxwpy');
    table.string('ctmktzeisc');
    table.timestamp('uhuautpmgp');
    table.bigInteger('tyhtzwkyzq');
    table.json('arbykdfktj');
  });
  await knex.schema.alterTable('bbrdifuqdy', function(table) {
    table.timestamp('rnalcrldov');
    table.json('qwlinfpeod');
    table.integer('fkgogukscu');
    table.string('eslotjvrnc');
  });
  await knex.schema.alterTable('plrkuxlovt', function(table) {
    table.string('wxzwpptqph');
    table.string('eumfqoxyam');
    table.text('dctmvwwwof');
    table.float('yzoqvgwfyn');
    table.json('zsopjgkttj');
    table.text('txwcqrinml');
    table.json('wdgtrjugyv');
  });
  await knex.schema.alterTable('dducagucei', function(table) {
    table.integer('pzmrjryzld');
    table.float('jigvttqjzq');
    table.text('rvhdgusabw');
    table.string('vhnarkxwvl');
    table.string('srlvcxdpgv');
  });
  await knex.schema.alterTable('oomnjzbswk', function(table) {
    table.json('wuwbtutxir');
    table.boolean('onhswlwfgu');
    table.boolean('jgqxvgqhgf');
  });
  await knex.schema.alterTable('tflkahpmog', function(table) {
    table.bigInteger('fkrvfszwky');
    table.bigInteger('bpuvafoecd');
    table.timestamp('wrfsscrlcb');
    table.boolean('ncgqocepay');
    table.float('tyjywmroki');
    table.text('ivxrpikgoi');
    table.text('wgmfplvpif');
    table.boolean('dmojsngpcq');
  });
  await knex.schema.alterTable('ykaqjpobjg', function(table) {
    table.bigInteger('jmljjtasqr');
    table.float('ssqavcbomd');
    table.string('mbjucxxzld');
  });
  await knex.schema.alterTable('nkeyyqgzer', function(table) {
    table.boolean('qbmtkqixvx');
    table.bigInteger('kllkjjnqhw');
    table.text('znljcyjwrc');
    table.timestamp('cfnywdqdqr');
    table.json('jnazgcoegx');
    table.boolean('ajlvrwoiys');
    table.integer('saiemkxble');
    table.integer('fwtmxscpqh');
    table.json('kkhawkhkga');
    table.text('ouanrbuxml');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};