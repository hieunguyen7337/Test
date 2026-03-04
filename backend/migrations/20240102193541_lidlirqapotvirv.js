'use strict';

/**
 * Migration: 20240102193541_lidlirqapotvirv
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qiwrrvgfdv', function(table) {
    table.boolean('gbresieglx');
    table.bigInteger('dxmdokozck');
    table.text('frwjudsssm');
    table.timestamp('atyidibsos');
  });
  await knex.schema.alterTable('vrdoqslnmo', function(table) {
    table.integer('oomxqnmcon');
    table.json('obniqjoaop');
    table.timestamp('ztvygdeqau');
    table.bigInteger('skrtnlpstx');
    table.json('kjlmwtjyvc');
    table.text('uzlupwgkja');
  });
  await knex.schema.alterTable('jcqlrxczzf', function(table) {
    table.text('ijfpbnhopa');
    table.float('gqsyueifnm');
    table.timestamp('oowcjpaplt');
    table.integer('pgakhokcdj');
  });
  await knex.schema.alterTable('ahwaepwfeq', function(table) {
    table.timestamp('gckowqvqan');
    table.bigInteger('kxhaxiefrh');
    table.text('vnuojkwnth');
    table.string('prlakwsntf');
  });
  await knex.schema.alterTable('jesftsbasx', function(table) {
    table.text('omhpfskcem');
    table.float('fvevqvbajb');
    table.boolean('hsofjhjdsp');
    table.integer('syvpdwayju');
    table.integer('gwnkdixnjs');
  });
  await knex.schema.alterTable('lqebveyyzv', function(table) {
    table.integer('bgbdnisdya');
    table.text('rmfsjausny');
    table.float('eygoukspup');
    table.bigInteger('sukxlohgfu');
    table.integer('xtkjaddvpf');
    table.string('ltpceccwvg');
    table.string('fqjsogezrp');
    table.timestamp('wewjhqpvbo');
    table.float('ctjnuylmcm');
    table.integer('istkvepgyw');
  });
  await knex.schema.alterTable('sguwqhbuwg', function(table) {
    table.string('qdrihtiwem');
    table.boolean('qgugbzpbku');
    table.float('pcewslgdto');
    table.float('sxktkifedc');
    table.text('qazqzyehbt');
    table.timestamp('uqeqacfnxj');
    table.boolean('ylmhagelle');
  });
  await knex.schema.alterTable('czeplnwsgd', function(table) {
    table.string('vkufseprnh');
    table.text('ejokovavjh');
    table.string('jeetrqqiah');
    table.string('ffzrohgcvj');
    table.string('rjjersrmtt');
    table.float('hygcrshbwq');
    table.timestamp('nrjzwmvznf');
    table.text('fvutnkpsih');
  });
  await knex.schema.alterTable('rcrophasnv', function(table) {
    table.json('hwvbvwzlin');
    table.float('uvnpqpteml');
    table.float('ptaxvxcmex');
    table.json('qawrlkycrt');
    table.json('bkbkjpovnr');
    table.float('tmbullifef');
    table.text('yblfgsjurl');
    table.float('nocpqidphq');
  });
  await knex.schema.alterTable('bewuisyiko', function(table) {
    table.bigInteger('yjmpkgpavc');
    table.timestamp('lxljjqzufq');
    table.float('nungbvdjhl');
    table.bigInteger('seyfxcdnqm');
    table.boolean('mibqaddhww');
    table.boolean('arwemcymde');
    table.integer('ezivxzimsg');
    table.string('hcntrwdxdh');
    table.float('tipdlpjhzc');
    table.string('kedwjoylvs');
  });
  await knex.schema.alterTable('jfmpwvuatv', function(table) {
    table.string('cplqcnrmut');
    table.boolean('lyskziksoo');
    table.string('yxtmxjirpj');
    table.integer('spdruxthvd');
    table.integer('sboeigtxej');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};