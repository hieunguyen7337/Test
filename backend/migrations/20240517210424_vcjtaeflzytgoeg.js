'use strict';

/**
 * Migration: 20240517210424_vcjtaeflzytgoeg
 * Description: Rename field
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gtsplkaadj', function(table) {
    table.string('nuhdcnzieu');
    table.float('vxmgogyaqz');
    table.json('fubmexdljp');
    table.boolean('dxqupjntsr');
    table.string('ibbhjgskkq');
    table.bigInteger('varvhbnpup');
    table.bigInteger('vyyfrqjmml');
    table.timestamp('wnemnnnfss');
    table.text('botvwvvjzx');
  });
  await knex.schema.alterTable('sxrtzdwbgx', function(table) {
    table.string('crhkirkbxr');
    table.integer('grqgjkgmod');
    table.bigInteger('upqzzjobjy');
    table.float('oajafvehcl');
    table.timestamp('ttsafaafjp');
    table.integer('bhlhjmiluh');
    table.float('qxnjejtruy');
    table.boolean('xriyecsbwj');
  });
  await knex.schema.alterTable('vlmgffepir', function(table) {
    table.timestamp('rauddyklbq');
    table.bigInteger('tonoqflknj');
    table.text('wqyyeeosyj');
    table.integer('rntrtrioaq');
    table.timestamp('janamzbejh');
    table.timestamp('xcnzdfbqkj');
    table.json('ufgsqcjarh');
    table.float('pdmdxipcvd');
    table.boolean('xfpoekxxed');
    table.json('rijncpsgsp');
  });
  await knex.schema.alterTable('gtycentpbb', function(table) {
    table.bigInteger('szfcrcqsqo');
    table.timestamp('sahgotfpxw');
    table.bigInteger('fanaghwich');
    table.text('ipupauydqf');
    table.string('jrbrfwebqa');
    table.float('brisdbdwun');
    table.json('ftctigsjxe');
    table.float('dqmkdfyevc');
    table.string('nbttnrurtr');
  });
  await knex.schema.alterTable('wdnzunmzql', function(table) {
    table.text('vecthuhnwp');
    table.integer('cfrauzfsem');
    table.float('sodmtdtmzp');
  });
  await knex.schema.alterTable('dakjszfvtw', function(table) {
    table.integer('eojqjsqqvi');
    table.bigInteger('jhrvoywuhf');
    table.timestamp('fhiqumxgcp');
    table.boolean('xqnowedgng');
    table.boolean('tfxddzwaon');
  });
  await knex.schema.alterTable('qwuwpnovkq', function(table) {
    table.timestamp('uanvwiytms');
    table.json('gnuaryyhig');
    table.boolean('uqoaylaing');
    table.boolean('eublnlmnev');
    table.bigInteger('uljuyatils');
    table.string('wbnsspbiax');
    table.bigInteger('fruacnpzgh');
    table.float('qgrfgcyahk');
    table.bigInteger('hqmnhgfefw');
    table.bigInteger('jocqdvtqnw');
  });
  await knex.schema.alterTable('glwkxxbmfl', function(table) {
    table.text('ofbudpvhaa');
    table.integer('kecgzcaefh');
    table.string('hbnkepcrco');
    table.integer('rbidqadssr');
    table.timestamp('xruyuizquo');
    table.text('ulcafdzvxa');
    table.string('lssxknfrtv');
    table.text('xwueheyjra');
    table.timestamp('vrxagmzccw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};