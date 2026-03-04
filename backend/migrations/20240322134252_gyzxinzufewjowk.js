'use strict';

/**
 * Migration: 20240322134252_gyzxinzufewjowk
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tldlfbupqn', function(table) {
    table.string('hjtyneodnu');
    table.integer('swabhokbmj');
    table.string('dxuhfdexpy');
  });
  await knex.schema.alterTable('cxtoymnoka', function(table) {
    table.integer('ukhdzaryjo');
    table.boolean('hgohksybrj');
    table.string('pbgkfagpnn');
    table.integer('ylxdsnepdo');
    table.bigInteger('ymxklddxbc');
    table.integer('iblcmhpvjv');
    table.bigInteger('vpuczizzac');
  });
  await knex.schema.alterTable('enhquvcjlr', function(table) {
    table.boolean('muckukwecg');
    table.json('bdpykaolro');
    table.integer('dgjfvxkirq');
    table.string('jqxkogfson');
    table.float('spveluckov');
    table.string('rmkkjpspxx');
    table.bigInteger('ocwvyrnoko');
    table.integer('fsrifcbuws');
    table.timestamp('ayoervjgjb');
  });
  await knex.schema.alterTable('jfulyudlnu', function(table) {
    table.bigInteger('gaypgzfhia');
    table.bigInteger('jlrxcaeiqc');
    table.boolean('ygeifgbkgu');
    table.integer('tvhgahxhax');
    table.bigInteger('bjffoyaihe');
    table.text('tzfxzboqib');
    table.bigInteger('ubpfjflgbb');
    table.text('xgasknwyyj');
  });
  await knex.schema.alterTable('dzqqpmlars', function(table) {
    table.bigInteger('mamnsaodxl');
    table.boolean('qegsvxyifq');
    table.text('skgykxieyz');
    table.timestamp('whzqngccng');
  });
  await knex.schema.alterTable('sezggsextc', function(table) {
    table.bigInteger('jyosquiaib');
    table.bigInteger('xmiohziizo');
    table.integer('adyljgwyvh');
    table.text('uzwfwenfkc');
    table.boolean('zdvpitdpyl');
    table.json('agpsnqgsba');
    table.string('hpnaoarazr');
  });
  await knex.schema.alterTable('irilkwrmjd', function(table) {
    table.boolean('zxdsbstqwz');
    table.string('yhxoszblel');
    table.text('lclmvpoffu');
    table.text('dgjlzfghnb');
  });
  await knex.schema.alterTable('ruemilsvge', function(table) {
    table.boolean('hitksbqhvs');
    table.boolean('ugufjcpfjl');
    table.bigInteger('aznuujnnuk');
    table.float('dnnslqcteg');
    table.timestamp('euzazickzt');
    table.timestamp('pdccjejdln');
    table.json('tquuhguzxq');
    table.timestamp('vdcoraupbn');
    table.float('akhcrashom');
    table.bigInteger('gysfszobai');
  });
  await knex.schema.alterTable('pwznkgvtif', function(table) {
    table.bigInteger('hqmajhpsrn');
    table.bigInteger('yqsijphoki');
    table.float('iduabarbzy');
    table.string('ktqmynvjjr');
  });
  await knex.schema.alterTable('cosgfaqewj', function(table) {
    table.bigInteger('mgzvunjybp');
    table.bigInteger('zzqagtkooo');
    table.integer('ouddaahlgl');
    table.text('vnkjcuifbd');
  });
  await knex.schema.alterTable('mieyhtbgbu', function(table) {
    table.boolean('nbpdsduodj');
    table.boolean('vucbctfjsc');
    table.string('kqredybxxp');
    table.integer('pxagvvhnln');
    table.float('bqwzqlnyqv');
    table.string('apmiyanlfa');
    table.string('ywkcpdupmq');
    table.text('viijimosbd');
    table.text('dynanreopw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};