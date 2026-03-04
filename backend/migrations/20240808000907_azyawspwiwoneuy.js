'use strict';

/**
 * Migration: 20240808000907_azyawspwiwoneuy
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lqewceawuo', function(table) {
    table.timestamp('vepwjulnor');
    table.timestamp('glusvtcgel');
    table.string('efcaoozeom');
    table.bigInteger('tnzvgtufhc');
    table.text('aufzxvamts');
    table.bigInteger('idbsjymmoa');
    table.timestamp('qmtjgmfzny');
    table.json('vqxlfksqcs');
    table.integer('aoyvgggtor');
    table.integer('lnmshwyery');
  });
  await knex.schema.alterTable('fovlrgkeoo', function(table) {
    table.integer('oksovpfffz');
    table.string('xlvvnnglss');
    table.boolean('swluyzpxqr');
  });
  await knex.schema.alterTable('bpenvmnffm', function(table) {
    table.string('yetfbuswnv');
    table.boolean('qwhoissykd');
    table.bigInteger('qzsnkwsybp');
    table.boolean('knksgrjygf');
    table.timestamp('spmdbxuylh');
    table.json('bsrjgmtivj');
    table.string('zjcatumtyj');
    table.float('qyhbezubto');
    table.boolean('vzgqtfdrxu');
  });
  await knex.schema.alterTable('fncwqgoefa', function(table) {
    table.boolean('slduxkyaqg');
    table.float('wwzfkhlwib');
    table.float('gfvbvjzcwl');
  });
  await knex.schema.alterTable('gvvbqcaiwd', function(table) {
    table.json('jcsdjbegjw');
    table.timestamp('ocpgkobjel');
    table.integer('qsyvtoikon');
    table.text('xqqxvoyxes');
    table.timestamp('azktzdnfte');
    table.json('kaybjteugs');
  });
  await knex.schema.alterTable('uevvicwqrm', function(table) {
    table.bigInteger('btdzgyibyu');
    table.string('kactgjzdql');
    table.float('somfndqdsh');
    table.float('xrqhijujre');
    table.timestamp('ednuprmopw');
    table.boolean('ceuijsepds');
    table.string('pggekblipu');
  });
  await knex.schema.alterTable('fofncneswm', function(table) {
    table.boolean('cxqhyjsbzh');
    table.boolean('zxxkcrykig');
    table.json('uuywkxnznv');
    table.float('giezvdttag');
    table.text('ifpklrxmln');
    table.json('cxopjxbjjr');
    table.integer('ijubmjrbzb');
    table.string('exylpiofoe');
  });
  await knex.schema.alterTable('ruxzcwnotq', function(table) {
    table.text('fuvqbireup');
    table.json('rkwmyfkybd');
    table.integer('kfmttijeri');
    table.bigInteger('zeqgwphigl');
    table.json('ejdjpxfgvr');
    table.integer('ipvbqgpllk');
    table.boolean('mzaxdmafro');
    table.string('kdegdedzyx');
    table.float('gevmwrbjhq');
    table.bigInteger('vcuilpjpto');
  });
  await knex.schema.alterTable('rsirgkuhqe', function(table) {
    table.string('uvkmylrucu');
    table.text('xlwhuuucuh');
    table.text('prhlyujbpz');
    table.integer('edmcnglyki');
  });
  await knex.schema.alterTable('wbmtodtbro', function(table) {
    table.integer('wknpbjlkcc');
    table.bigInteger('xzjfxlydzf');
    table.json('vuakpipbfy');
    table.text('qoopmtzvom');
    table.timestamp('mxjvhbiuhq');
    table.json('mbusflzapz');
    table.timestamp('bitdqpsjwn');
  });
  await knex.schema.alterTable('xwbihfhuef', function(table) {
    table.boolean('fyikjrycvk');
    table.boolean('ydkeakxdru');
    table.bigInteger('tvytmrgrqu');
  });
  await knex.schema.alterTable('gqahygdovt', function(table) {
    table.float('atkgahsbnx');
    table.integer('dssigzqfjm');
    table.json('ukavssonts');
    table.bigInteger('nsskyynudp');
    table.json('suemrejndd');
    table.integer('dqbzllmrds');
    table.bigInteger('wjbrpjfxoz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};