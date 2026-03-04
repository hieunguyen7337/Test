'use strict';

/**
 * Migration: 20240306074242_hcnvvqbolultzrz
 * Description: Fix typo in column name
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fbagoedoqz', function(table) {
    table.timestamp('tgtncybedo');
    table.json('rhmqikkntk');
    table.boolean('vrkeeoovjq');
    table.json('somrxiyjlt');
  });
  await knex.schema.alterTable('bektrersmy', function(table) {
    table.string('gkrxburlzs');
    table.timestamp('nkeqhdcdwg');
    table.bigInteger('cewzvboudy');
    table.integer('yvqweuawqq');
    table.float('jwxnveyvxp');
    table.boolean('uwdobqstnm');
    table.boolean('xywvlbbpvr');
    table.integer('gopsdgkvry');
  });
  await knex.schema.alterTable('vlkphzrfvp', function(table) {
    table.json('axnqdrtedh');
    table.string('jksvuirzrs');
    table.boolean('siootahndg');
    table.timestamp('qxctdtifde');
    table.boolean('hffhdpsflo');
    table.text('dmrghberrp');
    table.float('jqlambhens');
    table.json('zrpoggdygt');
  });
  await knex.schema.alterTable('siunzartqn', function(table) {
    table.integer('pggbywhwcm');
    table.text('htutehjyjn');
    table.json('myuodwxoau');
    table.integer('bcvxesynbs');
  });
  await knex.schema.alterTable('whpsvjwjdp', function(table) {
    table.integer('fslugvihwe');
    table.bigInteger('sgkkwpxeol');
    table.integer('rqnpihyefm');
    table.bigInteger('khfrwutpit');
    table.bigInteger('hvnptbkgph');
    table.json('hnzpoqmqkr');
    table.json('rfpsorpxbw');
  });
  await knex.schema.alterTable('cbezukyjnj', function(table) {
    table.bigInteger('kuzgozqpmk');
    table.boolean('kcddcbxamp');
    table.integer('wdxiybynxd');
    table.boolean('xvogbrzjsu');
    table.timestamp('nhrewdjsja');
    table.bigInteger('hdfvvwrhln');
  });
  await knex.schema.alterTable('vayjunahaz', function(table) {
    table.boolean('xtqtjbacsy');
    table.boolean('vbntoezfno');
    table.boolean('hvsxfonvzb');
    table.timestamp('usaempprir');
    table.integer('eilsnsrfhn');
    table.string('xeixilzzej');
    table.float('gkfhiqizwt');
    table.boolean('shhiwxyefi');
  });
  await knex.schema.alterTable('aeuerraupx', function(table) {
    table.boolean('otmbtauosl');
    table.json('ylodrubsjm');
    table.json('jldmcutlzh');
    table.string('pdmvfifzgb');
    table.json('atwcuqhbxd');
    table.text('cajhmkkwku');
    table.json('fksleidlwi');
    table.string('iqpvcumjfc');
    table.float('jelewetxpr');
  });
  await knex.schema.alterTable('dsphuuands', function(table) {
    table.text('dzmrhliotk');
    table.bigInteger('lpsdxololo');
    table.float('zrrrpobvbh');
    table.json('ecxquhbwov');
    table.boolean('ebmheuuyic');
  });
  await knex.schema.alterTable('qcdziryblp', function(table) {
    table.bigInteger('kwriwqnggc');
    table.text('ouiibcijgd');
    table.bigInteger('cssoiofrbs');
    table.boolean('exrlzvukxu');
    table.string('mxsbummwyc');
    table.json('hhsbbrvbub');
    table.boolean('qoydjvebzi');
    table.integer('dancghfqph');
  });
  await knex.schema.alterTable('abhvvbapvf', function(table) {
    table.text('dkcvtaslio');
    table.integer('iijxmjdoil');
    table.integer('opqylovmmc');
    table.boolean('lbwaglopgs');
    table.json('kmbxojebyw');
    table.string('ywhismljqx');
    table.bigInteger('ybcwptxnae');
  });
  await knex.schema.alterTable('zvmdxmobul', function(table) {
    table.integer('emfntsgrml');
    table.float('zorioykdce');
    table.text('phlwpttmle');
    table.text('xomkrepsvb');
  });
  await knex.schema.alterTable('zaixnjgcyf', function(table) {
    table.json('aupqwppkzr');
    table.json('hlsbeuqxqr');
    table.float('ymukcbobja');
    table.float('fwimixnypi');
    table.integer('hipcwpdzvs');
    table.timestamp('xhepqoxzwe');
    table.text('xwzpilibhm');
    table.text('hbaqsgojtw');
    table.integer('pcwhsyikwh');
    table.integer('ponyholzkh');
  });
  await knex.schema.alterTable('spdlymgvud', function(table) {
    table.float('khdlfbgztg');
    table.float('omqziurcxd');
    table.string('ukftzodgki');
    table.bigInteger('zyoudynlsf');
  });
  await knex.schema.alterTable('xjulnjddpg', function(table) {
    table.string('cjyienujgu');
    table.integer('fjpdoamhrx');
    table.json('sdvcqswkot');
    table.timestamp('wnkkcblerc');
  });
  await knex.schema.alterTable('wuqylpmewi', function(table) {
    table.bigInteger('cdbphvwjwk');
    table.boolean('ugfygodaek');
    table.json('olcchfuucp');
    table.float('wddnancrjf');
  });
  await knex.schema.alterTable('dtgshiyvey', function(table) {
    table.bigInteger('knlpyqlilf');
    table.text('sgoiiqdljd');
    table.timestamp('cfwigjsebe');
    table.string('ohlngtswsu');
    table.string('tuviwdbneq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};