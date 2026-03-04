'use strict';

/**
 * Migration: 20240803090139_ghrijjbylzdyoqz
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uzgrcnjens', function(table) {
    table.bigInteger('xdaerujptv');
    table.timestamp('sfivquotqv');
    table.timestamp('hyqkjdzrtn');
    table.string('wxwrybavib');
    table.timestamp('hcsbpvivnz');
    table.bigInteger('mrhasdfack');
    table.bigInteger('sgdhzwylgz');
    table.timestamp('slucolvkgw');
  });
  await knex.schema.alterTable('yuukrequta', function(table) {
    table.string('gialefooyn');
    table.bigInteger('ojupxgdely');
    table.boolean('tfovjlqrvq');
    table.bigInteger('ozjvtmilnb');
    table.timestamp('bxjvguiclu');
    table.text('rvfhoedvjp');
    table.timestamp('lektsrvuqb');
    table.json('jhqrqxopkx');
    table.text('yqdipylycr');
  });
  await knex.schema.alterTable('fpdzveekhq', function(table) {
    table.boolean('amwhpzdmvn');
    table.bigInteger('bhripdsmpy');
    table.text('jliruvbhfh');
    table.text('weikbhkrij');
  });
  await knex.schema.alterTable('kiozpidmet', function(table) {
    table.timestamp('vybbnusmmc');
    table.bigInteger('qzoabbbtif');
    table.float('bgsgsuhzhj');
    table.text('uqttqmoenr');
    table.integer('rktstsodhb');
  });
  await knex.schema.alterTable('uxoaxpunyb', function(table) {
    table.float('yfmwgckbfr');
    table.boolean('llzoohtzxg');
    table.float('mrbgigoqpw');
    table.bigInteger('jbmxyzdnwf');
    table.boolean('qmdhroybmb');
  });
  await knex.schema.alterTable('tkplqsobiq', function(table) {
    table.float('zftxhhhizw');
    table.float('gvbzmqynra');
    table.bigInteger('nvevilativ');
    table.string('newmeklbxo');
    table.text('uinrljtowl');
    table.bigInteger('kongkvgtdc');
    table.json('sdhlamdojs');
  });
  await knex.schema.alterTable('yxxxwbzqww', function(table) {
    table.bigInteger('bgdflxteuu');
    table.bigInteger('pvikdcpqbu');
    table.text('ghrgwynbxx');
  });
  await knex.schema.alterTable('joyewhwjlx', function(table) {
    table.float('lhzrflsumh');
    table.timestamp('kreyrhddss');
    table.json('pjtglgsamx');
    table.json('ggzwxclwcj');
  });
  await knex.schema.alterTable('yfvpzpkwqb', function(table) {
    table.integer('nmkpudmwwx');
    table.timestamp('aiavdwppuj');
    table.timestamp('kvqpuzsevg');
  });
  await knex.schema.alterTable('zqlfokuplr', function(table) {
    table.timestamp('hbzmgolurp');
    table.text('vllebjbbez');
    table.timestamp('rqcxtwgoju');
    table.bigInteger('okiukjlfvl');
    table.string('ufoynikoaj');
    table.timestamp('heigcfewfs');
    table.string('eowzynxszu');
  });
  await knex.schema.alterTable('pkbbxwiame', function(table) {
    table.integer('oupbslghbl');
    table.integer('tanyvexngw');
    table.float('nwzwlubavz');
    table.integer('dlnhooleri');
    table.text('sjzduvaiyc');
    table.boolean('ucgppxstml');
    table.string('eqlzxbvxbh');
    table.string('ghujpxoacy');
  });
  await knex.schema.alterTable('kxtblxpoil', function(table) {
    table.float('crwujdcigh');
    table.timestamp('lgzukottoy');
    table.float('ywpfavjkip');
    table.boolean('anakjxufjt');
    table.boolean('odinhzzmno');
    table.json('izzdpesvzp');
    table.bigInteger('lhxhlugmxa');
    table.integer('euzobouxvx');
    table.boolean('eqomekdrqg');
  });
  await knex.schema.alterTable('hwfwktbelc', function(table) {
    table.json('dnfhxjzehs');
    table.json('slsswptdts');
    table.timestamp('qgdmjijmxm');
    table.float('qnyrjnmzjw');
    table.float('usvsteujyb');
    table.json('gzrpcqzurt');
  });
  await knex.schema.alterTable('kmvoyoupxv', function(table) {
    table.text('wdqmqjybfb');
    table.json('vywxqgqewu');
    table.json('zjgysjhkby');
    table.integer('twdjvvjjgi');
    table.bigInteger('zprtpgagwq');
    table.text('zyqypzdvwi');
    table.integer('xjltrlysve');
  });
  await knex.schema.alterTable('deueulwicx', function(table) {
    table.string('ugqvvxgbhp');
    table.bigInteger('hfgpocqola');
    table.string('qcyjxoxbdj');
    table.float('ojfwnyezsl');
    table.float('mgmfyravmc');
    table.integer('nqdnqkcfco');
    table.bigInteger('xddquctvvr');
    table.text('ondqvpflxy');
    table.json('obogdiyjpa');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};