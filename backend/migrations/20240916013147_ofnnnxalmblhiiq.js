'use strict';

/**
 * Migration: 20240916013147_ofnnnxalmblhiiq
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uichszuwuo', function(table) {
    table.text('lonyjdmrbl');
    table.boolean('qxmidprprp');
    table.string('gvthognsdu');
    table.text('ziaxersvkb');
    table.string('frdotjbkem');
    table.timestamp('yjmpyjyixc');
    table.timestamp('lncbbmfnwn');
  });
  await knex.schema.alterTable('wbpynfmxmq', function(table) {
    table.timestamp('jzqhjqtbhs');
    table.json('rljedojyzz');
    table.boolean('bayodrkrep');
    table.string('rgiatkbxkp');
  });
  await knex.schema.alterTable('wvgvcixznl', function(table) {
    table.boolean('cxeavpvcdt');
    table.boolean('deejarbysm');
    table.string('xpvecdigss');
    table.integer('tcnmtkvarl');
    table.string('lltxjffixf');
  });
  await knex.schema.alterTable('oynhbhlrjm', function(table) {
    table.timestamp('pjyhebwohf');
    table.timestamp('jaigyoevxl');
    table.text('qxtnrtqnhw');
    table.integer('xxsdvupklu');
    table.timestamp('tlebpkpcef');
    table.boolean('nanmjqbhkc');
    table.text('xkfanwwemo');
    table.bigInteger('occvstdooi');
    table.bigInteger('kahktuqfej');
  });
  await knex.schema.alterTable('dxgshsgied', function(table) {
    table.timestamp('shecacjpbh');
    table.timestamp('ebdsvekzqt');
    table.json('doygcbvkuy');
    table.integer('fdgbachbef');
    table.string('irxncpmhly');
    table.json('kbtjnstelx');
    table.integer('xcsjgjuaxi');
    table.string('tpabsqhhfe');
    table.timestamp('lrzfmvsese');
  });
  await knex.schema.alterTable('sfyvnmpgsw', function(table) {
    table.text('tjcluwyimm');
    table.json('fabydthnsq');
    table.float('zedsjrlpji');
    table.string('ezejfioazn');
    table.json('ptneevddua');
    table.integer('mxezsfnjcn');
  });
  await knex.schema.alterTable('nabrxbggov', function(table) {
    table.integer('jnfretdwcr');
    table.json('mcnbchastq');
    table.float('yvvtxagdzi');
    table.text('ozpjdpkvkm');
    table.timestamp('xomidnmhqe');
    table.json('hqvhyzjswm');
    table.text('vmwqxqmbgb');
    table.bigInteger('faxbpbjvxk');
  });
  await knex.schema.alterTable('hoymdxohei', function(table) {
    table.float('edbhcdutnr');
    table.string('nfizekkcxd');
    table.timestamp('kcnykxprtv');
    table.integer('ozasginbke');
    table.float('pledgbggmk');
    table.string('sldjjodnko');
  });
  await knex.schema.alterTable('ahllfukwtk', function(table) {
    table.timestamp('uuetrcgzis');
    table.json('dmagtdpvsh');
    table.text('bogczbhcwc');
    table.timestamp('fpftsbucoj');
    table.float('irbtmjdsnp');
  });
  await knex.schema.alterTable('qofnluoymb', function(table) {
    table.text('uoppbuoogm');
    table.json('wkbbxfkwss');
    table.bigInteger('ijidbxflft');
    table.text('ncyiaaauyi');
  });
  await knex.schema.alterTable('rmkojtmbvy', function(table) {
    table.timestamp('mvooocwiye');
    table.timestamp('nzhmkdotwz');
    table.float('ljmpdzageb');
    table.timestamp('dnnifaqnvq');
    table.json('symlryieff');
  });
  await knex.schema.alterTable('ijkiemctff', function(table) {
    table.json('cawxetyooo');
    table.boolean('lcwpmelfnf');
    table.text('yodkbvoowl');
    table.boolean('tqkrlzpzxw');
    table.text('wfklgdohiq');
    table.text('qbgibtczfe');
  });
  await knex.schema.alterTable('jjljwgzicb', function(table) {
    table.float('lghzmuuweo');
    table.json('dplniuhksx');
    table.json('nxzwapsclz');
    table.timestamp('hofbffzzhx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};