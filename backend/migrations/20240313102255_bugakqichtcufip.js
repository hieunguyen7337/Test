'use strict';

/**
 * Migration: 20240313102255_bugakqichtcufip
 * Description: Drop table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yilvzgphpl', function(table) {
    table.string('nfxkwpbpdm');
    table.string('rgacvbjouj');
    table.bigInteger('jwvpfvgjqi');
    table.integer('kgpnueolcg');
    table.string('pyzcconkos');
    table.integer('dhwsetpuit');
    table.string('zlaljoigrd');
    table.bigInteger('xjkvckepwl');
  });
  await knex.schema.alterTable('feijzdnojy', function(table) {
    table.bigInteger('mtwspdkzzc');
    table.text('smbihpfawd');
    table.integer('mejdxfykcr');
  });
  await knex.schema.alterTable('wvhaasshwq', function(table) {
    table.json('whczpkoxqa');
    table.json('etobbtttvl');
    table.bigInteger('gpwuxynguf');
  });
  await knex.schema.alterTable('hqdeweciwc', function(table) {
    table.integer('vzvgvfrsjw');
    table.integer('jtbmpkvihd');
    table.json('xakkhfnchz');
    table.json('brhcjjnwhc');
    table.string('nygpqeysko');
    table.bigInteger('hbahtjpgrv');
    table.integer('nnecqljnhz');
    table.boolean('czrcvoqfvp');
  });
  await knex.schema.alterTable('xcoqxckiag', function(table) {
    table.integer('vhkbzuawez');
    table.float('ncpznxdfqz');
    table.string('rkrfyohguk');
    table.bigInteger('ptagnabihq');
    table.text('ciypgymkpd');
    table.bigInteger('eqvhtfscqz');
    table.timestamp('jcvcqtnkud');
    table.boolean('ncgyaswuac');
  });
  await knex.schema.alterTable('hjncxrcnfz', function(table) {
    table.bigInteger('zsefrhuaso');
    table.boolean('kjdviblusr');
    table.boolean('fxdqqpwkwr');
    table.timestamp('fkkhslkgsr');
    table.timestamp('kmixawmfwr');
  });
  await knex.schema.alterTable('nrlprhfhdb', function(table) {
    table.float('unfphlrhem');
    table.json('kjckzgmtrf');
    table.bigInteger('dklldlgvdf');
    table.text('ytlurtrmjl');
  });
  await knex.schema.alterTable('xzhcmlnhbi', function(table) {
    table.string('dcpxarzqvw');
    table.float('lqerchlqub');
    table.string('apgpjfnwhu');
    table.timestamp('rwneggczgx');
  });
  await knex.schema.alterTable('csyrrpjjxz', function(table) {
    table.timestamp('lmmjowanow');
    table.boolean('muipqdsdzb');
    table.text('pnaycmtqhc');
    table.string('dpueomamrl');
    table.bigInteger('mrpmvoxlxe');
    table.json('ueobhoxuap');
    table.timestamp('xtgabsesqb');
    table.string('unlmaedywx');
    table.integer('jwapuewhrf');
  });
  await knex.schema.alterTable('htnvfxdosg', function(table) {
    table.json('tonpytliyf');
    table.integer('qrxfqtiazt');
    table.bigInteger('rscqrwoejg');
    table.json('idugxexwzs');
  });
  await knex.schema.alterTable('ezhvdqjjix', function(table) {
    table.timestamp('ypjumsnwjg');
    table.boolean('nzgjfyxzbf');
    table.text('qztuwzvrha');
  });
  await knex.schema.alterTable('ecxfaoetpz', function(table) {
    table.string('ynuxydyrck');
    table.string('ztcnrkhspr');
    table.bigInteger('zcmijprhak');
    table.bigInteger('dybvyxejdh');
    table.float('rydbjlperm');
    table.float('lpyuhosxtm');
  });
  await knex.schema.alterTable('zbwokywolt', function(table) {
    table.timestamp('cfjljctcat');
    table.boolean('hiwjnczocu');
    table.json('euuogxcjcp');
    table.bigInteger('enasubotrn');
  });
  await knex.schema.alterTable('cvtxyrsaws', function(table) {
    table.integer('orazgxbxve');
    table.integer('yrbfitbqmo');
    table.integer('cxhjastlda');
    table.timestamp('hhirltlnpy');
    table.bigInteger('mhcvqixfrl');
    table.boolean('xacwpmuamo');
  });
  await knex.schema.alterTable('dulahaieeq', function(table) {
    table.bigInteger('jaritpsfyi');
    table.timestamp('nkgiuankbu');
    table.timestamp('xdfufqgejx');
    table.string('phpbejjndt');
    table.string('bvivisruzv');
  });
  await knex.schema.alterTable('tzidptozgm', function(table) {
    table.timestamp('iosuwbkskr');
    table.timestamp('anvilleycb');
    table.boolean('wjebzhjavc');
    table.integer('mzzechhnya');
    table.float('twgywuazqn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};