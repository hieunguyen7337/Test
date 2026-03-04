'use strict';

/**
 * Migration: 20240620061346_lzdwxfjhaswwidv
 * Description: Rename field
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vexspiurqr', function(table) {
    table.json('drhvhafehc');
    table.boolean('brxvyoxhap');
    table.float('mphlidgvpr');
    table.float('mpevntgvfz');
    table.string('mxripclxyy');
    table.timestamp('vhzgbcdfss');
  });
  await knex.schema.alterTable('eocaahahau', function(table) {
    table.float('qjjzcbwntu');
    table.text('mvgzaaafyy');
    table.boolean('svftbdeoqd');
    table.float('hwwkqzungc');
    table.string('nccxbxhihe');
    table.float('bhlydpaloc');
    table.text('dojbqapnym');
    table.float('qdgsasketw');
    table.integer('uihwcjjapt');
  });
  await knex.schema.alterTable('wmbisjkmdq', function(table) {
    table.boolean('ogahfdijgp');
    table.bigInteger('yxwlyeldvq');
    table.text('ljjopvshid');
    table.string('arfvmtrgdc');
    table.integer('yjjjyzcrzz');
  });
  await knex.schema.alterTable('boyrromhpj', function(table) {
    table.string('yyqjntvlsw');
    table.bigInteger('ibdzmekrwa');
    table.string('lhedvfhvme');
  });
  await knex.schema.alterTable('xncntqoetg', function(table) {
    table.timestamp('ahjvmwgpaj');
    table.integer('ttefraztmq');
    table.string('gcxqwkuvad');
    table.float('mjnawplapd');
    table.bigInteger('fqrjuwvwfs');
    table.integer('tnmnywqhxt');
    table.integer('knduzvumks');
  });
  await knex.schema.alterTable('hjrkhxmatx', function(table) {
    table.text('ggnsgdslkx');
    table.bigInteger('zpmqayqwoo');
    table.boolean('yupvfddgmc');
    table.bigInteger('encaxvsvnf');
    table.integer('gcrsthcasl');
  });
  await knex.schema.alterTable('hrazfpwflm', function(table) {
    table.json('mvvinmeqox');
    table.integer('dzakaptjsg');
    table.bigInteger('ykjtlceqnc');
    table.integer('gwhawyaiws');
    table.bigInteger('xcembdsexz');
    table.bigInteger('qtlkbysuhe');
    table.boolean('ctnkeyprhr');
    table.string('zcrsjqiddg');
    table.bigInteger('tsriuwkuds');
  });
  await knex.schema.alterTable('ucrkoonqme', function(table) {
    table.text('huuvvarijn');
    table.timestamp('zysjybjqyd');
    table.json('tsgubhquqw');
    table.boolean('eiaiwimzhw');
  });
  await knex.schema.alterTable('wniukxqjlc', function(table) {
    table.bigInteger('jbtmqbnopf');
    table.text('ccjexfbqbg');
    table.json('iodkkxptvu');
    table.text('zjpurpsziy');
  });
  await knex.schema.alterTable('tkenbgtsfw', function(table) {
    table.string('tztfmjchua');
    table.string('kdtgsqllpu');
    table.text('wfdurwwcxg');
    table.bigInteger('jnbmwzames');
    table.boolean('kjazrmscul');
    table.integer('xatijdoshc');
    table.text('wflsnwyqyc');
  });
  await knex.schema.alterTable('yojkpofcno', function(table) {
    table.float('bnqtmfkddw');
    table.text('zoenyaxbvr');
    table.timestamp('taajdrkviy');
    table.boolean('uoudynqwcz');
    table.string('pjfxrehhwl');
    table.boolean('vmzcwiloyz');
    table.bigInteger('dwmpdthpal');
  });
  await knex.schema.alterTable('uozktbjfuu', function(table) {
    table.timestamp('unimmhftqj');
    table.timestamp('nnqfdowmqz');
    table.text('cduwwhtoee');
    table.float('yzyavgwnmb');
    table.bigInteger('hdxepawbbs');
    table.float('ouwwoeawiw');
    table.timestamp('wotkzbuuib');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};