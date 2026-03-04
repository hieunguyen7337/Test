'use strict';

/**
 * Migration: 20240625100142_ppwlybtkjppuzyp
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('idzyatkfft', function(table) {
    table.integer('cfhzebzxmk');
    table.integer('bjfijagupl');
    table.timestamp('rbcmpgbjqs');
    table.json('jluweicwnu');
    table.string('uszrdusxqo');
    table.float('aegvxpannr');
    table.float('bgbkhxprie');
    table.json('ljfcrruzvy');
  });
  await knex.schema.alterTable('vrqulipiyu', function(table) {
    table.float('jaogkeifug');
    table.integer('fnyqpfzjts');
    table.float('wdmpodridw');
    table.integer('uwawvfzgvz');
    table.timestamp('krmopkayqq');
  });
  await knex.schema.alterTable('hjeqnonjlz', function(table) {
    table.json('fhwbjwbiyr');
    table.float('kuqvtmpuij');
    table.json('hihvdcfgtj');
    table.text('tzbpriaqpv');
    table.string('ypdxxdabnv');
  });
  await knex.schema.alterTable('fddgkrpbfy', function(table) {
    table.text('forbcjysbp');
    table.boolean('lyorgntwtr');
    table.bigInteger('atwveenhvf');
    table.boolean('vdwdccbtww');
    table.text('dmgysbcfzk');
    table.integer('rqsrotuxmo');
    table.json('efnpgtaawa');
  });
  await knex.schema.alterTable('vubcatxlbo', function(table) {
    table.json('ffenymsnyc');
    table.timestamp('xtszrbjocq');
    table.string('ylkqcqqssy');
    table.text('fyubnrqhut');
    table.timestamp('dlywifadzx');
    table.json('ncrcasabdr');
  });
  await knex.schema.alterTable('wabrkxbque', function(table) {
    table.boolean('dffvvurgop');
    table.boolean('yscvdqkfme');
    table.timestamp('yyfygnlhvk');
    table.json('zvwyndwenv');
    table.text('zmiognezqz');
    table.text('qbyjiaeqmd');
    table.json('oqhlckehoo');
  });
  await knex.schema.alterTable('xtzmxzhdhg', function(table) {
    table.text('ihjtmhqwsh');
    table.float('ktgjtxgtgj');
    table.bigInteger('oueqgdsqom');
    table.float('miyctfqgcv');
    table.boolean('pyngeitwmw');
    table.bigInteger('agoekxnvcq');
    table.json('fwnuphzafa');
    table.float('emsqhcortl');
  });
  await knex.schema.alterTable('tzrkmbwdka', function(table) {
    table.timestamp('gkzhfechab');
    table.bigInteger('kauktluzlc');
    table.bigInteger('hzcvtnpwdg');
    table.bigInteger('btspjswqth');
  });
  await knex.schema.alterTable('xgdccyaqjf', function(table) {
    table.bigInteger('aeczalkoam');
    table.integer('radfwgginc');
    table.json('lwqiagywqw');
  });
  await knex.schema.alterTable('fsoltstjoz', function(table) {
    table.string('ymwzfyhmeq');
    table.timestamp('mxkdmczcty');
    table.timestamp('cmzoupmygs');
    table.timestamp('cpgwsxajpc');
    table.boolean('fcvdjfnedq');
    table.text('upjvpiesnw');
    table.float('zinifgzssx');
    table.text('izcigkepkd');
  });
  await knex.schema.alterTable('olwxoscjjj', function(table) {
    table.text('chwunvtrvt');
    table.string('zqvdcwpzpm');
    table.bigInteger('ewyixbdcku');
    table.float('ymsgwpblxh');
    table.json('orudtrhgjs');
    table.integer('gnnttzrqdp');
    table.timestamp('tfuihljhhm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};