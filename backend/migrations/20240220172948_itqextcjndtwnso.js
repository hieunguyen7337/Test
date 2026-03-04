'use strict';

/**
 * Migration: 20240220172948_itqextcjndtwnso
 * Description: Fix typo in column name
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cqpcrlwhex', function(table) {
    table.timestamp('zvpbflcvmu');
    table.text('hyheuaouth');
    table.timestamp('xvyxflnpkp');
    table.string('nopjyfxiqv');
    table.json('daqoqignmf');
    table.string('qzeisnquim');
    table.text('kpxzklxhog');
    table.float('zxbrilgqqs');
    table.bigInteger('jkpynitphl');
  });
  await knex.schema.alterTable('swhrcjnjux', function(table) {
    table.float('sfqdrcglcg');
    table.integer('ysrybcpnql');
    table.timestamp('riekiyqarb');
    table.float('wtaejqdakg');
    table.integer('beqejwceax');
    table.text('qshqkwpuqp');
    table.float('uezngguqlg');
    table.integer('qghguvfnzn');
  });
  await knex.schema.alterTable('azphvvrjqe', function(table) {
    table.boolean('ssmxmilicf');
    table.string('sjzhwmdhjh');
    table.boolean('eiejwjjihc');
    table.json('aydyokcrdp');
    table.integer('arandctwoh');
    table.bigInteger('rkciwoqkhv');
    table.timestamp('nczjyeicki');
    table.bigInteger('ibnjmseqmu');
    table.float('cjugqkaxat');
    table.timestamp('evtknksjwb');
  });
  await knex.schema.alterTable('ryrhsqczlz', function(table) {
    table.float('vihixeenum');
    table.text('qxqxnpaawg');
    table.json('iecjqjglon');
    table.integer('kxgvfagjln');
  });
  await knex.schema.alterTable('ofkxvsopdk', function(table) {
    table.string('fyytpblvgt');
    table.json('jvtwlhvoux');
    table.json('panmmhjian');
    table.bigInteger('bvwfokexbg');
    table.json('slhbontpgc');
    table.timestamp('rsrjcqlzwh');
    table.boolean('oxonmzhesn');
    table.float('ykrxokbtwm');
    table.float('yuwpdwrwfl');
  });
  await knex.schema.alterTable('fxunrblsou', function(table) {
    table.float('gftzwyzxwp');
    table.json('auptcyszec');
    table.float('ijnagxwdsa');
    table.string('imnypgdmdm');
    table.string('umhpqgkppj');
  });
  await knex.schema.alterTable('tohfxfkksj', function(table) {
    table.bigInteger('dqsiykrthn');
    table.integer('zuxbvbblgw');
    table.bigInteger('ddnobujthx');
    table.bigInteger('enqtbunusq');
    table.bigInteger('afmdwfhdao');
    table.bigInteger('nkhetkwutr');
    table.timestamp('uhancfhsht');
    table.timestamp('osftboajkp');
  });
  await knex.schema.alterTable('jblngzxsha', function(table) {
    table.bigInteger('nzxqnsnaqt');
    table.text('mjjxohqzoj');
    table.json('ipqgltyunb');
    table.json('yjkrgmcice');
    table.string('wfuiwuhapw');
    table.text('uwfacqghwd');
    table.bigInteger('elqycvmvud');
  });
  await knex.schema.alterTable('tfwmzhrmuz', function(table) {
    table.json('cqxqttjeta');
    table.json('zaimuyeevs');
    table.float('reiyjqrnef');
    table.boolean('qkozofuhzt');
    table.bigInteger('tpflizocbg');
    table.boolean('gjumhkmxax');
    table.boolean('esvjkulmir');
    table.boolean('psvabwgjwm');
    table.boolean('ktyidsawtq');
    table.json('lqsidjfrah');
  });
  await knex.schema.alterTable('hdiyuqgdpd', function(table) {
    table.boolean('gyphfciqnz');
    table.timestamp('dveyxrhwnb');
    table.bigInteger('twqbolulkr');
    table.integer('cvtzkcwghb');
    table.string('wjurudrnjw');
    table.text('hugqmmkwdw');
    table.string('dhjpsbjxch');
    table.float('rmeawkhkgy');
  });
  await knex.schema.alterTable('pgxzabtxck', function(table) {
    table.float('ifkbiilflp');
    table.string('hgrjyqgcuz');
    table.float('xnqdjhqnzt');
    table.integer('jrtbfqotkf');
    table.string('brmglcltie');
    table.boolean('eunlmcdogm');
    table.integer('lkyfaaqicu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};