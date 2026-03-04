'use strict';

/**
 * Migration: 20241120150812_nhmezizekjuhngb
 * Description: Rename field
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ootdggvrub', function(table) {
    table.string('favjgmrldp');
    table.float('ciuwarlcyl');
    table.text('ewersyxwlt');
    table.text('ilvkmclzaw');
    table.integer('fevzlsmpve');
    table.bigInteger('vddcsnkvdr');
    table.string('gduqsphyyh');
    table.bigInteger('gedazegusn');
    table.string('ttmzyflkut');
  });
  await knex.schema.alterTable('qzvehhvqyz', function(table) {
    table.boolean('ldzxtgxrwa');
    table.boolean('zqpqmiiqtz');
    table.string('domjtmivru');
    table.timestamp('tzbootyapj');
    table.text('elidqcnhdc');
    table.boolean('qoptzhgqts');
    table.json('mupaqldgpf');
  });
  await knex.schema.alterTable('otrafaskut', function(table) {
    table.integer('ezdhwwbpih');
    table.bigInteger('uoswqizxla');
    table.string('nxriphuwjk');
    table.float('dbdripxpfo');
    table.string('ifsyyehdhs');
    table.integer('bhpaygtaxv');
    table.boolean('mwamazpymn');
    table.json('ejawtpsumr');
    table.integer('nzhvzbspjh');
    table.bigInteger('fgpwouctik');
  });
  await knex.schema.alterTable('jfynehdnhv', function(table) {
    table.boolean('gtlkrptqpx');
    table.timestamp('uvrceiokwr');
    table.text('seiqszixbm');
    table.timestamp('rmhhqnausc');
    table.string('gacumzxwed');
    table.string('mapnhnljae');
    table.float('flhcwfvtmc');
    table.text('lxuruqafim');
    table.boolean('bwdmubhdpr');
  });
  await knex.schema.alterTable('tgwwxpmqfs', function(table) {
    table.bigInteger('phlvwbuaoc');
    table.float('npewefetea');
    table.string('fxqwoyudof');
    table.text('ecmtwabnph');
    table.float('uodtxgncji');
    table.bigInteger('aqmyxpsmjj');
    table.float('ckoelqdkbc');
    table.float('txiqipmqqt');
  });
  await knex.schema.alterTable('zyluuajsgp', function(table) {
    table.boolean('qpqbnctuoc');
    table.json('ogenowekcw');
    table.float('mmrcsunykw');
    table.string('jfnordkehl');
    table.boolean('obxctvhlln');
    table.json('busalmrjxe');
    table.timestamp('cyygnpoivz');
    table.string('sjwzkahwxx');
    table.boolean('ohyxtfxgrl');
    table.string('ivetexeebh');
  });
  await knex.schema.alterTable('zevtxikpmt', function(table) {
    table.boolean('yfjdnghucm');
    table.json('relvtgzsbh');
    table.boolean('jkbtcnljyt');
    table.bigInteger('mryuvuzrbr');
    table.bigInteger('mbledxicll');
    table.text('hwbrohtqwp');
    table.json('otfoyhopeg');
  });
  await knex.schema.alterTable('lcsocylday', function(table) {
    table.bigInteger('rvyddzdbns');
    table.bigInteger('jfpsgbceuo');
    table.bigInteger('llmpkctiln');
  });
  await knex.schema.alterTable('abndttlsmd', function(table) {
    table.bigInteger('hvhayvunmi');
    table.bigInteger('auelasabpg');
    table.string('hdlqiyoehf');
  });
  await knex.schema.alterTable('eqogaahmza', function(table) {
    table.bigInteger('xfoyocnxab');
    table.bigInteger('fnfsavngkz');
    table.bigInteger('xyfjplyzrd');
    table.integer('meedndrjmr');
    table.float('avooczikzo');
  });
  await knex.schema.alterTable('wkolplseqv', function(table) {
    table.boolean('qfmmblyirw');
    table.json('mlxgrrkknj');
    table.boolean('apfjldkxcg');
    table.boolean('wpdgtikqpc');
    table.bigInteger('apztfifcyn');
    table.timestamp('nfmkcvfqsj');
    table.timestamp('elmmnnusvj');
    table.json('wziubdfvjq');
    table.boolean('grtgqzoogx');
    table.json('wmwserqieb');
  });
  await knex.schema.alterTable('jodiqvwvpd', function(table) {
    table.boolean('vterkgyanw');
    table.bigInteger('svmhybvaje');
    table.text('hkwihrrbyl');
    table.bigInteger('eedtuwgrww');
    table.bigInteger('qcilcgzdcf');
    table.string('lqsxerrcsk');
    table.boolean('obhahmypkq');
  });
  await knex.schema.alterTable('tdddandicf', function(table) {
    table.float('zuwhruafda');
    table.bigInteger('okokvuucxa');
    table.float('dokblxldaj');
    table.json('vysbtbxodc');
    table.text('wxjjwelolw');
    table.timestamp('gzzwsszzce');
    table.timestamp('conpalhrfj');
  });
  await knex.schema.alterTable('dcorcvpvqi', function(table) {
    table.integer('piitpblzvq');
    table.text('qkioifjvft');
    table.timestamp('kjcvjnjayi');
    table.text('fkyjeosuaa');
    table.bigInteger('rcaauutone');
    table.timestamp('jenhksmunn');
    table.boolean('xqbgvdqmiu');
    table.timestamp('kokdulmnco');
  });
  await knex.schema.alterTable('hywklrwixv', function(table) {
    table.integer('asgyhoynmo');
    table.string('wataljlcyd');
    table.bigInteger('mooyowwvvh');
    table.boolean('kppulahqvm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};