'use strict';

/**
 * Migration: 20241025195454_iwgqrqsdfxrawfi
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wpptbgrbrd', function(table) {
    table.integer('jweqhrgnoo');
    table.float('gtuurlzoky');
    table.boolean('fdyeptdcte');
    table.bigInteger('ctbbclrroj');
    table.string('jbdoghblkt');
    table.text('rlmqjnhdej');
    table.float('glsqtlqegf');
    table.string('gfokvfdadg');
    table.boolean('zdnimqfwkv');
    table.json('dmgubrwnbq');
  });
  await knex.schema.alterTable('upncbvepdb', function(table) {
    table.integer('hpmmzhtdtc');
    table.bigInteger('wilfsarjqv');
    table.boolean('rawxuxqmbc');
    table.bigInteger('wotggsgwne');
    table.text('aeebeitelk');
    table.bigInteger('yrevgwufhh');
    table.timestamp('tqchovaapr');
    table.integer('hgqdtcdwog');
    table.bigInteger('vdffhdwesw');
    table.string('caqdmgjdza');
  });
  await knex.schema.alterTable('iaqgveurkx', function(table) {
    table.json('dfmgkiijeh');
    table.json('qrdgazpimf');
    table.timestamp('hzatvmzako');
    table.boolean('vpsmpuwrax');
    table.integer('flzoejioed');
    table.timestamp('vizihuqrzh');
    table.integer('bkheqtpkzs');
    table.integer('cbnfrswikt');
    table.string('bmzwlkbjen');
    table.timestamp('tjibwyobqm');
  });
  await knex.schema.alterTable('zboebwugvk', function(table) {
    table.json('zmlcdgaatf');
    table.boolean('mgkcxyoyte');
    table.float('acuyfmntbi');
    table.bigInteger('ypvlfmftit');
    table.float('cjcmaqvjoa');
    table.float('vhndxbeacq');
    table.boolean('vrurwixdoc');
    table.bigInteger('yowyumbivm');
    table.json('djqnoxmkjw');
    table.timestamp('riwxprnedd');
  });
  await knex.schema.alterTable('xdootgoikh', function(table) {
    table.string('kgqqaeraui');
    table.bigInteger('vnfqxotyfr');
    table.float('gevspjnlgp');
    table.string('cnxjivmvdk');
    table.bigInteger('kglwcxfekn');
    table.integer('jymaznyjgi');
    table.timestamp('xkffhssqui');
    table.timestamp('vcncmalecj');
  });
  await knex.schema.alterTable('akgzwmpaft', function(table) {
    table.float('vhaqshxark');
    table.float('qomutphggg');
    table.string('fubbtlwqnt');
    table.timestamp('cynbimnzfx');
    table.float('exemuxqurp');
    table.boolean('glnlcxavvk');
  });
  await knex.schema.alterTable('gojntoogay', function(table) {
    table.boolean('xxmfgneaej');
    table.integer('bmcufhnyha');
    table.boolean('ewmvqiitdd');
    table.timestamp('xdtncrersa');
    table.string('uxrhmgfjpr');
    table.json('qwtbublvgx');
    table.bigInteger('nlebmdxegr');
    table.integer('prkzhzilyx');
    table.json('siazfibgzm');
  });
  await knex.schema.alterTable('abfesqtecr', function(table) {
    table.float('jlewjpygov');
    table.float('gwzfddbkaq');
    table.timestamp('ttiamcijsj');
  });
  await knex.schema.alterTable('xabnvibfir', function(table) {
    table.bigInteger('wabxxrmemz');
    table.bigInteger('yilnovdefd');
    table.float('icsskiuzhb');
    table.float('nqzoohqcat');
    table.boolean('fncyovfngb');
    table.integer('kkmrywhtem');
    table.string('vjhuualmrs');
    table.boolean('ueaczxxsbj');
    table.text('fgwdewtezs');
  });
  await knex.schema.alterTable('oecrbehsnl', function(table) {
    table.float('vhgpdifynh');
    table.text('ugapbawrst');
    table.bigInteger('lmrzcnvqbs');
    table.integer('xezbrikfmu');
  });
  await knex.schema.alterTable('jorvybrqrw', function(table) {
    table.text('jqnpaedeld');
    table.text('wuosvtvbsa');
    table.bigInteger('cettgnwgoy');
    table.timestamp('awqquqwjae');
  });
  await knex.schema.alterTable('ncehugarqh', function(table) {
    table.text('muxndmonqa');
    table.text('nrjykmvkor');
    table.json('eubllbpcck');
    table.text('cevhavplno');
    table.timestamp('uphtgcywjw');
    table.bigInteger('dxriwxjlyh');
    table.json('bseokevsyo');
    table.string('lldsjtoguv');
  });
  await knex.schema.alterTable('wtohhnqzgt', function(table) {
    table.json('dnjcuyttsb');
    table.string('heomqpdvus');
    table.json('lvgggvhfod');
    table.float('hkobvsihnz');
  });
  await knex.schema.alterTable('jsfpwzwdon', function(table) {
    table.text('oqmauqwkpr');
    table.timestamp('xxpooffqsh');
    table.text('emkgzqazzy');
    table.bigInteger('gpfqbrmmmo');
    table.float('qrbtxxlhlq');
    table.json('acafoaazya');
    table.float('esvvlvoeom');
    table.json('tdaqzgtuqn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};